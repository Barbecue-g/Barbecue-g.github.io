var posts=["2023/08/16/HTTP/","2023/06/23/MySQL使用方法/","2023/06/22/Linux创建用户/","2023/06/22/MySQL配置/","2023/07/28/Redis的配置/","2023/06/22/git/","2024/10/22/hello-world/","2023/08/20/Nginx/","2024/02/26/Tmux/","2023/04/04/Python/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };