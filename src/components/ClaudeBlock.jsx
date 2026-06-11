import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
}

/* ── Image with placeholder ────────────────────────────────── */
function ToolImg({ src, alt, size = 80 }) {
  return (
    <img
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={{ objectFit: 'contain', width: size, height: size }}
      onError={e => {
        e.target.style.display = 'none'
        e.target.nextSibling && (e.target.nextSibling.style.display = 'flex')
      }}
    />
  )
}

function ImgBox({ src, alt, boxSize = 112, imgSize = 84 }) {
  return (
    <div
      className="flex-shrink-0 flex items-center justify-center"
      style={{
        width: boxSize, height: boxSize,
        borderRadius: '22px',
        background: '#1B1B1B',
        border: '1px solid rgba(255,255,255,0.10)',
        boxShadow: 'inset 0 0 30px rgba(255,0,0,0.08)',
        position: 'relative',
      }}
    >
      <ToolImg src={src} alt={alt} size={imgSize} />
      {/* Fallback */}
      <div
        style={{
          display: 'none', position: 'absolute', inset: 0,
          borderRadius: '22px', background: 'rgba(255,0,0,0.08)',
          alignItems: 'center', justifyContent: 'center',
        }}
      >
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <circle cx="18" cy="18" r="16" stroke="#FF0000" strokeWidth="1.5" strokeDasharray="4 3"/>
          <circle cx="18" cy="18" r="7" stroke="#FF0000" strokeWidth="1.5"/>
          <circle cx="18" cy="18" r="2.5" fill="#FF0000"/>
        </svg>
      </div>
    </div>
  )
}

/* ── Main card (Claude / Claude Cowork) ───────────────────── */
function MainCard({ label, title, desc, items, imgSrc, delay }) {
  return (
    <motion.div
      variants={fadeUp} custom={delay}
      className="group transition-all duration-250"
      style={{
        background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '30px',
        padding: 'clamp(28px, 3vw, 40px)',
        boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
      }}
      whileHover={{ y: -3, borderColor: 'rgba(255,0,0,0.28)', transition: { duration: 0.25 } }}
    >
      <div className="grid gap-6" style={{ gridTemplateColumns: '112px 1fr' }}>
        {/* Icon */}
        <ImgBox src={imgSrc} alt={title} boxSize={112} imgSize={84} />

        {/* Content */}
        <div>
          <p className="font-black uppercase tracking-widest mb-4"
            style={{ fontSize: '15px', color: '#FF0000', letterSpacing: '0.1em' }}>
            {label}
          </p>
          <h3 className="font-black" style={{ fontSize: 'clamp(28px, 2.8vw, 38px)', color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            {title}
          </h3>
          <p className="mt-4" style={{ fontSize: 'clamp(18px, 1.5vw, 21px)', color: '#D8D8D8', lineHeight: 1.45 }}>
            {desc}
          </p>
          <ul className="mt-6 flex flex-col gap-3">
            {items.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: '#FF0000', minWidth: '6px' }} />
                <span style={{ fontSize: 'clamp(17px, 1.4vw, 20px)', color: '#E8E8E8', lineHeight: 1.35 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Small card (Claude Code / Claude Design) ─────────────── */
function SmallCard({ label, title, items, imgSrc }) {
  return (
    <motion.div
      className="group transition-all duration-250"
      style={{
        background: '#1B1B1B',
        border: '1px solid rgba(255,255,255,0.10)',
        borderRadius: '24px',
        padding: 'clamp(24px, 2.5vw, 32px)',
        boxShadow: '0 12px 40px rgba(0,0,0,0.25)',
      }}
      whileHover={{ y: -3, borderColor: 'rgba(255,0,0,0.28)', transition: { duration: 0.25 } }}
    >
      <div className="grid gap-5" style={{ gridTemplateColumns: '96px 1fr' }}>
        <ImgBox src={imgSrc} alt={title} boxSize={96} imgSize={72} />
        <div>
          <p className="font-black uppercase tracking-widest mb-3"
            style={{ fontSize: '14px', color: '#FF0000', letterSpacing: '0.1em' }}>
            {label}
          </p>
          <h4 className="font-black" style={{ fontSize: 'clamp(24px, 2.2vw, 32px)', color: '#FFFFFF', lineHeight: 1.05, letterSpacing: '-0.02em' }}>
            {title}
          </h4>
          <ul className="mt-5 flex flex-col gap-2.5">
            {items.map(item => (
              <li key={item} className="flex items-start gap-3">
                <span className="flex-shrink-0 mt-2 w-1.5 h-1.5 rounded-full" style={{ background: '#FF0000', minWidth: '6px' }} />
                <span style={{ fontSize: 'clamp(16px, 1.3vw, 19px)', color: '#E8E8E8', lineHeight: 1.35 }}>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

/* ── Tool Pill ─────────────────────────────────────────────── */
function Pill({ name, icon }) {
  return (
    <div
      className="flex items-center gap-2.5 cursor-default transition-all duration-200"
      style={{
        height: '56px', padding: '0 20px',
        borderRadius: '16px',
        background: '#1B1B1B',
        border: '1px solid rgba(255,255,255,0.12)',
        color: '#FFFFFF',
        fontSize: '18px',
        fontWeight: 800,
        whiteSpace: 'nowrap',
      }}
      onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(255,0,0,0.35)'; e.currentTarget.style.background = '#202020' }}
      onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)'; e.currentTarget.style.background = '#1B1B1B' }}
    >
      {icon && (
        <img src={icon} alt={name} width={24} height={24} style={{ objectFit: 'contain' }}
          onError={e => e.target.style.display = 'none'} />
      )}
      {name}
    </div>
  )
}

/* ── Main Component ────────────────────────────────────────── */
export default function ClaudeBlock() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section
      id="claude-tools"
      ref={ref}
      style={{
        background: 'radial-gradient(circle at top center, rgba(255,0,0,0.12), transparent 38%), #050505',
        color: '#FFFFFF',
        padding: 'clamp(60px, 8vw, 120px) clamp(20px, 3vw, 48px)',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1440px', margin: '0 auto' }}>

        {/* ── HEADER ── */}
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={0}
          className="text-center mb-16"
        >
          <p className="font-black uppercase tracking-widest mb-5"
            style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.12em' }}>
            ИНСТРУМЕНТЫ
          </p>
          <h2
            className="font-black mx-auto"
            style={{
              fontSize: 'clamp(38px, 5.5vw, 76px)',
              lineHeight: 1.02, letterSpacing: '-0.03em', color: '#FFFFFF',
              maxWidth: '1200px',
            }}
          >
            Claude —{' '}
            <span style={{ color: '#FF0000' }}>главный инструмент</span>{' '}
            курса
          </h2>
          <p
            className="mx-auto mt-6"
            style={{
              fontSize: 'clamp(18px, 1.6vw, 24px)', lineHeight: 1.4,
              color: '#D8D8D8', maxWidth: '720px', fontWeight: 500,
            }}
          >
            На протяжении всего обучения работаем в Claude, показываем возможности
            и решаем реальные задачи на практике
          </p>
        </motion.div>

        {/* ── TOP 2 CARDS ── */}
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <MainCard
            delay={1}
            label="АНАЛИЗ И СТРАТЕГИЯ"
            title="Claude"
            desc="Анализ, стратегия, тексты, смыслы, большие данные. Мозг, который управляет всей системой."
            items={[
              'Анализ рынка и конкурентов',
              'Написание текстов и офферов',
              'Стратегия роста и позиционирование',
              'Работа с большими массивами данных',
            ]}
            imgSrc="/images/claude-main.png"
          />
          <MainCard
            delay={2}
            label="СОВМЕСТНАЯ РАБОТА"
            title="Claude Cowork"
            desc="Совместная работа с Claude в процессе внедрения. Структурирует задачи, документы и процессы."
            items={[
              'Организация задач и проектов',
              'Документация и регламенты',
              'Совместная работа в реальном времени',
              'Единая система управления проектом',
            ]}
            imgSrc="/images/claude-cowork.png"
          />
        </motion.div>

        {/* ── MIDDLE BLOCK ── */}
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={3}
          className="mt-6"
          style={{
            background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '30px',
            padding: 'clamp(28px, 3vw, 44px)',
            boxShadow: '0 24px 80px rgba(0,0,0,0.35)',
          }}
        >
          <div className="text-center mb-8">
            <h3 className="font-black"
              style={{ fontSize: 'clamp(26px, 3.5vw, 46px)', color: '#FFFFFF', lineHeight: 1.1, letterSpacing: '-0.025em' }}>
              Claude для разработки и визуала
            </h3>
            <p className="mt-3"
              style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', color: '#D8D8D8', lineHeight: 1.4 }}>
              Автоматизация, интерфейсы, сайты, презентации и дизайн-задачи — без программиста и без дизайнера
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <SmallCard
              label="РАЗРАБОТКА"
              title="Claude Code"
              imgSrc="/images/claude-code.png"
              items={[
                'Автоматизация и технические задачи',
                'Интеграции и API',
                'Создание сервисов и MVP',
                'Без программиста и без опыта в коде',
              ]}
            />
            <SmallCard
              label="ВИЗУАЛ"
              title="Claude Design"
              imgSrc="/images/claude-design.png"
              items={[
                'Карусели, сайты, презентации',
                'Работает по вашему фирменному стилю',
                'Любая дизайн-задача без дизайнера',
                'Визуальный стандарт в едином стиле',
              ]}
            />
          </div>

          {/* Result strip */}
          <div
            className="mt-7 text-center"
            style={{
              background: 'linear-gradient(90deg, rgba(255,0,0,0.18), rgba(255,0,0,0.08))',
              border: '1px solid rgba(255,0,0,0.28)',
              borderRadius: '18px',
              padding: '20px 28px',
            }}
          >
            <p className="font-black" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: '#FFFFFF', lineHeight: 1.3 }}>
              Claude закрывает и технические, и визуальные задачи в одной системе
            </p>
          </div>
        </motion.div>

        {/* ── BOTTOM STRIP ── */}
        <motion.div
          initial="hidden" animate={inView ? 'visible' : 'hidden'}
          variants={fadeUp} custom={4}
          className="mt-6 grid grid-cols-1 md:grid-cols-[300px_1fr] gap-6 items-center"
          style={{
            background: 'linear-gradient(180deg, #151515 0%, #101010 100%)',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '28px',
            padding: 'clamp(24px, 2.5vw, 32px) clamp(24px, 3vw, 36px)',
            boxShadow: '0 18px 60px rgba(0,0,0,0.28)',
          }}
        >
          <div>
            <p className="font-black uppercase tracking-widest mb-2"
              style={{ fontSize: '15px', color: '#FF0000', letterSpacing: '0.1em' }}>
              ТАКЖЕ В КУРСЕ
            </p>
            <p className="font-bold" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)', color: '#FFFFFF', lineHeight: 1.3 }}>
              Отдельные Zoom-сессии<br />по каждому инструменту
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            {[
              { name: 'Figma',      icon: '/images/tool-figma.png' },
              { name: 'Canva',      icon: '/images/tool-canva.png' },
              { name: 'Higgsfield', icon: '/images/tool-higgsfield.png' },
              { name: 'Codex',      icon: '/images/tool-codex.png' },
              { name: 'VS Code',    icon: '/images/tool-vscode.png' },
              { name: 'Cursor',     icon: '/images/tool-cursor.png' },
            ].map(t => <Pill key={t.name} name={t.name} icon={t.icon} />)}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
