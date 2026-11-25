import type { Metadata } from 'next'
import { PageShell } from '../../components/page-shell'

export const metadata: Metadata = {
  title: 'Timetable',
}

export default function TimetablePage() {
  return (
    <PageShell
      title="Timetable"
      sections={[{ id: 'weekly-timetable', title: 'Weekly timetable' }]}
    />
  )
}
