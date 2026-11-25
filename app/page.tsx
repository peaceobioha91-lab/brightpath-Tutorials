import type { Metadata } from 'next'
import { PageShell } from '../components/page-shell'

export const metadata: Metadata = {
  title: 'BrightPath Tutorials',
}

export default function HomePage() {
  return (
    <PageShell
      eyebrow="Home"
      title="BrightPath Tutorials"
      sections={[{ id: 'past-results', title: 'Past Results' }]}
    />
  )
}
