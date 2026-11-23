import { useEffect, useRef, useState } from 'react'
import { CONFIG, CONTENT, type Lang } from './content'
import './App.css'

const STORAGE_KEY = 'gpscamera.lang'

function initialLang(): Lang {
  try {
    const query = new URLSearchParams(window.location.search).get('lang')
    if (query === 'en' || query === 'vi') return query
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'en' || saved === 'vi') return saved
  } catch {
    // localStorage có thể bị chặn; dùng ngôn ngữ trình duyệt.
  }
  return navigator.language.toLowerCase().startsWith('vi') ? 'vi' : 'en'
}

function formatDate(iso: string, lang: Lang) {
  return new Date(`${iso}T00:00:00`).toLocaleDateString(lang === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

/** Thanh tiến độ đọc + mục đang xem cho mục lục. */
function useScrollState(ids: string[]) {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(ids[0])
  const idsKey = ids.join(',')

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      const max = document.documentElement.scrollHeight - window.innerHeight
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0)
      let current = idsKey.split(',')[0]
      for (const id of idsKey.split(',')) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= 140) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [idsKey])

  return { progress, active }
}

/** Hiện dần phần tử khi cuộn tới. */
function useReveal(dep: unknown) {
  const root = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const nodes = root.current?.querySelectorAll<HTMLElement>('[data-reveal]') ?? []
    if (!('IntersectionObserver' in window)) {
      nodes.forEach((n) => n.classList.add('in'))
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [dep])
  return root
}

function FloatNav({
  sections,
  active,
  label,
  topLabel,
}: {
  sections: { id: string; title: string }[]
  active: string
  label: string
  topLabel: string
}) {
  const [open, setOpen] = useState(false)
  const [showUp, setShowUp] = useState(false)

  useEffect(() => {
    const onScroll = () => setShowUp(window.scrollY > 500)
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <>
      {open && <div className="fab-scrim" onClick={() => setOpen(false)} aria-hidden="true" />}
      <div className={`fab ${open ? 'open' : ''}`}>
        {open && (
          <ul className="fab-menu" id="fab-menu">
            {sections.map((s, i) => (
              <li key={s.id} style={{ '--i': i } as React.CSSProperties}>
                <a
                  href={`#${s.id}`}
                  className={active === s.id ? 'cur' : ''}
                  onClick={() => setOpen(false)}
                >
                  <b>{String(i + 1).padStart(2, '0')}</b>
                  {s.title}
                </a>
              </li>
            ))}
          </ul>
        )}
        <button
          type="button"
          className={`fab-btn fab-up ${showUp && !open ? 'show' : ''}`}
          aria-label={topLabel}
          tabIndex={showUp && !open ? 0 : -1}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M12 19V5m-6 6 6-6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          className="fab-btn"
          aria-label={label}
          aria-expanded={open}
          aria-controls="fab-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" width="26" height="26" aria-hidden="true">
            <path d={open ? 'M6 6l12 12M18 6 6 18' : 'M4 7h16M4 12h16M4 17h10'} />
          </svg>
        </button>
      </div>
    </>
  )
}

const ICONS = ['M12 3 4 6v6c0 4.5 3.2 7.7 8 9 4.8-1.3 8-4.5 8-9V6l-8-3Z', 'M4 7h4l2-2h4l2 2h4v12H4V7Zm8 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z', 'M12 21s7-6.2 7-11a7 7 0 1 0-14 0c0 4.8 7 11 7 11Zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z', 'M4 5h16v11H8l-4 3V5Z', 'M5 12l4.5 4.5L19 7']

export default function App() {
  const [lang, setLang] = useState<Lang>(initialLang)
  const t = CONTENT[lang]
  const { progress, active } = useScrollState(t.sections.map((s) => s.id))
  const rootRef = useReveal(lang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = `${t.title} · ${CONFIG.appName}`
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // bỏ qua
    }
  }, [lang, t.title])

  return (
    <div ref={rootRef} className="page">
      <div className="progress" style={{ transform: `scaleX(${progress})` }} aria-hidden="true" />
      <div className="bg" aria-hidden="true">
        <i className="blob b1" />
        <i className="blob b2" />
        <i className="blob b3" />
        <i className="pin p1" />
        <i className="pin p2" />
        <i className="pin p3" />
        <i className="pin p4" />
      </div>

      <a className="skip" href="#main">
        {t.skip}
      </a>

      <header className="topbar">
        <div className="wrap topbar-in">
          <a className="brand" href="#top" aria-label={CONFIG.appName}>
            <img src="/favicon.png" alt="" width="32" height="32" />
            <span>{CONFIG.appName}</span>
          </a>
          <div className="lang" role="group" aria-label={t.langLabel}>
            <span className={`thumb ${lang}`} aria-hidden="true" />
            {(['en', 'vi'] as const).map((code) => (
              <button
                key={code}
                type="button"
                className={code === lang ? 'on' : ''}
                aria-pressed={code === lang}
                lang={code}
                onClick={() => setLang(code)}
              >
                {code === 'en' ? 'English' : 'Tiếng Việt'}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main id="main" className="wrap" key={lang}>
        <section className="hero" id="top">
          <div className="icon-wrap" aria-hidden="true">
            <span className="ring r1" />
            <span className="ring r2" />
            <span className="spin" />
            <img className="app-icon" src="/app-icon.png" alt="" width="132" height="132" />
          </div>
          <p className="tagline rise" style={{ '--d': '120ms' } as React.CSSProperties}>
            {t.tagline}
          </p>
          <h1 className="rise" style={{ '--d': '220ms' } as React.CSSProperties}>
            <span className="shine">{t.title}</span>
          </h1>
          <p className="updated rise" style={{ '--d': '320ms' } as React.CSSProperties}>
            {t.updatedLabel}:{' '}
            <time dateTime={CONFIG.lastUpdated}>{formatDate(CONFIG.lastUpdated, lang)}</time>
          </p>
        </section>

        <aside className="summary" aria-labelledby="summary-title">
          <h2 id="summary-title" data-reveal>
            {t.summaryTitle}
          </h2>
          <ul>
            {t.summary.map((line, i) => (
              <li key={line} data-reveal style={{ '--d': `${i * 90}ms` } as React.CSSProperties}>
                <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
                  <path d={ICONS[i % ICONS.length]} />
                </svg>
                <span>{line}</span>
              </li>
            ))}
          </ul>
        </aside>

        <div className="layout">
          <nav className="toc" aria-label={t.tocTitle}>
            <h2>{t.tocTitle}</h2>
            <ol>
              {t.sections.map((s, i) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className={active === s.id ? 'cur' : ''}>
                    <b>{String(i + 1).padStart(2, '0')}</b>
                    {s.title}
                  </a>
                </li>
              ))}
            </ol>
          </nav>

          <article className="policy">
            {t.sections.map((s, i) => (
              <section key={s.id} id={s.id} data-reveal>
                <h2>
                  <span className="num">{String(i + 1).padStart(2, '0')}</span>
                  {s.title}
                </h2>
                {s.paragraphs?.map((p) => <p key={p}>{p}</p>)}
                {s.items && (
                  <ul>
                    {s.items.map(([name, text]) => (
                      <li key={name}>
                        <strong>{name}</strong>
                        <span>{text}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.id === 'contact' && (
                  <div className="contacts">
                    <a className="chip" href={`mailto:${CONFIG.contactEmail}`}>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M3 6h18v12H3V6Zm0 0 9 7 9-7" />
                      </svg>
                      {CONFIG.contactEmail}
                    </a>
                    <a className="chip" href={`tel:${CONFIG.contactPhone}`}>
                      <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
                        <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2Z" />
                      </svg>
                      {CONFIG.contactPhone}
                    </a>
                  </div>
                )}
              </section>
            ))}
          </article>
        </div>
      </main>

      <FloatNav sections={t.sections} active={active} label={t.tocTitle} topLabel={t.topLabel} />

      <footer className="foot">
        <div className="wrap">
          © {new Date().getFullYear()} {CONFIG.appName}. {t.footer}
        </div>
      </footer>
    </div>
  )
}
