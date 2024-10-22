var posts=["MySQL使用方法","Linux创建用户","Python","Tmux","git","hello-world","Redis的配置","MySQL配置","Nginx","HTTP"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };