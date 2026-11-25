import type { Metadata } from 'next'
import { PageShell } from '../../components/page-shell'

export const metadata: Metadata = {
  title: 'Fees and Registration',
}

export default function FeesRegistrationPage() {
  return (
    <PageShell
      title="Fees and Registration"
      sections={[
        { id: 'fees', title: 'Fees' },
        { id: 'how-it-works', title: 'How it works' },
      ]}
    />
  )
}
