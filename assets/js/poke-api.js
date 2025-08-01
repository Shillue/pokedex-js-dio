const pokeApi ={}

// Converte os dados brutos da API para a estrutura da classe Pokemon
function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.number = pokeDetail.id
    pokemon.name = pokeDetail.name

    // Obtém todos os tipos 
    const types = pokeDetail.types.map((typesSlot) => typesSlot.type.name)
    const [type] = types
    
    pokemon.types = types
    pokemon.type = type

    // Imagem em SVG do Pokémon
    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    //Dados físicos
    pokemon.height = pokeDetail.height
    pokemon.weight = pokeDetail.weight
    pokemon.species = pokeDetail.species.name

    // Habilidades
    pokemon.abilities = pokeDetail.abilities.map((a) => a.ability.name).join(', ');
     
    //Stats base
    pokemon.stats = pokeDetail.stats.map(stat => ({
        name: stat.stat.name,
        value: stat.base_stat
    }))

    return pokemon
}

// Obtém os detalhes completos de um Pokémon
pokeApi.getPokemonDetail = (pokemon) =>{
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then((pokeDetail) => {
            const pokemon = convertPokeApiDetailToPokemon(pokeDetail);

            //Pega os primeiros 5 movimentos
            pokemon.moves = pokeDetail.moves.slice(0, 5).map(m => m.move.name);

            // Requisição para dados adicionais
            return fetch(pokeDetail.species.url)
            .then((res) => res.json())
            .then((speciesData) => {
                //Gênero
                if(speciesData.gender_rate === -1){
                    pokemon.gender = 'Unknown';
                }else{
                    const female = (speciesData.gender_rate / 8) * 100;
                    const male = 100 - female;
                    pokemon.gender = `<i class="bi bi-gender-male"></i> ${male}% | <i class="bi bi-gender-female"></i> ${female}%`;
                }

                // Grupos de ovos
                pokemon.eggGroups = speciesData.egg_groups.map(g => g.name).join(', ');

                // Ciclo de ovos
                pokemon.eggCycle = speciesData.hatch_counter;

                // Descrição flavor
                const entry = speciesData.flavor_text_entries.find(e => e.language.name === 'en');
                 pokemon.flavorText = entry ? entry.flavor_text.replace(/\f/g, ' ') : '';

                //Requisição para cadeia de Evolução
                return fetch(speciesData.evolution_chain.url).then((evoRes) => evoRes.json()).then((evoData) => {
                    const evoChain = [];
                    let evo = evoData.chain;
                    do{
                        evoChain.push(evo.species.name);
                        evo = evo.evolves_to[0];
                    }while(evo && evo.hasOwnProperty('evolves_to'));

                    
                    pokemon.evolutionChain = evoChain;

                    return pokemon;
                })
            })
        })
}

// Lista os pokémons com base no offset e limite
pokeApi.getPokemons = (offset = 0, limit = 5) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((jsonBody) => jsonBody.results)
    .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))    
    .then((detailRequests) => Promise.all(detailRequests))
    .then((pokemonsDetails) => pokemonsDetails)
    .catch( (error) => console.error(error))

}
