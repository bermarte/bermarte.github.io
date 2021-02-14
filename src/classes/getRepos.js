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
    render() {
        const user = this.user;
        for (let repo of repos.selected){
            const singleRepo = new Repo(user, repo)
            this.dom.appendChild(singleRepo.render());
        }
    }
}

export {
    Repos
};

logger.add({
    class: 'Repos'
});