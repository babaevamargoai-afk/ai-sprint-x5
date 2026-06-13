import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const navLinks = [
  { label: 'Программа', href: '#program' },
  { label: 'Тарифы', href: '#tariffs' },
  { label: 'Об авторе', href: '#expert' },
  { label: 'Вопросы', href: '#faq' },
]

export default function Footer() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <>
      {/* Contact CTA block */}
      <section id="contact" style={{ background: '#F7F7F8', padding: '80px 0' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row items-center justify-between gap-8"
            style={{
              padding: 'clamp(28px, 4vw, 48px) clamp(24px, 4vw, 56px)',
              borderRadius: '28px',
              background: '#111111',
              boxShadow: '0 24px 80px rgba(17,17,17,0.18)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Red glow */}
            <div className="absolute pointer-events-none" style={{
              width: '500px', height: '500px', borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(255,0,0,0.1) 0%, transparent 65%)',
              right: '-100px', top: '-150px',
            }} />

            <div className="relative z-10">
              <p className="font-black uppercase tracking-widest mb-3" style={{ fontSize: '13px', color: '#FF0000', letterSpacing: '0.1em' }}>
                ОСТАЛИСЬ ВОПРОСЫ?
              </p>
              <h3 className="font-black" style={{ fontSize: 'clamp(26px, 2.5vw, 38px)', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
                Свяжитесь с нами
              </h3>
              <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.5)', marginTop: '8px', lineHeight: 1.5 }}>
                Ответим на любой вопрос и поможем выбрать подходящий тариф
              </p>
            </div>

            <a
              href="https://t.me/aitouchrobots"
              className="flex-shrink-0 inline-flex items-center justify-between font-black text-white transition-all duration-200 hover:scale-[1.02] relative z-10"
              style={{
                height: '72px', minWidth: '280px',
                background: '#FF0000',
                borderRadius: '20px',
                fontSize: '20px',
                padding: '0 28px',
                boxShadow: '0 16px 40px rgba(255,0,0,0.3)',
                textDecoration: 'none',
                letterSpacing: '0.02em',
                gap: '16px',
              }}
            >
              <span>Написать нам</span>
              <span className="flex items-center justify-center rounded-full"
                style={{ width: '42px', height: '42px', background: 'rgba(255,255,255,0.18)', border: '1.5px solid rgba(255,255,255,0.3)' }}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3 9h12M9.5 4l5 5-5 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ background: '#0A0A0A', padding: '60px 0 40px' }}>
        <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 clamp(20px, 4vw, 48px)' }}>

          {/* Top row */}
          <div className="flex flex-col sm:flex-row items-start justify-between gap-10 pb-10"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>

            {/* Brand */}
            <div>
              <p className="font-black uppercase" style={{ fontSize: '26px', color: '#FFFFFF', letterSpacing: '-0.02em' }}>
                AI SPRINT <span style={{ color: '#FF0000' }}>X5</span>
              </p>
              <p style={{ fontSize: '17px', color: 'rgba(255,255,255,0.4)', marginTop: '8px', maxWidth: '320px', lineHeight: 1.5 }}>
                Онлайн-курс по внедрению ИИ в маркетинг, продажи и автоматизацию
              </p>
              <div className="flex gap-2 mt-5 flex-wrap">
                {[
                  { label: 'Старт: 15 июня' },
                  { label: 'Продолжительность: 2 месяца' },
                ].map(p => (
                  <span key={p.label} className="flex items-center gap-1.5 font-medium"
                    style={{ fontSize: '14px', color: 'rgba(255,255,255,0.45)', padding: '6px 12px', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.08)' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#FF0000', display: 'inline-block' }} />
                    {p.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Nav */}
            <div>
              <p className="font-black uppercase tracking-widest mb-4" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                НАВИГАЦИЯ
              </p>
              <nav className="flex flex-col gap-3">
                {navLinks.map(l => (
                  <a key={l.label} href={l.href}
                    className="font-semibold transition-colors duration-200"
                    style={{ fontSize: '18px', color: 'rgba(255,255,255,0.6)', textDecoration: 'none' }}
                    onMouseEnter={e => e.target.style.color = '#FFFFFF'}
                    onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  >
                    {l.label}
                  </a>
                ))}
              </nav>
            </div>

            {/* CTA small */}
            <div>
              <p className="font-black uppercase tracking-widest mb-4" style={{ fontSize: '12px', color: 'rgba(255,255,255,0.3)', letterSpacing: '0.1em' }}>
                ЗАПИСАТЬСЯ
              </p>
              <a href="#tariffs"
                className="inline-flex items-center gap-3 font-black text-white transition-all duration-200 hover:scale-[1.02]"
                style={{ height: '56px', padding: '0 24px', background: '#FF0000', borderRadius: '14px', fontSize: '17px', textDecoration: 'none', boxShadow: '0 8px 24px rgba(255,0,0,0.25)' }}>
                Выбрать тариф →
              </a>
            </div>
          </div>

          {/* Bottom row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8">
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.25)' }}>
              © 2026 AI Sprint X5. Все права защищены.
            </p>
            <div className="flex gap-6">
              {[
                { label: 'Политика конфиденциальности', href: '#' },
                { label: 'Политика обработки персональных данных', href: 'https://gamzatovruslan.getcourse.ru/cms/system/legal' },
                { label: 'Договор оферты', href: 'https://gamzatovruslan.ru/oferta-sprint' },
              ].map(l => (
                <a key={l.label} href={l.href} target={l.href !== '#' ? '_blank' : undefined} rel="noopener noreferrer"
                  style={{ fontSize: '15px', color: 'rgba(255,255,255,0.3)', textDecoration: 'none' }}
                  onMouseEnter={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
                  onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.3)'}
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}
