export default function StarshipCard(ships) {
    return (
        <div className="starshipCard">
            <a href={ships.url}><h2>{ships.name}</h2></a>
        </div>
    )
}