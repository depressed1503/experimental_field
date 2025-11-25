import { useState, type ReactNode } from "react"
import "./CollapsibleSlideContainer.css"
import { ChevronDown, ChevronUp, ChevronLeft, ChevronRight } from "lucide-react"

type Direction = "up" | "right" | "down" | "left"

type CollapsibleSlideContainerProps = {
    direction: Direction
    children: ReactNode
}

export default function CollapsibleSlideContainer({
    direction,
    children
}: CollapsibleSlideContainerProps) {
    const [open, setOpen] = useState(false)

    const icon = (() => {
        if (direction === "up") return open ? <ChevronUp /> : <ChevronDown />
        if (direction === "down") return open ? <ChevronDown /> : <ChevronUp />
        if (direction === "left") return open ? <ChevronLeft /> : <ChevronRight />
        return open ? <ChevronRight /> : <ChevronLeft />
    })()

    return (
        <div className={`collapsible-slide-container__wrapper dir-${direction}`}>
            <div className={`collapsible-slide-container collapsible-slide-container--${direction} ${open ? "expanded" : ""}`}>
                <div className="collapsible-slide-container__content">
                    {children}
                </div>
            </div>

            <div className="border"></div>

            <div className="button" onClick={() => setOpen(!open)}>
                {icon}
            </div>
        </div>
    )
}
