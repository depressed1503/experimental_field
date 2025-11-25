import { ChartArea, Eye, Funnel, Send } from "lucide-react"
import "./AnalyticsTable.css"
import { useState } from "react"

export default function AnalyticsTable() {
    const [openFilters, setOpenFilters] = useState(false)
    return (
        <div className="container">
            <div className="settings">
                <div className="btn columns">
                    <Eye />
                    Столбцы
                </div>
                <div className="btn filters" onClick={() => setOpenFilters(!openFilters)}>
                    <Funnel />
                </div>
                <div className="btn export" style={{ marginLeft: "auto" }}></div>
                <div className="btn analyze">
                    <ChartArea />
                    Анализировать
                </div>
                <div className="btn mail">
                    <Send />
                    Рассылка
                </div>
            </div>
            <div className={"filters__block" + (openFilters ? " open" : "")}>
                <div className="filter__unit">Фильтр 1</div>
                <div className="filter__unit">Фильтр 2</div>
                <div className="filter__unit">Фильтр 3</div>
                <div className="filter__unit">Фильтр 4</div>
            </div>
            <table>
                <thead></thead>
                <tbody></tbody>
            </table>
        </div>
    )
}