'use strict';

import { repos } from '../data.js';
import { logger } from '../../lib/logger.js';

/**
 * class Repo, creates a div element containing a link to a gitHub repository
 */
class Repo {
    constructor(user, dom) {
        this.user = user;
        this.dom = dom;
    }

    async getRepo() {

        const url = `https://api.github.com/users/${this.user}/repos?per_page=100`;
        const response = await fetch(url);
        const result = await response.json();

        //make a selection
        const selected = result.filter(repo => repos['selected'].includes(repo.name));
        selected.map(repo => repos['repoNames'].push(repo.name));
    }

    async render() {

        await Promise.resolve(this.getRepo());
        repos.repoNames.forEach((repo) => {

            const div = document.createElement("div");
            const a = document.createElement("a");
            a.href = `https://${this.user}.github.io/${repo}/`;
            div.classList.add("git-item");
            const url = repos.imgUrls[repo];
            div.style.backgroundImage = `url(${url})`;
            const h1 = document.createElement("h1");
            h1.innerText = repo;
            a.appendChild(h1);
            div.appendChild(a);
            this.dom.appendChild(div);

        });
    }
}

export {
    Repo
};

logger.add({
    class: 'Repo'
});