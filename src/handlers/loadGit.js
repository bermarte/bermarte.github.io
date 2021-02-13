'use strict';
import { logger } from '../../lib/logger.js';

const content = document.querySelector('#github-projects');
import { Repo } from "../classes/getRepo.js";

/**
 * loader of a repo object
 */
function loadGit(){
    console.log('from loadGit function');

    const gitContent = new Repo('bermarte', content);
    gitContent.render();
}

export { loadGit};

logger.add({
    handler: 'loadGit'
});