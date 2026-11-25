import Link from 'next/link'
import { siteNavigationLinks } from './site-navigation-links'

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__brand" href="/" aria-label="BrightPath Tutorials home">
          <span className="site-footer__brand-mark" aria-hidden="true">
            B
          </span>
          <span>BrightPath Tutorials</span>
        </Link>

        <nav aria-label="Footer navigation">
          <ul className="site-footer__nav-list">
            {siteNavigationLinks.map((item) => (
              <li key={item.href}>
                <Link className="site-footer__link" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <div className="site-footer__bottom">
        <p>BrightPath Tutorials</p>
      </div>
    </footer>
  )
}
