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
const list = document.getElementById('list');
(() => __awaiter(void 0, void 0, void 0, function* () {
    const results = yield fetch('https://pokeapi.co/api/v2/pokemon');
    const json = yield results.json();
    console.log(json);
    json.results.forEach((res) => {
        const newListItem = document.createElement('li');
        newListItem.innerText = res.name;
        list === null || list === void 0 ? void 0 : list.appendChild(newListItem);
    });
}))();
