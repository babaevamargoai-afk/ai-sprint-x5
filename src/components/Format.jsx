import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const cards = [
  {
    num: '01',
    title: '50+ видеоуроков',
    desc: 'Прикладные лекции на платформе GetCourse. Доступ в любое время с любого устройства.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="3" y="8" width="36" height="26" rx="6" stroke="#FF0000" strokeWidth="2.5"/>
        <path d="M39 18l10-6v20l-10-6V18z" stroke="#FF0000" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="19" cy="21" r="7" stroke="#FF0000" strokeWidth="2"/>
        <path d="M16 21l5-3v6l-5-3z" fill="#FF0000"/>
        <line x1="3" y1="40" x2="49" y2="40" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" opacity=".4"/>
        <line x1="10" y1="44" x2="42" y2="44" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" opacity=".25"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Созвоны с Русланом',
    desc: 'Еженедельные разборы модулей, ваших проектов и задач с приглашёнными экспертами.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <rect x="3" y="10" width="30" height="22" rx="6" stroke="#FF0000" strokeWidth="2.5"/>
        <path d="M33 20l12-8v20l-12-8V20z" stroke="#FF0000" strokeWidth="2.5" strokeLinejoin="round"/>
        <circle cx="13" cy="21" r="5" stroke="#FF0000" strokeWidth="2"/>
        <circle cx="13" cy="21" r="2" fill="#FF0000"/>
        <line x1="3" y1="38" x2="33" y2="38" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" opacity=".35"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Zoom-сессии с кураторами',
    desc: 'Настройка инструментов, разбор домашних заданий, корректировки по ходу внедрения.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <circle cx="18" cy="14" r="8" stroke="#FF0000" strokeWidth="2.5"/>
        <path d="M4 42c0-7.7 6.3-14 14-14s14 6.3 14 14" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="36" cy="14" r="6" stroke="#FF0000" strokeWidth="2"/>
        <path d="M36 20c5 0 9 4 10 9" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="14" r="3" fill="#FF0000" opacity=".6"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Онлайн-чаты',
    desc: 'Общий чат с кураторами, мини-группы или персональная работа 1-на-1 — в зависимости от тарифа.',
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
        <path d="M6 8h40a3 3 0 0 1 3 3v24a3 3 0 0 1-3 3H14l-10 8V11a3 3 0 0 1 3-3z" stroke="#FF0000" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="14" y1="20" x2="38" y2="20" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="14" y1="28" x2="30" y2="28" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round"/>
        <circle cx="40" cy="28" r="3" fill="#FF0000" opacity=".7"/>
      </svg>
    ),
  },
]

const bottomItems = [
  {
    label: 'ПРАКТИКА',
    text: 'Практика на вашем проекте: создаёте архитектуру, настраиваете агентов, запускаете трафик на реальных задачах',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <path d="M17 4L30 11v12L17 30 4 23V11L17 4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        <path d="M17 4l13 7-13 7L4 11l13-7z" fill="white" fillOpacity=".2"/>
        <path d="M17 18v12M4 11l13 7M30 11l-13 7" stroke="white" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    label: 'ЭКСПЕРТЫ',
    text: 'Приглашённые эксперты — живые разборы по агентам, продажам, контент-автоматизации и интеграциям',
    icon: (
      <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
        <circle cx="12" cy="10" r="6" stroke="white" strokeWidth="2"/>
        <path d="M2 30c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="26" cy="10" r="4" stroke="white" strokeWidth="2"/>
        <path d="M24 20c3.5.8 6 4 6 8" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="12" cy="10" r="2.5" fill="white" opacity=".5"/>
      </svg>
    ),
  },
]

export default function Format() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      style={{
        background: 'radial-gradient(circle at top center, rgba(255,0,0,0.12), transparent 40%), #050505',
        padding: 'clamp(60px, 8vw, 120px) 0 clamp(60px, 8vw, 140px)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 3vw, 48px)' }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-black uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.12em' }}>
            КАК ПРОХОДИТ
          </p>
          <h2
            className="font-black"
            style={{ fontSize: 'clamp(42px, 6vw, 80px)', color: '#FFFFFF', lineHeight: 1.0, letterSpacing: '-0.035em' }}
          >
            Формат <span style={{ color: '#FF0000' }}>работы</span>
          </h2>
          <p
            className="mx-auto mt-5"
            style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', color: '#D8D8D8', lineHeight: 1.4, maxWidth: '640px', fontWeight: 500 }}
          >
            Как проходит обучение внутри программы
          </p>
        </motion.div>

        {/* Cards grid 2×2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" style={{ maxWidth: '1320px', margin: '0 auto' }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.num}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="group cursor-default"
              style={{
                background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
                border: '1px solid rgba(255,255,255,0.10)',
                borderRadius: '30px',
                padding: 'clamp(24px, 3vw, 36px) clamp(24px, 3vw, 40px)',
                display: 'grid',
                gridTemplateColumns: 'clamp(88px, 10vw, 112px) 1fr',
                gap: '28px',
                alignItems: 'center',
                boxShadow: '0 24px 80px rgba(0,0,0,0.32)',
                transition: 'transform 0.25s ease, border-color 0.25s ease',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-3px)'
                e.currentTarget.style.borderColor = 'rgba(255,0,0,0.30)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.10)'
              }}
            >
              {/* Icon */}
              <div
                className="flex-shrink-0 flex items-center justify-center"
                style={{
                  width: 'clamp(88px, 10vw, 112px)',
                  height: 'clamp(88px, 10vw, 112px)',
                  borderRadius: '24px',
                  background: '#111111',
                  border: '1px solid rgba(255,0,0,0.28)',
                  boxShadow: 'inset 0 0 32px rgba(255,0,0,0.10)',
                }}
              >
                {card.icon}
              </div>

              {/* Text */}
              <div>
                <p className="font-black mb-2" style={{ fontSize: '18px', color: '#FF0000', letterSpacing: '0.04em' }}>
                  {card.num}
                </p>
                <h3
                  className="font-black"
                  style={{ fontSize: 'clamp(24px, 2.5vw, 36px)', color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.02em' }}
                >
                  {card.title}
                </h3>
                <p
                  className="mt-3"
                  style={{ fontSize: 'clamp(17px, 1.4vw, 21px)', color: '#D8D8D8', lineHeight: 1.5 }}
                >
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom wide block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          style={{
            maxWidth: '1320px',
            margin: '28px auto 0',
            background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '30px',
            padding: 'clamp(28px, 3vw, 40px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.32)',
          }}
        >
          {bottomItems.map((item, i) => (
            <div
              key={item.label}
              className="flex items-start gap-6"
              style={i > 0 ? { borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '28px', marginTop: '4px' } : {}}
              // On md+ override with left border
            >
              <div
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{
                  width: '72px', height: '72px', minWidth: '72px',
                  background: '#FF0000',
                  boxShadow: '0 12px 36px rgba(255,0,0,0.22)',
                }}
              >
                {item.icon}
              </div>
              <div>
                <p className="font-black uppercase tracking-widest mb-3" style={{ fontSize: '15px', color: '#FF0000', letterSpacing: '0.1em' }}>
                  {item.label}
                </p>
                <p
                  className="font-black"
                  style={{ fontSize: 'clamp(20px, 2vw, 27px)', color: '#FFFFFF', lineHeight: 1.3 }}
                >
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  )
}
