import './style.css'
import { translations, langLabels } from './i18n.js'

const STORAGE_KEY = 'lang'
let currentLang = localStorage.getItem(STORAGE_KEY) || 'zh'
if (!translations[currentLang]) currentLang = 'zh'

function render(lang) {
  const t = translations[lang]
  document.documentElement.lang = t.htmlLang

  const langOptions = Object.keys(translations)
    .map((code) => `<option value="${code}" ${code === lang ? 'selected' : ''}>${langLabels[code]}</option>`)
    .join('')

  document.querySelector('#app').innerHTML = `
  <header class="site-header">
    <div class="container header-inner">
      <a href="#top" class="brand">
        <svg class="brand-mark" viewBox="0 0 44 40" xmlns="http://www.w3.org/2000/svg">
          <g transform="rotate(-16 18 22)">
            <rect x="4" y="6" width="22" height="30" rx="3.5" fill="#fdfaf3" stroke="#0b3d2e" stroke-width="1.2"/>
            <text x="8.5" y="18" font-size="11" font-weight="700" fill="#141414" font-family="Georgia, serif">A</text>
            <text x="8" y="30" font-size="11" fill="#141414">&#9824;</text>
          </g>
          <g transform="rotate(13 24 20)">
            <rect x="16" y="3" width="22" height="30" rx="3.5" fill="#fdfaf3" stroke="#0b3d2e" stroke-width="1.2"/>
            <text x="20.5" y="15" font-size="11" font-weight="700" fill="#b3272d" font-family="Georgia, serif">K</text>
            <text x="20" y="27" font-size="11" fill="#b3272d">&#9829;</text>
          </g>
        </svg>
        <span class="brand-text">${t.brand}</span>
      </a>
      <nav class="nav">
        <a href="#points">${t.navPoints}</a>
        <a href="#contact">${t.navContact}</a>
      </nav>
      <select id="lang-switcher" class="lang-switcher" aria-label="Language">${langOptions}</select>
      <a href="#contact" class="btn btn-small">${t.navCta}</a>
    </div>
  </header>

  <main>
    <section id="top" class="hero">
      <div class="container hero-inner">
        <p class="eyebrow">${t.heroEyebrow}</p>
        <h1>${t.heroTitleLine1}<br />${t.heroTitleLine2}</h1>
        <p class="hero-sub">${t.heroSub}</p>
        <div class="hero-actions">
          <a href="#contact" class="btn btn-primary">${t.heroCtaPrimary}</a>
          <a href="#points" class="btn btn-ghost">${t.heroCtaGhost}</a>
        </div>
      </div>
    </section>

    <section id="points" class="points">
      <div class="container">
        <h2 class="section-title">${t.pointsTitle}</h2>
        <p class="section-sub">${t.pointsSub}</p>
        <div class="point-grid">
          <article class="point-card">
            <div class="point-icon">🂡</div>
            <h3>${t.point1Title}</h3>
            <p>${t.point1Desc}</p>
          </article>
          <article class="point-card">
            <div class="point-icon">🧮</div>
            <h3>${t.point2Title}</h3>
            <p>${t.point2Desc}</p>
          </article>
          <article class="point-card">
            <div class="point-icon">🎯</div>
            <h3>${t.point3Title}</h3>
            <p>${t.point3Desc}</p>
          </article>
        </div>
      </div>
    </section>

    <section id="contact" class="contact">
      <div class="container contact-inner">
        <div class="contact-copy">
          <h2 class="section-title">${t.contactTitle}</h2>
          <p class="section-sub">${t.contactSub}</p>
          <ul class="contact-notes">
            <li>${t.contactNote1}</li>
            <li>${t.contactNote2}</li>
          </ul>
        </div>
        <form id="lead-form" class="lead-form">
          <label>
            ${t.formName}
            <input type="text" name="name" placeholder="${t.formNamePlaceholder}" required />
          </label>
          <label>
            ${t.formContact}
            <input type="text" name="contact" placeholder="${t.formContactPlaceholder}" required />
          </label>
          <label>
            ${t.formMessage}
            <textarea name="message" rows="4" placeholder="${t.formMessagePlaceholder}"></textarea>
          </label>
          <button type="submit" class="btn btn-primary btn-block">${t.formSubmit}</button>
          <p id="form-status" class="form-status" role="status"></p>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-inner">
      <p>&copy; ${new Date().getFullYear()} ${t.brand}. ${t.footerRights}</p>
      <p class="footer-disclaimer">${t.footerDisclaimer}</p>
    </div>
  </footer>
  `

  document.querySelector('#lead-form').addEventListener('submit', (event) => {
    event.preventDefault()
    document.querySelector('#form-status').textContent = t.formStatus
    event.target.reset()
  })

  document.querySelector('#lang-switcher').addEventListener('change', (event) => {
    currentLang = event.target.value
    localStorage.setItem(STORAGE_KEY, currentLang)
    render(currentLang)
  })
}

render(currentLang)
