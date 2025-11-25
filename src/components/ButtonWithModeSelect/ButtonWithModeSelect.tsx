import { useState } from "react"
import { Mail, Download, ChevronDown } from "lucide-react"
import "./ButtonWithModeSelect.css"
import type { JSX } from "react"

type Mode = "mail" | "download"

const MODE_OPTIONS: { value: Mode; label: string; icon: JSX.Element }[] = [
    { value: "mail", label: "Отправить на почту", icon: <Mail size={16} /> },
    { value: "download", label: "Скачать", icon: <Download size={16} /> }
]

export default function ButtonWithModeSelect() {
    const [open, setOpen] = useState(false)
    const [mode, setMode] = useState<Mode>("mail")

    const current = MODE_OPTIONS.find(m => m.value === mode)!

    return (
        <div className="mode-button">
            <button className="mode-button__main">
                {current.label}
            </button>

            <button className="mode-button__current" onClick={() => setOpen(!open)}>
                {current.icon}
                <ChevronDown size={14} className={`chevron ${open ? "open" : ""}`} />
            </button>

            {open && (
                <div className="mode-button__dropdown">
                    {MODE_OPTIONS.map(opt => (
                        <div
                            key={opt.value}
                            className="mode-button__dropdown-item"
                            onClick={() => {
                                setMode(opt.value)
                                setOpen(false)
                            }}
                        >
                            <span className="icon">{opt.icon}</span>
                            {opt.label}
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}
