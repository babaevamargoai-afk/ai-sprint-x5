import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const programCards = [
  {
    badge: '6 МОДУЛЕЙ · 50+ УРОКОВ',
    title: 'База знаний',
    description: 'Пошаговые уроки, шаблоны, кейсы и инструменты для внедрения AI в бизнес',
    image: '/images/program-knowledge.png',
    topics: [
      'AI-маркетинг',
      'Контент и упаковка',
      'Продажи и CRM',
      'Боты и автоматизация',
      'Трафик и лидогенерация',
      'Команда и процессы',
    ],
    result: 'Готовая AI-система для вашего бизнеса уже в процессе обучения',
    variant: 'light',
  },
  {
    badge: 'ЕЖЕНЕДЕЛЬНЫЕ ZOOM-РАЗБОРЫ',
    title: 'Живые сессии',
    description: 'Ответы на вопросы, разбор вашей ситуации и поддержка в реальном времени',
    format: 'С Русланом Гамзатовым, экспертами и кураторами',
    image: '/images/program-live.png',
    topics: [
      'Маркетинг и продажи',
      'Стратегия роста',
      'Трафик и клиентская база',
      'Разборы кейсов участников',
      'Вопросы участников в прямом эфире',
      'Практическое внедрение ИИ в проекты',
    ],
    result: 'Ответы на вопросы, разбор вашей ситуации и поддержка в реальном времени',
    variant: 'dark',
  },
  {
    badge: 'ОТ MVP ДО СЛОЖНЫХ СИСТЕМ',
    title: ['Вайб-кодинг', 'Pro'],
    description: 'Создаём сайты, AI-агентов, MVP, сервисы и автоматизированные платформы',
    image: '/images/program-code.png',
    topics: [
      'Полноценные сервисы и сайты',
      'Мультиагентные системы',
      'Датасеты и память агентов',
      'ТЗ и контроль разработчиков',
      'Автоматизация и API',
      'Продуктовый девелопмент',
    ],
    result: 'От первого прототипа до готового AI-продукта',
    variant: 'light',
  },
]

function ProgramCard({ card, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const dark = card.variant === 'dark'

  const title = Array.isArray(card.title) ? card.title.join('\n') : card.title

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 36 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col"
      style={{
        borderRadius: '32px',
        minHeight: '680px',
        background: dark ? 'linear-gradient(160deg, #0e0e0e 0%, #141414 100%)' : '#FFFFFF',
        border: dark ? '1.5px solid rgba(255,0,0,0.3)' : '1px solid #ECECEC',
        boxShadow: dark
          ? '0 28px 90px rgba(17,17,17,0.2), 0 0 0 1px rgba(255,0,0,0.15), 0 20px 60px rgba(255,0,0,0.1)'
          : '0 20px 70px rgba(17,17,17,0.06)',
        transform: dark ? 'translateY(-14px)' : 'none',
        overflow: 'hidden',
      }}
    >
      {/* Card body */}
      <div className="flex flex-col flex-1 p-9">

        {/* Badge */}
        <span
          className="inline-flex font-black uppercase tracking-wider mb-6"
          style={{
            fontSize: '13px',
            letterSpacing: '0.06em',
            color: '#FF0000',
            background: dark ? 'rgba(255,0,0,0.15)' : 'rgba(255,0,0,0.07)',
            padding: '7px 14px',
            borderRadius: '999px',
            width: 'fit-content',
          }}
        >
          {card.badge}
        </span>

        {/* Icon + Title */}
        <div className="flex items-start gap-5 mb-5">
          <div
            className="flex-shrink-0 flex items-center justify-center"
            style={{
              width: '80px', height: '80px',
              borderRadius: '22px',
              background: dark ? 'rgba(255,0,0,0.15)' : 'rgba(255,0,0,0.06)',
            }}
          >
            <img
              src={card.image}
              alt=""
              style={{ width: '56px', height: '56px', objectFit: 'contain' }}
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
          <h3
            className="font-black whitespace-pre-line"
            style={{
              fontSize: 'clamp(30px, 2.5vw, 38px)',
              color: dark ? '#FFFFFF' : '#111111',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              paddingTop: '4px',
            }}
          >
            {title}
          </h3>
        </div>

        {/* Description */}
        <p style={{ fontSize: '19px', color: dark ? 'rgba(255,255,255,0.7)' : '#333333', lineHeight: 1.5, marginBottom: '24px' }}>
          {card.description}
        </p>

        {/* Format block (only for dark card) */}
        {card.format && (
          <div
            className="flex items-start gap-3 mb-7"
            style={{
              padding: '18px 20px',
              borderRadius: '18px',
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
          >
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" style={{ flexShrink: 0, marginTop: '2px' }}>
              <rect x="1" y="4" width="14" height="10" rx="3" stroke="#FF0000" strokeWidth="1.8"/>
              <path d="M15 8l6-3v10l-6-3V8z" stroke="#FF0000" strokeWidth="1.8" strokeLinejoin="round"/>
            </svg>
            <p className="font-black" style={{ fontSize: '19px', color: '#FFFFFF', lineHeight: 1.35 }}>
              {card.format}
            </p>
          </div>
        )}

        {/* Divider */}
        <div style={{ height: '1px', background: dark ? 'rgba(255,255,255,0.07)' : '#F0F0F0', marginBottom: '24px' }} />

        {/* Topics */}
        <p
          className="font-black uppercase tracking-widest mb-2"
          style={{ fontSize: '13px', letterSpacing: '0.08em', color: dark ? 'rgba(255,255,255,0.4)' : '#888888' }}
        >
          ТЕМЫ
        </p>
        <ul className="flex-1">
          {card.topics.map((topic, i) => (
            <li
              key={topic}
              className="flex items-center gap-3"
              style={{
                padding: '13px 0',
                borderBottom: i < card.topics.length - 1
                  ? `1px solid ${dark ? 'rgba(255,255,255,0.07)' : '#EEEEEE'}`
                  : 'none',
              }}
            >
              <span
                className="flex-shrink-0 rounded-full"
                style={{ width: '7px', height: '7px', background: '#FF0000' }}
              />
              <span
                className="font-semibold"
                style={{ fontSize: '18px', color: dark ? 'rgba(255,255,255,0.88)' : '#111111' }}
              >
                {topic}
              </span>
            </li>
          ))}
        </ul>
      </div>

    </motion.div>
  )
}

export default function WhatInside() {
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section id="program" style={{ background: '#F7F7F8', padding: 'clamp(60px, 8vw, 120px) 0 clamp(60px, 8vw, 140px)' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20"
        >
          <p
            className="font-black uppercase tracking-widest mb-4"
            style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.08em' }}
          >
            ПРОГРАММА
          </p>
          <h2
            className="font-black"
            style={{
              fontSize: 'clamp(42px, 5vw, 70px)',
              color: '#111111',
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
            }}
          >
            Что входит в{' '}
            <span style={{ color: '#FF0000' }}>AI Sprint X5</span>
          </h2>
          <p
            className="mx-auto mt-6"
            style={{
              fontSize: 'clamp(18px, 1.5vw, 23px)',
              color: '#111111',
              lineHeight: 1.4,
              maxWidth: '640px',
              fontWeight: 500,
            }}
          >
            3 направления обучения, которые вместе собирают AI-систему для бизнеса
          </p>
        </motion.div>

        {/* Cards — horizontal scroll on mobile, grid on desktop */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-7" style={{ alignItems: 'start' }}>
          {programCards.map((card, i) => (
            <ProgramCard key={i} card={card} index={i} />
          ))}
        </div>

        {/* Mobile horizontal scroll */}
        <div className="block md:hidden">
          {/* Swipe hint */}
          <div className="flex items-center justify-between mb-3 px-1">
            <p style={{ fontSize: '14px', color: '#888888', fontWeight: 500 }}>
              1 из {programCards.length}
            </p>
            <div className="flex items-center gap-1.5" style={{ color: '#888888', fontSize: '14px', fontWeight: 600 }}>
              <span>Листай</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12M11 5l5 5-5 5" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>

          <div
            id="cards-scroll"
            className="flex gap-4 pb-4"
            style={{
              overflowX: 'auto',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              marginLeft: '-20px',
              marginRight: '-20px',
              paddingLeft: '20px',
              paddingRight: '20px',
            }}
          >
            <style>{`#cards-scroll::-webkit-scrollbar { display: none; }`}</style>
            {programCards.map((card, i) => (
              <div
                key={i}
                style={{
                  minWidth: '82vw',
                  maxWidth: '340px',
                  scrollSnapAlign: 'start',
                  flexShrink: 0,
                }}
              >
                <ProgramCard card={card} index={i} />
              </div>
            ))}
            {/* Trailing spacer */}
            <div style={{ minWidth: '20px', flexShrink: 0 }} />
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-4">
            {programCards.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = document.getElementById('cards-scroll')
                  if (el) el.scrollTo({ left: i * (el.offsetWidth * 0.86), behavior: 'smooth' })
                }}
                style={{
                  width: i === 0 ? '24px' : '8px',
                  height: '8px',
                  borderRadius: '4px',
                  background: i === 0 ? '#FF0000' : '#DDDDDD',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative overflow-hidden"
          style={{
            background: '#111111',
            borderRadius: '28px',
            padding: 'clamp(24px, 3vw, 36px) clamp(20px, 3vw, 44px)',
            boxShadow: '0 28px 80px rgba(17,17,17,0.18)',
          }}
        >
          {/* Subtle red glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: '400px', height: '400px',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,0,0,0.12) 0%, transparent 70%)',
              right: '200px', top: '-100px',
            }}
          />

          {/* Left */}
          <div className="flex items-center gap-6 relative z-10">
            <div
              className="flex-shrink-0 flex items-center justify-center"
              style={{ width: '68px', height: '68px', borderRadius: '18px', background: '#FF0000' }}
            >
              <svg width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path d="M17 4L30 11v12L17 30 4 23V11L17 4z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                <path d="M17 4l13 7-13 7L4 11l13-7z" fill="white" fillOpacity=".25"/>
                <path d="M17 18v12M4 11l13 7M30 11l-13 7" stroke="white" strokeWidth="2"/>
              </svg>
            </div>
            <div>
              <p
                className="font-black text-white"
                style={{ fontSize: 'clamp(22px, 2vw, 32px)', lineHeight: 1.1, letterSpacing: '-0.02em' }}
              >
                Все 3 направления включены в каждый тариф
              </p>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.55)', marginTop: '6px' }}>
                Разница только в уровне поддержки и сопровождения
              </p>
            </div>
          </div>

          {/* CTA button */}
          <a
            href="#tariffs"
            className="w-full sm:w-auto flex-shrink-0 inline-flex items-center justify-between font-black text-white transition-all duration-200 hover:scale-[1.02] relative z-10"
            style={{
              height: '64px',
              minWidth: '260px',
              background: '#FF0000',
              borderRadius: '20px',
              fontSize: '18px',
              padding: '0 24px',
              boxShadow: '0 16px 40px rgba(255,0,0,0.3)',
              textDecoration: 'none',
              letterSpacing: '0.02em',
            }}
          >
            <span>ВЫБРАТЬ ТАРИФ</span>
            <span
              className="flex items-center justify-center rounded-full"
              style={{ width: '42px', height: '42px', background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.3)' }}
            >
              <svg width="17" height="17" viewBox="0 0 17 17" fill="none">
                <path d="M3 8.5h11M9.5 4l4.5 4.5-4.5 4.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
