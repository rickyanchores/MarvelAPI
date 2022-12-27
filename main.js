let result = document.querySelector(".result")


async function getData(){
    let url ="http(s)://gateway.marvel.com/"
    const API_KEY = "69af5f3159ff0070dad5481146157688"

    fetch(url)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch((err) => {
            console.log("Error", err)
        })
}

getData()