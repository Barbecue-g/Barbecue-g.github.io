var posts=["DataBase/MySQL/MySQL配置","DataBase/Redis/Redis的配置","FrameWork/UE5/UE5","DataBase/MySQL/MySQL的基本使用","Tools/Git/git","Other/正则表达式/正则表达式","FrameWork/Skynet/Skynet","Tools/Hexo/Hexo","Tools/Git/soursetree","Tools/Postman/Postman 汉化教程","Tools/Nginx/Nginx","Tools/PicGo/PicGo","Language/C/C_函数","Language/C/C_字符串","Language/C/C_基本数据类型","Language/C/C_指针","Language/C/C_历史","Language/C/C_指针的应用","Language/C/C_排序与查找","Language/C/C_数组","Language/C/C_数据结构","Language/C/C_文件","Language/C/C_概述","Language/C/C_结构体和枚举","Language/C/C_格式化输入输出","Language/C/C_表达式","Language/C/C_语句","Tools/Git/代码提交规范"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };