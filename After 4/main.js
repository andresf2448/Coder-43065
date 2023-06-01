const getCharacters = async () => {
  try {
    const response = await axios("https://rickandmortyapi.com/api/character");
    const data = response.data.results;

    let resultados = data.filter(item => item.status === "Alive")

    resultados.forEach((character) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Genero: ${character.gender}</h2>
        <p>Nombre: ${character.name}</p>
        <p>Status: ${character.status}</p>
        <img src="${character.image}" />
        <hr />
      `;

      document.body.append(div);
    });
  } catch (error) {
    console.log(error);
  }
};

getCharacters();


//APIS PUBLICAS
// https://github.com/public-apis/public-apis 