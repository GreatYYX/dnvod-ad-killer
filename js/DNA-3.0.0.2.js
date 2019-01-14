var DN_Config={};var DN_Resource={};var thisPageUsingOtherJSLibrary=false;var __dn_isInit=false;var __myHost="hwhrq.com";var _parentHost="//token."+__myHost;var _parentLogin="//account."+__myHost;var _resourcehost="//www."+__myHost;DN_Resource._iframeid="dn_iframe";DN_Resource._loginbox="Dn_Login_Iframe";DN_Resource._invisibleCss={"width":"1px","height":"1px","position":"absolute","top":"0","border":"none"};DN_Resource._bottomCss={"position":"fixed","zIndex":"10000001","width":"100%","height":"50px","bottom":0,"border":"none"};DN_Resource.IsFileSystem=function(){if(window.location.href.indexOf("file:")>-1)
{return true;}
return false;}
function __post(path,params,callback){var http=new XMLHttpRequest();var url=path;var params=params;http.open('POST',url,true);http.setRequestHeader('Content-type','application/x-www-form-urlencoded');http.onreadystatechange=function(){if(http.readyState==4&&http.status==200){callback(http.responseText);}}
http.send(params);}
function __isFunction(functionToCheck)
{return functionToCheck&&{}.toString.call(functionToCheck)==='[object Function]';}
String.prototype.trimEnd=function(c){c=c?c:' ';var i=this.length-1;for(;i>=0&&this.charAt(i)==c;i--);return this.substring(0,i+1);};var _createCookie=function(name,value,days){var expires;if(days){var date=new Date();date.setTime(date.getTime()+(days*24*60*60*1000));expires="; expires="+date.toGMTString();}else{expires="";}
document.cookie=name+"="+value+expires+"; path=/ ;";}
var __isLoaded=false;function __getElement(id){if(document.getElementById){return document.getElementById(id);}
else if(document.all){return window.document.all[id];}
else if(document.layers){return window.document.layers[id];}}
if(!document.getElementsByClassName){document.getElementsByClassName=function(classname){var elArray=[];var tmp=document.getElementsByTagName("*");var regex=new RegExp("(^|\\s)"+classname+"(\\s|$)");for(var i=0;i<tmp.length;i++){if(regex.test(tmp[i].className)){elArray.push(tmp[i]);}}
return elArray;};}
function __getObject(tag)
{var result=null;if(typeof(tag)=="string")
{if(tag.indexOf("#")>-1){result=__getElement(tag.substring(1))}
else if(tag.indexOf(".")>-1){result=document.getElementsByClassName(tag.substring(1))[0];}
else result=document.getElementsByTagName(tag)[0];}
else
{result=tag;}
if(result==null)
{result={length:0};}
else
{result={dom:result,length:1,attr:function(key,value){if(value==null)
{return result.dom.getAttribute(key);}
else
{result.dom.setAttribute(key,value);return result;}},css:function(obj){for(var i in obj){var suffix=i=="width"||i=="height"?"px":"";result.dom.style[i]=obj[i]+suffix;}
return result;},width:function(){return result.dom.offsetWidth;},appendChild:function(child){return result.dom.appendChild(child)},height:function()
{return result.dom.offsetHeight;},show:function(){result.css({display:"block"})},hide:function(){result.css({display:"none"})},on:function(eventName,func)
{if(result.eventList[eventName]==null)
{result.eventList[eventName]=[];}
result.eventList[eventName].push(func);result.dom.addEventListener(eventName,func);},position:function(){return __getOffset(result.dom);},unbind:function(eventName){if(result.eventList[eventName])
{for(var i in result.eventList[eventName])
{result.dom.removeEventListener(eventName,result.eventList[eventName][i]);}}},detach:function(){result.dom.parentNode.removeChild(result.dom);},eventList:{},reload:function(){console.log("reload");result.attr("src",result.attr("src"));}}}
return result;}
function __getOffset(el){const rect=el.getBoundingClientRect();return{left:rect.left+window.scrollX,top:rect.top+window.scrollY};}
function __loadStyleStyle(resource,id){if(!__getObject(cssId)){var head=document.getElementsByTagName('head')[0];var link=document.createElement('link');link.id=cssId;link.rel='stylesheet';link.type='text/css';link.href=resource;link.media='all';head.appendChild(link);}}
function __append(elString,parent){var div=document.createElement("div");div.innerHTML=elString;__getObject(parent||"body").appendChild(div.firstChild);}
function _LoadEffect(){if(!__isLoaded){__isLoaded=true;loadStyleStyle(_resourcehost+"/Content/css/loadeffect.css");__append('<div class="loading-mask"><div class="loading-content">正在同步用户信息</div><div class="sk-folding-cube">'+
'<div class="sk-cube1 sk-cube"></div>'+
'<div class="sk-cube2 sk-cube"></div>'+
'<div class="sk-cube4 sk-cube"></div>'+
'<div class="sk-cube3 sk-cube"></div>'+
'</div></div>');}else{__getObject("loading-mask").show();}}
function _HideEffect(){__getObject("loading-mask").hide();}
function _readCookie(name){var nameEQ=name+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++){var c=ca[i];while(c.charAt(0)==' ')c=c.substring(1,c.length);if(c.indexOf(nameEQ)==0)return c.substring(nameEQ.length,c.length);}
return null;}
function _eraseCookie(name){_createCookie(name,"",-1);}
var _parseURL=function(url){var temp=document.createElement('a');temp.href=url;var result={"port":temp.port,"protocol":temp.protocol.replace(':',''),"hash":temp.hash.replace('#',''),"host":temp.host,"href":temp.href,"hostname":temp.hostname,"pathname":temp.pathname,"search":temp.search,"query":{}};var seg=result.search.replace(/^\?/,'').split('&'),leng=seg.length,i=0,target;for(;i<leng;i++){if(!seg[i])continue;target=seg[i].split('=');result.query[target[0]]=target[1];}
temp=null;return result;};function _GetLogoutKey(){return DN_Config.LogoutCookie||"dn_logout";}
function _IsLogoutCookieExist(){var logoutKey=_GetLogoutKey();if(_readCookie(logoutKey)){return true;}
return false;};function __GetPage(e)
{var _ret="";var _protocal="https:";if(DN_Config.__protocol){_protocal=DN_Config.__protocol;}
switch(e){case "login":_ret=_protocal+_parentLogin+"/Auth/Login"+(DN_Config.keepSuffix?".aspx":"");break;case "reg":_ret=_protocal+_parentHost+"/Auth/Reg"+(DN_Config.keepSuffix?".aspx":"");break;case "token":_ret=_protocal+_parentHost+"/Auth/Token.aspx";break;case "logout":_ret=_protocal+_parentLogin+"/Auth/ClearState"+(DN_Config.keepSuffix?".aspx":"");break;}
return _ret;}
var __loginCallback=function(event)
{if(event!=null&&!!event.origin&&event.origin.indexOf(_parentHost)>-1&&!!event.data&&event.data!="token does not exist")
{window.dispatchEvent(new CustomEvent("autoLogin",{detail:event.data}))}}
function __callback(data)
{__loginCallback(data);}
function __Initialize()
{if(!__dn_isInit)
{__dn_isInit=true;if(window.addEventListener){window.addEventListener('message',__callback);}else{window.attachEvent('onmessage',__callback);}}
if(!DN_Resource.IsFileSystem())
{if(!__getObject("#"+DN_Resource._iframeid).length){__append('<iframe name="'+DN_Resource._iframeid+'" id="'+DN_Resource._iframeid+'"></iframe>')}
if(!_IsLogoutCookieExist()){var token_page=__getObject("#"+DN_Resource._iframeid);token_page.attr("src",__GetTokenPage()).css(DN_Resource._invisibleCss);}
else
{var token_page=__getObject("#"+DN_Resource._iframeid)
if(token_page.length){token_page.attr("src",__GetPage("logout")).css(DN_Resource.UsingEffect?DN_Resource._bottomCss:DN_Resource._invisibleCss);token_page.on("load",function(){_eraseCookie(_GetLogoutKey());token_page.unbind("load");setTimeout(function(){token_page.hide();},100);});}}}
else
{DN_Config.ServerCallback=false;DN_Config.UsingSafe=false;}}
function __jsonToQueries(json)
{var _ret="";for(var i in json){_ret+=i+"="+json[i]+"&";}
_ret=_ret.replace(/&+$/,"");return _ret;}
function __GetTokenPage()
{var paret=__GetPage("token");var queries={"r":encodeURIComponent(window.location.href),"p":DN_Config._publicKey||DN_Resource.publicKey||window["dnapublic"]};if(DN_Config.Debug){queries.r="http://debug.me";}
var params=__jsonToQueries(queries);return paret+"?"+params;}
var DNa=function(Options,CallBack){var $this=this;if(!Options||!Options.key){console.error("The public key is required!");return;}
this.Initialize=function(){__loginCallback=$this.OnReceive.bind($this);__Initialize();if(DN_Resource.IsFileSystem())
{DN_GenerateLoginPage($this);}};this.GetTokenPage=function(){return __GetTokenPage();}
this.GetPage=function(e){return __GetPage(e);}
this.ShowLoginBox=function(){DN_GenerateLoginPage($this);}
this.CommandList=["error_","trylogin","unrefresh","refresh","token_","openurl_"];this.hasCommand=function(data){for(var i in $this.CommandList){if(!!data&&!!data["indexOf"]&&data.indexOf($this.CommandList[i])>-1){return true;}}
return false;}
this.OnReceive=function(result){if((!DN_Config.IsFileSystem&&result.origin.indexOf(_parentHost)<0)||(DN_Config.IsFileSystem&&$this.hasCommand(result.data))){if(result.data&&result.data["indexOf"]&&result.data.indexOf("token_")>-1){result.data=result.data.replace("token_","");$this.OnReceive({data:result.data.replace("token_","")});return;}
else{ReceiveCommad(result);}}else{var msg=decodeURIComponent(result.data);if(msg=="token does not exist, refresh it"){if(DN_Config.TokenExistRefreshIt){DN_Config.TokenExistRefreshIt();}else{window.location=window.location.href;}
return;}
if(msg!="token does not exist"){if(DN_Config.DN_AutoLogin){var tranferURL=_parseURL(DN_Config.DN_LoginURL);tranferURL.query.token=msg;var newTransfer=BuildTransfer(tranferURL);var params="";for(var abc in tranferURL.query){params+=abc+"="+tranferURL.query[abc]+"&";}
params=params.trimEnd("&");if(DN_Config.Method&&DN_Config.Method=="POST"){__post(newTransfer,params,function(result){if(DN_Config.LoginCallBack&&__isFunction(DN_Config.LoginCallBack)){if(DN_Config.UsingEffect&&!_readCookie("__noeffect")){_LoadEffect();setTimeout(function(){if(DN_Config.LoginCallBack(result)==false){_createCookie("__noeffect",1);}
_HideEffect()},DN_Config.EffectTime||500);}else{if(DN_Config.LoginCallBack(result)==true){_eraseCookie("__noeffect");}}}})}else{window.location.href=newTransfer+params;}}
DN_Config.UserStatus=true;}else{DN_GenerateLoginPage($this);DN_Config.UserStatus=false;}}}
this.release=function()
{DN_Config.ComponentLoaded=null;}
DN_Config._publicKey=Options.key;DN_Config._tokenPage="/Auth/Token.aspx";DN_Config._loginPage="/Auth/Login"+(DN_Config.keepSuffix?".aspx":"");DN_Config._regPage="/Auth/Reg"+(DN_Config.keepSuffix?".aspx":"");DN_Config._logoutPage="/Auth/ClearState"+(DN_Config.keepSuffix?".aspx":"");DN_Config._iframeid="dn_iframe";$this.Initialize();return $this;}
function BuildTransfer(tranferURL){var currentHost=_parseURL(window.location.href);return(tranferURL.protocol?tranferURL.protocol:currentHost.protocol)+
"://"+(tranferURL.hostname?tranferURL.hostname:currentHost.hostname)+GetDefaultPort(tranferURL.port)+(tranferURL.pathname.indexOf('/')==0?tranferURL.pathname:"/"+tranferURL.pathname)+"?";}
function GetDefaultPort(port){return port==0?"":":"+port;}
function _AvailableCommand(){var that=this;this.command={"error_":function(message){if(DN_Config.ErrorMessage){DN_Config.ErrorMessage(message);}},"openurl_":function(message){if(DN_Config.OpenLink){DN_Config.OpenLink(message);}}}
this.getCommand=function(data){if(data&&typeof(data)=="string"){for(var i in that.command){var index=data.indexOf(i);if(index>-1){if(data.substring(index+i.length))
return function(){that.command[i](data.substring(index+i.length));};}}}
return null;}
return this;}
var __command=new _AvailableCommand();function ReceiveCommad(e){var tranferURL=_parseURL(window.location.href);var command=__command.getCommand(e.data)
if(e.data=="refresh"){tranferURL.query.refresh="true";var newTransfer=BuildTransfer(tranferURL);for(var abc in tranferURL.query){newTransfer+=abc+"="+tranferURL.query[abc]+"&";}
if(DN_Config.HandleRefresh){if(__getObject("#"+DN_Resource._iframeid).length)
{__getObject('#'+DN_Resource._iframeid).attr('src',__getObject('#'+DN_Resource._iframeid).attr('src'));}
if(__getObject("#"+DN_Config.PageContainerID).length)
{__getObject('#'+DN_Config.PageContainerID).hide();}
DN_Config.HandleRefresh(newTransfer.trimEnd('&'));}
else{window.location.href=newTransfer.trimEnd('&');}}
else if(e.data=="unrefresh"){}
else if(e.data=="removelogout"){}
else if(e.data=="trylogin"){if(DN_Config.TryLogin){DN_Config.TryLogin();}}
else if(command!=null){command();}}
var globalAPI=null;function DN_GenerateLoginPage(DN_Api){globalAPI=DN_Api;var loginPage=DN_Api.GetPage("login");if(!!DN_Config.DN_ClickContent&&!__getObject(DN_Config.DN_ClickContent).length){DN_LoginPageShow(loginPage);}
else{__getObject(DN_Config.DN_ClickContent).on("click",function(){DN_LoginPageShow(loginPage);});}}
function DN_Logout(){var logoutPage=__GetPage("logout");if(!__getObject("#"+DN_Resource._iframeid).length){__append('<iframe name="'+DN_Resource._iframeid+'" id="'+DN_Resource._iframeid+'"></iframe>')}
var token_page=__getObject("#"+DN_Resource._iframeid)
if(token_page.length){token_page.attr("src",logoutPage).css(DN_Resource._invisibleCss);token_page.on("load",function(){_eraseCookie(_GetLogoutKey());token_page.unbind("load");token_page.detach();var loginBox=__getObject("#"+DN_Resource._loginbox);if(loginBox.length)
__getObject("#"+DN_Resource._loginbox).reload();});}}
function DN_ComponentLoaded(){if(DN_Config.ComponentLoaded){DN_Config.ComponentLoaded();}}
function DN_LoginPageShow(loginPage){var loginFramestyle={position:"absolute","border":"none","overflow":"hidden"};var content_page=__getObject("#"+DN_Config.PageContainerID);var cssfile=DN_Config.LoginCss?"&c="+DN_Config.LoginCss:"";var useServerCallBack=DN_Config.ServerCallback==true?"&p=1":"";var useSafeLink=DN_Config.UsingSafe?"&s=1":"";var useEventHander=DN_Config.UsingEventHandler?"&pc=1":"";var rememberMe=DN_Config.RemeberMe?"&rm=1":"";var app=DN_Config.IsApp?"&app=1":"";var defaultMethod=DN_Config.DefaultLoginMethod?"&def="+DN_Config.DefaultLoginMethod:"";var useTheme=DN_Config.Theme?"&theme="+DN_Config.Theme:"";var useAuthorizeCode=DN_Config.useAuthorizeCode?"&a="+DN_Config.useAuthorizeCode:"";if(!content_page.length){__append('<div id="'+DN_Config.PageContainerID+'"></div>')}
if(!__getObject("#"+DN_Resource._loginbox).length){__append('<iframe id="'+DN_Resource._loginbox+'" src="'+
loginPage+
"?width="+(content_page.width()||"100%")+
"&height="+(content_page.height()||"100%")+
"&r="+window.location.href+
cssfile+useServerCallBack+
useSafeLink+useEventHander+rememberMe
+app+useTheme+defaultMethod+useAuthorizeCode
+'" ></iframe>',content_page);}
else{content_frame=__getObject("#"+DN_Resource._loginbox);content_frame.show();content_page.show();}
content_frame=__getObject("#"+DN_Resource._loginbox);content_frame.on("load",function(){DN_ComponentLoaded()})
loginFramestyle.height=content_page.height();loginFramestyle.width=content_page.width();loginFramestyle.top=content_page.position().top;loginFramestyle.left=content_page.position().left;content_frame.css(loginFramestyle);}