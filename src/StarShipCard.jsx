export default function StarshipCard(props) {
    let ships = props;
    // console.log(ships[1])
    return (
        <div className="starshipCard">
            <p>{ships.name}</p>
        </div>
    )
}