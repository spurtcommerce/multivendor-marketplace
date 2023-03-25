"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[6874],{6874:(T,m,o)=>{o.r(m),o.d(m,{MaintenanceModule:()=>Z});var s=o(9808),l=o(9291),e=o(5e3),d=o(9908),u=o(9814),r=o(3075),c=o(4218);function g(n,a){1&n&&(e.TgZ(0,"div",8)(1,"div",9),e._UZ(2,"img",10),e.qZA()())}const p=[{path:"",component:(()=>{class n{constructor(t,i){this.sandbox=t,this.changeDetect=i,this.mode="",this.subscriptions=[]}ngOnInit(){this.getGeneralSetting(),this.subscribe()}submitMode(){const t={};t.mode=this.mode,this.sandbox.maintenanceMode(t)}subscribe(){this.subscriptions.push(this.sandbox.getGeneralSettings$.subscribe(t=>{t&&t[0]&&(1===t[0].maintenanceMode?(this.mode="1",this.changeDetect.detectChanges()):0===t[0].maintenanceMode&&(this.mode="0",this.changeDetect.detectChanges()))}))}getGeneralSetting(){this.sandbox.getGeneralSetting()}ngOnDestroy(){this.subscriptions.forEach(t=>t.unsubscribe())}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(d.C),e.Y36(e.sBO))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-maintenance"]],decls:24,vars:18,consts:[[1,"set-lay-notes","flex",2,"padding","0 10px 10px 10px"],["class","spinner-wrapper",4,"ngIf"],[1,"maintenance-wrap"],[1,"maintenance-bx"],[1,"radio","flex"],["fxLayout","column","fxLayoutGap",".25rem",3,"ngModel","ngModelChange"],[3,"value"],[1,"button-reg","primary",3,"click"],[1,"spinner-wrapper"],[1,"row",2,"position","absolute"],["width","80px","height","80px","src","./assets/loader/Spurt-commerce-Loader-2.1.gif"]],template:function(t,i){1&t&&(e.TgZ(0,"div",0)(1,"h4"),e._uU(2,"Note :"),e.qZA(),e.TgZ(3,"p"),e._uU(4,"By enabling this, the admin will be stopping the end-users/customers from doing any kind of activity \u2013 browsing and searching for products or doing an online purchase, on the eCommerce portal. The admin can use this option, whenever they need to make any update or enhancement to the eCommerce portal. This way, they will be informing the Customers about the same, and requesting for their patience, while they are updating or enhancing the eCommerce portal. "),e.qZA()(),e.YNc(5,g,3,0,"div",1),e.ALo(6,"async"),e.TgZ(7,"div",2)(8,"h3"),e._uU(9),e.ALo(10,"translate"),e.qZA(),e.TgZ(11,"div",3),e._uU(12,"Would you like to turn on the maintenance mode for your eCommerce portal? Remember that your customers will not be able to carry out any activity on the eCommerce portal, when maintenance mode is enabled. "),e.qZA(),e.TgZ(13,"div",4)(14,"mat-radio-group",5),e.NdJ("ngModelChange",function(A){return i.mode=A}),e.TgZ(15,"mat-radio-button",6),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"mat-radio-button",6),e._uU(19),e.ALo(20,"translate"),e.qZA()()(),e.TgZ(21,"button",7),e.NdJ("click",function(){return i.submitMode()}),e._uU(22),e.ALo(23,"translate"),e.qZA()()),2&t&&(e.xp6(5),e.Q6J("ngIf",e.lcZ(6,8,i.sandbox.getSettingLoading$)),e.xp6(4),e.Oqu(e.lcZ(10,10,"Settings.system.Entermaintenancemode")),e.xp6(5),e.Q6J("ngModel",i.mode),e.xp6(1),e.Q6J("value","1"),e.xp6(1),e.Oqu(e.lcZ(17,12,"Settings.system.Yes")),e.xp6(2),e.Q6J("value","0"),e.xp6(1),e.Oqu(e.lcZ(20,14,"Settings.system.No")),e.xp6(3),e.Oqu(e.lcZ(23,16,"Settings.system.Save")))},directives:[s.O5,u.VQ,r.JJ,r.On,u.U0],pipes:[s.Ov,c.X$],styles:[".spinner-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;justify-items:center}"]}),n})(),data:{permission:"edit-general-settings"}}];let h=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.Bz.forChild(p)],l.Bz]}),n})();var f=o(6693),y=o(7829),v=o(520),M=o(8343),C=o(2596),x=o(5598);let Z=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[d.C,M.E],imports:[[s.ez,h,f.q,r.u5,C.sQ.forFeature([x.V]),c.aw.forChild({loader:{provide:c.Zw,useFactory:y.gS,deps:[v.eN]}})]]}),n})()}}]);