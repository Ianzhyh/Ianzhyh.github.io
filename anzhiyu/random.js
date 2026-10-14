var posts=["2025/09/02/hello-world/","2026/10/14/workbuddy-to-dsh-guide/","2026/10/14/melodix-intro/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };