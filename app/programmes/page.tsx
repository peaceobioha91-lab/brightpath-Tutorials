import type { Metadata } from 'next'
import { PageShell } from '../../components/page-shell'

export const metadata: Metadata = {
  title: 'Programmes',
}

export default function ProgrammesPage() {
  return (
    <PageShell
      title="Programmes"
      sections={[
        { id: 'waec', title: 'WAEC' },
        { id: 'jamb', title: 'JAMB' },
        { id: 'post-utme', title: 'Post-UTME' },
      ]}
    />
  )
}
