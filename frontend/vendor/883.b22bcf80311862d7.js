"use strict";(self.webpackChunkspurt_multi_vendor=self.webpackChunkspurt_multi_vendor||[]).push([[883],{2883:(N,p,r)=>{r.r(p),r.d(p,{ManageCustomersModule:()=>M});var m=r(9808),u=r(9291),e=r(5e3),d=r(9080),c=r(2313),o=r(3075),h=r(9165),f=r(933),g=r(6920),v=r(4218);function C(n,i){if(1&n&&(e.\u0275\u0275elementStart(0,"tr")(1,"td",22),e.\u0275\u0275text(2),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(3,"td")(4,"h4",23),e.\u0275\u0275text(5),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(6,"td"),e.\u0275\u0275text(7),e.\u0275\u0275elementEnd()()),2&n){const t=i.$implicit;e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate2(" ",t.firstName," \xa0",t.lastName," "),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(t.email),e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(t.mobileNumber)}}function b(n,i){1&n&&(e.\u0275\u0275elementStart(0,"div",24)(1,"span"),e.\u0275\u0275text(2),e.\u0275\u0275pipe(3,"translate"),e.\u0275\u0275elementEnd()()),2&n&&(e.\u0275\u0275advance(2),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(3,1,"CRM.Nodatafound")))}const x=[{path:"",redirectTo:"customers",pathMatch:"full"},{path:"customers",component:(()=>{class n{constructor(t,a,l,s){this.customerSandbox=t,this.route=a,this.titleService=l,this.fb=s,this.currentPage=1,this.limit=10,this.offset=0}ngOnInit(){this.filterForm(),this.titleService.setTitle("Customers"),this.offset=this.route.snapshot.queryParamMap.get("offset")||0,this.currentPage=this.route.snapshot.queryParamMap.get("index"),this.getPurchase(),this.getPurchaseCount()}filterForm(){this.form=this.fb.group({Name:[""],Email:[""],MobileNumber:[""]})}getPurchase(){const t={};t.limit=this.limit,t.offset=this.offset,t.username=this.form.value.Name?this.form.value.Name:"",t.email=this.form.value.Email?this.form.value.Email:"",t.mobileNumber=this.form.value.MobileNumber?this.form.value.MobileNumber:"",this.customerSandbox.purchasedCustomerList(t)}getPurchaseCount(){const t={count:1};t.username=this.form.value.Name?this.form.value.Name:"",t.email=this.form.value.Email?this.form.value.Email:"",t.mobileNumber=this.form.value.MobileNumber?this.form.value.MobileNumber:"",this.customerSandbox.purchaseCount(t)}applyFilter(){(this.form.value.Name||this.form.value.Email||this.form.value.MobileNumber)&&(this.getPurchase(),this.getPurchaseCount())}filterReset(){this.form.reset(),this.getPurchase(),this.getPurchaseCount()}pageChange(t){this.currentPage=t,this.offset=this.limit*(t-1),this.getPurchase()}}return n.\u0275fac=function(t){return new(t||n)(e.\u0275\u0275directiveInject(d.o),e.\u0275\u0275directiveInject(u.gz),e.\u0275\u0275directiveInject(c.Dx),e.\u0275\u0275directiveInject(o.FormBuilder))},n.\u0275cmp=e.\u0275\u0275defineComponent({type:n,selectors:[["app-customers"]],decls:60,vars:50,consts:[[1,"product-list-wrap"],[1,"allorders-filter-row","flex"],[1,"aofrr-search"],[1,"aofr-rht","flex"],[1,"dropdown"],["type","button","id","dropdownMenuButton","data-toggle","dropdown","aria-haspopup","true","aria-expanded","false",1,"dropdown-toggle"],["src","assets/imgs/header-icons/arrow-down.svg","alt",""],["aria-labelledby","dropdownMenuButton",1,"dropdown-menu","dropdown-menu-right"],[1,"flex",3,"formGroup"],[1,"input-group","flex"],["type","text","formControlName","Name","name","id","placeholder","Name"],["type","email","formControlName","Email","name","id","placeholder","Email"],["type","text","formControlName","MobileNumber","name","id","appOnlyNumber","","maxlength","12","placeholder","MobileNumber"],[1,"button-reg","primary",3,"click"],[1,"reset-filter",3,"click"],[1,"added-prd"],[1,"table-responsive"],[1,"table"],[4,"ngFor","ngForOf"],["class","no-data",4,"ngIf"],[1,"pager",2,"bottom","30px","right","0"],[3,"pageSize","currentPage","counts","pageChange"],[1,""],[2,"text-transform","none"],[1,"no-data"]],template:function(t,a){if(1&t&&(e.\u0275\u0275element(0,"app-breadcrumbs"),e.\u0275\u0275elementStart(1,"div",0)(2,"div",1),e.\u0275\u0275element(3,"div",2),e.\u0275\u0275elementStart(4,"div",3)(5,"div",4)(6,"button",5),e.\u0275\u0275text(7),e.\u0275\u0275pipe(8,"translate"),e.\u0275\u0275element(9,"img",6),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(10,"div",7)(11,"form",8)(12,"div",9)(13,"p"),e.\u0275\u0275text(14),e.\u0275\u0275pipe(15,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(16,"input",10),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(17,"div",9)(18,"p"),e.\u0275\u0275text(19),e.\u0275\u0275pipe(20,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(21,"input",11),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(22,"div",9)(23,"p"),e.\u0275\u0275text(24),e.\u0275\u0275pipe(25,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275element(26,"input",12),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(27,"button",13),e.\u0275\u0275listener("click",function(){return a.applyFilter()}),e.\u0275\u0275text(28),e.\u0275\u0275pipe(29,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(30,"a",14),e.\u0275\u0275listener("click",function(){return a.filterReset()}),e.\u0275\u0275text(31),e.\u0275\u0275pipe(32,"translate"),e.\u0275\u0275elementEnd()()()()()(),e.\u0275\u0275elementStart(33,"p",15),e.\u0275\u0275text(34),e.\u0275\u0275pipe(35,"translate"),e.\u0275\u0275pipe(36,"async"),e.\u0275\u0275pipe(37,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(38,"div",16)(39,"table",17)(40,"thead")(41,"tr")(42,"th"),e.\u0275\u0275text(43),e.\u0275\u0275pipe(44,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(45,"th"),e.\u0275\u0275text(46),e.\u0275\u0275pipe(47,"translate"),e.\u0275\u0275elementEnd(),e.\u0275\u0275elementStart(48,"th"),e.\u0275\u0275text(49),e.\u0275\u0275pipe(50,"translate"),e.\u0275\u0275elementEnd()()(),e.\u0275\u0275elementStart(51,"tbody"),e.\u0275\u0275template(52,C,8,4,"tr",18),e.\u0275\u0275pipe(53,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275template(54,b,4,3,"div",19),e.\u0275\u0275pipe(55,"async"),e.\u0275\u0275pipe(56,"async"),e.\u0275\u0275elementEnd()(),e.\u0275\u0275elementStart(57,"div",20)(58,"app-pager",21),e.\u0275\u0275listener("pageChange",function(s){return a.pageChange(s)}),e.\u0275\u0275pipe(59,"async"),e.\u0275\u0275elementEnd()()),2&t){let l,s;e.\u0275\u0275advance(7),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(8,18,"CRM.Filters")," "),e.\u0275\u0275advance(4),e.\u0275\u0275property("formGroup",a.form),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(15,20,"CRM.Name")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(20,22,"CRM.Email")),e.\u0275\u0275advance(5),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(25,24,"CRM.MobileNumber")),e.\u0275\u0275advance(4),e.\u0275\u0275textInterpolate1(" ",e.\u0275\u0275pipeBind1(29,26,"CRM.ApplyFilters"),""),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(32,28,"CRM.Reset")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate3("",e.\u0275\u0275pipeBind1(35,30,"CRM.Thereare")," ",null==(l=e.\u0275\u0275pipeBind1(36,32,a.customerSandbox.purchasedCustomerList$))?null:l.length," ",e.\u0275\u0275pipeBind1(37,34,"CRM.Customers"),""),e.\u0275\u0275advance(9),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(44,36,"CRM.Name")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(47,38,"CRM.Email")),e.\u0275\u0275advance(3),e.\u0275\u0275textInterpolate(e.\u0275\u0275pipeBind1(50,40,"CRM.MobileNumber")),e.\u0275\u0275advance(3),e.\u0275\u0275property("ngForOf",e.\u0275\u0275pipeBind1(53,42,a.customerSandbox.purchasedCustomerList$)),e.\u0275\u0275advance(2),e.\u0275\u0275property("ngIf",0==(null==(s=e.\u0275\u0275pipeBind1(55,44,a.customerSandbox.purchasedCustomerList$))?null:s.length)&&e.\u0275\u0275pipeBind1(56,46,a.customerSandbox.purchasedCustomerListLoaded$)),e.\u0275\u0275advance(4),e.\u0275\u0275property("pageSize",a.limit)("currentPage",a.currentPage)("counts",e.\u0275\u0275pipeBind1(59,48,a.customerSandbox.purchaseCount$))}},directives:[h.n,o.\u0275NgNoValidate,o.NgControlStatusGroup,o.FormGroupDirective,o.DefaultValueAccessor,o.NgControlStatus,o.FormControlName,f.p,o.MaxLengthValidator,m.NgForOf,m.NgIf,g.P],pipes:[v.X$,m.AsyncPipe],styles:[".allorders-filter-row[_ngcontent-%COMP%]{margin-top:20px}"]}),n})(),data:{title:"Orders",urls:[{title:"Home",url:"/dashboard"},{title:"CRM",url:"/sales/manage-orders/list"},{title:"List"}]}}];let M=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.\u0275\u0275defineNgModule({type:n}),n.\u0275inj=e.\u0275\u0275defineInjector({imports:[[m.CommonModule,o.FormsModule,u.Bz.forChild(x)]]}),n})()}}]);