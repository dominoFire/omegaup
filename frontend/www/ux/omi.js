(function(){var ctx={e:null,c:[38,38,40,40,37,39,37,39,66,65,-1],i:0};window.addEventListener("keydown",function(e){if(ctx.c[ctx.i]==e.keyCode){ctx.i++;if(ctx.i==ctx.c.length-1&&ctx.e==null){ctx.e=[];function n(e){var t=document.createElement(e.nodeName);t.className=e.className;for(var r=0;r<e.childNodes.length;r++){if(e.childNodes[r].nodeType==document.TEXT_NODE){var i=e.childNodes[r].nodeValue.split(/\s+/);for(var s=0;s<i.length;s++){var o=document.createElement("span");o.appendChild(document.createTextNode(i[s]));t.appendChild(o);t.appendChild(document.createTextNode(" "));if(i[s].trim().length>0){ctx.e.push($(o))}}}else{var u=n(e.childNodes[r]);t.appendChild(u)}}return t}var r=$("#problem .statement")[0];var i=r.parentNode;var s=r.nextSibling;i.removeChild(r);i.insertBefore(n(r),s);for(var o=0;o<ctx.e.length;o++){(function(e,t){e.x=t.left;e.y=t.top;e.d=0;e.f=parseInt(e.css("font-size"));e.css("display","inline-block")})(ctx.e[o],ctx.e[o].offset())}for(var o=0;o<ctx.e.length;o++){ctx.e[o].css("position","absolute");ctx.e[o].offset({left:ctx.e[o].x,top:ctx.e[o].y})}function u(){var e="transform";var n=["","-moz-","-ms-","-o-","-webkit-"];for(var r=0;r<ctx.e.length;r++){ctx.e[r].x+=5*(Math.random()-.5);ctx.e[r].y+=5*(Math.random()-.5);ctx.e[r].d+=5*(Math.random()-.5);ctx.e[r].f+=5*(Math.random()-.5);if(ctx.e[r].f<5)ctx.e[r].f=5;ctx.e[r].offset({left:ctx.e[r].x,top:ctx.e[r].y});ctx.e[r].css("font-size",ctx.e[r].f+"px");ctx.e[r].css("position","absolute");var i="rotate("+ctx.e[r].d+"deg)";for(t in n){ctx.e[r].css(n[t]+e,i)}}}setInterval(u,50)}}else{ctx.i=0}});})();