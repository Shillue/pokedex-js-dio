const urlParams = new URLSearchParams(window.location.search)
const pokemonName = urlParams.get('name')

const container = document.getElementById('pokemonDetail');

pokeApi.getPokemonDetail({ url: `https://pokeapi.co/api/v2/pokemon/${pokemonName}` })
  .then(pokemon => {
     const totalStats = pokemon.stats.reduce((sum, stat) => sum + stat.value, 0);
     const header = document.querySelector('.header');
     header.classList.add(pokemon.type);
     const pageContainer = document.querySelector('.pageContainer');
     pageContainer.classList.add(pokemon.type);
     

    container.innerHTML = `
      <section class="pokemon ${pokemon.type}">
        <div class="pokemon__main__detail">
          <h1 class="name">${pokemon.name}</h1>
          <span class="number">#${pokemon.number}</span>
        </div>
        <span class="types">
            ${pokemon.types.map(type => `<li class="type ${type}">${type}</li>`).join('')}
        </span>
        <div class="detail"> 
          <img src="${pokemon.photo}" alt="${pokemon.name}">
        </div>
      </section>

      <section class="content">
        <div class="tabs">
          <h2 class="tab-title active" data-tab="about">About</h2>
          <h2 class="tab-title" data-tab="stats">Base Stats</h2>
          <h2 class="tab-title" data-tab="evolution">Evolution</h2>
          <h2 class="tab-title" data-tab="moves">Moves</h2>
        </div>

        <div class="tab-content about active">
        <div class="about-dados">
          <p><span>Species:</span> ${pokemon.species}</p>
          <p><span>Altura:</span> ${pokemon.height / 10} m</p>
          <p><span>Abilities:</span> ${pokemon.abilities || '-'}</p>
          <h3>Breeding</h3>
          <p><span>Gender:</span> ${pokemon.gender}</p>
          <p><span>Egg Groups:</span> ${pokemon.eggGroups}</p>
          <p><span>Egg Cycle:</span> ${pokemon.eggCycle}</p>
          </div>
        </div>

        <div class="tab-content stats">
          <ul>
            ${pokemon.stats.map(stat => `
              <li><span>${stat.name.toUpperCase()}:</span> ${stat.value}
                <div class="stat-bar">
                  <div class="stat-bar-fill ${pokemon.type}" style="width: ${stat.value / 100 * 100}%;"></div>
                </div>
              </li>
            `).join('')}
            <li><span>Total:</span> ${totalStats}
                <div class="stat-bar">
                  <div class="stat-bar-fill ${pokemon.type}" style="width: ${(totalStats.value / 600)* 100}%;"></div>
                </div>
            </li>
          </ul>
          <h3>Type ${pokemon.types[1] || pokemon.types[0]}</h3>
          <p><em>${pokemon.flavorText}</em></p>
        </div>

        <div class="tab-content evolution">
          <h3>Evolution Chain</h3>
          <ul>
            ${pokemon.evolutionChain.map(name => `<li>${name}</li>`).join('')}
          </ul>
        </div>

        <div class="tab-content moves">
          <h3>Main Moves</h3>
          <ul>
            ${pokemon.moves.map(move => `<li>${move}</li>`).join('')}
          </ul>
        </div>
      </section>
    `;

    // Agora que o HTML foi injetado, ativamos as abas:
    const tabTitles = document.querySelectorAll('.tab-title');
    const tabContents = document.querySelectorAll('.tab-content');

    tabTitles.forEach(title => {
      title.addEventListener('click', () => {
        // Remover todos os 'active'
        tabTitles.forEach(t => t.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));

        // Adicionar 'active' ao clicado
        title.classList.add('active');
        const tab = title.dataset.tab;
        document.querySelector(`.tab-content.${tab}`).classList.add('active');
      });
    });
  })
  .catch(err => {
    container.innerHTML = "<p>Erro ao carregar os dados do Pokémon.</p>";
    console.error(err)
  });

 