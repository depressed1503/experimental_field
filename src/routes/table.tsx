import { createFileRoute } from '@tanstack/react-router'
import AnalyticsTable from '../components/AnalyticsTable'

export const Route = createFileRoute('/table')({
    component: Index,
})

function Index() {
    return (
        <AnalyticsTable />
    )
}