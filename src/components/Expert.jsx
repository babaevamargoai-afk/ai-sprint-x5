import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const facts = [
  { num: '12', label: 'лет в digital', desc: 'Эксперт по AI-маркетингу с реальным опытом' },
  { num: '408K+', label: 'подписчиков', desc: 'Один из самых узнаваемых AI-инфлюенсеров СНГ' },
  { num: '300+', label: 'проектов', desc: 'Реальный опыт внедрения ИИ в бизнесы разного масштаба' },
  { num: '10+', label: 'лет агентству', desc: 'SmartPerformance — строит маркетинг компаниям любого масштаба' },
]

export default function Expert() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: '#F7F7F8', padding: 'clamp(60px, 8vw, 120px) 0 clamp(60px, 8vw, 140px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="font-black uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.08em' }}>
              ОБ АВТОРЕ
            </p>
            <h2 className="font-black mb-2" style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#111111', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Руслан
            </h2>
            <h2 className="font-black mb-6" style={{ fontSize: 'clamp(36px, 4vw, 58px)', color: '#FF0000', lineHeight: 1.05, letterSpacing: '-0.03em' }}>
              Гамзатов
            </h2>
            <p style={{ fontSize: 'clamp(18px, 1.5vw, 21px)', color: '#111111', lineHeight: 1.55, marginBottom: '32px', maxWidth: '520px' }}>
              Каждый день внедряет ИИ в реальные процессы, работает с федеральными брендами и делится только тем, что проверено на практике.
            </p>

            {/* Quote banner */}
            <div
              style={{
                padding: '24px 28px',
                borderRadius: '20px',
                background: '#111111',
                borderLeft: '4px solid #FF0000',
              }}
            >
              <p className="font-black" style={{ fontSize: 'clamp(18px, 1.5vw, 21px)', color: '#FFFFFF', lineHeight: 1.45 }}>
                «Мы не теоретики — мы практики. Всё, что вы получите на курсе — это наш реальный опыт, рабочие связки и проверенные инструменты.»
              </p>
            </div>
          </motion.div>

          {/* Right — stats */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {facts.map((f, i) => (
                <motion.div
                  key={f.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    padding: '28px',
                    borderRadius: '20px',
                    background: '#FFFFFF',
                    border: '1px solid #ECECEC',
                    boxShadow: '0 8px 32px rgba(17,17,17,0.05)',
                  }}
                >
                  <p className="font-black" style={{ fontSize: 'clamp(32px, 3vw, 44px)', color: '#FF0000', lineHeight: 1, letterSpacing: '-0.03em' }}>
                    {f.num}
                  </p>
                  <p className="font-black mt-1" style={{ fontSize: '18px', color: '#111111' }}>{f.label}</p>
                  <p style={{ fontSize: '16px', color: '#666666', marginTop: '6px', lineHeight: 1.4 }}>{f.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
