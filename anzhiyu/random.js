var posts=["2026/10/14/workbuddy-to-dsh-guide/","2025/09/02/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };