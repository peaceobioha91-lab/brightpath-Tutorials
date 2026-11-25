'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useRef, useState, type KeyboardEvent } from 'react'
import { siteNavigationLinks } from './site-navigation-links'

export function SiteHeader() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  function handleHeaderKeyDown(event: KeyboardEvent<HTMLElement>) {
    if (event.key === 'Escape' && isMenuOpen) {
      setIsMenuOpen(false)
      menuButtonRef.current?.focus()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleHeaderKeyDown}>
      <div className="site-header__inner">
        <Link className="site-brand" href="/" aria-label="BrightPath Tutorials home">
          <span className="site-brand__mark" aria-hidden="true">
            B
          </span>
          <span>BrightPath Tutorials</span>
        </Link>

        <button
          ref={menuButtonRef}
          className="menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="menu-toggle__icon" aria-hidden="true">
            <span />
            <span />
            <span />
          </span>
          <span>{isMenuOpen ? 'Close' : 'Menu'}</span>
        </button>

        <nav
          id="primary-navigation"
          className={`site-nav${isMenuOpen ? ' is-open' : ''}`}
          aria-label="Primary navigation"
        >
          <ul className="site-nav__list">
            {siteNavigationLinks.map((item) => {
              const isCurrentPage = pathname === item.href

              return (
                <li key={item.href}>
                  <Link
                    className="site-nav__link"
                    href={item.href}
                    aria-current={isCurrentPage ? 'page' : undefined}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
