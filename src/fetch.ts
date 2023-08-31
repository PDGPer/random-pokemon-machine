const fetchRandomPokemon = () =>
    fetch(
        `https://pokeapi.co/api/v2/pokemon/${
            Math.floor(Math.random() * 999) + 1
        }`
    )
        .then((response) => response.json())
        .then((data) => {
            return data.name;
        })
        .catch((error) => {
            console.error(error);
        });

export default fetchRandomPokemon;
