import type { Metadata } from 'next'
import { PageShell } from '../../components/page-shell'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return (
    <PageShell
      title="About Us"
      sections={[{ id: 'teachers', title: 'Teachers' }]}
    />
  )
}
