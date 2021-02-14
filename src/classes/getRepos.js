'use strict';

import { repos } from '../data.js';
import { logger } from '../../lib/logger.js';
import { Repo } from "./Repo.js";

/**
 * class Repo, creates a div element containing a link to a gitHub repository
 */
class Repos {
    constructor(user, dom) {
        this.user = user;
        this.dom = dom;
    }
    async render() {
        const user = this.user;
        for (let repo of repos.selected){
            const singleRepo = await new Repo(user, repo)
            await this.dom.appendChild(await singleRepo.render());
        }
    }
}

export {
    Repos
};

logger.add({
    class: 'Repos'
});