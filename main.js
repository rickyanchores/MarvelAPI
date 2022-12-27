let result = document.querySelector(".result")



const API_KEY = "69af5f3159ff0070dad5481146157688";

async function getCharacters() {
  const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`);
  const data = await response.json()
  console.log(data)

  const image = `${data.data.results[7].thumbnail.path}.${data.data.results[7].thumbnail.extension}`

  result.innerHTML = `<p>hero name: ${data.data.results[7].name}</p>
                      <img src="${image}"/>` 
}

getCharacters()
