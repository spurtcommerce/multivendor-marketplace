"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[1508],{1508:(X,A,a)=>{a.r(A),a.d(A,{AuthenticationModule:()=>K});var p=a(9808),x=a(6393),h=a(9291),e=a(3075),o=a(5e3),v=a(2431),S=a(7941),y=a(6836),w=a(4218);function O(t,l){1&t&&(o.TgZ(0,"div",13),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.Usernamerequired")," "))}function M(t,l){1&t&&(o.TgZ(0,"div",13),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.Incorrectemail")," "))}function T(t,l){1&t&&(o.TgZ(0,"div",13),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.Passwordrequired")," "))}function N(t,l){1&t&&(o.TgZ(0,"div",13),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.UsernameorPasswordisincorrect")," "))}function J(t,l){1&t&&o._UZ(0,"span",14)}function U(t,l){1&t&&(o.TgZ(0,"span"),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.Oqu(o.lcZ(2,1,"Profile.Login.login")))}const Z=function(t){return{validationcolor:t}},E=function(){return["/auth/forgot-password"]};function Q(t,l){1&t&&(o.TgZ(0,"div",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.Emailrequired")," "))}function $(t,l){1&t&&(o.TgZ(0,"div",10),o._uU(1),o.ALo(2,"translate"),o.qZA()),2&t&&(o.xp6(1),o.hij(" ",o.lcZ(2,1,"Profile.Login.Error.Incorrectemail")," "))}const j=function(t){return{validationcolor:t}},z=function(){return["/auth/login"]},Y=[{path:"login",component:(()=>{class t{constructor(r,n,d){this.fb=r,this.authSandbox=n,this.layoutSandbox=d,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1,this.badResponse=!1,this.subscriptions=[]}ngOnInit(){this.loginForm=this.fb.group({userName:["",[e.kI.required,e.kI.pattern(this.emailPattern)]],password:["",e.kI.required]})}validateAllFormFields(r){Object.keys(r.controls).forEach(n=>{const d=r.get(n);d instanceof e.NI?d.markAsTouched({onlySelf:!0}):d instanceof e.cw&&this.validateAllFormFields(d)})}onSubmit(r){if(this.ifSubmitted=!0,!this.loginForm.valid)return void this.validateAllFormFields(this.loginForm);const n={};n.userName=this.loginForm.value.userName,n.password=this.loginForm.value.password,this.authSandbox.authLogin(n),this.subscriptions.push(this.authSandbox.loginLoaded$.subscribe(d=>{if(!0===d){const i=JSON.parse(sessionStorage.getItem("adminUser"));this.layoutSandbox.getUserDetail(i)}else this.loginForm.reset()}))}ngOnDestroy(){this.subscriptions.forEach(r=>r.unsubscribe())}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(e.qu),o.Y36(v.j),o.Y36(S.b))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-spurt-login"]],decls:22,vars:25,consts:[[1,"card-align"],[1,"cards"],["autocomplete","off",3,"formGroup","ngSubmit"],[1,"admin"],[1,"log-group","form-group","first"],["type","text","placeholder","User Name","formControlName","userName",1,"form-control",3,"ngClass"],["class","validation-error",4,"ngIf"],[1,"log-group","form-group",2,"position","relative"],["type","password","passwordshow","","placeholder","Password","formControlName","password",1,"form-control",3,"ngClass","keydown.space"],[1,"btn","btn-log"],["class","spinner-border spinner-border-sm ","style","margin-left:20px;width:23px;height:23px","aria-hidden","true",4,"ngIf"],[4,"ngIf"],[1,"forgot",3,"routerLink"],[1,"validation-error"],["aria-hidden","true",1,"spinner-border","spinner-border-sm",2,"margin-left","20px","width","23px","height","23px"]],template:function(r,n){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"form",2),o.NdJ("ngSubmit",function(){return n.onSubmit(n.loginForm.value)}),o.TgZ(3,"div",3),o._uU(4),o.ALo(5,"translate"),o.qZA(),o.TgZ(6,"div",4),o._UZ(7,"input",5),o.YNc(8,O,3,3,"div",6),o.YNc(9,M,3,3,"div",6),o.qZA(),o.TgZ(10,"div",7)(11,"input",8),o.NdJ("keydown.space",function(i){return i.preventDefault()}),o.qZA(),o.YNc(12,T,3,3,"div",6),o.qZA(),o.YNc(13,N,3,3,"div",6),o.TgZ(14,"button",9),o.YNc(15,J,1,0,"span",10),o.ALo(16,"async"),o.YNc(17,U,3,3,"span",11),o.ALo(18,"async"),o.qZA(),o.TgZ(19,"div",12),o._uU(20),o.ALo(21,"translate"),o.qZA()()()()),2&r&&(o.xp6(2),o.Q6J("formGroup",n.loginForm),o.xp6(2),o.Oqu(o.lcZ(5,12,"Profile.Login.AdminLogin")),o.xp6(3),o.Q6J("ngClass",o.VKq(20,Z,n.loginForm.get("userName").hasError("required")&&n.loginForm.get("userName").touched&&1==n.ifSubmitted||1==n.badResponse)),o.xp6(1),o.Q6J("ngIf",n.loginForm.get("userName").hasError("required")&&n.loginForm.get("userName").touched&&1==n.ifSubmitted),o.xp6(1),o.Q6J("ngIf",n.loginForm.get("userName").hasError("pattern")&&n.loginForm.get("userName").touched&&1==n.ifSubmitted),o.xp6(2),o.Q6J("ngClass",o.VKq(22,Z,n.loginForm.get("password").hasError("required")&&n.loginForm.get("password").touched&&1==n.ifSubmitted||1==n.badResponse)),o.xp6(1),o.Q6J("ngIf",n.loginForm.get("password").hasError("required")&&n.loginForm.get("password").touched&&1==n.ifSubmitted),o.xp6(1),o.Q6J("ngIf",1==n.badResponse),o.xp6(2),o.Q6J("ngIf",o.lcZ(16,14,n.authSandbox.loginLoading$)),o.xp6(2),o.Q6J("ngIf",!o.lcZ(18,16,n.authSandbox.loginLoading$)),o.xp6(2),o.Q6J("routerLink",o.DdM(24,E)),o.xp6(1),o.hij(" ",o.lcZ(21,18,"Profile.Login.Error.Cantlogin?")," "))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,p.mk,p.O5,y.m,h.rH],pipes:[w.X$,p.Ov],styles:[".validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.first[_ngcontent-%COMP%]{margin-bottom:20px}.form-control[_ngcontent-%COMP%]{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{cursor:pointer;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}[_nghost-%COMP%]     .fa, .fas[_ngcontent-%COMP%]{margin-top:-12px!important}"]}),t})()},{path:"forgot-password",component:(()=>{class t{constructor(r,n){this.fb=r,this.authSandbox=n,this.emailPattern="[a-zA-Z0-9.-_-._]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}",this.ifSubmitted=!1}ngOnInit(){this.forgotPasswordForm=this.fb.group({email:["",[e.kI.required,e.kI.pattern(this.emailPattern)]]})}onSubmits(r,n){if(this.ifSubmitted=!0,!this.forgotPasswordForm.valid)return void this.validateAllFormFields(this.forgotPasswordForm);const d={};d.email=this.forgotPasswordForm.value.email,this.authSandbox.authForget(d),this.authSandbox.forgorPasswordResponse$.subscribe(i=>{(i&&!0===i||!1===i)&&(this.ifSubmitted=!1,this.forgotPasswordForm.reset(),this.forgotPasswordForm.clearValidators())})}validateAllFormFields(r){Object.keys(r.controls).forEach(n=>{const d=r.get(n);d instanceof e.NI?d.markAsTouched({onlySelf:!0}):d instanceof e.cw&&this.validateAllFormFields(d)})}}return t.\u0275fac=function(r){return new(r||t)(o.Y36(e.qu),o.Y36(v.j))},t.\u0275cmp=o.Xpm({type:t,selectors:[["app-spurt-forgot-password"]],decls:18,vars:20,consts:[[1,"card-align"],[1,"cards"],[3,"formGroup","ngSubmit"],[1,"admin"],[1,"form-group"],["type","text","placeholder","Email","formControlName","email",1,"form-control",3,"ngClass"],["class","validation-error",4,"ngIf"],[1,"btn","btn-log"],["role","status","aria-hidden","true",1,"spinner-border","spinner-border-sm","pull-right",3,"hidden"],[1,"forgot",3,"routerLink"],[1,"validation-error"]],template:function(r,n){1&r&&(o.TgZ(0,"div",0)(1,"div",1)(2,"form",2),o.NdJ("ngSubmit",function(i){return n.onSubmits(i,n.forgotPasswordForm.value)}),o.TgZ(3,"div",3),o._uU(4),o.ALo(5,"translate"),o.qZA(),o.TgZ(6,"div",4),o._UZ(7,"input",5),o.qZA(),o.YNc(8,Q,3,3,"div",6),o.YNc(9,$,3,3,"div",6),o.TgZ(10,"button",7),o._uU(11),o.ALo(12,"translate"),o._UZ(13,"span",8),o.ALo(14,"async"),o.qZA(),o.TgZ(15,"div",9),o._uU(16),o.ALo(17,"translate"),o.qZA()()()()),2&r&&(o.xp6(2),o.Q6J("formGroup",n.forgotPasswordForm),o.xp6(2),o.Oqu(o.lcZ(5,9,"Profile.Login.forgotpassword")),o.xp6(3),o.Q6J("ngClass",o.VKq(17,j,n.forgotPasswordForm.get("email").hasError("required")&&n.forgotPasswordForm.get("email").touched&&1==n.ifSubmitted)),o.xp6(1),o.Q6J("ngIf",n.forgotPasswordForm.get("email").hasError("required")&&n.forgotPasswordForm.get("email").touched&&1==n.ifSubmitted),o.xp6(1),o.Q6J("ngIf",n.forgotPasswordForm.get("email").hasError("pattern")&&n.forgotPasswordForm.get("email").touched&&1==n.ifSubmitted),o.xp6(2),o.hij(" ",o.lcZ(12,11,"Profile.Login.Submit"),""),o.xp6(2),o.Q6J("hidden",!o.lcZ(14,13,n.authSandbox.forgotpasswordLoading$)),o.xp6(2),o.Q6J("routerLink",o.DdM(19,z)),o.xp6(1),o.Oqu(o.lcZ(17,15,"Profile.Login.BacktoLogin")))},directives:[e._Y,e.JL,e.sg,e.Fj,e.JJ,e.u,p.mk,p.O5,h.rH],pipes:[w.X$,p.Ov],styles:[".validationcolor[_ngcontent-%COMP%]{border-color:red}.error[_ngcontent-%COMP%]{color:red}.form-control[_ngcontent-%COMP%]{font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:.53px;color:#000!important;height:53px;border-radius:2px;border:solid 1px #d6d6d6;background-color:#fff}.card-align[_ngcontent-%COMP%]{margin-top:15%}.cards[_ngcontent-%COMP%]{box-shadow:0 2px 10px #00000026;background-color:#fff;width:70%;margin:auto;padding:3% 5%}.cards[_ngcontent-%COMP%]   .admin[_ngcontent-%COMP%]{font-size:18px;font-weight:600;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#264151;margin-bottom:7%}.cards[_ngcontent-%COMP%]   .btn-log[_ngcontent-%COMP%]{height:53px;background-color:#264151;font-size:18px;font-weight:500;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#fff;width:100%;margin:5% 0% 3%}.cards[_ngcontent-%COMP%]   .forgot[_ngcontent-%COMP%]{font-family:Roboto;cursor:pointer;font-size:14px;font-weight:400;font-style:normal;font-stretch:normal;line-height:normal;letter-spacing:normal;color:#514c4c;text-decoration:underline;text-align:right;margin:3% 0% 5%}"]}),t})()}];let q=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({imports:[[h.Bz.forChild(Y)],h.Bz]}),t})();var C=a(7417),m=a(2596),F=a(655),b=a(9646),f=a(4004),c=a(3900),L=a(8505),g=a(4781),P=a(262);class u{constructor(l,r,n,d){this.action$=l,this.authService=r,this.sandbox=n,this.router=d,this.doLogin$=this.action$.pipe((0,m.l4)(g.MF.DO_LOGIN),(0,f.U)(i=>i.payload),(0,c.w)(i=>this.authService.login(i).pipe((0,c.w)(s=>[new g.Cs(s)]),(0,P.K)(s=>(0,b.of)(new g.Xo(s)))))),this.doForget$=this.action$.pipe((0,m.l4)(g.MF.DO_FORGOT_PASSWORD),(0,f.U)(i=>i.payload),(0,c.w)(i=>this.authService.forgetPassword(i).pipe((0,c.w)(s=>[new g.A1(s)]),(0,P.K)(s=>(0,b.of)(new g.cd(s)))))),this.gettoken$=this.action$.pipe((0,m.l4)(g.MF.GET_TOKEN),(0,f.U)(i=>i.payload),(0,c.w)(i=>this.authService.gettoken(i).pipe((0,L.b)(s=>{s&&2===s.status&&this.router.navigate(["/token-expired"]),s&&3===s.status&&this.router.navigate(["/invalid-token"])}),(0,f.U)(s=>new g.vi(s)),(0,P.K)(s=>(0,b.of)(new g.fk(s)))))),this.setpassword$=this.action$.pipe((0,m.l4)(g.MF.SET_PASSWORD),(0,f.U)(i=>i.payload),(0,c.w)(i=>this.authService.setpassword(i).pipe((0,L.b)(s=>{s&&1===s.status&&this.router.navigate(["/auth/login"])}),(0,f.U)(s=>new g.j4(s)),(0,P.K)(s=>(0,b.of)(new g.QP(s))))))}}u.\u0275fac=function(l){return new(l||u)(o.LFG(m.eX),o.LFG(C.e),o.LFG(v.j),o.LFG(h.F0))},u.\u0275prov=o.Yz7({token:u,factory:u.\u0275fac}),(0,F.gn)([(0,m.Qm)()],u.prototype,"doLogin$",void 0),(0,F.gn)([(0,m.Qm)()],u.prototype,"doForget$",void 0),(0,F.gn)([(0,m.Qm)()],u.prototype,"gettoken$",void 0),(0,F.gn)([(0,m.Qm)()],u.prototype,"setpassword$",void 0);var R=a(7829),k=a(520),D=a(2290),G=a(1944);let K=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=o.oAB({type:t}),t.\u0275inj=o.cJS({providers:[C.e,v.j],imports:[[p.ez,q,x.IJ,G._,e.UX,e.u5,D.Rh.forRoot({easing:"ease-in",maxOpened:1,autoDismiss:!0}),m.sQ.forFeature([u]),w.aw.forChild({loader:{provide:w.Zw,useFactory:R.gS,deps:[k.eN]}})]]}),t})()}}]);