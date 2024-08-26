// form.js: Handles form submission and validation
document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    const errorElement = document.getElementById('error');

    // Validate that all fields are filled
    if (!username || !title || !content) {
        errorElement.textContent = 'Please fill out all fields.';
        return;
    }

    // Prepare the blog post object
    const blogPost = {
        username: username,
        title: title,
        content: content
    };

    // Retrieve existing posts from localStorage or initialize an empty array
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    posts.push(blogPost);

    // Save updated posts array to localStorage
    localStorage.setItem('posts', JSON.stringify(posts));

    // Redirect to the blog posts page
    window.location.href = 'blog.html';
});
