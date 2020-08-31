// build time:Mon Aug 31 2020 18:29:36 GMT+0800 (GMT+08:00)
"use strict";var figlet=figlet||function(){var e=0,t=1,n=2,r=3;var l={};var u={font:"Standard",fontPath:"./fonts"};function i(l,u){var i={};var a,f,s,o;var h=[[16384,"vLayout",n],[8192,"vLayout",t],[4096,"vRule5",true],[2048,"vRule4",true],[1024,"vRule3",true],[512,"vRule2",true],[256,"vRule1",true],[128,"hLayout",n],[64,"hLayout",t],[32,"hRule6",true],[16,"hRule5",true],[8,"hRule4",true],[4,"hRule3",true],[2,"hRule2",true],[1,"hRule1",true]];a=u!==null?u:l;f=0;s=h.length;while(f<s){o=h[f];if(a>=o[0]){a=a-o[0];i[o[1]]=typeof i[o[1]]==="undefined"?o[2]:i[o[1]]}else if(o[1]!=="vLayout"&&o[1]!=="hLayout"){i[o[1]]=false}f++}if(typeof i["hLayout"]==="undefined"){if(l===0){i["hLayout"]=t}else if(l===-1){i["hLayout"]=e}else{if(i["hRule1"]||i["hRule2"]||i["hRule3"]||i["hRule4"]||i["hRule5"]||i["hRule6"]){i["hLayout"]=r}else{i["hLayout"]=n}}}else if(i["hLayout"]===n){if(i["hRule1"]||i["hRule2"]||i["hRule3"]||i["hRule4"]||i["hRule5"]||i["hRule6"]){i["hLayout"]=r}}if(typeof i["vLayout"]==="undefined"){if(i["vRule1"]||i["vRule2"]||i["vRule3"]||i["vRule4"]||i["vRule5"]){i["vLayout"]=r}else{i["vLayout"]=e}}else if(i["vLayout"]===n){if(i["vRule1"]||i["vRule2"]||i["vRule3"]||i["vRule4"]||i["vRule5"]){i["vLayout"]=r}}return i}function a(e,t,n){if(e===t&&e!==n){return e}return false}function f(e,t){var n="|/\\[]{}()<>";if(e==="_"){if(n.indexOf(t)!==-1){return t}}else if(t==="_"){if(n.indexOf(e)!==-1){return e}}return false}function s(e,t){var n="| /\\ [] {} () <>";var r=n.indexOf(e);var l=n.indexOf(t);if(r!==-1&&l!==-1){if(r!==l&&Math.abs(r-l)!==1){return n.substr(Math.max(r,l),1)}}return false}function o(e,t){var n="[] {} ()";var r=n.indexOf(e);var l=n.indexOf(t);if(r!==-1&&l!==-1){if(Math.abs(r-l)<=1){return"|"}}return false}function h(e,t){var n="/\\ \\/ ><";var r={0:"|",3:"Y",6:"X"};var l=n.indexOf(e);var u=n.indexOf(t);if(l!==-1&&u!==-1){if(u-l===1){return r[l]}}return false}function v(e,t,n){if(e===n&&t===n){return n}return false}function R(e,t){if(e===t){return e}return false}function g(e,t){var n="|/\\[]{}()<>";if(e==="_"){if(n.indexOf(t)!==-1){return t}}else if(t==="_"){if(n.indexOf(e)!==-1){return e}}return false}function d(e,t){var n="| /\\ [] {} () <>";var r=n.indexOf(e);var l=n.indexOf(t);if(r!==-1&&l!==-1){if(r!==l&&Math.abs(r-l)!==1){return n.substr(Math.max(r,l),1)}}return false}function c(e,t){if(e==="-"&&t==="_"||e==="_"&&t==="-"){return"="}return false}function p(e,t){if(e==="|"&&t==="|"){return"|"}return false}function y(e,t,n){if(t===" "||t===""){return e}else if(t===n&&e!==" "){return e}else{return t}}function m(r,l,u){if(u.fittingRules.vLayout===e){return"invalid"}var i,a=Math.min(r.length,l.length);var f,s,o=false,h;if(a===0){return"invalid"}for(i=0;i<a;i++){f=r.substr(i,1);s=l.substr(i,1);if(f!==" "&&s!==" "){if(u.fittingRules.vLayout===t){return"invalid"}else if(u.fittingRules.vLayout===n){return"end"}else{if(p(f,s)){o=o||false;continue}h=false;h=u.fittingRules.vRule1?R(f,s):h;h=!h&&u.fittingRules.vRule2?g(f,s):h;h=!h&&u.fittingRules.vRule3?d(f,s):h;h=!h&&u.fittingRules.vRule4?c(f,s):h;o=true;if(!h){return"invalid"}}}}if(o){return"end"}else{return"valid"}}function L(e,t,n){var r=e.length;var l=e.length;var u=t.length;var i,a,f;var s=1;var o,h,v;while(s<=r){i=e.slice(Math.max(0,l-s),l);a=t.slice(0,Math.min(r,s));f=a.length;v="";for(o=0;o<f;o++){h=m(i[o],a[o],n);if(h==="end"){v=h}else if(h==="invalid"){v=h;break}else{if(v===""){v="valid"}}}if(v==="invalid"){s--;break}if(v==="end"){break}if(v==="valid"){s++}}return Math.min(r,s)}function k(e,r,l){var u,i=Math.min(e.length,r.length);var a,f,s="",o;for(u=0;u<i;u++){a=e.substr(u,1);f=r.substr(u,1);if(a!==" "&&f!==" "){if(l.fittingRules.vLayout===t){s+=y(a,f)}else if(l.fittingRules.vLayout===n){s+=y(a,f)}else{o=l.fittingRules.vRule5?p(a,f):o;o=!o&&l.fittingRules.vRule1?R(a,f):o;o=!o&&l.fittingRules.vRule2?g(a,f):o;o=!o&&l.fittingRules.vRule3?d(a,f):o;o=!o&&l.fittingRules.vRule4?c(a,f):o;s+=o}}else{s+=y(a,f)}}return s}function b(e,t,n,r){var l=e.length;var u=t.length;var i=e.slice(0,Math.max(0,l-n));var a=e.slice(Math.max(0,l-n),l);var f=t.slice(0,Math.min(n,u));var s,o,h,v=[],R,g=[];o=a.length;for(s=0;s<o;s++){if(s>=u){h=a[s]}else{h=k(a[s],f[s],r)}v.push(h)}R=t.slice(Math.min(n,u),u);return g.concat(i,v,R)}function x(e,t){var n,r=e.length,l="";for(n=0;n<t;n++){l+=" "}for(n=0;n<r;n++){e[n]+=l}}function w(e,t,n){var r=e[0].length;var l=t[0].length;var u;if(r>l){x(t,r-l)}else if(l>r){x(e,l-r)}u=L(e,t,n);return b(e,t,u,n)}function B(r,l,u){if(u.fittingRules.hLayout===e){return 0}var i,R=r.length,g=l.length;var d=R;var c=1;var p=false;var y=false;var m,L,k,b;if(R===0){return 0}e:while(c<=d){m=r.substr(R-c,c);L=l.substr(0,Math.min(c,g));for(i=0;i<Math.min(c,g);i++){k=m.substr(i,1);b=L.substr(i,1);if(k!==" "&&b!==" "){if(u.fittingRules.hLayout===t){c=c-1;break e}else if(u.fittingRules.hLayout===n){if(k===u.hardBlank||b===u.hardBlank){c=c-1}break e}else{p=true;y=false;y=u.fittingRules.hRule1?a(k,b,u.hardBlank):y;y=!y&&u.fittingRules.hRule2?f(k,b,u.hardBlank):y;y=!y&&u.fittingRules.hRule3?s(k,b,u.hardBlank):y;y=!y&&u.fittingRules.hRule4?o(k,b,u.hardBlank):y;y=!y&&u.fittingRules.hRule5?h(k,b,u.hardBlank):y;y=!y&&u.fittingRules.hRule6?v(k,b,u.hardBlank):y;if(!y){c=c-1;break e}}}}if(p){break}c++}return Math.min(d,c)}function M(e,r,l,u){var i,R,g,d=[],c,p,m,L,k,b,x,w;for(i=0;i<u.height;i++){x=e[i];w=r[i];k=x.length;b=w.length;c=k-l;p=x.substr(0,Math.max(0,c));m="";var B=x.substr(Math.max(0,k-l),l);var M=w.substr(0,Math.min(l,b));for(R=0;R<l;R++){var O=R<k?B.substr(R,1):" ";var I=R<b?M.substr(R,1):" ";if(O!==" "&&I!==" "){if(u.fittingRules.hLayout===t){m+=y(O,I,u.hardBlank)}else if(u.fittingRules.hLayout===n){m+=y(O,I,u.hardBlank)}else{var N="";N=!N&&u.fittingRules.hRule1?a(O,I,u.hardBlank):N;N=!N&&u.fittingRules.hRule2?f(O,I,u.hardBlank):N;N=!N&&u.fittingRules.hRule3?s(O,I,u.hardBlank):N;N=!N&&u.fittingRules.hRule4?o(O,I,u.hardBlank):N;N=!N&&u.fittingRules.hRule5?h(O,I,u.hardBlank):N;N=!N&&u.fittingRules.hRule6?v(O,I,u.hardBlank):N;N=N||y(O,I,u.hardBlank);m+=N}}else{m+=y(O,I,u.hardBlank)}}if(l>=b){L=""}else{L=w.substr(l,Math.max(0,b-l))}d[i]=p+m+L}return d}function O(t,n,r){var l,u,i=0,a,f=[],s=r.height;for(a=0;a<s;a++){f[a]=""}if(r.printDirection===1){t=t.split("").reverse().join("")}s=t.length;for(l=0;l<s;l++){u=n[t.substr(l,1).charCodeAt(0)];if(u){if(r.fittingRules.hLayout!==e){i=1e4;for(a=0;a<r.height;a++){i=Math.min(i,B(f[a],u[a],r))}i=i===1e4?0:i}f=M(f,u,i,r)}}if(r.showHardBlanks!==true){s=f.length;for(a=0;a<s;a++){f[a]=f[a].replace(new RegExp("\\"+r.hardBlank,"g")," ")}}return f}var I=function(l,u){var i=["hLayout","hRule1","hRule2","hRule3","hRule4","hRule5","hRule6"],a={},f,s;if(l==="default"){for(s=0;s<i.length;s++){a[i[s]]=u.fittingRules[i[s]]}}else if(l==="full"){a={hLayout:e,hRule1:false,hRule2:false,hRule3:false,hRule4:false,hRule5:false,hRule6:false}}else if(l==="fitted"){a={hLayout:t,hRule1:false,hRule2:false,hRule3:false,hRule4:false,hRule5:false,hRule6:false}}else if(l==="controlled smushing"){a={hLayout:r,hRule1:true,hRule2:true,hRule3:true,hRule4:true,hRule5:true,hRule6:true}}else if(l==="universal smushing"){a={hLayout:n,hRule1:false,hRule2:false,hRule3:false,hRule4:false,hRule5:false,hRule6:false}}else{return}return a};var N=function(l,u){var i=["vLayout","vRule1","vRule2","vRule3","vRule4","vRule5"],a={},f,s;if(l==="default"){for(s=0;s<i.length;s++){a[i[s]]=u.fittingRules[i[s]]}}else if(l==="full"){a={vLayout:e,vRule1:false,vRule2:false,vRule3:false,vRule4:false,vRule5:false}}else if(l==="fitted"){a={vLayout:t,vRule1:false,vRule2:false,vRule3:false,vRule4:false,vRule5:false}}else if(l==="controlled smushing"){a={vLayout:r,vRule1:true,vRule2:true,vRule3:true,vRule4:true,vRule5:true}}else if(l==="universal smushing"){a={vLayout:n,vRule1:false,vRule2:false,vRule3:false,vRule4:false,vRule5:false}}else{return}return a};var F=function(e,t,n){n=n.replace(/\r\n/g,"\n").replace(/\r/g,"\n");var r=n.split("\n");var u=[];var i,a,f;a=r.length;for(i=0;i<a;i++){u.push(O(r[i],l[e],t))}a=u.length;f=u[0];for(i=1;i<a;i++){f=w(f,u[i],t)}return f.join("\n")};var j=function(e,t,n){j.text(e,t,n)};j.text=function(e,t,n){var r="";e=e+"";if(typeof arguments[1]==="function"){n=t;t={};t.font=u.font}if(typeof t==="string"){r=t;t={}}else{t=t||{};r=t.font||u.font}j.loadFont(r,function(l,u){if(l){return n(l)}n(null,F(r,C(u,t),e))})};j.textSync=function(e,t){var n="";e=e+"";if(typeof t==="string"){n=t;t={}}else{t=t||{};n=t.font||u.font}var r=C(j.loadFontSync(n),t);return F(n,r,e)};function C(e,t){var n=JSON.parse(JSON.stringify(e)),r,l;if(typeof t.horizontalLayout!=="undefined"){r=I(t.horizontalLayout,e);for(l in r){n.fittingRules[l]=r[l]}}if(typeof t.verticalLayout!=="undefined"){r=N(t.verticalLayout,e);for(l in r){n.fittingRules[l]=r[l]}}n.printDirection=typeof t.printDirection!=="undefined"?t.printDirection:e.printDirection;n.showHardBlanks=t.showHardBlanks||false;return n}j.metadata=function(e,t){e=e+"";j.loadFont(e,function(n,r){if(n){t(n);return}t(null,r,l[e].comment)})};j.defaults=function(e){if(typeof e==="object"&&e!==null){for(var t in e){if(e.hasOwnProperty(t)){u[t]=e[t]}}}return JSON.parse(JSON.stringify(u))};j.parseFont=function(e,t){t=t.replace(/\r\n/g,"\n").replace(/\r/g,"\n");l[e]={};var n=t.split("\n");var r=n.splice(0,1)[0].split(" ");var u=l[e];var a={};a.hardBlank=r[0].substr(5,1);a.height=parseInt(r[1],10);a.baseline=parseInt(r[2],10);a.maxLength=parseInt(r[3],10);a.oldLayout=parseInt(r[4],10);a.numCommentLines=parseInt(r[5],10);a.printDirection=r.length>=6?parseInt(r[6],10):0;a.fullLayout=r.length>=7?parseInt(r[7],10):null;a.codeTagCount=r.length>=8?parseInt(r[8],10):null;a.fittingRules=i(a.oldLayout,a.fullLayout);u.options=a;if(a.hardBlank.length!==1||isNaN(a.height)||isNaN(a.baseline)||isNaN(a.maxLength)||isNaN(a.oldLayout)||isNaN(a.numCommentLines)){throw new Error("FIGlet header contains invalid values.")}var f=[],s;for(s=32;s<=126;s++){f.push(s)}f=f.concat(196,214,220,228,246,252,223);if(n.length<a.numCommentLines+a.height*f.length){throw new Error("FIGlet file is missing data.")}var o,h,v=false;u.comment=n.splice(0,a.numCommentLines).join("\n");u.numChars=0;while(n.length>0&&u.numChars<f.length){o=f[u.numChars];u[o]=n.splice(0,a.height);for(s=0;s<a.height;s++){if(typeof u[o][s]==="undefined"){u[o][s]=""}else{h=new RegExp("\\"+u[o][s].substr(u[o][s].length-1,1)+"+$");u[o][s]=u[o][s].replace(h,"")}}u.numChars++}while(n.length>0){o=n.splice(0,1)[0].split(" ")[0];if(/^0[xX][0-9a-fA-F]+$/.test(o)){o=parseInt(o,16)}else if(/^0[0-7]+$/.test(o)){o=parseInt(o,8)}else if(/^[0-9]+$/.test(o)){o=parseInt(o,10)}else if(/^-0[xX][0-9a-fA-F]+$/.test(o)){o=parseInt(o,16)}else{if(o===""){break}console.log("Invalid data:"+o);v=true;break}u[o]=n.splice(0,a.height);for(s=0;s<a.height;s++){if(typeof u[o][s]==="undefined"){u[o][s]=""}else{h=new RegExp("\\"+u[o][s].substr(u[o][s].length-1,1)+"+$");u[o][s]=u[o][s].replace(h,"")}}u.numChars++}if(v===true){throw new Error("Error parsing data.")}return a};j.loadFont=function(e,t){if(l[e]){t(null,l[e].options);return}if(typeof fetch!=="function"){console.error("figlet.js requires the fetch API or a fetch polyfill such as https://cdnjs.com/libraries/fetch");throw new Error("fetch is required for figlet.js to work.")}fetch(u.fontPath+"/"+e+".flf").then(function(e){if(e.ok){return e.text()}console.log("Unexpected response",e);throw new Error("Network response was not ok.")}).then(function(n){t(null,j.parseFont(e,n))}).catch(t)};j.loadFontSync=function(e){if(l[e]){return l[e].options}throw new Error("synchronous font loading is not implemented for the browser")};j.preloadFonts=function(e,t){if(typeof jQuery==="undefined"){throw new Error("jQuery is required for ajax method to work.")}jQuery.when.apply(this,e.map(function(e){return jQuery.get(u.fontPath+"/"+e+".flf")})).then(function(){var n=e.length>1?arguments:[arguments];for(var r in e){j.parseFont(e[r],n[r][0])}if(t)t()})};j.figFonts=l;return j}();if(typeof module!=="undefined"){if(typeof module.exports!=="undefined"){module.exports=figlet}}
//rebuild by neat 