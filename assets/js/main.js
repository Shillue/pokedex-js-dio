const pokemonList = document.getElementById("pokemonList");
const loadMoreButton = document.getElementById("loadMoreButton");
const limit = 5;
let offset = 0;

const maxRecords = 151;// Primeira geração


// Função que carrega os itens e insere no HTML
function loadPokemonItens(offset, limit) {

    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
    const newHtml = pokemons.map((pokemon) => `
    <a href="pokemon.html?name=${pokemon.name}">
    <li class="pokemon ${pokemon.type}">
                <span class="number">#${pokemon.number}</span>
                <span class="name">${pokemon.name}</span>

                <div class="detail">
                    <ol class="types">
                        ${pokemon.types
                          .map(
                            (type) => `<li class="type ${type}">${type}</li>`
                          )
                          .join("")}
                    </ol>

                    <img src="${pokemon.photo}"
                        alt="${pokemon.name}">
                </div>
            </li>
            </a>
    `).join('');
    pokemonList.innerHTML += newHtml;
  });
}

//Chamada
loadPokemonItens(offset, limit);

// Paginação
loadMoreButton.addEventListener("click", () => {
    offset += limit

    const qtdRecordsWithNextPage = offset + limit;

    if(qtdRecordsWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        
        // Remover button
        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else {
        loadPokemonItens(offset, limit);
    }
});
