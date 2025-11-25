import { createFileRoute } from '@tanstack/react-router'
import CollapsibleSlideContainer from '../components/CollapsibleSlideContainer'
import "./collapsible.css"
export const Route = createFileRoute('/collapsible')({
    component: Index,
})

function Index() {
    return (
        <div className="collapsible-grid">
            <div className="cell">
                <h4>Up</h4>
                <CollapsibleSlideContainer direction="up">
                    <div className="demo-box">Content UP</div>
                </CollapsibleSlideContainer>
            </div>

            <div className="cell">
                <h4>Down</h4>
                <CollapsibleSlideContainer direction="down">
                    <div className="demo-box">Content DOWN</div>
                </CollapsibleSlideContainer>
            </div>

            <div className="cell">
                <h4>Left</h4>
                <CollapsibleSlideContainer direction="left">
                    <div className="demo-box">Content LEFT</div>
                </CollapsibleSlideContainer>
            </div>

            <div className="cell">
                <h4>Right</h4>
                <CollapsibleSlideContainer direction="right">
                    <div className="demo-box">Content RIGHT</div>
                </CollapsibleSlideContainer>
            </div>
        </div>
    )
}