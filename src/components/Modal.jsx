import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, AnimatePresence } from 'framer-motion'

export default function Modal({ isOpen, onClose, tariff, children }) {
  // Закрыть по Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') onClose() }
    if (isOpen) document.addEventListener('keydown', handler)
    return () => document.removeEventListener('keydown', handler)
  }, [isOpen, onClose])

  // Заблокировать скролл body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{ background: 'rgba(0,0,0,0.75)', backdropFilter: 'blur(4px)' }}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed z-50 inset-0 flex items-center justify-center px-4 py-8"
            style={{ pointerEvents: 'none' }}
          >
            <div
              className="relative w-full"
              style={{
                maxWidth: '560px',
                maxHeight: '90vh',
                overflowY: 'auto',
                background: '#FFFFFF',
                borderRadius: '28px',
                boxShadow: '0 32px 80px rgba(0,0,0,0.35)',
                pointerEvents: 'auto',
              }}
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 z-10 flex items-center justify-center rounded-full transition-all duration-200 hover:bg-gray-100"
                style={{ width: '40px', height: '40px', background: '#F5F5F5', border: 'none', cursor: 'pointer' }}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M2 2l12 12M14 2L2 14" stroke="#111111" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>

              {/* Tariff badge */}
              {tariff && (
                <div className="px-8 pt-8 pb-0">
                  <span
                    className="inline-flex items-center font-black uppercase tracking-widest"
                    style={{
                      fontSize: '13px', letterSpacing: '0.08em',
                      color: '#FF0000', background: 'rgba(255,0,0,0.08)',
                      padding: '6px 14px', borderRadius: '999px',
                    }}
                  >
                    {tariff}
                  </span>
                </div>
              )}

              {/* Content */}
              <div className="p-8">
                {children}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>,
    document.body
  )
}
