import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

const faqs = [
  {
    q: 'Я не технарь — справлюсь?',
    a: 'Да. Курс построен так, что любой инструмент можно освоить без опыта в коде и программировании. Claude Code объясняем с нуля на живых задачах.',
  },
  {
    q: 'У меня нет бизнеса — курс подойдёт?',
    a: 'Подойдёт. Специалисты и фрилансеры применяют инструменты на клиентских проектах и сразу монетизируют навыки.',
  },
  {
    q: 'Я успею совмещать с работой?',
    a: 'Система устроена так, чтобы тратить минимум времени на рутину. Уроки доступны в любое время, созвоны записываются.',
  },
  {
    q: 'Чем отличается от других курсов по ИИ?',
    a: 'Это не обзор инструментов — это система. Каждый шаг строится на реальном опыте агентства, внедрившего ИИ в 300+ проектах. Вы работаете на своём проекте и получаете результат уже в процессе обучения.',
  },
  {
    q: 'Что если не успею освоить материал?',
    a: 'Доступ к урокам открыт от 5 до 7 месяцев в зависимости от тарифа. Записи всех созвонов и разборов остаются с вами.',
  },
]

function FAQItem({ item, index }) {
  const [open, setOpen] = useState(false)
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease: [0.22, 1, 0.36, 1] }}
      style={{
        borderRadius: '18px',
        background: open ? '#111111' : '#FFFFFF',
        border: open ? '1.5px solid rgba(255,0,0,0.2)' : '1px solid #ECECEC',
        overflow: 'hidden',
        transition: 'background 0.3s, border-color 0.3s',
        boxShadow: open ? '0 12px 40px rgba(17,17,17,0.12)' : '0 4px 16px rgba(17,17,17,0.04)',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 text-left"
        style={{ padding: '22px 28px', background: 'transparent', border: 'none', cursor: 'pointer', outline: 'none' }}
      >
        <span className="font-black" style={{ fontSize: 'clamp(17px, 1.5vw, 20px)', color: open ? '#FFFFFF' : '#111111', lineHeight: 1.3, letterSpacing: '-0.01em' }}>
          {item.q}
        </span>
        <span
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{
            width: '36px', height: '36px',
            background: open ? 'rgba(255,0,0,0.15)' : '#F3F3F3',
            transition: 'all 0.3s',
          }}
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
            style={{ transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.3s' }}>
            <path d="M7 2v10M2 7h10" stroke={open ? '#FF0000' : '#111111'} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ padding: '0 28px 24px', fontSize: '18px', color: 'rgba(255,255,255,0.7)', lineHeight: 1.6 }}>
              {item.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section style={{ background: '#FFFFFF', padding: 'clamp(60px, 8vw, 120px) 0 clamp(60px, 8vw, 140px)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-14"
        >
          <p className="font-black uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.08em' }}>
            FAQ
          </p>
          <h2 className="font-black" style={{ fontSize: 'clamp(38px, 5vw, 64px)', color: '#111111', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            Частые <span style={{ color: '#FF0000' }}>вопросы</span>
          </h2>
        </motion.div>

        <div className="flex flex-col gap-3">
          {faqs.map((item, i) => (
            <FAQItem key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
