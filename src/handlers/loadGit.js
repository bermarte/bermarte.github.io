'use strict';
import { logger } from '../../lib/logger.js';

const content = document.querySelector('#github-projects');
import { Repos } from "../classes/getRepos.js";

/**
 * loader of a repo object
 */
function loadGit(){
    console.log('from loadGit function');

    const gitContent = new Repos('bermarte', content);
    gitContent.render();
}

export { loadGit};

logger.add({
    handler: 'loadGit'
});