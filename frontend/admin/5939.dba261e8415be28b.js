"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[5939],{75939:(P,_,l)=>{l.r(_),l.d(_,{AddonModule:()=>q});var d=l(99291),r=l(93075),y=l(17489),b=l(32741),t=l(5e3),c=l(10518),f=l(73056),p=l(9900);let C=(()=>{class n extends p.V{constructor(){super(...arguments),this.params={},this.basUrl=this.getBaseUrl()}pluginList(e){return this.http.get(this.basUrl+"/plugins/list",{params:e})}pluginDetail(e){return this.http.get(this.basUrl+"/plugins/detail/"+e.id,{params:e})}updatePluginSetting(e,o){return this.http.post(this.basUrl+e,o)}updatePluginStatus(e,o){return this.http.put(this.basUrl+"/plugins/update/plugin-status/"+e,o)}updatePluginLogo(e,o){return this.http.put(this.basUrl+"/plugins/logo/"+e,o)}}return n.\u0275fac=function(){let i;return function(o){return(i||(i=t.\u0275\u0275getInheritedFactory(n)))(o||n)}}(),n.\u0275prov=t.\u0275\u0275defineInjectable({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();var I=l(22313),u=l(69808),x=l(84218);const S=["filePath"];function M(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"label",20),t.\u0275\u0275text(1),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(e.label)}}const O=function(n){return{"is-invalid":n}};function E(n,i){if(1&n&&t.\u0275\u0275element(0,"input",21,22),2&n){const e=t.\u0275\u0275reference(1),o=t.\u0275\u0275nextContext().$implicit,a=t.\u0275\u0275nextContext(3);t.\u0275\u0275propertyInterpolate("type",null==o?null:o.type),t.\u0275\u0275property("formControlName",o.name)("value",o.value)("ngClass",t.\u0275\u0275pureFunction1(4,O,a.submitted&&""==e.value))}}function F(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",23),t.\u0275\u0275element(1,"input",24)(2,"label",25),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext().$implicit;t.\u0275\u0275advance(1),t.\u0275\u0275property("formControlName",null==e?null:e.name)("checked",e.value)}}const A=function(){return["text","number"]};function T(n,i){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"div",15)(2,"div",16),t.\u0275\u0275template(3,M,2,1,"label",17),t.\u0275\u0275template(4,E,2,6,"input",18),t.\u0275\u0275template(5,F,3,2,"div",19),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementContainerEnd()),2&n){const e=i.$implicit;t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",""!==e.label),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",t.\u0275\u0275pureFunction0(3,A).includes(e.type)),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf","checkbox"===e.type)}}function L(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"div",13),t.\u0275\u0275template(1,T,6,4,"ng-container",14),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",null==e.jsonFormData?null:e.jsonFormData.controls)}}function k(n,i){if(1&n&&(t.\u0275\u0275elementStart(0,"form",11),t.\u0275\u0275template(1,L,2,1,"div",12),t.\u0275\u0275elementEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275property("formGroup",e.myForm),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",(null==e.jsonFormData?null:e.jsonFormData.controls)&&(null==e.jsonFormData?null:e.jsonFormData.controls.length)>0)}}function j(n,i){1&n&&t.\u0275\u0275element(0,"img",38)}function w(n,i){if(1&n&&t.\u0275\u0275element(0,"img",39),2&n){const e=t.\u0275\u0275nextContext(2);t.\u0275\u0275property("src",e.postImageUrl,t.\u0275\u0275sanitizeUrl)}}function D(n,i){1&n&&(t.\u0275\u0275elementStart(0,"span",40),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,1,"shared.imagemanagerpopup.ImageRequired")))}function U(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div",41),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&n&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(2,1,"catalog.Error.Imageshouldbelessthan2MB")))}function B(n,i){1&n&&(t.\u0275\u0275elementStart(0,"div",41),t.\u0275\u0275text(1," Please Upload Image Only (.png,.jpg,.jpeg) "),t.\u0275\u0275elementEnd())}function V(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",15)(1,"div",26)(2,"div",27)(3,"div",28)(4,"div",29),t.\u0275\u0275template(5,j,1,0,"img",30),t.\u0275\u0275template(6,w,1,1,"img",31),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"input",32,33),t.\u0275\u0275listener("change",function(a){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext().uploadChange(a)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(9,"button",34),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext().uploadButtonClick()}),t.\u0275\u0275text(10),t.\u0275\u0275pipe(11,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(12,"p",35),t.\u0275\u0275text(13),t.\u0275\u0275pipe(14,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(15,D,3,3,"span",36),t.\u0275\u0275template(16,U,3,3,"div",37),t.\u0275\u0275template(17,B,2,0,"div",37),t.\u0275\u0275elementEnd()()()}if(2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(5),t.\u0275\u0275property("ngIf",!e.postImageUrl),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.postImageUrl),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(11,7,"Settings.Local.Language.UploadPic")," "),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(14,9,"catalog.Error.Support")),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",e.submitted&&!e.postImageUrl),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.imageSizeError),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.imageTypeError)}}let N=(()=>{class n{constructor(e,o,a,m,s,h,g,v,tt,et){this.modalService=e,this.fb=o,this.changeDetectRef=a,this.route=m,this.router=s,this.configService=h,this.paymentService=g,this.cd=v,this.domsanitizer=tt,this.modal=et,this.myForm=this.fb.group({}),this.imageTypeError=!1,this.imageSizeError=!1,this.ImageUrl=""}ngOnInit(){var e;this.imageUrl=this.configService.getImageUrl(),2!=this.pluginId&&this.paymentService.pluginDetail({id:this.pluginId}).subscribe({next:o=>{this.pluginFormControl=o.data,this.createForm(this.pluginFormControl.controls)},error:o=>{}}),this.pluginData&&(this.postImageUrl=this.imageUrl+`?path=${null===(e=this.pluginData)||void 0===e?void 0:e.pluginAvatarPath}&name=${this.pluginData.pluginAvatar}&width=160&height=150`)}createForm(e){if(e){this.jsonFormData={controls:e};for(const o of e){const a=[];if(o.validators)for(const[m,s]of Object.entries(o.validators))switch(m){case"min":a.push(r.Validators.min(s));break;case"max":a.push(r.Validators.max(s));break;case"required":s&&a.push(r.Validators.required);break;case"requiredTrue":s&&a.push(r.Validators.requiredTrue);break;case"email":s&&a.push(r.Validators.email);break;case"minLength":a.push(r.Validators.minLength(s));break;case"maxLength":a.push(r.Validators.maxLength(s));break;case"pattern":a.push(r.Validators.pattern(s));break;case"nullValidator":s&&a.push(r.Validators.nullValidator)}this.myForm.addControl(o.name,this.fb.control(o.value,a))}}}onSubmit(){if(this.submitted=!0,2!=this.pluginId){if(!this.myForm.valid)return void this.validateAllFormFields(this.myForm);if("Payment"==this.pluginData.pluginType&&!this.postImageUrl)return;this.paymentService.updatePluginSetting(this.pluginFormControl.postRoute,this.myForm.value).subscribe({next:e=>{this.submitted=!1,"Payment"==this.pluginData.pluginType&&this.updateLogo(),this.modalService.dismiss(!0)},error:e=>{}})}else{if(!this.postImageUrl)return;"Payment"==this.pluginData.pluginType&&this.updateLogo(),this.submitted=!1,this.modalService.dismiss(!0)}}close(){this.modalService.close("close")}validateAllFormFields(e){Object.keys(e.controls).forEach(o=>{const a=e.get(o);a instanceof r.FormControl?a.markAsTouched({onlySelf:!0}):a instanceof r.FormGroup&&this.validateAllFormFields(a)})}uploadButtonClick(){this.filePath.nativeElement.click()}uploadChange(e){var o;this.convertBase64(e.target),this.image=null===(o=e.target.files[0])||void 0===o?void 0:o.name}convertBase64(e){const o=e.files[0],a=new FileReader;if(!y.includes(["image/png","image/jpeg","image/jpg"],e.files[0].type))return this.imageTypeError=!0,this.ImageUrl="",void(this.filePath.nativeElement.value="");if(this.imageTypeError=!1,a.onloadend=h=>{this.postImageUrl=a.result,this.ImageUrl=a.result,this.changeDetectRef.detectChanges()},Math.round(e.files[0].size/1024)>2048)return this.imageSizeError=!0,this.imageUrl="",void(this.filePath.nativeElement.value="");{this.imageSizeError=!1;let h=this.modal.open(b.x,{windowClass:"crop-local",keyboard:!1,backdrop:"static",animation:!1,modalDialogClass:"modal-dialog-centered",size:"xl"});h.componentInstance.imageChangedEvent=event,h.result.then(g=>{var v;(null==g?void 0:g.isChoosed)&&(this.postImageUrl=null===(v=null==g?void 0:g.croppedImage)||void 0===v?void 0:v.changingThisBreaksApplicationSecurity,this.filePath.nativeElement.value="",this.imageUrl=g.croppedImage.changingThisBreaksApplicationSecurity)})}a.readAsDataURL(o)}updateLogo(){if(this.ImageUrl){const e={};e.image=this.postImageUrl,this.paymentService.updatePluginLogo(this.pluginId,e).subscribe(o=>{})}}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(c.Kz),t.\u0275\u0275directiveInject(r.FormBuilder),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(d.gz),t.\u0275\u0275directiveInject(d.F0),t.\u0275\u0275directiveInject(f.E),t.\u0275\u0275directiveInject(C),t.\u0275\u0275directiveInject(t.ChangeDetectorRef),t.\u0275\u0275directiveInject(I.H7),t.\u0275\u0275directiveInject(c.FF))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-addon-config-add"]],viewQuery:function(e,o){if(1&e&&t.\u0275\u0275viewQuery(S,5),2&e){let a;t.\u0275\u0275queryRefresh(a=t.\u0275\u0275loadQuery())&&(o.filePath=a.first)}},inputs:{pluginData:"pluginData"},decls:15,vars:8,consts:[[1,"flex","setting2-inner-header"],[1,"modal-header__title"],[1,"close-modal",3,"click"],["src","assets/img/modal-close.svg"],[1,"settings-right-wrapper","addnewuser"],[1,"new-user"],[3,"formGroup",4,"ngIf"],["class","col-lg-12 col-xs-12",4,"ngIf"],[1,"col-12"],[1,"modal-action-btns","flex"],["type","submit",3,"click"],[3,"formGroup"],["class","row",4,"ngIf"],[1,"row"],[4,"ngFor","ngForOf"],[1,"col-lg-12","col-xs-12"],[1,"form-group","flex"],["style","width: auto; margin-right: 15px;",4,"ngIf"],["class","form-control",3,"type","formControlName","value","ngClass",4,"ngIf"],["class","toggle",4,"ngIf"],[2,"width","auto","margin-right","15px"],[1,"form-control",3,"type","formControlName","value","ngClass"],["formValue",""],[1,"toggle"],["id","cb1","type","checkbox",1,"tgl","tgl-light",3,"formControlName","checked"],["for","cb1",1,"tgl-btn"],[1,"form-group"],[1,"image-col"],[1,"img-dflt"],[1,"input"],["class","imege","src","assets/img/add-photo-big.png","alt","add photo",4,"ngIf"],[3,"src",4,"ngIf"],["type","file","name","userImg","accept","image/*,.png,.jpeg",2,"display","none",3,"change"],["filePath",""],["type","button",1,"upload-btn",3,"click"],[2,"font-size","10px"],["style","color:red; font-size: 12px;",4,"ngIf"],["class","upload-error validation-error",4,"ngIf"],["src","assets/img/add-photo-big.png","alt","add photo",1,"imege"],[3,"src"],[2,"color","red","font-size","12px"],[1,"upload-error","validation-error"]],template:function(e,o){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"h3",1),t.\u0275\u0275text(2),t.\u0275\u0275pipe(3,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(4,"button",2),t.\u0275\u0275listener("click",function(){return o.close()}),t.\u0275\u0275element(5,"img",3),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(6,"div",4)(7,"div",5),t.\u0275\u0275template(8,k,2,2,"form",6),t.\u0275\u0275template(9,V,18,11,"div",7),t.\u0275\u0275elementStart(10,"div",8)(11,"div",9)(12,"button",10),t.\u0275\u0275listener("click",function(){return o.onSubmit()}),t.\u0275\u0275text(13),t.\u0275\u0275pipe(14,"translate"),t.\u0275\u0275elementEnd()()()()()),2&e&&(t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(3,4,"Settings.nav.UpdateSettings")," "),t.\u0275\u0275advance(6),t.\u0275\u0275property("ngIf",2!=o.pluginId),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf","Payment"==o.pluginData.pluginType),t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(14,6,"Settings.nav.Submit")))},directives:[u.NgIf,r.\u0275NgNoValidate,r.NgControlStatusGroup,r.FormGroupDirective,u.NgForOf,r.DefaultValueAccessor,r.NgControlStatus,r.FormControlName,u.NgClass,r.CheckboxControlValueAccessor],pipes:[x.X$],styles:[".is-invalid[_ngcontent-%COMP%]{border:solid 1px red!important}.img-dflt[_ngcontent-%COMP%]{margin-top:1rem}.img-dflt[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]{width:30%}.img-dflt[_ngcontent-%COMP%]   .input[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:auto;max-width:100%;height:auto;max-height:100%}.img-dflt[_ngcontent-%COMP%]   .upload-btn[_ngcontent-%COMP%]{height:33px;display:flex;justify-content:center;align-items:center;border-radius:3px;background-color:#078e05;font-size:12px;font-weight:700;color:#fff;border:0;margin:1rem 0 5px;padding:0px 1rem}"]}),n})();var z=l(33052);function R(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div")(1,"button",27),t.\u0275\u0275listener("click",function(){t.\u0275\u0275restoreView(e);const a=t.\u0275\u0275nextContext().$implicit;return t.\u0275\u0275nextContext(2).configurePlugin(a)}),t.\u0275\u0275element(2,"img",28),t.\u0275\u0275elementEnd()()}}function $(n,i){if(1&n){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275elementStart(1,"tr")(2,"td"),t.\u0275\u0275text(3),t.\u0275\u0275pipe(4,"titlecase"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(5,"td"),t.\u0275\u0275text(6),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(7,"td",22)(8,"div",23)(9,"input",24),t.\u0275\u0275listener("ngModelChange",function(a){return t.\u0275\u0275restoreView(e).$implicit.pluginStatus=a})("change",function(a){const s=t.\u0275\u0275restoreView(e).$implicit;return t.\u0275\u0275nextContext(2).onFilterChange(a,s)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(10,"label",25),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(11,"td",26),t.\u0275\u0275template(12,R,3,0,"div",20),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementContainerEnd()}if(2&n){const e=i.$implicit,o=i.index;t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(4,6,e.pluginName)),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(e.pluginType),t.\u0275\u0275advance(3),t.\u0275\u0275propertyInterpolate("id",o),t.\u0275\u0275property("ngModel",e.pluginStatus),t.\u0275\u0275advance(1),t.\u0275\u0275propertyInterpolate("for",o),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf",1==e.isEditable||"Payment"==e.pluginType)}}function G(n,i){if(1&n&&(t.\u0275\u0275elementContainerStart(0),t.\u0275\u0275template(1,$,13,8,"ng-container",21),t.\u0275\u0275elementContainerEnd()),2&n){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",e.pluginList)}}let Q=(()=>{class n{constructor(e,o,a,m){this.modal=e,this.router=o,this.paymentService=a,this.cd=m,this.pluginListLoading=!1,this.pluginListLoading=!0}ngOnInit(){this.paymentService.pluginList({}).subscribe({next:e=>{this.pluginListLoading=!1,this.pluginList=e.data,this.cd.markForCheck()},error:e=>{}})}configurePlugin(e){const o=this.modal.open(N,{windowClass:"add-local",keyboard:!1,backdrop:"static",centered:!1,animation:!1});o.componentInstance.pluginId=e.id,o.componentInstance.pluginData=e,o.result.then(a=>{})}onFilterChange(e,o){!0===e.target.checked?this.paymentService.updatePluginStatus(o.id,{pluginStatus:"1"}).subscribe({next:s=>{this.cd.markForCheck(),s&&sessionStorage.setItem("prodQrAddon","")},error:s=>{}}):this.paymentService.updatePluginStatus(o.id,{pluginStatus:"0"}).subscribe({next:s=>{this.cd.markForCheck(),s&&sessionStorage.setItem("prodQrAddon","you dont have access for it, please enable addon")},error:s=>{}})}}return n.\u0275fac=function(e){return new(e||n)(t.\u0275\u0275directiveInject(c.FF),t.\u0275\u0275directiveInject(d.F0),t.\u0275\u0275directiveInject(C),t.\u0275\u0275directiveInject(t.ChangeDetectorRef))},n.\u0275cmp=t.\u0275\u0275defineComponent({type:n,selectors:[["app-settings-addon-list"]],decls:44,vars:26,consts:[[1,"setup-wrapper"],[1,"setup-container","localization-container"],[1,"loc-lay-title"],[1,"page-title"],[1,"text14"],[1,"card","ap-general","ap-info","set-loc-card"],[1,"localize-tab"],[1,"set-lay-notes","flex",2,"padding","0 10px 10px 10px"],[1,"setup-wrapper","set-loc-wrapper"],[1,"card","ap-general","ap-info"],[1,"flex","ap-body"],[1,"setup-right"],[1,"spinner-wrapper",2,"display","flex","justify-content","center","justify-items","center"],[2,"transform","translate(58%, 18%)","position","absolute",3,"isShow"],[1,"product-table"],[1,"table-responsive"],[1,"table"],["scope","col"],["scope","col",1,"text-center"],["scope","col",1,"text-right"],[4,"ngIf"],[4,"ngFor","ngForOf"],[1,"text-center"],[1,"toggle"],["type","checkbox",1,"tgl","tgl-light",3,"id","ngModel","ngModelChange","change"],[1,"tgl-btn",3,"for"],[1,"text-right","action-btn"],[3,"click"],["src","assets/img/edit.png","alt",""]],template:function(e,o){1&e&&(t.\u0275\u0275elementStart(0,"div",0)(1,"div",1)(2,"div",2)(3,"h3",3),t.\u0275\u0275text(4),t.\u0275\u0275pipe(5,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"p",4),t.\u0275\u0275text(7),t.\u0275\u0275pipe(8,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(9,"div",5),t.\u0275\u0275element(10,"div",6),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(11,"div",7)(12,"h4"),t.\u0275\u0275text(13),t.\u0275\u0275pipe(14,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(15,"p"),t.\u0275\u0275text(16),t.\u0275\u0275pipe(17,"translate"),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(18,"div",8)(19,"div",1)(20,"div",9)(21,"div",10)(22,"div",11)(23,"div",12),t.\u0275\u0275element(24,"app-global-loader",13),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(25,"div",14)(26,"div",15)(27,"table",16)(28,"thead")(29,"tr")(30,"th",17),t.\u0275\u0275text(31),t.\u0275\u0275pipe(32,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(33,"th",17),t.\u0275\u0275text(34),t.\u0275\u0275pipe(35,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(36,"th",18),t.\u0275\u0275text(37),t.\u0275\u0275pipe(38,"translate"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(39,"th",19),t.\u0275\u0275text(40),t.\u0275\u0275pipe(41,"translate"),t.\u0275\u0275elementEnd()()(),t.\u0275\u0275elementStart(42,"tbody"),t.\u0275\u0275template(43,G,2,1,"ng-container",20),t.\u0275\u0275elementEnd()()()()()()()()()),2&e&&(t.\u0275\u0275advance(4),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(5,10,"Settings.nav.AddOns")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1("",t.\u0275\u0275pipeBind1(8,12,"Settings.nav.AddonAdaptation")," "),t.\u0275\u0275advance(6),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(14,14,"Settings.nav.Note:")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(17,16,"Settings.nav.AdminNote")),t.\u0275\u0275advance(8),t.\u0275\u0275property("isShow",o.pluginListLoading),t.\u0275\u0275advance(7),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(32,18,"Settings.nav.Name")," "),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(35,20,"Settings.nav.Module")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate(t.\u0275\u0275pipeBind1(38,22,"common.Status")),t.\u0275\u0275advance(3),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(41,24,"Settings.nav.Action"),""),t.\u0275\u0275advance(3),t.\u0275\u0275property("ngIf",o.pluginList))},directives:[z.A,u.NgIf,u.NgForOf,r.CheckboxControlValueAccessor,r.NgControlStatus,r.NgModel],pipes:[x.X$,u.TitleCasePipe],styles:[".setup-wrapper[_ngcontent-%COMP%]{margin-top:-20px;padding:0 20px 20px}[_nghost-%COMP%]{width:calc(100% - 250px)}"]}),n})();var K=l(12476),H=l(40520),W=l(47769),X=l(8300),Z=l(3675),J=l(14696);const Y=[{path:"",component:Q,canActivate:[X.a],data:{root:"settingsLocal"}}];let q=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=t.\u0275\u0275defineInjector({providers:[],imports:[[d.Bz.forChild(Y),Z.o,r.FormsModule,r.ReactiveFormsModule,J.q,K.K,u.CommonModule,c.IJ,x.aw.forChild({loader:{provide:x.Zw,useFactory:W.g,deps:[H.eN]}})],d.Bz]}),n})()},33052:(P,_,l)=>{l.d(_,{A:()=>t});var d=l(5e3),r=l(9932),y=l(69808);function b(c,f){1&c&&(d.\u0275\u0275elementStart(0,"div",1)(1,"div",2),d.\u0275\u0275element(2,"img",3),d.\u0275\u0275elementEnd()())}let t=(()=>{class c{constructor(p){this.httpStatus=p,this.subscriptions=[],this.loader=!1,this.getHttpResponse()}ngOnInit(){}getHttpResponse(){this.subscriptions.push(this.httpStatus.getHttpStatus().subscribe(p=>{this.loader=p}))}ngOnDestroy(){this.subscriptions.forEach(p=>p.unsubscribe())}}return c.\u0275fac=function(p){return new(p||c)(d.\u0275\u0275directiveInject(r.Z))},c.\u0275cmp=d.\u0275\u0275defineComponent({type:c,selectors:[["app-global-loader"]],inputs:{isShow:"isShow"},decls:1,vars:1,consts:[["class","container",4,"ngIf"],[1,"container"],[1,"row"],["width","80px","height","80px","src","./assets/loader/Spurt-commerce-Loader-2.1.gif"]],template:function(p,C){1&p&&d.\u0275\u0275template(0,b,3,0,"div",0),2&p&&d.\u0275\u0275property("ngIf",C.isShow)},directives:[y.NgIf],styles:['#loader[_ngcontent-%COMP%]{height:175px;inset:0;margin:auto;position:absolute;width:175px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]{height:100%;inset:0;margin:auto;position:absolute;width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:before{border-radius:100%;content:"";height:87.5px;left:0;position:absolute;right:0;top:0;transform:scale(0);width:87.5px}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1){transform:rotate(45deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1):before{animation:.8s linear .1s normal none infinite running load;background:#00ff80 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2){transform:rotate(90deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2):before{animation:.8s linear .2s normal none infinite running load;background:#00ffea none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3){transform:rotate(135deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3):before{animation:.8s linear .3s normal none infinite running load;background:#00aaff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4){transform:rotate(180deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4):before{animation:.8s linear .4s normal none infinite running load;background:#0040ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5){transform:rotate(225deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5):before{animation:.8s linear .5s normal none infinite running load;background:#2a00ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6){transform:rotate(270deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6):before{animation:.8s linear .6s normal none infinite running load;background:#9500ff none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7){transform:rotate(315deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7):before{animation:.8s linear .7s normal none infinite running load;background:magenta none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8){transform:rotate(360deg)}#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8):before{animation:.8s linear .8s normal none infinite running load;background:#ff0095 none repeat scroll 0 0}#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%]{background-position:50% 50%;background-repeat:no-repeat;bottom:-40px;height:20px;left:0;position:absolute;right:0;width:180px}@keyframes load{to{opacity:0;transform:scale(1)}}.spinner-message[_ngcontent-%COMP%], .row[_ngcontent-%COMP%]{text-align:center}']}),c})()}}]);