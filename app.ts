const list= document.getElementById('list');

(async () => {

    const results = await fetch('https://pokeapi.co/api/v2/pokemon');
    const json = await results.json();

    json.results.forEach((res:any) => {
        const newListItem: any = document.createElement('li');
        newListItem.innerText = res.name
        list?.appendChild(newListItem)
    })

})();