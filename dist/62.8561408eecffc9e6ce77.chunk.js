webpackJsonp([62],{1408:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r},i=this&&this.__metadata||function(t,e){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(t,e)};Object.defineProperty(e,"__esModule",{value:!0});var s=n(5),r=function(){function t(){this.width=3}return t=o([s.Component({selector:"sd-home",template:n(1906)}),i("design:paramtypes",[])],t)}();e.SignatureComponent=r},1510:function(t,e,n){"use strict";var o=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])};return function(e,n){function o(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(o.prototype=n.prototype,new o)}}();Object.defineProperty(e,"__esModule",{value:!0}),n(2047);var i=n(12),s=n(5),r=function(t){function e(e,n,o,i){var r=t.call(this,"Signature",e,n,[],o,i)||this;return r.el=e,r.cdRef=n,r._ejIterableDiffers=o,r._ejkeyvaluediffers=i,r.change_output=new s.EventEmitter,r.ejchange_output=new s.EventEmitter,r.mouseDown_output=new s.EventEmitter,r.mouseMove_output=new s.EventEmitter,r.mouseUp_output=new s.EventEmitter,r}return o(e,t),e.decorators=[{type:s.Component,args:[{selector:"ej-signature",template:""}]}],e.ctorParameters=function(){return[{type:s.ElementRef},{type:s.ChangeDetectorRef},{type:s.IterableDiffers},{type:s.KeyValueDiffers}]},e.propDecorators={backgroundColor_input:[{type:s.Input,args:["backgroundColor"]}],backgroundImage_input:[{type:s.Input,args:["backgroundImage"]}],enabled_input:[{type:s.Input,args:["enabled"]}],height_input:[{type:s.Input,args:["height"]}],isResponsive_input:[{type:s.Input,args:["isResponsive"]}],saveImageFormat_input:[{type:s.Input,args:["saveImageFormat"]}],saveWithBackground_input:[{type:s.Input,args:["saveWithBackground"]}],showRoundedCorner_input:[{type:s.Input,args:["showRoundedCorner"]}],strokeColor_input:[{type:s.Input,args:["strokeColor"]}],strokeWidth_input:[{type:s.Input,args:["strokeWidth"]}],width_input:[{type:s.Input,args:["width"]}],options:[{type:s.Input,args:["options"]}],change_output:[{type:s.Output,args:["change"]}],ejchange_output:[{type:s.Output,args:["ejchange"]}],mouseDown_output:[{type:s.Output,args:["mouseDown"]}],mouseMove_output:[{type:s.Output,args:["mouseMove"]}],mouseUp_output:[{type:s.Output,args:["mouseUp"]}]},e}(i.EJComponents);e.SignatureComponent=r,e.EJ_SIGNATURE_COMPONENTS=[r]},1906:function(t,e){t.exports='<ej-signature id="defaultsignature" [strokeWidth]="width" height="300px" width="60%"> \r\n</ej-signature>\r\n\r\n<style>\r\n.e-signature {\r\ndisplay:block;\r\nmargin: 0 auto;\r\n}\r\n</style>'},2047:function(t,e,n){var o,i,s;
/*!
*  filename: ej.signature.min.js
*  version : 17.1.0.47
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
/*!
*  filename: ej.signature.min.js
*  version : 17.1.0.47
*  Copyright Syncfusion Inc. 2001 - 2018. All rights reserved.
*  Use of this code is subject to the terms of our license.
*  A copy of the current license can be obtained at any time by e-mailing
*  licensing@syncfusion.com. Any infringement will be prosecuted under
*  applicable laws. 
*/
!function(r){i=[n(4),n(65)],void 0===(s="function"==typeof(o=r)?o.apply(e,i):o)||(t.exports=s)}(function(){"use strict";var t=this&&this.__extends||function(t,e){function n(){this.constructor=t}for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o]);t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)};!function(e){var n=function(n){function o(t,o){return n.call(this),this._rootCSS="e-signature",this.PluginName="ejSignature",this.id="null",this.validTags=["div"],this.model=null,this.defaults={strokeColor:"#000000",height:"100%",width:"100%",enabled:!0,strokeWidth:2,backgroundColor:"#ffffff",showRoundedCorner:!0,saveImageFormat:"png",isResponsive:!1,saveWithBackground:!1,backgroundImage:null,change:null,mouseDown:null,mouseMove:null,mouseUp:null},t&&(t.jquery||(t=e("#"+t)),t.length)?e(t).ejSignature(o).data(this.PluginName):void 0}return t(o,n),o.prototype.setModel=function(t,e){this.setModel(t,e)},o.prototype.option=function(t,e){this.option(t,e)},o.prototype.clear=function(){this.model.saveWithBackground?this._setBackgroundImage(this.model.backgroundImage):this._canvasContext.clearRect(0,0,this._canvasContext.canvas.width,this._canvasContext.canvas.height),this._refresh()},o.prototype.save=function(t){var e,n,o=navigator.userAgent,i=this._canvas[0].toDataURL("image/"+this.model.saveImageFormat);e=ej.isNullOrUndefined(t)?Math.random().toString(36).replace(/[^a-z]+/g,"").substr(0,6)+"."+this.model.saveImageFormat:t+"."+this.model.saveImageFormat,n=this._dataURLtoBlob(i),-1==o.indexOf("Edge")&&(-1!=o.indexOf("Firefox")||-1!=o.indexOf("Chrome")||-1!=o.indexOf("Safari")||-1!=o.indexOf("AppleWebKit"))?this._download(n,e):window.navigator.msSaveOrOpenBlob(n,e)},o.prototype._dataURLtoBlob=function(t){for(var e=t.split(","),n=e[0].match(/:(.*?);/)[1],o=atob(e[1]),i=o.length,s=new Uint8Array(i);i--;)s[i]=o.charCodeAt(i);return new Blob([s],{type:n})},o.prototype._download=function(t,e){var n=URL.createObjectURL(t),o=document.createElement("a");o.href=n,o.target="_parent",o.download=e,(document.body||document.documentElement).appendChild(o),o.click(),o.parentNode.removeChild(o)},o.prototype.undo=function(){var t,e=this;this.incStep>0&&(this.incStep--,(t=new Image).src=this.storeSnap[this.incStep],t.onload=function(){var n=document.getElementById(e.element[0].id).children[0],o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),o.drawImage(t,0,0)})},o.prototype.redo=function(){var t,e=this;this.incStep<this.storeSnap.length-1&&(this.incStep++,(t=new Image).src=this.storeSnap[this.incStep],t.onload=function(){var n=document.getElementById(e.element[0].id).children[0],o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),o.drawImage(t,0,0)})},o.prototype.show=function(){this.element.css("display","block")},o.prototype.hide=function(){this.element.css("display","none")},o.prototype.enable=function(){this.element.removeClass("e-disable").attr({"aria-disabled":!1})},o.prototype.disable=function(){this.element.addClass("e-disable").attr({"aria-disabled":!0})},o.prototype.refresh=function(){this._resizeCanvas()},o.prototype._init=function(){this._initialize(),this._render(),this._wireEvents(!1)},o.prototype._initialize=function(){this._canvas=ej.buildTag("canvas","",{},{}),this.element.append(this._canvas),this._canvas[0].getContext&&(this._canvasContext=this._canvas[0].getContext("2d")),this._setProperties(this.model.backgroundColor),this.model.backgroundImage&&this._setBackgroundImage(this.model.backgroundImage),this.model.saveWithBackground||this._toSaveData(),this._resizeCanvas(),this._setRoundedCorner(this.model.showRoundedCorner),this.model.enabled||this.disable(),this.strokeMinimumWidth=1},o.prototype._setBackgroundImage=function(t){if(this.model.saveWithBackground){var e=this,n=new Image;n.src=t,n.onload=function(){var t=document.getElementById(e.element[0].id).children[0],o=t.getContext("2d");o.globalCompositeOperation="source-over",o.drawImage(n,0,0,t.width,t.height),e._toSaveData()}}else this._canvasContext.canvas.style.backgroundImage="url("+t+")"},o.prototype._setProperties=function(t){ej.isNullOrUndefined(this.model.height&&this.model.width)||this.element.css({height:this.model.height,width:this.model.width}),this._canvasContext.canvas.style.backgroundColor=t,this._canvasContext.canvas.style.backgroundSize="100% 100%",this._canvasContext.canvas.style.msTouchAction="none",this._canvasContext.canvas.style.touchAction="none"},o.prototype._resizeCanvas=function(){this._canvasContext.canvas.width=this.element.innerWidth(),this._canvasContext.canvas.height=this.element.innerHeight(),this._canvasContext.scale(1,1),this.model.isResponsive&&this._restore()},o.prototype._restore=function(){var t=this,e=new Image;ej.isNullOrUndefined(this.incStep)||(e.src=this.storeSnap[this.incStep],e.onload=function(){var n=document.getElementById(t.element[0].id).children[0],o=n.getContext("2d");o.clearRect(0,0,n.width,n.height),o.drawImage(e,0,0,n.width,n.height)})},o.prototype._refresh=function(){this._canvasContext.fillStyle=this.model.strokeColor,this.points=[],this._lastVelocity=0,this._lastWidth=(this.strokeMinimumWidth+this.model.strokeWidth)/2},o.prototype._setModel=function(t){for(var e in t)switch(e){case"height":this._changeHeight(t[e]);break;case"width":this._changeWidth(t[e]);break;case"showRoundedCorner":this._setRoundedCorner(t[e]);break;case"backgroundColor":this._setProperties(t[e]);break;case"backgroundImage":this._setBackgroundImage(t[e]);break;case"enabled":this._disabled(!t[e]);break;case"isResponsive":this._resizeCanvas()}},o.prototype._changeHeight=function(t){this.element.css("height",t.toString()),this._changeHeightWidth()},o.prototype._changeWidth=function(t){this.element.css("width",t.toString()),this._changeHeightWidth()},o.prototype._changeHeightWidth=function(){this._resizeCanvas(),this.model.isResponsive||this._restore()},o.prototype._setRoundedCorner=function(t){1==t?this.element.addClass("e-corner"):this.element.removeClass("e-corner")},o.prototype._disabled=function(t){1==t?this.disable():this.enable()},o.prototype._render=function(){this.element.addClass(" e-signature e-select e-widget").attr("role","form")},o.prototype._drawStartHandler=function(t){if(1===t.which||0===t.which){if(ej.blockDefaultActions(t),this._mouseButtonDown=!0,ej.browserInfo().name,"touchstart"==t.type){var n=t.originalEvent.targetTouches[0];this._beginStroke(n)}else this._beginStroke(t);this._on(this._canvas,ej.eventType.mouseMove,this._drawMove),this._on(e(document),ej.eventType.mouseUp,this._drawEnd),this._trigger("mouseDown",{value:t})}},o.prototype._drawMoveHandler=function(t){if(ej.blockDefaultActions(t),this._mouseButtonDown)if(ej.browserInfo().name,"touchmove"==t.type){var e=t.originalEvent.targetTouches[0];this._updateStroke(e)}else this._updateStroke(t);this._trigger("mouseMove",{value:t})},o.prototype._drawEndHandler=function(t){ej.blockDefaultActions(t),this._mouseButtonDown&&(this._mouseButtonDown=!1,this._endStroke()),this._off(this._canvas,ej.eventType.mouseMove,this._drawMove),this._toSaveData(),this._off(e(document),ej.eventType.mouseUp,this._drawEnd),this._trigger("mouseUp",{value:t}),this._trigger("change",{isInteraction:!0,lastImage:this.storeSnap[this.incStep]})},o.prototype._toSaveData=function(){if(ej.isNullOrUndefined(this.incStep)?(this.incStep=-1,this.incStep++,this.storeSnap=[]):this.incStep++,this.incStep<this.storeSnap.length&&(this.storeSnap.length=this.incStep),this.incStep>0){var t=ej.buildTag("canvas","",{},{}),e=t[0].getContext("2d");t[0].height=this._canvas.height(),t[0].width=this._canvas.width(),e.drawImage(this._canvas[0],0,0,t[0].width,t[0].height),this.storeSnap.push(t[0].toDataURL())}else this.storeSnap.push(this._canvas[0].toDataURL())},o.prototype._beginStroke=function(t){this._refresh(),this._updateStroke(t)},o.prototype._updateStroke=function(t){var e=this._createPoint(t);this._addPoint(e)},o.prototype._drawStroke=function(t){var e=this._canvasContext,n=(this.strokeMinimumWidth+this.model.strokeWidth)/2;e.beginPath(),this._pointDraw(t.x,t.y,n),e.closePath(),e.fill()},o.prototype._endStroke=function(){var t=this.points.length>2,e=this.points[0];!t&&e&&this._drawStroke(e)},o.prototype._createDelegates=function(){this._drawStart=e.proxy(this._drawStartHandler,this),this._drawMove=e.proxy(this._drawMoveHandler,this),this._drawEnd=e.proxy(this._drawEndHandler,this)},o.prototype._wireEvents=function(t){this._createDelegates(),this._on(this._canvas,ej.eventType.mouseDown,this._drawStart),this._wireResizeEvents()},o.prototype._wireResizeEvents=function(){e(window).bind("resize",e.proxy(this._resizeCanvas,this))},o.prototype._destroy=function(){this.element.removeClass("e-signature e-js e-select e-widget").removeAttr("role style signature"),this.model.showRoundedCorner&&this.element.removeClass("e-corner"),this._off(this._canvas,(ej.eventType.mouseDown,ej.eventType.mouseMove,ej.eventType.mouseUp)),e(window).unbind("resize",e.proxy(this._resizeCanvas,this)),this.element.empty()},o.prototype._createPoint=function(t){var e=this._canvas[0].getBoundingClientRect();return this._point(t.clientX-e.left,t.clientY-e.top,void 0)},o.prototype._addPoint=function(t){var e,n,o,i=this.points;i.push(t),i.length>2&&(3===i.length&&i.unshift(i[0]),e=this._calculateCurveControlPoints(i[0],i[1],i[2]).cp2,n=this._calculateCurveControlPoints(i[1],i[2],i[3]).cp1,o=this._bezierCurve(i[1],e,n,i[2]),this._addCurve(o),i.shift())},o.prototype._calculateCurveControlPoints=function(t,e,n){var o=t.x-e.x,i=t.y-e.y,s=e.x-(n.x+1),r=e.y-(n.y+1),a=(t.x+e.x)/2,h=(t.y+e.y)/2,c=(e.x+n.x)/2,u=(e.y+n.y)/2,p=Math.sqrt(o*o+i*i),d=Math.sqrt(s*s+r*r),l=d/(p+d),g=c+(a-c)*l,_=u+(h-u)*l,m=e.x-g,f=e.y-_;return{cp1:this._point(a+m,h+f,0),cp2:this._point(c+m,u+f,0)}},o.prototype._addCurve=function(t){var e,n,o=this.startPoint;e=.7*(e=this._pointVelocityCalc(o))+(.7-1)*this._lastVelocity,n=Math.max(this.model.strokeWidth/(e+1),this.strokeMinimumWidth),this._curveDraw(t,this._lastWidth,n),this._lastVelocity=e,this._lastWidth=n},o.prototype._pointDraw=function(t,e,n){var o=this._canvasContext;o.moveTo(t,e),o.arc(t,e,n,0,2*Math.PI,!1)},o.prototype._curveDraw=function(t,e,n){var o,i,s,r,a,h,c,u,p,d,l,g=this._canvasContext,_=n-e;for(o=Math.floor(this._bezierLengthCalc()),g.beginPath(),s=0;s<o;s++)h=(a=(r=s/o)*r)*r,d=(p=(u=(c=1-r)*c)*c)*this.startPoint.x,d+=3*u*r*this.control1.x,d+=3*c*a*this.control2.x,d+=h*this.endPoint.x,l=p*this.startPoint.y,l+=3*u*r*this.control1.y,l+=3*c*a*this.control2.y,l+=h*this.endPoint.y,i=e+h*_,this._pointDraw(d,l,i);g.closePath(),g.fill()},o.prototype._point=function(t,e,n){return this.x=t,this.y=e,this.time=n||(new Date).getTime(),{x:this.x,y:this.y,time:this.time}},o.prototype._pointVelocityCalc=function(t){return this.time!==t.time?Math.sqrt(Math.pow(this.x-t.x,2)+Math.pow(this.y-t.y,2))/(this.time-t.time):1},o.prototype._bezierCurve=function(t,e,n,o){this.startPoint=t,this.control1=e,this.control2=n,this.endPoint=o},o.prototype._bezierLengthCalc=function(){for(var t,e,n,o,i,s,r,a=0,h=0;h<=10;h++)t=h/10,e=this._bezierPoint(t,this.startPoint.x,this.control1.x,this.control2.x,this.endPoint.x),n=this._bezierPoint(t,this.startPoint.y,this.control1.y,this.control2.y,this.endPoint.y),h>0&&(s=e-o,r=n-i,a+=Math.sqrt(s*s+r*r)),o=e,i=n;return a},o.prototype._bezierPoint=function(t,e,n,o,i){return e*(1-t)*(1-t)*(1-t)+3*n*(1-t)*(1-t)*t+3*o*(1-t)*t*t+i*t*t*t},o}(ej.WidgetBase);ej.widget("ejSignature","ej.Signature",new n),window.ejSignature=null}(jQuery),ej.Signature.SaveImageFormat={PNG:"png",JPG:"jpg",BMP:"bmp",TIFF:"tiff"}})},464:function(t,e,n){"use strict";var o=this&&this.__decorate||function(t,e,n,o){var i,s=arguments.length,r=s<3?e:null===o?o=Object.getOwnPropertyDescriptor(e,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,o);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(s<3?i(r):s>3?i(e,n,r):i(e,n))||r);return s>3&&r&&Object.defineProperty(e,n,r),r};Object.defineProperty(e,"__esModule",{value:!0});var i=n(5),s=n(78),r=n(1510),a=n(1408);e.signatureAppRoutes=[{path:"default",component:a.SignatureComponent,data:{name:"Default",location:"app/components/signature/signature.component"}},{path:"",redirectTo:"default"}],e.signatureRouting=s.RouterModule.forChild(e.signatureAppRoutes);var h=function(){function t(){}return t=o([i.NgModule({imports:[e.signatureRouting],declarations:[a.SignatureComponent,r.EJ_SIGNATURE_COMPONENTS]})],t)}();e.SignatureModule=h}});