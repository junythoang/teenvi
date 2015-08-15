var clientPC = navigator.userAgent.toLowerCase();
$.browser = {};
$.browser.version = parseInt(navigator.appVersion);
$.browser.msie = -1 != clientPC.indexOf("msie") && -1 == clientPC.indexOf("opera");
$.browser.opera = -1 !== clientPC.indexOf("opera");
$.browser.mozilla = -1 !== clientPC.indexOf("mozilla");
$.browser.safari = -1 !== clientPC.indexOf("safari");
var mouse_y = 0,
	mouse_x = 0;

function get_mouseX(a) {
	a || (a = window.event);
	if (a.pageX) return a.pageX;
	if (a.clientX) {
		var b = 0,
			b = document.documentElement ? document.documentElement.scrollLeft ? document.documentElement.scrollLeft : 0 : document.body.scrollLeft;
		return a.clientX + b
	}
	return 0
}

function get_mouseY(a) {
	a || (a = window.event);
	if (a.pageY) return a.pageY;
	if (a.clientY) {
		var b = 0,
			b = document.documentElement ? document.documentElement.scrollTop ? document.documentElement.scrollTop : 0 : document.body.scrollTop;
		return a.clientY + b
	}
	return 0
}

function get_mouse_pos(a) {
	document.getElementById && (mouse_y = parseInt(get_mouseY(a)) + 15 + "px", mouse_x = parseInt(get_mouseX(a)) + 15 + "px")
}
document.all ? document.attachEvent("onmousemove", get_mouse_pos) : document.addEventListener("mousemove", get_mouse_pos, !0);

function showhide(a) {
	var b = 0,
		b = document.getElementById("content") ? document.getElementById("content")
		.offsetWidth : document.body ? document.body.clientWidth : window.innerWidth;
	a != document.getElementById("plus_menu") && (a.style.top = mouse_y, b = document.body ? document.body.clientWidth : window.innerWidth);
	a.style.display = "none" == a.style.display ? "" : "none";
	for (var d = parseInt(a.style.width), d = isNaN(d) ? a.offsetWidth : d, c = a; 0 == d && c.firstChild.offsetWidth;) c = c.firstChild, d = c.offsetWidth;
	for (mouse_x = parseInt(mouse_x); d + mouse_x >= b;) mouse_x -= 10;
	a.style.left = mouse_x + "px"
}

function insert_plus_menu_new(a, b, d, c) {
	var e = "";
	c && (e = c);
	c = "";
	b = b ? "&amp;sid=" + b : "";
	d && (c = a.replace(RegExp("f([0-9]*)(&|&amp;)t=([0-9]*)", "g"), "$3"), url_favourite = window.url_favourite || "/search.forum?search_id=favouritesearch&amp;add_favourite=" + c + b, c = '<a rel="nofollow" href="' + url_favourite + '">Thêm vào mục ưa thích</a>');
	a = "&amp;search_where=" + a;
	url_newposts = window.url_newposts || "/search.forum?search_id=newposts" + a + b;
	url_egosearch = window.url_egosearch || "/search.forum?search_id=egosearch" + a + b;
	url_unanswered = window.url_unanswered || "/search.forum?search_id=unanswered" + a + b;
	url_watchsearch = window.url_watchsearch || "/search.forum?search_id=watchsearch" + a + b;
	document.write('<a rel="nofollow" href="javascript:showhide(document.getElementById(\'plus_menu\'))">Công cụ</a><div class="overview row3" id="plus_menu" style="display:none;position:absolute;width:400px;margin-top:8px;z-index:1;"><p class="left-overview"><strong><a rel="nofollow" href="' + url_newposts + '">Xem bài mới từ lần trước</a><a rel="nofollow" href="' + url_egosearch + '">Xem bài bạn đã đăng</a><a rel="nofollow" href="' + url_unanswered + '">Xem bài chưa có ai trả lời</a><a rel="nofollow" href="' + url_watchsearch + '">Xem các chủ đề đang theo dõi</a></strong></p><hr class="dashed" /><p class="left-overview"><strong>' + e + c + '<a rel="nofollow" href="' + self.location.href + '" onclick="link_bbcode();return false">Chép BBCode URL</a><a rel="nofollow" href="javascript:void(0);" onclick="window.print();return false">In trang này</a></strong></p></div>')
}

function link_bbcode() {
	intext = "[url=http://teenvi.forumvi.com" + self.location.pathname + "]" + window.document.title + "[/url]";
	document.all && !window.opera ? window.clipboardData.setData("Text", intext) : prompt("", intext)
}

function fa_endpage() {
	parent.wbo1_ferme && wbo1_ferme()
}

function my_getcookie(a) {
	cname = a + "=";
	cpos = document.cookie.indexOf(cname);
	return -1 != cpos ? (cstart = cpos + cname.length, cend = document.cookie.indexOf(";", cstart), -1 == cend && (cend = document.cookie.length), unescape(document.cookie.substring(cstart, cend))) : null
}

function my_setcookie(a, b, d, c) {
	domain = expires = "";
	d && (expires = "; expires=Wed, 1 Jan 2020 00:00:00 GMT");
	c || (c = "/");
	document.cookie = a + "=" + b + "; path=" + c + expires + domain + ";"
}

function check(a, b) {
	var d = document.forms[b];
	field = d.elements.length;
	switch (a) {
	case "select":
		for (i = 0; i < field; i++) d.elements[i].checked = !0;
		break;
	case "unselect":
		for (i = 0; i < field; i++) d.elements[i].checked = !1
	}
}

function refresh_username_new(a, b) {
	$("input[name^=" + (b || "username") + "]:last")
		.val(a);
	$.add_username && $.add_username()
}

function timestamp() {
	return Math.floor((new Date)
		.getTime() / 1E3)
}

function select_switch_privmsg(a) {
	for (i = 0; i < document.privmsg_list.length; i++) document.privmsg_list.elements[i].checked = a
}

function GetParam(a) {
	var b = (new RegExp(a + "=([^&]+)", "i"))
		.exec(location.search);
	null == b && (b = (new RegExp(a + "=(.+)", "i"))
		.exec(location.search));
	if (null == b) return null;
	result = (b + "")
		.split(",");
	return result[1]
}

function set_solved(a, b) {
	if (a) {
		var d = a.value,
			c = new RegExp("\\" + b, "g");
		a.value = c.test(d) ? d.replace(c, "") : b + d
	}
}

function display_upload_servimg(a, b, d, c) {
	var e = document.getElementById("servimg_upload_gui");
	document.getElementById("obj_servimg") || (e.innerHTML = '<p><iframe id="obj_servimg" src="http://www.servimg.com/forum_upload.php?account=' + b + "&id=" + d + "&f=" + c + '" width="540" height="230" border="0" scrolling="no"></iframe></p>');
	b = document.getElementById("servimg_upload_gui");
	if ("hidden" == b.style.visibility) {
		c = document.body ? document.body.clientWidth : window.innerWidth;
		d = FindXY(a);
		a = a.offsetHeight;
		for (e = 0; e < selectId.length;) document.getElementById(selectId[e]) && (document.getElementById(selectId[e])
			.style.visibility = "hidden"), e++;
		c = 555 > c - d.x ? 555 - c + d.x : 0;
		b.style.visibility = "visible";
		b.style.width = "auto";
		b.style.left = d.x - c + "px";
		b.style.top = d.y + a + "px"
	} else b.style.visibility = "hidden"
}
var elem, divHeight, mouseX, mouseY;

function returnNumber(a) {
	var b = "";
	for (i = 0; i < a.length; i++)
		if (0 <= 1 * a.charAt(i) && 9 >= 1 * a.charAt(i)) b += a.charAt(i);
		else break;
	return 1 * b
}

function resize(a) {
	var b;
	b = document.all ? window.event.clientY + document.body.scrollTop : a.clientY + window.scrollY;
	elem.style.height = 100 > divHeight + b - mouseY ? "100px" : divHeight + b - mouseY + "px";
	document.all ? (window.event.cancelBubble = !0, window.event.returnValue = !1) : a.preventDefault()
}

function stopResize(a) {
	document.all ? (document.detachEvent("onmousemove", resize), document.detachEvent("onmouseup", stopResize)) : (document.removeEventListener("mousemove", resize, !0), document.removeEventListener("mouseup", stopResize, !0))
}

function resizeElement(a, b) {
	elem = document.getElementById(b);
	document.all ? (mouseX = window.event.clientX + document.body.scrollLeft, mouseY = window.event.clientY + document.body.scrollTop) : (mouseX = a.clientX + window.scrollX, mouseY = a.clientY + window.scrollY);
	divHeight = elem.style.height;
	isNaN(divHeight) && (divHeight = returnNumber(divHeight));
	document.all ? (document.attachEvent("onmousemove", resize), document.attachEvent("onmouseup", stopResize), window.event.cancelBubble = !0, window.event.returnValue = !1) : (document.addEventListener("mousemove", resize, !0), document.addEventListener("mouseup", stopResize, !0), a.preventDefault())
}

function runLogInPopUp() {
	var a = parseInt($("#login_popup")
		.css("top"));
	$("#login_popup")
		.css("top", a + ($(document)
			.scrollTop() + logInPopUpTop - a) / 8 + "px");
	"1" != my_getcookie("login_popup_closed") && setTimeout("runLogInPopUp()", 8)
}

function privmsg_add_username(a, b) {
	function d(b) {
		$.get(a + "&fieldname=" + b + "&time=" + timestamp(), "", function (a) {
			$("#find_username")
				.html(a)
				.jqmShow();
			$(".jqmOverlay")
				.bgiframe();
			$("#find_username")
				.bgiframe()
		});
		return !1
	}

	function c() {
		var a = "";
		$("input[name^=username]")
			.each(function () {
				a += $(this)
					.val()
			});
		return a
	}
	$.add_username = function () {
		$("select[name=userfriend]")
			.val() || $("select[name=usergroup]")
			.val() ? $("input[name^=username]:last")
			.after(b)
			.attr("disabled", "disabled") : $("input[name^=username]:last")
			.after(b)
	};
	$("input[name^=username]")
		.on("change", function () {
			c() ? $("select[name=userfriend],select[name=usergroup]")
				.attr("disabled", "disabled") : $("select[name=userfriend],select[name=usergroup]")
				.removeAttr("disabled")
		});
	$("select[name=userfriend]")
		.change(function () {
			$("select[name=userfriend]")
				.val() ? $("input[name^=username],#find_user,select[name=usergroup]")
				.attr("disabled", "disabled") : $("input[name^=username],#find_user,select[name=usergroup]")
				.removeAttr("disabled")
		});
	$("select[name=usergroup]")
		.change(function () {
			$("select[name=usergroup]")
				.val() ? ($("select[name=userfriend],select[name=usergroup]")
					.removeAttr("disabled"), $("input[name^=username]")
					.val(""), $("input[name^=username],#find_user,select[name=userfriend]")
					.attr("disabled", "disabled")) : $("input[name^=username],#find_user,select[name=userfriend]")
				.removeAttr("disabled")
		});
	$("#find_user")
		.click(function () {
			return d("username")
		});
	$("#add_username")
		.click(function () {
			$("input[name^=username]:last")
				.attr("disabled") || $.add_username()
		});
	c() ? $("select[name=userfriend],select[name=usergroup]")
		.attr("disabled", "disabled") : $("select[name=userfriend]")
		.val() ? $("input[name^=username],#find_user,select[name=usergroup]")
		.attr("disabled", "disabled") : $("select[name=usergroup]")
		.val() && $("input[name^=username],#find_user,select[name=userfriend]")
		.attr("disabled", "disabled");
	$("#find_username")
		.jqm({
			toTop: !0
		})
}
$(function () {
	if ("1" != my_getcookie("login_popup_closed") && 0 < $("#login_popup")
		.length) {
		logInPopUpLeft = Math.round(($(window)
			.width() - logInPopUpWidth - 16) / 2);
		logInPopUpTop = Math.round(($(window)
			.height() - logInPopUpHeight - 16) / 2);
		$("#login_popup")
			.css({
				left: logInPopUpLeft + "px",
				top: logInPopUpTop + "px",
				width: logInPopUpWidth + "px",
				height: logInPopUpHeight + "px"
			});
		logInBackgroundClass && $("#login_popup_background")
			.addClass(logInBackgroundClass)
			.css("padding", 0);
		var a = 2 * parseInt($("#login_popup_background")
			.css("padding-top") || $("#login_popup")
			.css("padding-top"));
		$("#login_popup_background")
			.css({
				width: logInPopUpWidth - a + "px",
				height: logInPopUpHeight - a + "px"
			});
		$("#login_popup_iframe")
			.css("display", "none");
		$("#login_popup_content")
			.css("display", "block");
		$("#login_popup_close")
			.click(function () {
				my_setcookie("login_popup_closed", "1", !0);
				$("#login_popup")
					.fadeOut("normal");
				return !1
			});
		$("#login_popup")
			.fadeIn("slow");
		runLogInPopUp()
	}
});
$(function () {
	$(document)
		.on("click", function (a) {
			$(a.target)
				.closest(".spoiler,.spoiler_content")
				.filter(".spoiler")
				.find(".spoiler_content:first,.spoiler_closed:first")
				.toggleClass("hidden")
		})
});

function FM_widget_share() {
	var a = document.location.href;
	document.location.href.match(/^(http:\/\/[^\/]*\/t[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/) ? a = document.location.href.replace(/^(http:\/\/[^\/]*\/t[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/, "$1-") : document.location.href.match(/^(http:\/\/[^\/]*\/f[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/) && (a = document.location.href.replace(/^(http:\/\/[^\/]*\/f[1-9][0-9]*)(p[1-9][0-9]*)?-.*$/, "$1-"));
	if (navigator.language) var b = navigator.language.toLowerCase();
	else navigator.userLanguage ? b = navigator.userLanguage.toLowerCase() : navigator.browserLanguage && (b = navigator.browserLanguage.toLowerCase());
	var d = "locale=en_GB&amp;",
		c = "";
	"ar" == b.substr(0, 2) ? c = "{lang: 'ar'}" : "en" == b.substr(0, 2) ? "gb" == b.substr(3, 2) && (d = "locale=en_GB&amp;", c = "{lang: 'en-GB'}") : "es" == b.substr(0, 2) ? c = "{lang: 'es'}" : "fr" == b.substr(0, 2) ? (d = "locale=fr_FR&amp;", c = "{lang: 'fr'}") : "pt" == b.substr(0, 2) ? "br" == b.substr(3, 2) ? (d = "locale=pt_BR&amp;", c = "{lang: 'pt-BR'}") : (d = "locale=pt_PT&amp;", c = "{lang: 'pt-PT'}") : "ru" == b.substr(0, 2) && (c = "{lang: 'ru'}");
	var b = "",
		e = document.createElement("script");
	e.type = "text/javascript";
	e.src = "https://apis.google.com/js/plusone.js";
	"" != c && (null == e.canHaveChildren || e.canHaveChildren ? (c = document.createTextNode(c), e.appendChild(c)) : e.text = c);
	document.getElementById("FM_widget_share")
		.appendChild(e);
	b = b + ('<div class="g-plusone" data-size="tall" data-count="true" href="' + a + '"></div>') + ('<a href="http://twitter.com/share" class="twitter-share-button" data-url="' + a + '" data-count="vertical">Tweet</a><script type="text/javascript" src="http://platform.twitter.com/widgets.js"></script>');
	b += '<iframe src="http://www.facebook.com/plugins/like.php?' + d + "href=" + encodeURIComponent(a) + '&amp;send=false&amp;layout=box_count&amp;width=60&amp;show_faces=false&amp;action=like&amp;colorscheme=light&amp;font&amp;height=60" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:60px; height:60px;" allowTransparency="true"></iframe>';
	$("#FM_widget_share")
		.append(b)
}
$(function () {
	$(".blank a")
		.attr("target", "_blank");
	if (null != document.getElementById("FM_widget_partners")) {
		var a;
		a = "";
		"" != a && $("#FM_widget_partners")
			.append(a)
	}
	null != document.getElementById("FM_widget_share") && FM_widget_share()
});
var FA = {};

function initSetFunction(a) {
	window.addEventListener ? window.addEventListener("load", a, !1) : window.attachEvent && window.attachEvent("onload", a)
}

function togglePopUpMenu(a) {
	var b = document.getElementById(a);
	"none" == b.style.display ? (b.style.display = "", openedPopUp && (document.getElementById(openedPopUp)
		.style.display = "none"), openedPopUp = a) : (b.style.display = "none", openedPopUp = !1);
	return !1
}

function toggleDiv(a) {
	a = document.getElementById(a);
	a.style.display = "none" == a.style.display ? "" : "none"
}

function togglePoll() {
	document.getElementById("poll_on") && document.getElementById("poll_off") && (toggleDiv("poll_on"), toggleDiv("poll_off"));
	return !1
}

function getElementsByClassName(a, b) {
	for (var d = document.getElementsByTagName(b), c = [], e = 0; e < d.length; e++) d[e].className == a && c.push(d[e]);
	return c
}

function initProfilePopUps() {
	divs = $("div.postprofile-head, div.post-header");
	$.each(divs, function (a, b) {
		b.style && (b.style.position = "relative")
	})
}
var openedPopUp = !1;
initSetFunction(togglePoll);
initSetFunction(initProfilePopUps);
