var posts=["Python","HTTP","MySQL使用方法","Tmux","MySQL配置","git","hello-world","Nginx","Linux创建用户","Redis的配置"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };