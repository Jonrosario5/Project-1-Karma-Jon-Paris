function agknTagBuilder(){var n,t="-1",e="-1",r="-1",i="-1",a="-1",o="-1",c="-1",g="",u="",d=1,s=1,h="iframe",f={},l=null,p=null,w=0,m=this,T=function(n){return String(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},v=function(d){var s="{";s+=k("bpid",t),s+=","+k("loc",l),s+=","+k("gdpr",g),s+=","+k("gdpr_consent",u),p||(p="-1"),s+=","+k("ref",p),s+=","+k("cid",o),s+=","+k("sid",a),s+=","+k("gen",e),s+=","+k("age",r),s+=","+k("cat",i),s+=","+k("brd",c);for(var h in f){var w=k(h,f[h]);n(w).length+d+n(s).length<2e3&&(s+=","+w)}return s+="}"},k=function(n,t){return'"'+n+'":"'+t+'"'},y=function(){var e="http"+("https:"==window.location.protocol?"s":"")+"://",r="/"+h+"/8613/",i=e+"d.agkn.com"+r+"?che="+Math.floor(1e9*Math.random())+"&gdpr="+g+"&gdpr_consent="+u+"&url="+n(l)+"&bpid="+t+"&c=";return i+=n(v(i.length)),i.length>=2e3&&(i="%"==i.charAt(1998)?i.substr(0,1998):"%"==i.charAt(1999)?i.substr(0,1999):i.substr(0,2e3),"%"==i.charAt(i.length-3)&&"2"==i.charAt(i.length-2)&&"5"==i.charAt(i.length-1)&&(i=i.substr(0,i.length-3))),i},A=function(){var n,t,e=0,r=0;if(1==d)for(var i=window;;){try{n=i.document.location,t=i.document.referrer,e=r}catch(n){}if(i==window.top||i==i.parent)break;i=i.parent,r++}else n=window.document.location,t=window.document.referrer;w=r-e,p=t.toString(),l=0==w?n.href:p};if("function"==typeof encodeURIComponent)n=encodeURIComponent;else{var _=new RegExp('[\0- ]|["-&]|[+-,]|/|[:-@]|[[-^]|`|[{-}]|[-￿]',"g");n=function(n){return n.toString().replace(_,C)}}var b=function(n){var t=n.toString(16).toUpperCase();return t.length<2?"0"+t:t},C=function(n){var t=n.charCodeAt(0);return isNaN(t)?"":t<128?"%"+b(t):t<2048?"%"+b(192+(t>>6))+"%"+b(128+(63&t)):t<65536?"%"+b(224+(t>>12))+"%"+b(128+(t>>6&63))+"%"+b(128+(63&t)):"%"+b(240+(t>>18))+"%"+b(128+(t>>12&63))+"%"+b(128+(t>>6&63))+"%"+b(128+(63&t))},B=function(n,t,e){var r=window.document.createElement("iframe");return r.height=t||0,r.width=e||0,r.frameBorder=0,r.src=n,r.style.display="none",r},N=function(n){var t=window.document.createElement("img");return t.height=0,t.width=0,t.src=n,t.style.display="none",t},S=function(n){var t=null==window.document.body?window.document.getElementsByTagName("head")[0]:window.document.body;t.insertBefore(n,t.lastChild)};this.addEchoKeyValue=function(n,t){f[T(n)]=T(t)},this.setBpId=function(n){t=T(n)},this.setGen=function(n){e=T(n)},this.setAge=function(n){r=T(n)},this.setCat=function(n){i=T(n)},this.setSid=function(n){a=T(n)},this.setCid=function(n){o=T(n)},this.setBrd=function(n){c=T(n)},this.setGdpr=function(n){g=n},this.setGdprConsent=function(n){u=n},this.setFindParentFrame=function(n){d=n},this.setForceRetag=function(n){s=n},this.setTrimAnchor=function(n){n=n},this.generateTag=function(n){h="img"==n?"pixel":"iframe";var t;if(A(),!window._isAgknTagSet||1==s){if("function"==typeof setUpAgknTag)try{setUpAgknTag(m)}catch(n){}var e=y();t="img"==n?N(e):B(e,0,0),window._isAgknTagSet=1,S(t)}return t}}var _agknTag=new agknTagBuilder,_agknTagName="_agknEchoTag";window[_agknTagName]=_agknTag,window[_agknTagName]?window[_agknTagName].generateTag():generateTag();