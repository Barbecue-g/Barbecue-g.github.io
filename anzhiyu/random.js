var posts=["MySQL配置","Linux创建用户","Redis的配置","HTTP","hello-world","Tmux","Nginx","MySQL使用方法","git","Python"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };