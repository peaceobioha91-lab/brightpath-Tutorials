import type { Metadata } from 'next'
import { PageShell } from '../../components/page-shell'

export const metadata: Metadata = {
  title: 'Contact Us',
}

export default function ContactPage() {
  return (
    <PageShell
      title="Contact Us"
      sections={[
        { id: 'faq', title: 'FAQ' },
        { id: 'location', title: 'Location' },
      ]}
    />
  )
}
