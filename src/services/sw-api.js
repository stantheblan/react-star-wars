export function getData() {
    return (
        fetch("https://swapi.dev/api/starships/")
            .then((res) => { return res.json();})

            .catch((err) => {return console.log(err)})
            );
}
// export function getData() {
//     const allData = []
//     return (
//         fetch("https://swapi.dev/api/starships/")
//         .then((res) => { 
//             console.log(res.json().next)
//             allData = allData.concat([res.results.json()])
//             return res.results.json();
//         })
//         .then((res) => {
//             while(res.next != null){
//                 fetch(res.next)
//                 .then((res) => { 
//                     // allData = allData.concat([res.results.json()])
//                     // return allData;
//                 })
//             }
//         })
//         .catch((err) => {return console.log(err)})
//     );
// }