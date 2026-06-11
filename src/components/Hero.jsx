import { motion } from 'framer-motion'

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ── Иконки плашки (крупные, 3D-стиль) ──────────────────────── */
function Icon3DCube() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="18" fill="#FF1A1A" fillOpacity=".08"/>
      {/* Top face */}
      <path d="M36 10L58 22L36 34L14 22L36 10Z" fill="url(#ct)" stroke="#FF1A1A" strokeWidth="1.2"/>
      {/* Left face */}
      <path d="M14 22V46L36 58V34L14 22Z" fill="url(#cl)"/>
      {/* Right face */}
      <path d="M58 22V46L36 58V34L58 22Z" fill="url(#cr)"/>
      {/* Edges */}
      <path d="M36 34V58" stroke="#FF1A1A" strokeWidth="1.2"/>
      <path d="M14 22L36 34" stroke="#FF1A1A" strokeWidth="1.2"/>
      <path d="M58 22L36 34" stroke="#FF1A1A" strokeWidth="1.2"/>
      <defs>
        <linearGradient id="ct" x1="14" y1="10" x2="58" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3333"/>
          <stop offset="1" stopColor="#CC0000"/>
        </linearGradient>
        <linearGradient id="cl" x1="14" y1="22" x2="36" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#CC0000"/>
          <stop offset="1" stopColor="#880000"/>
        </linearGradient>
        <linearGradient id="cr" x1="58" y1="22" x2="36" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1A1A"/>
          <stop offset="1" stopColor="#AA0000"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function Icon3DCamera() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="18" fill="#FF1A1A" fillOpacity=".08"/>
      {/* Camera body */}
      <rect x="8" y="22" width="42" height="28" rx="8" fill="url(#cam1)" stroke="#FF1A1A" strokeWidth="1.2"/>
      {/* Lens ring */}
      <circle cx="29" cy="36" r="10" fill="url(#cam2)" stroke="#FF1A1A" strokeWidth="1.2"/>
      <circle cx="29" cy="36" r="5" fill="#FF1A1A" opacity=".8"/>
      <circle cx="27" cy="33" r="2" fill="white" opacity=".5"/>
      {/* Record triangle */}
      <path d="M52 26L66 19V53L52 46V26Z" fill="url(#cam3)" stroke="#FF1A1A" strokeWidth="1.2" strokeLinejoin="round"/>
      <defs>
        <linearGradient id="cam1" x1="8" y1="22" x2="50" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3333" stopOpacity=".25"/>
          <stop offset="1" stopColor="#CC0000" stopOpacity=".1"/>
        </linearGradient>
        <linearGradient id="cam2" x1="19" y1="26" x2="39" y2="46" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3333"/>
          <stop offset="1" stopColor="#990000"/>
        </linearGradient>
        <linearGradient id="cam3" x1="52" y1="19" x2="66" y2="53" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF1A1A" stopOpacity=".5"/>
          <stop offset="1" stopColor="#CC0000" stopOpacity=".3"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

function Icon3DBot() {
  return (
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="72" height="72" rx="18" fill="#FF1A1A" fillOpacity=".08"/>
      {/* Head */}
      <rect x="20" y="10" width="32" height="24" rx="8" fill="url(#bot1)" stroke="#FF1A1A" strokeWidth="1.2"/>
      {/* Eyes */}
      <circle cx="29" cy="22" r="5" fill="#FF1A1A" opacity=".9"/>
      <circle cx="43" cy="22" r="5" fill="#FF1A1A" opacity=".9"/>
      <circle cx="29" cy="22" r="2" fill="white"/>
      <circle cx="43" cy="22" r="2" fill="white"/>
      {/* Antenna */}
      <line x1="36" y1="10" x2="36" y2="5" stroke="#FF1A1A" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="36" cy="4" r="3" fill="#FF1A1A"/>
      {/* Neck */}
      <rect x="30" y="34" width="12" height="5" rx="2" fill="#FF1A1A" opacity=".4"/>
      {/* Body */}
      <rect x="14" y="39" width="44" height="26" rx="8" fill="url(#bot2)" stroke="#FF1A1A" strokeWidth="1.2"/>
      {/* Mouth bar */}
      <rect x="22" y="51" width="28" height="6" rx="3" fill="#FF1A1A" opacity=".3"/>
      <rect x="22" y="51" width="16" height="6" rx="3" fill="#FF1A1A" opacity=".7"/>
      {/* Arms */}
      <rect x="4" y="42" width="10" height="18" rx="5" fill="#FF1A1A" opacity=".3" stroke="#FF1A1A" strokeWidth="1"/>
      <rect x="58" y="42" width="10" height="18" rx="5" fill="#FF1A1A" opacity=".3" stroke="#FF1A1A" strokeWidth="1"/>
      <defs>
        <linearGradient id="bot1" x1="20" y1="10" x2="52" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3333" stopOpacity=".2"/>
          <stop offset="1" stopColor="#CC0000" stopOpacity=".05"/>
        </linearGradient>
        <linearGradient id="bot2" x1="14" y1="39" x2="58" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF3333" stopOpacity=".18"/>
          <stop offset="1" stopColor="#CC0000" stopOpacity=".05"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

const infoItems = [
  {
    icon: <img src="/images/icon-cube.png" alt="" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />,
    title: ['6 МОДУЛЕЙ', '50+ УРОКОВ'],
    desc: 'Пошаговая система внедрения ИИ',
  },
  {
    icon: <img src="/images/icon-camera.png" alt="" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />,
    title: ['ЖИВЫЕ СЕССИИ', 'С РУСЛАНОМ ГАМЗАТОВЫМ'],
    desc: 'Практические разборы, ответы на вопросы',
    border: true,
  },
  {
    icon: <img src="/images/icon-bot.png" alt="" style={{ width: '64px', height: '64px', objectFit: 'contain' }} />,
    title: ['AI-СИСТЕМА', 'В ВАШЕМ БИЗНЕСЕ'],
    desc: 'Готовые инструменты и автоматизации',
    border: true,
  },
]

export default function Hero() {
  return (
    <section
      className="relative bg-white"
      style={{ overflow: 'clip' }}
    >
      {/* Hero background image */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage: 'url(/images/hero-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
          opacity: 1,
        }}
      />
      <style>{`
        :root {
          --color-red: #FF1A1A;
          --color-black: #111111;
          --color-white: #FFFFFF;
          --radius-xl: 24px;
          --radius-lg: 18px;
        }
      `}</style>

      <div className="relative z-10 mx-auto px-8 md:px-12 lg:px-16" style={{ maxWidth: '1520px' }}>

        {/* ── TOP BAR ── */}
        <div className="flex flex-wrap items-center justify-center pt-6 gap-2">
          {[
            { label: 'СТАРТ: 15 ИЮНЯ' },
            { label: 'ПРОДОЛЖИТЕЛЬНОСТЬ: 2 МЕСЯЦА' },
          ].map(({ label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 bg-white border border-[#E5E5E5] px-4 py-2"
              style={{ borderRadius: 'var(--radius-lg)' }}
            >
              <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: 'var(--color-red)' }} />
              <span className="font-bold uppercase tracking-wide" style={{ fontSize: '14px', color: 'var(--color-black)' }}>
                {label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* ── MAIN GRID: robot | text | robot ── */}
        <div className="grid items-center lg:grid-cols-[1fr_2fr_1fr] grid-cols-1" style={{ minHeight: '560px' }}>
          {/* LEFT — robot placeholder */}
          <div className="hidden lg:flex items-end justify-center">
            {/* <img src="/images/robot-left.png" alt="" style={{ height: '680px', objectFit: 'contain' }} /> */}
          </div>

          {/* CENTER — text */}
          <div className="flex flex-col items-center text-center justify-center pt-6 pb-12 lg:pt-0 lg:pb-0 px-6">

            <motion.h1
              className="font-black uppercase leading-none"
              style={{ fontSize: 'clamp(44px, 8vw, 128px)', letterSpacing: '-0.04em', lineHeight: 0.92, color: 'var(--color-black)' }}
              initial="hidden" animate="visible" variants={fadeUp} custom={0}
            >
              AI SPRINT <span style={{ color: 'var(--color-red)' }}>X5</span>
            </motion.h1>

            <motion.p
              className="font-black leading-tight mt-5"
              style={{ fontSize: 'clamp(24px, 2.6vw, 42px)', lineHeight: 1.05 }}
              initial="hidden" animate="visible" variants={fadeUp} custom={1}
            >
              <span style={{ color: 'var(--color-black)' }}>Практическая программа</span>
              <br />
              <span style={{ color: 'var(--color-red)' }}>по внедрению ИИ в бизнес</span>
            </motion.p>

            <motion.div
              className="mt-6"
              style={{ maxWidth: '560px' }}
              initial="hidden" animate="visible" variants={fadeUp} custom={2}
            >
              <p style={{ fontSize: 'clamp(17px, 1.3vw, 19px)', color: 'var(--color-black)', lineHeight: 1.45 }}>
                Для предпринимателей, маркетологов и фрилансеров — живые разборы, внедрение в проект, поддержка куратора
              </p>
            </motion.div>

            {/* CTA */}
            <motion.div
              className="mt-9 flex flex-col sm:flex-row gap-4 justify-center"
              initial="hidden" animate="visible" variants={fadeUp} custom={3}
            >
              {/* Кнопка 1 — красная */}
              <a
                href="#tariffs"
                className="w-full sm:w-auto inline-flex items-center justify-between font-bold uppercase text-white transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  fontSize: '18px',
                  backgroundColor: 'var(--color-red)',
                  height: '64px',
                  minWidth: '260px',
                  borderRadius: 'var(--radius-lg)',
                  boxShadow: '0 8px 32px rgba(255,26,26,0.3)',
                  letterSpacing: '0.02em',
                  padding: '0 16px 0 24px',
                  gap: '12px',
                }}
              >
                <span>ВЫБРАТЬ ТАРИФ</span>
                <span
                  className="flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{
                    width: '44px', height: '44px',
                    background: 'rgba(255,255,255,0.2)',
                    border: '1.5px solid rgba(255,255,255,0.4)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>

              {/* Кнопка 2 — outline */}
              <a
                href="#program"
                className="w-full sm:w-auto inline-flex items-center justify-between font-bold uppercase transition-all duration-200 hover:bg-red-50"
                style={{
                  fontSize: '18px',
                  color: 'var(--color-black)',
                  border: '2px solid var(--color-red)',
                  height: '64px',
                  minWidth: '260px',
                  borderRadius: 'var(--radius-lg)',
                  letterSpacing: '0.02em',
                  padding: '0 16px 0 24px',
                  gap: '12px',
                }}
              >
                <span>ПРОГРАММА ОБУЧЕНИЯ</span>
                <span
                  className="flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{
                    width: '44px', height: '44px',
                    border: '1.5px solid var(--color-red)',
                    background: 'rgba(255,26,26,0.05)',
                  }}
                >
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path d="M3 9h12M10 4l5 5-5 5" stroke="#FF1A1A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </motion.div>

          </div>

          {/* RIGHT — robot placeholder */}
          <div className="hidden lg:flex items-end justify-center">
            {/* <img src="/images/robot-right.png" alt="" style={{ height: '680px', objectFit: 'contain' }} /> */}
          </div>
        </div>

        {/* ── INFO CARD — full width ── */}
        <motion.div
          className="bg-white border border-[#E8E8E8] mx-auto mt-8"
          style={{
            borderRadius: 'var(--radius-xl)',
            boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
            maxWidth: '1100px',
          }}
          initial="hidden" animate="visible" variants={fadeUp} custom={4}
        >
          <div className="grid grid-cols-1 md:grid-cols-3">
            {infoItems.map(({ icon, title, desc, border }) => (
              <div
                key={title[0]}
                className="flex items-center gap-5 px-10 py-7"
                style={border ? { borderLeft: '1px solid #E8E8E8' } : {}}
              >
                <div className="flex-shrink-0">{icon}</div>
                <div>
                  {title.map((line, i) => (
                    <p key={i} className="font-bold leading-tight" style={{ fontSize: '18px', color: 'var(--color-black)' }}>
                      {line}
                    </p>
                  ))}
                  <p className="mt-1.5" style={{ fontSize: '16px', color: '#555555', lineHeight: 1.4 }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
        <div className="pb-16" />
      </div>
    </section>
  )
}
