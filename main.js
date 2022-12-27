let result = document.querySelector(".result")



const API_KEY = "69af5f3159ff0070dad5481146157688";

async function getCharacters() {
  const response = await fetch(`https://gateway.marvel.com/v1/public/characters?apikey=${API_KEY}`);
  const data = await response.json()
  console.log(data)


  let num = "2"
  const name = `${data.data.results[num].name}`
  const image = `${data.data.results[num].thumbnail.path}.${data.data.results[num].thumbnail.extension}`

  result.innerHTML = `<p>${name}</p>
                      <img src="${image}"/>` 
}

getCharacters()
