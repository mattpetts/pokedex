"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Set some top level vars
const list = document.getElementById('list');
const stage = document.getElementById('stage');
const header = document.getElementById('stage-title');
const sprite = document.getElementById('stage-sprite');
const getIndividualPokemonData = (url) => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield fetch(url);
    const json = yield results.json();
    return json;
});
const selectPokemon = (name, icon) => {
    stage.classList.remove('hidden');
    header.innerText = name;
    sprite.setAttribute('src', icon);
};
(() => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield fetch('https://pokeapi.co/api/v2/pokemon');
    const json = yield results.json();
    json.results.forEach((res) => __awaiter(void 0, void 0, void 0, function* () {
        const thisPokemon = yield getIndividualPokemonData(res.url);
        const newListItem = (`<li class="w-full p-3 text-center bg-slate-800 rounded text-white hover:bg-slate-500 cursor-pointer" onClick="selectPokemon('${thisPokemon.name}', '${thisPokemon.sprites.front_default}')">
                <img src="${thisPokemon.sprites.front_default}" class="block m-auto" />
                <h3>${thisPokemon.name}</h3>
            </li>`);
        list.innerHTML += newListItem;
    }));
}))();
