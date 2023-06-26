// Set some top level vars
const list = document.getElementById('list')!;
const stage = document.getElementById('stage')!;
const header = document.getElementById('stage-title')!;
const sprite = document.getElementById('stage-sprite')!;

const getIndividualPokemonData: any = async ( url: string ) => {
    const results = await fetch( url );
    const json = await results.json();

    return json
}

const selectPokemon = ( name: string, icon: string ) => {
    stage.classList.remove('hidden');
    header.innerText = name;
    sprite.setAttribute( 'src', icon )
}

(async () => {

    const results = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await results.json();

    json.results.forEach( async (res:{
        name: string
        url: string
    }) => {

        const thisPokemon: {
            name: string
            sprites: {
                front_default: string
            }
        } = await getIndividualPokemonData( res.url );

        const newListItem: string = (
            `<li class="w-full p-3 text-center bg-slate-800 rounded text-white hover:bg-slate-500 cursor-pointer" onClick="selectPokemon('${thisPokemon.name}', '${thisPokemon.sprites.front_default}')">
                <img src="${thisPokemon.sprites.front_default}" class="block m-auto" />
                <h3>${thisPokemon.name}</h3>
            </li>`
        );

        list.innerHTML += newListItem
    });

})();