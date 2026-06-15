import { useEffect, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

/* ── Контент попапов для каждого тарифа ─────────────────────
   Вставь свой код внутрь каждого компонента              */

function useGCScript(id, src) {
  const containerRef = useRef(null)
  useEffect(() => {
    if (!containerRef.current) return
    const old = document.getElementById(id)
    if (old) old.remove()
    const script = document.createElement('script')
    script.id = id
    script.src = src
    script.async = true
    containerRef.current.appendChild(script)
    return () => { const s = document.getElementById(id); if (s) s.remove() }
  }, [id, src])
  return containerRef
}

function ModalStandart() {
  const ref = useGCScript(
    '6bd7ee1e40832a60318ae042cf37560ee2fc2f64',
    'https://gamzatovruslan.ru/pl/lite/widget/script?id=1617119'
  )
  return (
    <div>
      <h3 className="font-black" style={{ fontSize: '26px', color: '#111111', letterSpacing: '-0.02em', marginBottom: '20px' }}>
        Тариф Стандарт — 60 000 ₽
      </h3>
      <div ref={ref} />
    </div>
  )
}

function ModalBusiness() {
  const ref = useGCScript(
    '161dd88baee242c0bc52b8f56c0c80abad6d51f9',
    'https://gamzatovruslan.ru/pl/lite/widget/script?id=1617120'
  )
  return (
    <div>
      <h3 className="font-black" style={{ fontSize: '26px', color: '#111111', letterSpacing: '-0.02em', marginBottom: '20px' }}>
        Тариф Бизнес — 120 000 ₽
      </h3>
      <div ref={ref} />
    </div>
  )
}

function ModalMaster() {
  const ref = useGCScript(
    '0f318c170f128ecce39276e2e80c78fba205d870',
    'https://gamzatovruslan.ru/pl/lite/widget/script?id=1617171'
  )
  return (
    <div>
      <h3 className="font-black" style={{ fontSize: '26px', color: '#111111', letterSpacing: '-0.02em', marginBottom: '20px' }}>
        Мастер-группа — 500 000 ₽
      </h3>
      <div ref={ref} />
    </div>
  )
}

// Фабрика — каждый раз создаёт свежий экземпляр компонента
const modalComponents = {
  'Стандарт':      ModalStandart,
  'Бизнес':        ModalBusiness,
  'Мастер-группа': ModalMaster,
}

const tariffs = [
  {
    name: 'Стандарт',
    price: '60 000',
    oldPrice: '48 000',
    access: '5 месяцев',
    for: 'Специалисты и новички с целью освоения новой профессии',
    features: [
      'Куратор в общем чате',
      'Все разборы и еженедельные созвоны группы',
      'Самостоятельная работа + групповая поддержка',
      'Доступ ко всем материалам курса',
      'Шаблоны и инструменты',
    ],
    link: 'https://gamzatovruslan.ru/AISprintX5-1',
    variant: 'light',
  },
  {
    name: 'Бизнес',
    price: '120 000',
    oldPrice: '96 000',
    access: '7 месяцев',
    for: 'Предприниматели и руководители, внедряющие ИИ в проект',
    features: [
      'Мини-группа 6–10 человек',
      'Помощь в разработке архитектуры ИИ под проект',
      'Возможность добавить 1 сотрудника (1+1)',
      'Персональная работа + индивидуальные рекомендации',
      'Приоритетная поддержка куратора',
    ],
    link: 'https://gamzatovruslan.ru/AISprintX5-2',
    variant: 'dark',
    badge: 'ПОПУЛЯРНЫЙ',
  },
  {
    name: 'Мастер-группа',
    price: '500 000',
    oldPrice: '1 500 000',
    access: '7 месяцев',
    for: 'Те, кто хочет максимального погружения и личной работы с экспертом',
    features: [
      'Полное персональное сопровождение',
      'Индивидуальный план внедрения ИИ',
      'Включение всей команды в обучение',
      'Приоритетные ответы и закрытые материалы',
      'Глубокая работа лично с куратором',
    ],
    link: 'https://gamzatovruslan.ru/AISprintX5-3',
    variant: 'light',
  },
]

function CheckRed() {
  return (
    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full" style={{ background: 'rgba(255,0,0,0.1)' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2 2 4-4" stroke="#FF0000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

function CheckWhite() {
  return (
    <span className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full" style={{ background: 'rgba(255,255,255,0.12)' }}>
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
        <path d="M2 5l2 2 4-4" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </span>
  )
}

export default function Tariffs() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section id="tariffs" style={{ background: '#FFFFFF', padding: 'clamp(60px, 8vw, 120px) 0 60px' }}>
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-6"
        >
          <p className="font-black uppercase tracking-widest mb-4" style={{ color: '#FF0000', fontSize: '17px', letterSpacing: '0.08em' }}>
            ТАРИФЫ
          </p>
          <h2 className="font-black" style={{ fontSize: 'clamp(40px, 5vw, 68px)', color: '#111111', lineHeight: 1.0, letterSpacing: '-0.03em' }}>
            Все тарифы получают{' '}
            <span style={{ color: '#FF0000' }}>одинаковый доступ</span>
          </h2>
          <p className="mx-auto mt-6" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', color: '#111111', lineHeight: 1.4, maxWidth: '640px', fontWeight: 500 }}>
            Разница — в уровне взаимодействия с Русланом, экспертами и командой
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14" style={{ alignItems: 'start' }}>
          {tariffs.map((t, i) => {
            const dark = t.variant === 'dark'
            return (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 36 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="flex flex-col"
                style={{
                  borderRadius: '28px',
                  background: dark ? 'linear-gradient(160deg, #0e0e0e, #161616)' : '#FFFFFF',
                  border: dark ? '1.5px solid rgba(255,0,0,0.3)' : '1px solid #ECECEC',
                  boxShadow: dark
                    ? '0 28px 80px rgba(17,17,17,0.22), 0 0 0 1px rgba(255,0,0,0.12)'
                    : '0 16px 60px rgba(17,17,17,0.07)',
                  transform: dark ? 'translateY(-12px)' : 'none', '@media(maxWidth: 768px)': { transform: 'none' },
                  overflow: 'hidden',
                }}
              >
                {/* Badge */}
                {t.badge && (
                  <div
                    className="text-center font-black uppercase tracking-widest py-2.5"
                    style={{ fontSize: '13px', letterSpacing: '0.1em', background: '#FF0000', color: '#FFFFFF' }}
                  >
                    {t.badge}
                  </div>
                )}

                <div className="p-9 flex flex-col flex-1">
                  {/* Name */}
                  <p
                    className="font-black uppercase tracking-widest mb-5"
                    style={{ fontSize: '14px', letterSpacing: '0.1em', color: '#FF0000' }}
                  >
                    {t.name}
                  </p>

                  {/* Price */}
                  <div className="mb-2">
                    <div className="flex items-baseline gap-3">
                      <span className="font-black" style={{ fontSize: 'clamp(38px, 3.5vw, 52px)', color: dark ? '#FFFFFF' : '#111111', letterSpacing: '-0.03em', lineHeight: 1 }}>
                        {t.price} ₽
                      </span>
                    </div>
                  </div>

                  {/* Access */}
                  <div
                    className="flex items-center gap-2 mb-6 mt-2 px-4 py-2.5 rounded-xl"
                    style={{
                      background: dark ? 'rgba(255,255,255,0.06)' : 'rgba(255,0,0,0.05)',
                      border: dark ? '1px solid rgba(255,255,255,0.08)' : '1px solid rgba(255,0,0,0.1)',
                      width: 'fit-content',
                    }}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                      <circle cx="8" cy="8" r="6.5" stroke="#FF0000" strokeWidth="1.5"/>
                      <path d="M8 5v4l2.5 2" stroke="#FF0000" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                    <span className="font-bold" style={{ fontSize: '15px', color: dark ? 'rgba(255,255,255,0.7)' : '#555555' }}>
                      Доступ {t.access}
                    </span>
                  </div>

                  {/* For whom */}
                  <p style={{ fontSize: '17px', color: dark ? 'rgba(255,255,255,0.55)' : '#555555', lineHeight: 1.5, marginBottom: '24px' }}>
                    {t.for}
                  </p>

                  {/* Divider */}
                  <div style={{ height: '1px', background: dark ? 'rgba(255,255,255,0.07)' : '#F0F0F0', marginBottom: '20px' }} />

                  {/* Features */}
                  <ul className="flex flex-col gap-3 flex-1">
                    {t.features.map(f => (
                      <li key={f} className="flex items-start gap-3">
                        {dark ? <CheckWhite /> : <CheckRed />}
                        <span style={{ fontSize: '17px', color: dark ? 'rgba(255,255,255,0.8)' : '#111111', lineHeight: 1.4 }}>
                          {f}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={t.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 flex items-center justify-between font-black text-white transition-all duration-200 hover:scale-[1.02]"
                    style={{
                      height: '68px',
                      background: '#FF0000',
                      borderRadius: '18px',
                      fontSize: '18px',
                      padding: '0 24px',
                      boxShadow: '0 12px 32px rgba(255,0,0,0.25)',
                      textDecoration: 'none',
                      letterSpacing: '0.02em',
                    }}
                  >
                    <span>Перейти к оплате</span>
                    <span
                      className="flex items-center justify-center rounded-full"
                      style={{ width: '40px', height: '40px', background: 'rgba(255,255,255,0.2)', border: '1.5px solid rgba(255,255,255,0.3)' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </a>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Payment block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {/* Payment options */}
          <div
            style={{
              padding: '36px 40px',
              borderRadius: '24px',
              background: '#F7F7F8',
              border: '1px solid #ECECEC',
            }}
          >
            <p className="font-black uppercase tracking-widest mb-4" style={{ fontSize: '13px', color: '#FF0000', letterSpacing: '0.1em' }}>
              ОПЛАТА
            </p>
            <h3 className="font-black mb-4" style={{ fontSize: 'clamp(22px, 2vw, 28px)', color: '#111111', letterSpacing: '-0.02em' }}>
              Удобная оплата для любой страны
            </h3>
            <div className="flex flex-col gap-3 mb-5">
              {[
                { icon: '💳', label: 'Рассрочка — банки РФ, РБ, КЗ' },
                { icon: '₿', label: 'Оплата в USDT' },
              ].map(item => (
                <div key={item.label} className="flex items-center gap-3 px-4 py-3 rounded-xl" style={{ background: '#FFFFFF', border: '1px solid #E8E8E8' }}>
                  <span style={{ fontSize: '20px' }}>{item.icon}</span>
                  <span className="font-semibold" style={{ fontSize: '18px', color: '#111111' }}>{item.label}</span>
                </div>
              ))}
            </div>
            <p style={{ fontSize: '17px', color: '#555555', lineHeight: 1.5 }}>
              Если возникли сложности или предпочитаете другой вариант — у нас есть решение
            </p>
          </div>

          {/* Contact */}
          <div
            style={{
              padding: '36px 40px',
              borderRadius: '24px',
              background: '#111111',
              border: '1px solid rgba(255,255,255,0.07)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <p className="font-black uppercase tracking-widest mb-4" style={{ fontSize: '13px', color: '#FF0000', letterSpacing: '0.1em' }}>
                ВОПРОСЫ ПО ОПЛАТЕ
              </p>
              <h3 className="font-black mb-4" style={{ fontSize: 'clamp(22px, 2vw, 28px)', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                Остались вопросы по оплате?
              </h3>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.5)', lineHeight: 1.5 }}>
                Свяжитесь с нами — ответим на любой вопрос и поможем выбрать подходящий тариф
              </p>
            </div>
            <a
              href="#contact"
              className="mt-8 flex items-center justify-between font-black text-white transition-all duration-200 hover:scale-[1.02]"
              style={{
                height: '64px',
                background: '#FF0000',
                borderRadius: '16px',
                fontSize: '18px',
                padding: '0 24px',
                boxShadow: '0 12px 32px rgba(255,0,0,0.25)',
                textDecoration: 'none',
              }}
            >
              <span>Связаться с нами</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M3 9h12M9.5 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
