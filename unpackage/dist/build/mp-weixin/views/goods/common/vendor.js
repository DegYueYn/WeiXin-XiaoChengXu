(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["views/goods/common/vendor"],{b075:function(e,t,o){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.qrcodeCanvas=t.saveImg=void 0;var r=i(o("d5de"));function i(e){return e&&e.__esModule?e:{default:e}}var a=!1,n=function(t,o){t?a?e.getSetting({success:function(r){r.authSetting["scope.writePhotosAlbum"]?(e.showLoading({title:"正在下载"}),e.downloadFile({url:t,success:function(t){200==t.statusCode?e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.hideLoading(),o&&o(),e.showToast({title:"保存成功"})},fail:function(t){e.hideLoading(),tip({title:"下载失败，错误原因："+t.errMsg,icon:"none"})}}):(e.hideLoading(),e.showToast({title:"下载失败",icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"下载失败，错误原因："+t.errMsg,icon:"none"})}})):e.showModal({title:"提示",content:"请先在设置页面打开“保存相册”使用权限",confirmText:"去设置",cancelText:"算了",success:function(t){t.confirm&&e.openSetting()}})}}):(a=!0,e.authorize({scope:"scope.writePhotosAlbum",success:function(){e.showLoading({title:"正在下载"}),e.downloadFile({url:t,success:function(t){200==t.statusCode?e.saveImageToPhotosAlbum({filePath:t.tempFilePath,success:function(){e.hideLoading(),o&&o(),e.showToast({title:"保存成功"})},fail:function(t){e.hideLoading(),tip({title:"下载失败，错误原因："+t.errMsg,icon:"none"})}}):(e.hideLoading(),e.showToast({title:"下载失败",icon:"none"}))},fail:function(t){e.hideLoading(),e.showToast({title:"下载失败，错误原因："+t.errMsg,icon:"none"})}})}})):e.showToast({title:"未找到图片",icon:"none"})};t.saveImg=n;var c=function(t,o,i,a,n){r.default.api.draw(o,{ctx:e.createCanvasContext(t,n),width:f(i),height:f(a)})};function f(t){return Math.round(e.getSystemInfoSync().windowWidth*t/750)}t.qrcodeCanvas=c}).call(this,o("543d")["default"])},bd0e:function(e,t,o){"use strict";(function(e){function o(e,t,o,i,a,n,c){if(console.log(e,"fillRoundRect"),2*n>i||2*n>a)return!1;e.save(),e.translate(t,o),r(e,i,a,n),e.fillStyle=c||"#000",e.fill(),e.restore()}function r(e,t,o,r){e.beginPath(0),e.arc(t-r,o-r,r,0,Math.PI/2),e.lineTo(r,o),e.arc(r,o-r,r,Math.PI/2,Math.PI),e.lineTo(0,r),e.arc(r,r,r,Math.PI,3*Math.PI/2),e.lineTo(t-r,0),e.arc(t-r,r,r,3*Math.PI/2,2*Math.PI),e.lineTo(t,o-r),e.closePath()}function i(e,t,o,r,i,a,n){r<2*a&&(a=r/2),i<2*a&&(a=i/2),e.beginPath(),e.moveTo(t+a,o),e.arcTo(t+r,o,t+r,o+i,a),e.arcTo(t+r,o+i,t,o+i,a),e.arcTo(t,o+i,t,o,a),e.arcTo(t,o,t+r,o,a),e.closePath(),e.lineWidth=n}function a(t){return new Promise((function(o,r){e.getImageInfo({src:t,success:function(e){o(e)}})}))}function n(e,t,o,r,i,a){var n=i,c=a,f=o,l=r;e.save(),e.beginPath(),e.arc(n/2+f,c/2+l,n/2,0,2*Math.PI,!1),e.clip(),e.drawImage(t,f,l,n,c),e.restore()}function c(e,t,o,r,i,a){if(console.log(t,"drawImgCover"),t.width/t.height>=i/a){var n=t.height,c=Math.ceil(i/a*n);e.drawImage(t.path,(t.width-c)/2,0,c,t.height,o,r,i,a)}else{var f=t.width,l=Math.ceil(a/i*f);e.drawImage(t.path,0,(t.height-l)/2,t.width,l,o,r,i,a)}}function f(e,t){e.ctx.font=e.font,t&&t();for(var o=l(e.ctx,e.word,e.maxWidth),r=o>=e.maxLine?e.maxLine:o,i=0,a=0;a<r;a++){if(i>=e.word.length)break;var n=e.word.slice(i),c=0;if(e.ctx.measureText(n).width>e.maxWidth){for(var f=0;f<n.length;f++)if(c+=e.ctx.measureText(n[f]).width,c>e.maxWidth){i+=f;var s=!1,h=1,u=/^[a-zA-Z]*$/;if(u.test(n[f-1])){console.log(f-1,n[f-1],"最后一个是字母");for(var d=1;d<f-1;d++){if(!u.test(n[f-1-d])){console.log(f-1-d,n[f-1-d],h,i,"这个位置是空字符"),i-=h,s=!0;break}h++}}a===e.maxLine-1?e.ctx.fillText(n.slice(0,f-1)+"...",e.textCenter?(e.cvsW-e.ctx.measureText(n.slice(0,f-1)).width)/2:e.x,e.y+(a+1)*e.l_h):e.ctx.fillText(n.slice(0,s?f-h:f),e.textCenter?(e.cvsW-e.ctx.measureText(n.slice(0,s?f-h:f)).width)/2:e.x,e.y+(a+1)*e.l_h);break}}else e.ctx.fillText(n.slice(0),e.textCenter?(e.cvsW-e.ctx.measureText(n.slice(0)).width)/2:e.x,e.y+(a+1)*e.l_h)}}function l(e,t,o){for(var r=Math.ceil(e.measureText(t).width/o)+1,i=0,a=0,n=0;n<r;n++){var c=t.slice(i),f=0;if(!(e.measureText(c).width>o)){a=n+1,console.log(c.slice(0),a,n,"最后一行");break}for(var l=0;l<c.length;l++)if(f+=e.measureText(c[l]).width,f>o){i+=l;var s=1,h=/^[a-zA-Z]*$/;if(h.test(c[l-1])){console.log(l-1,c[l-1],"最后一个是字母");for(var u=1;u<l-1;u++){if(!h.test(c[l-1-u])){console.log(l-1-u,c[l-1-u],s,i,"这个位置是空字符"),i-=s,!0;break}s++}}break}}return console.log(a,"总行数"),a}function s(e,t,o,r,i,a,n,c,f,l){e.beginPath(),e.fillStyle=t,e.moveTo(o+n,r),e.lineTo(o+i-n,r),e.arc(o+i-n,r+n,n,3*Math.PI/2,2*Math.PI),e.lineTo(o+i,r+a-n),e.arc(o+i-n,r+a-n,n,Math.PI,Math.PI/2),e.lineTo(o+n,r+a),e.arc(o+n,r+a-n,n,Math.PI/2,Math.PI),e.lineTo(o,r+n),e.arc(o+n,r+n,n,Math.PI,3*Math.PI/2),e.fill(),e.closePath(),e.beginPath(),e.fillStyle=f,e.setTextAlign(l),e.textBaseline="middle",e.fillText(c,o+i/2,r+a/2)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var h={fillRoundRect:o,roundRectBorder:i,getImageInfo:a,drawCircular:n,drawImgCover:c,dealWords:f,drawButton:s,getLineNum:l};t.default=h}).call(this,o("543d")["default"])},d5de:function(e,t){(function(){var t,o,r,i,a,n,c=[0,11,15,19,23,27,31,16,18,20,22,24,26,28,20,22,24,24,26,28,28,22,24,24,26,26,28,28,24,24,26,26,26,28,28,24,26,26,26,28,28],f=[3220,1468,2713,1235,3062,1890,2119,1549,2344,2936,1117,2583,1330,2470,1667,2249,2028,3780,481,4011,142,3098,831,3445,592,2517,1776,2234,1951,2827,1070,2660,1345,3177],l=[30660,29427,32170,30877,26159,25368,27713,26998,21522,20773,24188,23371,17913,16590,20375,19104,13663,12392,16177,14854,9396,8579,11994,11245,5769,5054,7399,6608,1890,597,3340,2107],s=[1,0,19,7,1,0,16,10,1,0,13,13,1,0,9,17,1,0,34,10,1,0,28,16,1,0,22,22,1,0,16,28,1,0,55,15,1,0,44,26,2,0,17,18,2,0,13,22,1,0,80,20,2,0,32,18,2,0,24,26,4,0,9,16,1,0,108,26,2,0,43,24,2,2,15,18,2,2,11,22,2,0,68,18,4,0,27,16,4,0,19,24,4,0,15,28,2,0,78,20,4,0,31,18,2,4,14,18,4,1,13,26,2,0,97,24,2,2,38,22,4,2,18,22,4,2,14,26,2,0,116,30,3,2,36,22,4,4,16,20,4,4,12,24,2,2,68,18,4,1,43,26,6,2,19,24,6,2,15,28,4,0,81,20,1,4,50,30,4,4,22,28,3,8,12,24,2,2,92,24,6,2,36,22,4,6,20,26,7,4,14,28,4,0,107,26,8,1,37,22,8,4,20,24,12,4,11,22,3,1,115,30,4,5,40,24,11,5,16,20,11,5,12,24,5,1,87,22,5,5,41,24,5,7,24,30,11,7,12,24,5,1,98,24,7,3,45,28,15,2,19,24,3,13,15,30,1,5,107,28,10,1,46,28,1,15,22,28,2,17,14,28,5,1,120,30,9,4,43,26,17,1,22,28,2,19,14,28,3,4,113,28,3,11,44,26,17,4,21,26,9,16,13,26,3,5,107,28,3,13,41,26,15,5,24,30,15,10,15,28,4,4,116,28,17,0,42,26,17,6,22,28,19,6,16,30,2,7,111,28,17,0,46,28,7,16,24,30,34,0,13,24,4,5,121,30,4,14,47,28,11,14,24,30,16,14,15,30,6,4,117,30,6,14,45,28,11,16,24,30,30,2,16,30,8,4,106,26,8,13,47,28,7,22,24,30,22,13,15,30,10,2,114,28,19,4,46,28,28,6,22,28,33,4,16,30,8,4,122,30,22,3,45,28,8,26,23,30,12,28,15,30,3,10,117,30,3,23,45,28,4,31,24,30,11,31,15,30,7,7,116,30,21,7,45,28,1,37,23,30,19,26,15,30,5,10,115,30,19,10,47,28,15,25,24,30,23,25,15,30,13,3,115,30,2,29,46,28,42,1,24,30,23,28,15,30,17,0,115,30,10,23,46,28,10,35,24,30,19,35,15,30,17,1,115,30,14,21,46,28,29,19,24,30,11,46,15,30,13,6,115,30,14,23,46,28,44,7,24,30,59,1,16,30,12,7,121,30,12,26,47,28,39,14,24,30,22,41,15,30,6,14,121,30,6,34,47,28,46,10,24,30,2,64,15,30,17,4,122,30,29,14,46,28,49,10,24,30,24,46,15,30,4,18,122,30,13,32,46,28,48,14,24,30,42,32,15,30,20,4,117,30,40,7,47,28,43,22,24,30,10,67,15,30,19,6,118,30,18,31,47,28,34,34,24,30,20,61,15,30],h=[255,0,1,25,2,50,26,198,3,223,51,238,27,104,199,75,4,100,224,14,52,141,239,129,28,193,105,248,200,8,76,113,5,138,101,47,225,36,15,33,53,147,142,218,240,18,130,69,29,181,194,125,106,39,249,185,201,154,9,120,77,228,114,166,6,191,139,98,102,221,48,253,226,152,37,179,16,145,34,136,54,208,148,206,143,150,219,189,241,210,19,92,131,56,70,64,30,66,182,163,195,72,126,110,107,58,40,84,250,133,186,61,202,94,155,159,10,21,121,43,78,212,229,172,115,243,167,87,7,112,192,247,140,128,99,13,103,74,222,237,49,197,254,24,227,165,153,119,38,184,180,124,17,68,146,217,35,32,137,46,55,63,209,91,149,188,207,205,144,135,151,178,220,252,190,97,242,86,211,171,20,42,93,158,132,60,57,83,71,109,65,162,31,45,67,216,183,123,164,118,196,23,73,236,127,12,111,246,108,161,59,82,41,157,85,170,251,96,134,177,187,204,62,90,203,89,95,176,156,169,160,81,11,245,22,235,122,117,44,215,79,174,213,233,230,231,173,232,116,214,244,234,168,80,88,175],u=[1,2,4,8,16,32,64,128,29,58,116,232,205,135,19,38,76,152,45,90,180,117,234,201,143,3,6,12,24,48,96,192,157,39,78,156,37,74,148,53,106,212,181,119,238,193,159,35,70,140,5,10,20,40,80,160,93,186,105,210,185,111,222,161,95,190,97,194,153,47,94,188,101,202,137,15,30,60,120,240,253,231,211,187,107,214,177,127,254,225,223,163,91,182,113,226,217,175,67,134,17,34,68,136,13,26,52,104,208,189,103,206,129,31,62,124,248,237,199,147,59,118,236,197,151,51,102,204,133,23,46,92,184,109,218,169,79,158,33,66,132,21,42,84,168,77,154,41,82,164,85,170,73,146,57,114,228,213,183,115,230,209,191,99,198,145,63,126,252,229,215,179,123,246,241,255,227,219,171,75,150,49,98,196,149,55,110,220,165,87,174,65,130,25,50,100,200,141,7,14,28,56,112,224,221,167,83,166,81,162,89,178,121,242,249,239,195,155,43,86,172,69,138,9,18,36,72,144,61,122,244,245,247,243,251,235,203,139,11,22,44,88,176,125,250,233,207,131,27,54,108,216,173,71,142,0],d=[],g=[],v=[],w=[],m=[],x=2;function T(e,t){var o;e>t&&(o=e,e=t,t=o),o=t,o*=t,o+=t,o>>=1,o+=e,w[o]=1}function b(e,t){var r;for(v[e+o*t]=1,r=-2;r<2;r++)v[e+r+o*(t-2)]=1,v[e-2+o*(t+r+1)]=1,v[e+2+o*(t+r)]=1,v[e+r+1+o*(t+2)]=1;for(r=0;r<2;r++)T(e-1,t+r),T(e+1,t-r),T(e-r,t-1),T(e+r,t+1)}function P(e){while(e>=255)e-=255,e=(e>>8)+(255&e);return e}var M=[];function I(e,t,o,r){var i,a,n;for(i=0;i<r;i++)d[o+i]=0;for(i=0;i<t;i++){if(n=h[d[e+i]^d[o]],255!=n)for(a=1;a<r;a++)d[o+a-1]=d[o+a]^u[P(n+M[r-a])];else for(a=o;a<o+r;a++)d[a]=d[a+1];d[o+r-1]=255==n?0:u[P(n+M[0])]}}function p(e,t){var o;return e>t&&(o=e,e=t,t=o),o=t,o+=t*t,o>>=1,o+=e,w[o]}function k(e){var t,r,i,a;switch(e){case 0:for(r=0;r<o;r++)for(t=0;t<o;t++)t+r&1||p(t,r)||(v[t+r*o]^=1);break;case 1:for(r=0;r<o;r++)for(t=0;t<o;t++)1&r||p(t,r)||(v[t+r*o]^=1);break;case 2:for(r=0;r<o;r++)for(i=0,t=0;t<o;t++,i++)3==i&&(i=0),i||p(t,r)||(v[t+r*o]^=1);break;case 3:for(a=0,r=0;r<o;r++,a++)for(3==a&&(a=0),i=a,t=0;t<o;t++,i++)3==i&&(i=0),i||p(t,r)||(v[t+r*o]^=1);break;case 4:for(r=0;r<o;r++)for(i=0,a=r>>1&1,t=0;t<o;t++,i++)3==i&&(i=0,a=!a),a||p(t,r)||(v[t+r*o]^=1);break;case 5:for(a=0,r=0;r<o;r++,a++)for(3==a&&(a=0),i=0,t=0;t<o;t++,i++)3==i&&(i=0),(t&r&1)+!(!i|!a)||p(t,r)||(v[t+r*o]^=1);break;case 6:for(a=0,r=0;r<o;r++,a++)for(3==a&&(a=0),i=0,t=0;t<o;t++,i++)3==i&&(i=0),(t&r&1)+(i&&i==a)&1||p(t,r)||(v[t+r*o]^=1);break;case 7:for(a=0,r=0;r<o;r++,a++)for(3==a&&(a=0),i=0,t=0;t<o;t++,i++)3==i&&(i=0),(i&&i==a)+(t+r&1)&1||p(t,r)||(v[t+r*o]^=1);break}}var L=3,C=3,y=40,S=10;function W(e){var t,o=0;for(t=0;t<=e;t++)m[t]>=5&&(o+=L+m[t]-5);for(t=3;t<e-1;t+=2)m[t-2]==m[t+2]&&m[t+2]==m[t-1]&&m[t-1]==m[t+1]&&3*m[t-1]==m[t]&&(0==m[t-3]||t+3>e||3*m[t-3]>=4*m[t]||3*m[t+3]>=4*m[t])&&(o+=y);return o}function _(){var e,t,r,i,a,n=0,c=0;for(t=0;t<o-1;t++)for(e=0;e<o-1;e++)(v[e+o*t]&&v[e+1+o*t]&&v[e+o*(t+1)]&&v[e+1+o*(t+1)]||!(v[e+o*t]||v[e+1+o*t]||v[e+o*(t+1)]||v[e+1+o*(t+1)]))&&(n+=C);for(t=0;t<o;t++){for(m[0]=0,r=i=e=0;e<o;e++)(a=v[e+o*t])==i?m[r]++:m[++r]=1,i=a,c+=i?1:-1;n+=W(r)}c<0&&(c=-c);var f=c,l=0;f+=f<<2,f<<=1;while(f>o*o)f-=o*o,l++;for(n+=l*S,e=0;e<o;e++){for(m[0]=0,r=i=t=0;t<o;t++)(a=v[e+o*t])==i?m[r]++:m[++r]=1,i=a;n+=W(r)}return n}function A(e){var m,L,C,y,S,W,A,R;y=e.length,t=0;do{if(t++,C=4*(x-1)+16*(t-1),r=s[C++],i=s[C++],a=s[C++],n=s[C],C=a*(r+i)+i-3+(t<=9),y<=C)break}while(t<40);for(o=17+4*t,S=a+(a+n)*(r+i)+i,y=0;y<S;y++)g[y]=0;for(d=e.slice(0),y=0;y<o*o;y++)v[y]=0;for(y=0;y<(o*(o+1)+1)/2;y++)w[y]=0;for(y=0;y<3;y++){for(C=0,L=0,1==y&&(C=o-7),2==y&&(L=o-7),v[L+3+o*(C+3)]=1,m=0;m<6;m++)v[L+m+o*C]=1,v[L+o*(C+m+1)]=1,v[L+6+o*(C+m)]=1,v[L+m+1+o*(C+6)]=1;for(m=1;m<5;m++)T(L+m,C+1),T(L+1,C+m+1),T(L+5,C+m),T(L+m+1,C+5);for(m=2;m<4;m++)v[L+m+o*(C+2)]=1,v[L+2+o*(C+m+1)]=1,v[L+4+o*(C+m)]=1,v[L+m+1+o*(C+4)]=1}if(t>1)for(y=c[t],L=o-7;;){m=o-7;while(m>y-3){if(b(m,L),m<y)break;m-=y}if(L<=y+9)break;L-=y,b(6,L),b(L,6)}for(v[8+o*(o-8)]=1,L=0;L<7;L++)T(7,L),T(o-8,L),T(7,L+o-7);for(m=0;m<8;m++)T(m,7),T(m+o-8,7),T(m,o-8);for(m=0;m<9;m++)T(m,8);for(m=0;m<8;m++)T(m+o-8,8),T(8,m);for(L=0;L<7;L++)T(8,L+o-7);for(m=0;m<o-14;m++)1&m?(T(8+m,6),T(6,8+m)):(v[8+m+6*o]=1,v[6+o*(8+m)]=1);if(t>6)for(y=f[t-7],C=17,m=0;m<6;m++)for(L=0;L<3;L++,C--)1&(C>11?t>>C-12:y>>C)?(v[5-m+o*(2-L+o-11)]=1,v[2-L+o-11+o*(5-m)]=1):(T(5-m,2-L+o-11),T(2-L+o-11,5-m));for(L=0;L<o;L++)for(m=0;m<=L;m++)v[m+o*L]&&T(m,L);for(S=d.length,W=0;W<S;W++)g[W]=d.charCodeAt(W);if(d=g.slice(0),m=a*(r+i)+i,S>=m-2&&(S=m-2,t>9&&S--),W=S,t>9){d[W+2]=0,d[W+3]=0;while(W--)y=d[W],d[W+3]|=255&y<<4,d[W+2]=y>>4;d[2]|=255&S<<4,d[1]=S>>4,d[0]=64|S>>12}else{d[W+1]=0,d[W+2]=0;while(W--)y=d[W],d[W+2]|=255&y<<4,d[W+1]=y>>4;d[1]|=255&S<<4,d[0]=64|S>>4}W=S+3-(t<10);while(W<m)d[W++]=236,d[W++]=17;for(M[0]=1,W=0;W<n;W++){for(M[W+1]=1,A=W;A>0;A--)M[A]=M[A]?M[A-1]^u[P(h[M[A]]+W)]:M[A-1];M[0]=u[P(h[M[0]]+W)]}for(W=0;W<=n;W++)M[W]=h[M[W]];for(C=m,L=0,W=0;W<r;W++)I(L,a,C,n),L+=a,C+=n;for(W=0;W<i;W++)I(L,a+1,C,n),L+=a+1,C+=n;for(L=0,W=0;W<a;W++){for(A=0;A<r;A++)g[L++]=d[W+A*a];for(A=0;A<i;A++)g[L++]=d[r*a+W+A*(a+1)]}for(A=0;A<i;A++)g[L++]=d[r*a+W+A*(a+1)];for(W=0;W<n;W++)for(A=0;A<r+i;A++)g[L++]=d[m+W+A*n];for(d=g,m=L=o-1,C=S=1,R=(a+n)*(r+i)+i,W=0;W<R;W++)for(y=d[W],A=0;A<8;A++,y<<=1){128&y&&(v[m+o*L]=1);do{S?m--:(m++,C?0!=L?L--:(m-=2,C=!C,6==m&&(m--,L=9)):L!=o-1?L++:(m-=2,C=!C,6==m&&(m--,L-=8))),S=!S}while(p(m,L))}for(d=v.slice(0),y=0,L=3e4,C=0;C<8;C++){if(k(C),m=_(),m<L&&(L=m,y=C),7==y)break;v=d.slice(0)}for(y!=C&&k(y),L=l[y+(x-1<<3)],C=0;C<8;C++,L>>=1)1&L&&(v[o-1-C+8*o]=1,C<6?v[8+o*C]=1:v[8+o*(C+1)]=1);for(C=0;C<7;C++,L>>=1)1&L&&(v[8+o*(o-7+C)]=1,C?v[6-C+8*o]=1:v[7+8*o]=1);return v}var R=null,F=null,z={get ecclevel(){return x},set ecclevel(e){x=e},get size(){return F},set size(e){F=e},get canvas(){return R},set canvas(e){R=e},getFrame:function(e){return A(e)},draw:function(e,t,r,i){if(x=i||x,t=t||R,t){r=r||F||Math.min(t.width,t.height);var a=A(e),n=t.ctx,c=Math.round(r/(o+8)),f=c*(o+8),l=Math.floor((r-f)/2);r=f,n.clearRect(0,0,t.width,t.height),n.setFillStyle("#000000");for(var s=0;s<o;s++)for(var h=0;h<o;h++)a[h*o+s]&&n.fillRect(c*(4+s)+l,c*(4+h)+l,c,c);n.draw()}else console.warn("No canvas provided to draw QR code in!")}};e.exports={api:z}})()}}]);