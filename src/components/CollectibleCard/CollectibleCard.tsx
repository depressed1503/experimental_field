import './CollectibleCard.css'



type Perk = {
    value: 1 | 2 | 3
    imageUrl: string
}
type CollectibleCardProps = {
    id: number
    header: string
    type: "vilain" | "hero" | "anti-hero"
    perks: Perk[]
    stats: { name: string; value: number }[]
    description: string
    imageUrl: string
}
export default function CollectibleCard({
    id,
    header,
    type,
    perks,
    stats,
    description,
    imageUrl
}: CollectibleCardProps) {
    return (
        <div className="collectible-card" style={{ backgroundImage: `url(${imageUrl})` }}>
            <div className="collectible-card__top">
                <div className='collectible-card__top__id'>{id}</div>
                <h5 className='collectible-card__top__header'>{header}</h5>
                <div className='collectible-card__top__type'>
                    {type}
                </div>
            </div>
            <div className="collectible-card__bottom">
                <ul className='collectible-card__bottom__perks'>
                    {perks.map((perk, index) => (
                        <li key={index} className={`collectible-card__bottom__perks__item collectible-card__bottom__perks__item--value-${perk.value}`}>
                            <img src={perk.imageUrl} alt={`Perk ${perk.value}`} />
                        </li>
                    ))}
                </ul>
                <ul className='collectible-card__bottom__stats'>
                    {stats.map((stat, index) => (
                        <li key={index} className='collectible-card__bottom__stats__item'>
                            <span className='collectible-card__bottom__stats__item__name'>{stat.name}:</span>
                            <span className='collectible-card__bottom__stats__item__value'>{stat.value}</span>
                        </li>
                    ))}
                </ul>
                <p className="collectible-card__bottom__description">
                    {description}
                </p>
            </div>
        </div>
    )
}