import { createFileRoute } from '@tanstack/react-router'
import "./collapsible.css"
import ButtonWithModeSelect from '../components/ButtonWithModeSelect/ButtonWithModeSelect'
export const Route = createFileRoute('/button_with_mode_select')({
    component: Index,
})

function Index() {
    return (
        <>
            <ButtonWithModeSelect />
        </>
    )
}