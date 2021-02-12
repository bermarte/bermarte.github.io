'use strict';

const content = document.querySelector('#github-projects');
import { Repo } from "../classes/getRepo.js";

function loadGit(){
    console.log('from loadGit function');

    const gitContent = new Repo('bermarte', content);
    gitContent.render();
}

export { loadGit};