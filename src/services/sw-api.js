export function getData(url) {
    return (
        fetch(url)
        .then((res) => { return res.json();})
        .catch((err) => {return console.log(err)})
    );
}

//==========================================================
// attempting to use the api to manipulate the api

// didnt work


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