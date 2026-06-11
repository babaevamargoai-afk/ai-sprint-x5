import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'

/* ── Nav Icons ─────────────────────────────────────────────── */
const NavIcons = {
  target: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="13" cy="13" r="11" stroke="currentColor" strokeWidth="2"/>
      <circle cx="13" cy="13" r="6" stroke="currentColor" strokeWidth="2"/>
      <circle cx="13" cy="13" r="2.5" fill="currentColor"/>
      <line x1="13" y1="2" x2="13" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="13" y1="20" x2="13" y2="24" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="13" x2="6" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="20" y1="13" x2="24" y2="13" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  design: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="2" y="4" width="22" height="15" rx="3" stroke="currentColor" strokeWidth="2"/>
      <line x1="6" y1="22" x2="20" y2="22" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="13" y1="19" x2="13" y2="22" stroke="currentColor" strokeWidth="2"/>
      <circle cx="13" cy="11.5" r="3.5" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  content: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="2" y="3" width="16" height="12" rx="3" stroke="currentColor" strokeWidth="2"/>
      <path d="M18 7l6 3-6 3V7z" fill="currentColor" opacity=".7"/>
      <line x1="2" y1="19" x2="18" y2="19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <line x1="2" y1="23" x2="12" y2="23" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    </svg>
  ),
  bot: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <rect x="5" y="10" width="16" height="13" rx="4" stroke="currentColor" strokeWidth="2"/>
      <rect x="9" y="4" width="8" height="6" rx="2" stroke="currentColor" strokeWidth="2"/>
      <line x1="13" y1="4" x2="13" y2="2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="13" cy="2" r="1.5" fill="currentColor"/>
      <circle cx="9.5" cy="17" r="2" fill="currentColor" opacity=".8"/>
      <circle cx="16.5" cy="17" r="2" fill="currentColor" opacity=".8"/>
      <rect x="3" y="14" width="2" height="5" rx="1" fill="currentColor" opacity=".5"/>
      <rect x="21" y="14" width="2" height="5" rx="1" fill="currentColor" opacity=".5"/>
    </svg>
  ),
  funnel: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <path d="M3 4h20l-8 9v8l-4-2v-6L3 4z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="20" cy="20" r="4" fill="currentColor" opacity=".25" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M18.5 20h3M20 18.5v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
  team: (
    <svg width="26" height="26" viewBox="0 0 26 26" fill="none">
      <circle cx="10" cy="8" r="4" stroke="currentColor" strokeWidth="2"/>
      <path d="M2 22c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="20" cy="8" r="3" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M22 18c1.5.7 2.5 2.2 2.5 4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  ),
}

/* ── Feature Icons ─────────────────────────────────────────── */
function FeatIcon({ type }) {
  const paths = {
    0: <><circle cx="14" cy="14" r="10" stroke="#FF0000" strokeWidth="1.8"/><circle cx="14" cy="14" r="5" stroke="#FF0000" strokeWidth="1.8"/><circle cx="14" cy="14" r="2" fill="#FF0000"/></>,
    1: <><rect x="3" y="5" width="20" height="14" rx="3" stroke="#FF0000" strokeWidth="1.8"/><line x1="7" y1="22" x2="17" y2="22" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/><line x1="12" y1="19" x2="12" y2="22" stroke="#FF0000" strokeWidth="2"/></>,
    2: <><path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6l-4 3V8a2 2 0 0 1 2-2z" stroke="#FF0000" strokeWidth="1.8" strokeLinejoin="round"/><line x1="8" y1="11" x2="16" y2="11" stroke="#FF0000" strokeWidth="1.8" strokeLinecap="round"/><line x1="8" y1="15" x2="13" y2="15" stroke="#FF0000" strokeWidth="1.8" strokeLinecap="round"/></>,
    3: <><path d="M3 3l4 4m0 0l10 10M7 7l10-10M3 21l18-18" stroke="#FF0000" strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke="#FF0000" strokeWidth="1.8" strokeDasharray="3 3"/></>,
  }
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      {paths[type % 4]}
    </svg>
  )
}

/* ── Data ──────────────────────────────────────────────────── */
const modules = [
  {
    number: '01', step: '01 ШАГ', navIcon: 'target',
    title: 'Смысловая и маркетинговая упаковка',
    tools: 'Claude · Google Sheets',
    image: '/images/module-01.png',
    description: 'С помощью Claude собираете все смыслы проекта: позиционирование, анализ ЦА, конкурентов, медиаплан и оффер.',
    features: [
      { title: 'Кто мы', desc: 'Основные преимущества, позиционирование, уникальность' },
      { title: 'Какие задачи решаем', desc: 'Проблемы клиентов, потребности, боли и триггеры' },
      { title: 'Как решаем', desc: 'Решения и продукты, механики, подходы, преимущества' },
      { title: 'Для кого решаем', desc: 'Целевая аудитория, сегменты, профили клиентов' },
    ],
    result: 'Полная карта маркетинговых смыслов — готовая основа для любых задач',
  },
  {
    number: '02', step: '02 ШАГ', navIcon: 'design',
    title: 'Визуальная упаковка',
    tools: 'Claude · Figma · Canva',
    image: '/images/module-02.png',
    description: 'Создаёте логотип, фирменный стиль, сайты, презентации и рекламные креативы. Фиксируете всё в визуальный стандарт.',
    features: [
      { title: 'Единый стиль', desc: 'Логотип, палитра, шрифты и визуальный стандарт в JSON' },
      { title: 'Быстрое производство', desc: 'AI создаёт сайты, презентации и креативы в едином стиле' },
      { title: 'Без дизайнера', desc: 'Любая дизайн-задача закрывается за несколько минут' },
    ],
    result: 'ИИ знает ваш стиль и делает любой визуал по стандартам без дизайнера',
  },
  {
    number: '03', step: '03 ШАГ', navIcon: 'content',
    title: 'Контент-маркетинг',
    tools: 'Claude · Higgsfield · Canva',
    image: '/images/module-03.png',
    description: 'Выстраиваете автоматизированную систему производства контента для соцсетей.',
    features: [
      { title: 'Автосистема контента', desc: 'Reels, карусели, обложки и посты в едином стиле' },
      { title: '1–2 часа в месяц', desc: 'Максимум контента при минимуме вашего времени' },
      { title: 'Охваты и лиды', desc: 'Ежедневный выход контента с заявками и лидами' },
    ],
    result: 'Ежедневный контент при 1–2 часах работы в месяц — охваты, узнаваемость, лиды',
  },
  {
    number: '04', step: '04 ШАГ', navIcon: 'bot',
    title: 'ИИ-боты и автоматизация продаж',
    tools: 'Claude · CRM · API-интеграции',
    image: '/images/module-04.png',
    description: 'Создаёте ботов под каждый этап воронки — от первого касания до постпродажной работы.',
    features: [
      { title: '24/7 коммуникация', desc: 'Первое касание: приветствует, выявляет потребность и квалифицирует лидов' },
      { title: 'Работа в CRM', desc: 'Прогрев, продажа и дожим — всё системно и автоматически' },
      { title: 'Без потерь лидов', desc: 'Постпродажа: сопровождает, собирает отзывы, возвращает клиентов' },
    ],
    result: 'Система общается с клиентами 24/7, работает в CRM — без менеджера, без потерь',
  },
  {
    number: '05', step: '05 ШАГ', navIcon: 'funnel',
    title: 'Лидогенерация и путь клиента',
    tools: 'Instagram · VK · YouTube · Telegram · Яндекс Директ',
    image: '/images/module-05.png',
    description: 'Выстраиваете полный путь клиента: от первого касания через прогрев до покупки.',
    features: [
      { title: 'Привлечение', desc: 'Реклама, контент и лид-магниты — управляемый поток лидов' },
      { title: 'Прогрев и продажа', desc: 'Цепочки касаний, квалификация, оффер и дожим' },
      { title: 'Повторные продажи', desc: 'Сопровождение, допродажи, обратная связь и рост LTV' },
    ],
    result: 'Управляемый поток лидов, который движется по CJM и конвертируется в продажи',
  },
  {
    number: '06', step: '06 ШАГ', navIcon: 'team',
    title: 'Команда и процессы',
    tools: 'Claude · Notion · Google Sheets',
    image: '/images/module-06.png',
    description: 'С помощью Claude выстраиваете HR и операционку: оргструктура, найм через ИИ-бота, регламенты и KPI.',
    features: [
      { title: 'Стандарты', desc: 'Должностные инструкции, регламенты и KPI для команды' },
      { title: 'HR-автоматизация', desc: 'Найм через ИИ-бота, онбординг и обучение сотрудников' },
      { title: 'Фокус на стратегии', desc: 'Рутинные задачи закрывает ИИ без вашего участия' },
    ],
    result: 'Команда работает по стандартам, а рутинные HR-задачи закрывает ИИ',
  },
]

/* ── Content Panel ─────────────────────────────────────────── */
function ContentPanel({ mod }) {
  const cols = mod.features.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'grid-cols-1 md:grid-cols-3'
  return (
    <motion.div
      key={mod.number}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
      className="relative flex flex-col h-full"
      style={{
        background: '#FFFFFF',
        border: '1px solid #EDEDED',
        borderRadius: '32px',
        padding: 'clamp(28px, 3vw, 44px) clamp(24px, 3vw, 48px)',
        boxShadow: '0 24px 80px rgba(17,17,17,0.08)',
        minHeight: '760px',
        overflow: 'hidden',
      }}
    >

      {/* Top: text + image */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 lg:gap-12 items-center">
        {/* Left text */}
        <div>
          <span
            className="inline-flex font-black uppercase tracking-wider mb-6"
            style={{
              fontSize: '15px', letterSpacing: '0.08em', color: '#FF0000',
              background: 'rgba(255,0,0,0.08)', padding: '7px 16px',
              borderRadius: '999px',
            }}
          >
            {mod.step}
          </span>
          <h3
            className="font-black"
            style={{
              fontSize: 'clamp(28px, 3vw, 46px)', color: '#111111',
              lineHeight: 1.05, letterSpacing: '-0.025em',
            }}
          >
            {mod.title}
          </h3>
          <p
            className="mt-5"
            style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', color: '#111111', lineHeight: 1.5 }}
          >
            {mod.description}
          </p>
        </div>

        {/* Right image */}
        <div className="flex items-center justify-center" style={{ padding: '8px' }}>
          <div
            style={{
              width: '100%',
              aspectRatio: '1 / 1',
              maxWidth: '320px',
              borderRadius: '24px',
              background: 'transparent',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            <img
              src={mod.image}
              alt={mod.title}
              style={{ width: '100%', height: '100%', objectFit: 'contain' }}
              onError={e => { e.target.style.display = 'none' }}
            />
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="mt-10">
        <p
          className="font-black mb-5"
          style={{ fontSize: '22px', color: '#111111', letterSpacing: '-0.01em' }}
        >
          Что внутри модуля
        </p>
        <div className={`grid gap-4 ${cols}`}>
          {mod.features.map((f, i) => (
            <div
              key={f.title}
              style={{
                padding: '22px',
                borderRadius: '22px',
                background: '#FFFFFF',
                border: '1px solid #EDEDED',
                boxShadow: '0 8px 28px rgba(17,17,17,0.04)',
              }}
            >
              <div
                className="flex items-center justify-center mb-4"
                style={{
                  width: '52px', height: '52px', borderRadius: '16px',
                  background: 'rgba(255,0,0,0.07)',
                }}
              >
                <FeatIcon type={i} />
              </div>
              <p className="font-black" style={{ fontSize: '19px', color: '#FF0000', marginBottom: '8px' }}>
                {f.title}
              </p>
              <p style={{ fontSize: '17px', color: '#111111', lineHeight: 1.4 }}>
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Result */}
      <div
        className="flex items-center gap-5 mt-7"
        style={{
          background: 'linear-gradient(90deg, rgba(255,0,0,0.08), rgba(255,0,0,0.03))',
          border: '1px solid rgba(255,0,0,0.16)',
          borderRadius: '24px',
          padding: '22px 26px',
        }}
      >
        <div
          className="flex-shrink-0 flex items-center justify-center rounded-full"
          style={{ width: '64px', height: '64px', background: '#FF0000' }}
        >
          <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
            <path d="M5 14l6 6 12-12" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div>
          <p className="font-black uppercase tracking-widest mb-1" style={{ fontSize: '13px', color: '#FF0000', letterSpacing: '0.1em' }}>
            НА ВЫХОДЕ
          </p>
          <p className="font-black" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', color: '#111111', lineHeight: 1.25 }}>
            {mod.result}
          </p>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Main Component ────────────────────────────────────────── */
export default function Modules() {
  const [active, setActive] = useState(0)
  const headRef = useRef(null)
  const headInView = useInView(headRef, { once: true, margin: '-60px' })

  return (
    <section
      id="modules"
      style={{ background: '#FAFAFA', padding: 'clamp(60px, 8vw, 120px) 0 clamp(60px, 8vw, 140px)' }}
    >
      <div style={{ maxWidth: '1480px', margin: '0 auto', padding: '0 clamp(20px, 3vw, 48px)' }}>

        {/* Header */}
        <motion.div
          ref={headRef}
          initial={{ opacity: 0, y: 24 }}
          animate={headInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <p className="font-black uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.12em' }}>
            МОДУЛИ
          </p>
          <h2 className="font-black" style={{ fontSize: 'clamp(40px, 5.5vw, 76px)', color: '#111111', lineHeight: 1.0, letterSpacing: '-0.035em' }}>
            6 шагов к вашей{' '}
            <span style={{ color: '#FF0000' }}>AI-системе</span>
          </h2>
          <p className="mx-auto mt-5" style={{ fontSize: 'clamp(18px, 1.6vw, 24px)', color: '#111111', lineHeight: 1.4, maxWidth: '720px', fontWeight: 500 }}>
            Каждый модуль — конкретный шаг. На выходе получаете работающий элемент системы
          </p>
        </motion.div>

        {/* Mobile / Tablet: horizontal tabs */}
        <div className="block lg:hidden mb-6">
          <div
            className="flex gap-3 pb-3"
            style={{
              overflowX: 'auto', scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none',
              marginLeft: '-20px', marginRight: '-20px',
              paddingLeft: '20px', paddingRight: '20px',
            }}
          >
            {modules.map((mod, i) => (
              <button
                key={mod.number}
                onClick={() => setActive(i)}
                className="flex-shrink-0 flex items-center gap-3 font-bold transition-all duration-200"
                style={{
                  minWidth: '200px',
                  padding: '14px 18px',
                  borderRadius: '18px',
                  background: active === i ? '#111111' : '#FFFFFF',
                  border: active === i ? '1.5px solid rgba(255,0,0,0.4)' : '1px solid #EDEDED',
                  color: active === i ? '#FFFFFF' : '#111111',
                  cursor: 'pointer', outline: 'none',
                  scrollSnapAlign: 'start',
                  boxShadow: active === i ? '0 8px 24px rgba(17,17,17,0.15)' : 'none',
                }}
              >
                <span
                  className="flex-shrink-0"
                  style={{
                    color: active === i ? '#FF0000' : '#AAAAAA',
                    fontSize: '18px', fontWeight: 900,
                  }}
                >
                  {mod.number}
                </span>
                <span style={{ fontSize: '16px', lineHeight: 1.2 }}>{mod.title}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: sidebar + content */}
        <div className="grid gap-6 items-start" style={{ gridTemplateColumns: '1fr' }}>

          {/* Desktop layout */}
          <div className="hidden lg:grid gap-6" style={{ gridTemplateColumns: '340px 1fr', alignItems: 'start' }}>

            {/* Sidebar */}
            <div
              style={{
                background: 'linear-gradient(180deg, #0B0B0B 0%, #111111 100%)',
                borderRadius: '32px',
                padding: '24px 20px',
                boxShadow: '0 28px 80px rgba(17,17,17,0.2)',
                border: '1px solid rgba(255,0,0,0.18)',
                position: 'sticky',
                top: '24px',
              }}
            >
              {/* Progress line */}
              <div
                className="absolute pointer-events-none"
                style={{
                  left: '47px', top: '72px', bottom: '72px', width: '2px',
                  background: 'rgba(255,255,255,0.1)',
                  borderRadius: '1px',
                }}
              />

              <div className="flex flex-col gap-2">
                {modules.map((mod, i) => {
                  const isActive = i === active
                  return (
                    <button
                      key={mod.number}
                      onClick={() => setActive(i)}
                      className="relative flex items-center gap-4 text-left w-full transition-all duration-250"
                      style={{
                        padding: '16px 14px',
                        borderRadius: '22px',
                        background: isActive
                          ? 'linear-gradient(90deg, rgba(255,0,0,0.22), rgba(255,0,0,0.06))'
                          : 'transparent',
                        border: isActive ? '1px solid rgba(255,0,0,0.55)' : '1px solid transparent',
                        boxShadow: isActive ? '0 16px 40px rgba(255,0,0,0.18)' : 'none',
                        cursor: 'pointer', outline: 'none',
                        minHeight: '80px',
                      }}
                      onMouseEnter={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'rgba(255,255,255,0.07)'
                          e.currentTarget.style.transform = 'translateX(2px)'
                        }
                      }}
                      onMouseLeave={e => {
                        if (!isActive) {
                          e.currentTarget.style.background = 'transparent'
                          e.currentTarget.style.transform = 'translateX(0)'
                        }
                      }}
                    >
                      {/* Active bar */}
                      {isActive && (
                        <div
                          className="absolute left-0 top-3 bottom-3"
                          style={{ width: '4px', borderRadius: '2px', background: '#FF0000' }}
                        />
                      )}

                      {/* Number */}
                      <span
                        className="flex-shrink-0 font-black"
                        style={{
                          fontSize: '28px', letterSpacing: '-0.03em',
                          color: isActive ? '#FF0000' : 'rgba(255,255,255,0.4)',
                          minWidth: '44px', lineHeight: 1,
                        }}
                      >
                        {mod.number}
                      </span>

                      {/* Icon */}
                      <span
                        className="flex-shrink-0 flex items-center justify-center"
                        style={{
                          width: '48px', height: '48px', borderRadius: '16px',
                          background: isActive ? '#FF0000' : 'rgba(255,255,255,0.08)',
                          color: 'white',
                          transition: 'all 0.25s',
                        }}
                      >
                        {NavIcons[mod.navIcon]}
                      </span>

                      {/* Title */}
                      <span
                        className="font-bold"
                        style={{
                          fontSize: '16px', lineHeight: 1.25,
                          color: isActive ? '#FFFFFF' : 'rgba(255,255,255,0.75)',
                        }}
                      >
                        {mod.title}
                      </span>
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
              <ContentPanel key={active} mod={modules[active]} />
            </AnimatePresence>
          </div>

          {/* Mobile/Tablet content */}
          <div className="block lg:hidden">
            <AnimatePresence mode="wait">
              <ContentPanel key={active} mod={modules[active]} />
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  )
}
