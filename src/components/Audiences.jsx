import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

/* ── Tab icons ─────────────────────────────────────────────── */
function IconBriefcase({ active }) {
  const c = active ? 'white' : '#111111'
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="3" y="10" width="22" height="15" rx="4" stroke={c} strokeWidth="2"/>
      <path d="M9 10V8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="3" y1="17" x2="25" y2="17" stroke={c} strokeWidth="1.5"/>
    </svg>
  )
}
function IconBuilding({ active }) {
  const c = active ? 'white' : '#111111'
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="4" y="6" width="20" height="18" rx="2" stroke={c} strokeWidth="2"/>
      <path d="M10 24V18h8v6" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <rect x="8" y="10" width="3" height="3" rx="1" fill={c}/>
      <rect x="13" y="10" width="3" height="3" rx="1" fill={c}/>
      <rect x="17" y="10" width="3" height="3" rx="1" fill={c}/>
      <rect x="8" y="15" width="3" height="3" rx="1" fill={c}/>
      <rect x="17" y="15" width="3" height="3" rx="1" fill={c}/>
      <path d="M10 6V4h8v2" stroke={c} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  )
}
function IconMic({ active }) {
  const c = active ? 'white' : '#111111'
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect x="10" y="3" width="8" height="14" rx="4" stroke={c} strokeWidth="2"/>
      <path d="M5 14c0 5 4 8 9 8s9-3 9-8" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="14" y1="22" x2="14" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <line x1="10" y1="26" x2="18" y2="26" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}
function IconRocket({ active }) {
  const c = active ? 'white' : '#111111'
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <path d="M14 3C14 3 20 6 20 14H8C8 6 14 3 14 3Z" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <path d="M8 14l-3 5h18l-3-5" stroke={c} strokeWidth="2" strokeLinejoin="round"/>
      <circle cx="14" cy="11" r="2" fill={c}/>
      <path d="M10 19v3" stroke={c} strokeWidth="2" strokeLinecap="round"/>
      <path d="M18 19v3" stroke={c} strokeWidth="2" strokeLinecap="round"/>
    </svg>
  )
}

/* ── Check icon ────────────────────────────────────────────── */
function CheckIcon() {
  return (
    <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,0,0,0.08)' }}>
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2.5 7l3 3 6-6" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

/* ── Data ──────────────────────────────────────────────────── */
const audiences = [
  {
    id: 'freelancer',
    tab: 'Специалист\nФрилансер',
    icon: (active) => <IconBriefcase active={active} />,
    image: '/images/audience-freelancer.png',
    who: 'Маркетолог, SMM, таргетолог, дизайнер или любой digital-специалист',
    goal: 'Работать быстрее, брать больше клиентов и повышать стоимость своих услуг',
    chips: ['Автоматизация рутины', 'Контент за минуты', 'Рост среднего чека'],
    results: [
      'Закрываешь задачи с ИИ за минуты',
      'Растёшь в доходе без увеличения нагрузки',
      'Стабильно получаешь клиентов и повторные заказы',
      'Освобождаешь время на стратегию и рост',
      'Усиливаешь личную экспертизу через ИИ',
    ],
    advantages: [
      { title: 'Адаптация под вас', desc: 'Программа подстраивается под ваш уровень, цели и задачи' },
      { title: 'Пошаговый результат', desc: 'Вы видите прогресс и применяете на практике каждый день' },
      { title: 'Поддержка на всём пути', desc: 'Куратор, сообщество и инструменты для достижения ваших целей' },
    ],
  },
  {
    id: 'business',
    tab: 'Предприниматель\nРуководитель',
    icon: (active) => <IconBuilding active={active} />,
    image: '/images/audience-business.png',
    who: 'Предприниматель или руководитель бизнеса, который хочет расти быстрее и масштабироваться системно',
    goal: 'Оптимизировать процессы, снизить расходы, увеличить прибыль и масштабировать бизнес',
    chips: ['Оптимизация процессов', 'Снижение расходов', 'Рост прибыли', 'Масштабирование'],
    results: [
      'Автоматизируешь рутину и освобождаешь время',
      'Принимаешь решения на основе данных, а не интуиции',
      'Выстраиваешь системный маркетинг и продажи',
      'Увеличиваешь прибыль и укрепляешь позиции бизнеса',
      'Создаёшь масштабируемую модель без твоего участия',
    ],
    advantages: [
      { title: 'Адаптация под вас', desc: 'Программа подстраивается под ваш уровень, цели и задачи' },
      { title: 'Пошаговый результат', desc: 'Вы видите прогресс и применяете на практике каждый день' },
      { title: 'Поддержка на всём пути', desc: 'Куратор, сообщество и инструменты для достижения ваших целей' },
    ],
  },
  {
    id: 'expert',
    tab: 'Блогер\nЭксперт',
    icon: (active) => <IconMic active={active} />,
    image: '/images/audience-expert.png',
    who: 'Блогер, эксперт или наставник, который хочет больше влияния, аудитории и дохода',
    goal: 'Создавать сильный контент, привлекать аудиторию, продавать продукты и масштабировать личный бренд',
    chips: ['Идеи и контент за минуты', 'Рост аудитории', 'Продажи и продвижение'],
    results: [
      'Генерируешь контент быстрее и легче',
      'Повышаешь охваты и вовлечённость',
      'Продаёшь свои продукты и услуги стабильно',
      'Автоматизируешь рутину и освобождаешь время',
      'Выходишь на новый уровень дохода и свободы',
    ],
    advantages: [
      { title: 'Адаптация под вас', desc: 'Программа подстраивается под ваш уровень, цели и задачи' },
      { title: 'Пошаговый результат', desc: 'Вы видите прогресс и применяете на практике каждый день' },
      { title: 'Поддержка на всём пути', desc: 'Куратор, сообщество и инструменты для достижения ваших целей' },
    ],
  },
  {
    id: 'beginner',
    tab: 'Новичок',
    icon: (active) => <IconRocket active={active} />,
    image: '/images/audience-beginner.png',
    who: 'Новичок в ИИ и digital, который хочет освоить новую профессию и начать зарабатывать',
    goal: 'Освоить востребованные навыки в ИИ с нуля и выйти на стабильный доход',
    chips: ['Профессия будущего', 'Практика с нуля', 'Первые результаты сразу'],
    results: [
      'Освоишь ИИ-профессию с нуля пошагово и без стресса',
      'Научишься применять ИИ в реальных задачах',
      'Соберёшь портфолио и начнёшь зарабатывать',
      'Получишь поддержку куратора и сообщества',
      'Сможешь работать удалённо из любой точки мира',
    ],
    advantages: [
      { title: 'Пошаговое обучение', desc: 'Простым языком, без сложных терминов и технических знаний' },
      { title: 'Практика с первого дня', desc: 'Реальные задания и проекты для быстрого результата и уверенности' },
      { title: 'Поддержка на каждом этапе', desc: 'Куратор, сообщество и обратная связь — вы не останетесь одни' },
    ],
  },
]

/* ── Advantage icon ────────────────────────────────────────── */
function AdvIcon({ type }) {
  const icons = {
    0: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" stroke="#FF0000" strokeWidth="2"/>
        <path d="M10 16l4 4 8-8" stroke="#FF0000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    1: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M6 28V12l10-8 10 8v16" stroke="#FF0000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <rect x="12" y="18" width="8" height="10" rx="2" stroke="#FF0000" strokeWidth="2"/>
        <path d="M10 22h12" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    2: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="10" r="5" stroke="#FF0000" strokeWidth="2"/>
        <path d="M6 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#FF0000" strokeWidth="2" strokeLinecap="round"/>
        <path d="M21 14l4-2" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M25 18l-4-1" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  }
  return icons[type] || icons[0]
}

/* ── Main component ────────────────────────────────────────── */
export default function Audiences() {
  const [active, setActive] = useState(0)
  const data = audiences[active]

  return (
    <section id="audiences" style={{ background: '#FFFFFF', padding: '120px 0 80px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

        {/* ── Header ── */}
        <div className="text-center mb-12">
          <p className="font-bold uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.08em' }}>
            ДЛЯ КОГО
          </p>
          <h2 className="font-black leading-none" style={{ fontSize: 'clamp(48px, 5vw, 72px)', lineHeight: 1.0, color: '#111111' }}>
            Узнайте себя<br />
            <span style={{ color: '#FF0000' }}>и свой результат</span>
          </h2>
          <p className="mx-auto mt-6" style={{ fontSize: 'clamp(18px, 1.5vw, 24px)', color: '#111111', lineHeight: 1.4, maxWidth: '680px' }}>
            Программа адаптируется под ваши цели и стартовую точку
          </p>
        </div>

        {/* ── Tabs ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {audiences.map((a, i) => {
            const isActive = i === active
            return (
              <button
                key={a.id}
                onClick={() => setActive(i)}
                className="flex items-center gap-4 text-left transition-all duration-250 cursor-pointer"
                style={{
                  height: '96px',
                  borderRadius: '22px',
                  padding: '20px 24px',
                  background: isActive ? '#111111' : '#FFFFFF',
                  border: isActive ? '1.5px solid rgba(255,0,0,0.5)' : '1px solid #EDEDED',
                  boxShadow: isActive
                    ? '0 12px 40px rgba(17,17,17,0.18), 0 0 0 1px rgba(255,0,0,0.12)'
                    : '0 8px 32px rgba(17,17,17,0.05)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                  outline: 'none',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.borderColor = 'rgba(255,0,0,0.3)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(17,17,17,0.1)' } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.borderColor = '#EDEDED'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(17,17,17,0.05)' } }}
              >
                {/* Icon */}
                <span
                  className="flex-shrink-0 flex items-center justify-center"
                  style={{
                    width: '56px', height: '56px',
                    borderRadius: '16px',
                    background: isActive ? '#FF0000' : '#F6F6F6',
                  }}
                >
                  {a.icon(isActive)}
                </span>
                {/* Label */}
                <span
                  className="font-black leading-tight whitespace-pre-line"
                  style={{ fontSize: '18px', color: isActive ? '#FFFFFF' : '#111111', lineHeight: 1.2 }}
                >
                  {a.tab}
                </span>
              </button>
            )
          })}
        </div>

        {/* ── Active card ── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-[280px_1fr_300px]"
            style={{
              gap: '0',
              borderRadius: '32px',
              background: '#FFFFFF',
              border: '1px solid #ECECEC',
              boxShadow: '0 24px 80px rgba(17,17,17,0.08)',
              alignItems: 'stretch',
              overflow: 'hidden',
            }}
          >
            {/* LEFT — image */}
            <div
              className="hidden lg:flex items-center justify-center p-8"
              style={{ borderRight: '1px solid #ECECEC', background: '#FAFAFA' }}
            >
              <img
                src={data.image}
                alt=""
                onError={e => { e.target.parentNode.style.display = 'none' }}
                style={{ width: '220px', height: '220px', objectFit: 'contain' }}
              />
            </div>

            {/* CENTER — text */}
            <div className="p-8 lg:p-10">
              <p className="font-black uppercase tracking-widest" style={{ fontSize: '14px', color: '#FF0000', letterSpacing: '0.1em' }}>ТЫ</p>
              <p className="font-black mt-2" style={{ fontSize: 'clamp(22px, 2vw, 34px)', color: '#111111', lineHeight: 1.15 }}>
                {data.who}
              </p>

              <p className="font-black uppercase tracking-widest mt-7" style={{ fontSize: '14px', color: '#FF0000', letterSpacing: '0.1em' }}>ТВОЯ ЦЕЛЬ</p>
              <p className="mt-2 font-medium" style={{ fontSize: '20px', color: '#111111', lineHeight: 1.45 }}>
                {data.goal}
              </p>

              <p className="font-black uppercase tracking-widest mt-7" style={{ fontSize: '14px', color: '#FF0000', letterSpacing: '0.1em' }}>ТЫ ПОЛУЧИШЬ</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {data.chips.map(chip => (
                  <span
                    key={chip}
                    className="font-bold"
                    style={{
                      fontSize: '16px', color: '#111111',
                      padding: '10px 16px',
                      borderRadius: '14px',
                      background: '#FFFFFF',
                      border: '1px solid #EDEDED',
                      boxShadow: '0 6px 20px rgba(17,17,17,0.05)',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>

            {/* RIGHT — results */}
            <div className="p-8 lg:p-10 flex flex-col justify-between border-t border-[#ECECEC] lg:border-t-0 lg:border-l lg:border-[#ECECEC]">
              <div>
                <p className="font-black uppercase tracking-widest mb-4" style={{ fontSize: '14px', color: '#FF0000', letterSpacing: '0.1em' }}>РЕЗУЛЬТАТ</p>
                <div>
                  {data.results.map((r, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 py-3"
                      style={{ borderBottom: i < data.results.length - 1 ? '1px solid #EEEEEE' : 'none' }}
                    >
                      <CheckIcon />
                      <span style={{ fontSize: '17px', color: '#111111', lineHeight: 1.35, fontWeight: 500 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              <a
                href="#tariffs"
                className="mt-6 flex items-center justify-between font-black text-white transition-all duration-200 hover:scale-[1.02]"
                style={{
                  height: '68px',
                  background: '#FF0000',
                  borderRadius: '18px',
                  fontSize: '18px',
                  padding: '0 24px',
                  boxShadow: '0 16px 36px rgba(255,0,0,0.25)',
                  letterSpacing: '0.02em',
                  textDecoration: 'none',
                }}
              >
                <span>ПОДХОДИТ МНЕ</span>
                <span
                  className="flex items-center justify-center rounded-full"
                  style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.4)' }}
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* ── Bottom advantages ── */}
        <div
          className="mt-6 grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-[#ECECEC]"
          style={{
            background: '#FFFFFF',
            border: '1px solid #ECECEC',
            borderRadius: '28px',
            boxShadow: '0 16px 60px rgba(17,17,17,0.06)',
            padding: '36px 0',
          }}
        >
          {data.advantages.map((adv, i) => (
            <div
              key={i}
              className="flex items-start gap-4 p-8"
              style={{}}
            >
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: '56px', height: '56px', minWidth: '56px', background: 'rgba(255,0,0,0.08)' }}
              >
                <AdvIcon type={i} />
              </span>
              <div>
                <p className="font-black" style={{ fontSize: '19px', color: '#111111' }}>{adv.title}</p>
                <p className="mt-1" style={{ fontSize: '17px', color: '#111111', lineHeight: 1.4 }}>{adv.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
