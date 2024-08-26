function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

function saveModeToLocalStorage(mode) {
    localStorage.setItem('mode', mode);
}

function getModeFromLocalStorage() {
    return localStorage.getItem('mode') || 'light'; 

function validateFormInputs(username, title, content) {
    if (!username || !title || !content) {
        return false;
    }
    return true;
}

function createBlogPostElement(post) {
    const postElement = document.createElement('div');
    postElement.className = 'post';
    postElement.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.content}</p>
        <small>Author: ${post.username}</small>
    `;
    return postElement;
}

export {
    savePostsToLocalStorage,
    getPostsFromLocalStorage,
    saveModeToLocalStorage,
    getModeFromLocalStorage,
    validateFormInputs,
    createBlogPostElement
};
