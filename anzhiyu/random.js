var posts=["posts/5ec9.html","posts/pylint-pdm-errors.html","posts/a72e.html","posts/2311.html","posts/7fe3.html","posts/gpg-github-win.html","posts/2a32.html","posts/b0f3.html","posts/mi-openwrt.html","posts/7a6a.html","posts/8fbe.html","posts/201b.html","posts/73aa.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };