'use strict';

import {
    repos
} from '../data.js';
import {
    logger
} from '../../lib/logger.js';

/**
 * class Repo, creates a div element containing a link to a gitHub repository
 */
class Repo {
    constructor(user, repo) {
        this.user = user;
        this.repo = repo;
    }

    async render() {
        const urlRepo = await fetch(`https://api.github.com/repos/${this.user}/${this.repo}`);
        const response = await urlRepo.json();
        console.log(response.description);
        const div = document.createElement("div");
        const a = document.createElement("a");
        a.href = response;
        div.classList.add("git-item");
        const url = repos.imgUrls[this.repo];
        div.style.backgroundImage = `url(${url})`;
        const h1 = document.createElement("h1");
        h1.innerText = this.repo;
        a.appendChild(h1);
        div.appendChild(a);
        return div;
    };
}

export {
    Repo
};

logger.add({
    class: 'Repo'
});