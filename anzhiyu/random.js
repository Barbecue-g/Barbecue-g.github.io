var posts=["Python","HTTP","MySQL配置","MySQL使用方法","Nginx","git","hello-world","Linux创建用户","Redis的配置","Tmux"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };