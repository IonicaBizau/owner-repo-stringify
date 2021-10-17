/**
 * ownerRepoStringify
 * Stringify the owner and repository values into full names.
 *
 * @name ownerRepoStringify
 * @function
 * @param {String} owner The owner value.
 * @param {String} repo The repository name.
 * @return {String} The repository full name: `owner[/repo]`.
 */
module.exports = function ownerRepoStringify(owner, repo) {
    return repo ? `${owner}/${repo}` : owner;
};
