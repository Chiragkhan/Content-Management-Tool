document.addEventListener("DOMContentLoaded", function () {
    const blogForm = document.getElementById("blogForm");
    const blogList = document.getElementById("blogList");
    const posts = [];
  
    blogForm.addEventListener("submit", function (event) {
      event.preventDefault();
      const title = document.getElementById("title").value;
      const content = document.getElementById("content").value;
  
      if (!title || !content) {
        alert("Please fill in both the title and content fields.");
        return;
      }
  
      createBlogPost(title, content);
      blogForm.reset();
    });
  
    function createBlogPost(title, content) {
      const blogPost = {
        title: title,
        content: content,
      };
      posts.push(blogPost);
      displayBlogPosts();
    }
  
    function displayBlogPosts() {
      blogList.innerHTML = "";
      posts.forEach((post) => {
        const blogPost = document.createElement("div");
        blogPost.classList.add("blog-post");
        blogPost.innerHTML = `
          <h3>${post.title}</h3>
          <p>${post.content}</p>
        `;
        blogList.appendChild(blogPost);
      });
    }
  });
  