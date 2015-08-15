$(function(){$(function(){
  if (_userdata.session_logged_in != 0) return;
  /* -- CUSTOMIZATION BEGIN -- */
  var both = true,
      redirect = window.location.pathname,
      imgOverlay = 'http://i.imgur.com/Thj9tqb.png',
      imgConnex = 'http://i.imgur.com/4HUqvb6.png',
  /* -- CUSTOMIZATION END -- */
      content = cre('DIV'), overlay = cre('DIV'), cacheMe = cre('DIV'), style = cre('STYLE'), css = '.loginForm,.loginOverlay{position:fixed;display:none}.loginForm{background:url('+imgConnex+') no-repeat 8% center #FBFBFB;background-size:12.5%;border:10px solid #CCC;border-radius:3px;padding:2% 5%;top:20%;left:20%;right:20%;z-index:9999998;}@media(max-width:500px){.loginForm{background-image:none}}@media(min-width:1000px){.loginForm{left:25%;right:25%}}.loginForm .loginTitle{font-size:12px;margin:5px 0;}.loginOverlay{background:rgba(0, 0, 0, 0.44)  url('+imgOverlay+');left:0;top:0;right:0;bottom:0;z-index:9999997;cursor:pointer}.loginForm div { text-align:center; }.loginForm .inputbox { font-size: 14px; height: 25px; box-sizing: content-box;width: 46% !important; border-radius: 3px; padding: 5px 28px !important; }.loginForm input{margin:5px 0 !important}.loginForm .button1 {font-size:14px;padding:10px 15px !important;width:57% !important}#fa_username {background:url(http://i.imgur.com/4ylySyB.png) no-repeat 8px center #FFF}#fa_password {background:url(http://i.imgur.com/arTuKOY.png) no-repeat 10px center #FFF}';
  content.className = 'loginForm', overlay.className = 'loginOverlay';
  cacheMe.innerHTML = '<img src="'+imgOverlay+'"/><img src="'+imgConnex+'"/>', cacheMe.style.display = 'none';
  style.type = 'text/css';
  if (style.styleSheet) style.styleSheet.cssText = css;
  else style.appendChild(document.createTextNode(css));
  document.getElementsByTagName('HEAD')[0].appendChild(style);
  content.innerHTML = '<form action="/login" method="post" name="form_login"><div class="loginTitle">Vui lòng nhập tên truy cập và mật khẩu để đăng nhập.</div><div><input tabindex="100" placeholder="Tên truy cập" name="username" id="fa_username" size="25" maxlength="40" value="" class="inputbox autowidth" type="text"/></div><div><input tabindex="101" id="fa_password" placeholder="Mật khẩu" name="password" size="25" maxlength="25" class="inputbox autowidth" type="password"/></div><div><input name="redirect" value="'+redirect+'" type="hidden"><input name="login" tabindex="103" value="Đăng nhập" class="button1" type="submit" style=" font-size: 16px; height: 25px; width: 46% !important; border-radius: 3px; padding: 5px 28px !important; box-sizing: content-box; "></div><a href="#close" id="closeMe" style="position:absolute;bottom:5px;right:5px;">Đóng</a><div class="tv-vvv" style=""><div class="autologin" style=" margin-right: 42px; display: inline-block;"><input name="autologin" id="autologin" tabindex="4" class="checkbox" checked="checked" type="checkbox" style=" "><label for="autologin"> Tự động đăng nhập</label></div><div class="sendpass" style=" /* float: right; */ display: inline-block;"> <a href="/profile?mode=sendpassword">Quên mật khẩu ?</a></div></div></form>';
  insert(overlay, content, cacheMe);
  
  if (both === true) {
    var a = document.getElementsByTagName('A');
    for (var i=0; i<a.length; i++) if (/\/login/.test(a[i].href) && /(mainmenu|rightHeaderLink)/.test(a[i].className)) a[i].onclick = function() { display('block'), fadeIn(overlay, content); document.getElementById('fa_username').focus(); return false };
  } else {
    document.getElementById('fa_right').firstChild.onclick = function() {
      display('block'), fadeIn(overlay, content);
      document.getElementById('fa_username').focus();
      return false
    }
  }
  overlay.onclick = function() { close() };
  document.getElementById('closeMe').onclick = function() { close(); return false };
  
  function cre(el) { return document.createElement(el) };
  function display(val) { content.style.display = val, overlay.style.display = val };
  function close() { display('none'), overlay.style.opacity = 1, content.style.opacity = 1 };
  function insert() { var args = arguments; for (var i=0; i<args.length; i++) document.body.insertBefore(args[i], document.body.firstChild) };
  function fadeIn() {
    var args = arguments;
    for (var i=0; i<args.length; i++) args[i].style.opacity = 0;
    var fader = window.setInterval(function() {
      for (var i=0; i<args.length; i++) {
        var opa = Number(args[i].style.opacity);
        if (opa >= 1) {
          window.clearInterval(fader);
          return args[i].style.opacity = 1;
        } else args[i].style.opacity = opa + 0.15
      }
    },25);
  }
})});
