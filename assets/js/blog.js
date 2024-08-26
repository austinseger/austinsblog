// blog.js: Handles rendering of blog posts and light/dark mode toggle
document.addEventListener('DOMContentLoaded', function() {
    const postsContainer = document.getElementById('postsContainer');
    const posts = JSON.parse(localStorage.getItem('posts')) || [];

    // If there are no posts, show a message
    if (posts.length === 0) {
        postsContainer.innerHTML = '<p>No blog posts available.</p>';
    } else {
        // Render each post
        posts.forEach(post => {
            const postElement = document.createElement('div');
            postElement.className = 'post';
            postElement.innerHTML = `
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <small>Author: ${post.username}</small>
            `;
            postsContainer.appendChild(postElement);
        });
    }

    // Handle light/dark mode toggle
    const toggleModeButton = document.getElementById('toggleMode');
    toggleModeButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const mode = document.body.classList.contains('dark-mode') ? 'dark' : 'light';
        localStorage.setItem('mode', mode);
    });

    // Set the mode based on previous selection
    const savedMode = localStorage.getItem('mode');
    if (savedMode === 'dark') {
        document.body.classList.add('dark-mode');
    }

    // Handle "Back" button click to go back to the form
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = 'index.html';
    });
});
