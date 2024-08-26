// Logic for handling localStorage and common utilities

// Save an array of blog posts to localStorage
function savePostsToLocalStorage(posts) {
    localStorage.setItem('posts', JSON.stringify(posts));
}

// Retrieve the array of blog posts from localStorage
function getPostsFromLocalStorage() {
    return JSON.parse(localStorage.getItem('posts')) || [];
}

// Save the current mode (light/dark) to localStorage
function saveModeToLocalStorage(mode) {
    localStorage.setItem('mode', mode);
}

// Retrieve the current mode (light/dark) from localStorage
function getModeFromLocalStorage() {
    return localStorage.getItem('mode') || 'light'; // Default to 'light' mode
}

// Validate form inputs for non-empty values
function validateFormInputs(username, title, content) {
    if (!username || !title || !content) {
        return false;
    }
    return true;
}

// Centralized function to create and return a blog post DOM element
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

// Export the functions to be used in form.js and blog.js
export {
    savePostsToLocalStorage,
    getPostsFromLocalStorage,
    saveModeToLocalStorage,
    getModeFromLocalStorage,
    validateFormInputs,
    createBlogPostElement
};
