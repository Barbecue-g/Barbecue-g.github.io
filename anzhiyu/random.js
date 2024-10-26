var posts=["HTTP","Linux创建用户","MySQL使用方法","MySQL配置","Nginx","Python","Tmux","Redis的配置","hello-world","git"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };