var posts=["HTTP","Linux创建用户","MySQL使用方法","MySQL配置","Redis的配置","Python","Nginx","Tmux","git","hello-world"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };