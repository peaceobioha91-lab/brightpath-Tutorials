export type PageSection = {
  id: string
  title: string
}

type PageShellProps = {
  title: string
  eyebrow?: string
  sections: PageSection[]
}

export function PageShell({ title, eyebrow = 'BrightPath Tutorials', sections }: PageShellProps) {
  return (
    <main className="site-main" id="main-content" tabIndex={-1}>
      <div className="page-container">
        <header className="page-heading">
          <p className="page-heading__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <span className="page-heading__accent" aria-hidden="true" />
        </header>

        <div className="page-section-list">
          {sections.map((section, index) => (
            <section
              className="page-section"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <div className="page-section__heading">
                <span className="page-section__index" aria-hidden="true">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <h2 id={`${section.id}-heading`}>{section.title}</h2>
              </div>
              <div className="page-section__placeholder" aria-hidden="true" />
            </section>
          ))}
        </div>
      </div>
    </main>
  )
}
