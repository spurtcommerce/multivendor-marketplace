"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[9279],{59279:(x,y,a)=>{a.r(y),a.d(y,{BlogCategoriesModule:()=>R});var n=a(69808),c=a(93075),u=a(99291),C=a(92340),b=a(9819),t=a(5e3),h=a(22071),l=a(10518),m=a(22290),p=a(22313),v=a(84218);const _=["paginator"];function S(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",11),t.\u0275\u0275text(1," Title is required "),t.\u0275\u0275elementEnd())}function I(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",11),t.\u0275\u0275text(1),t.\u0275\u0275pipe(2,"translate"),t.\u0275\u0275elementEnd()),2&o&&(t.\u0275\u0275advance(1),t.\u0275\u0275textInterpolate1(" ",t.\u0275\u0275pipeBind1(2,1,"catalog.Error.categoryNameMaxlength")," "))}const D=function(o){return{validationcolor:o}};function L(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"div",7),t.\u0275\u0275element(1,"input",8),t.\u0275\u0275elementStart(2,"button",9),t.\u0275\u0275listener("click",function(){return t.\u0275\u0275restoreView(e),t.\u0275\u0275nextContext().categoryAdd()}),t.\u0275\u0275text(3),t.\u0275\u0275elementEnd(),t.\u0275\u0275template(4,S,2,0,"div",10),t.\u0275\u0275template(5,I,3,3,"div",10),t.\u0275\u0275elementEnd()}if(2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("formControl",e.categoryTitle)("ngClass",t.\u0275\u0275pureFunction1(5,D,e.categoryTitle.errors&&e.submitted)),t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.buttonName),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.categoryTitle.hasError("required")&&e.submitted),t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf",e.categoryTitle.hasError("maxlength"))}}function B(o,s){1&o&&(t.\u0275\u0275elementStart(0,"thead")(1,"tr")(2,"th"),t.\u0275\u0275text(3,"Category Name"),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(4,"th"),t.\u0275\u0275elementStart(5,"th",12),t.\u0275\u0275text(6,"Action"),t.\u0275\u0275elementEnd()()())}function M(o,s){if(1&o){const e=t.\u0275\u0275getCurrentView();t.\u0275\u0275elementStart(0,"tr")(1,"td"),t.\u0275\u0275text(2),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"td")(4,"div",14)(5,"input",15),t.\u0275\u0275listener("change",function(r){const g=t.\u0275\u0275restoreView(e).$implicit;return t.\u0275\u0275nextContext(2).statusChange(r.target.checked,g.blogCategoryId)}),t.\u0275\u0275elementEnd(),t.\u0275\u0275element(6,"label",16),t.\u0275\u0275elementEnd()(),t.\u0275\u0275elementStart(7,"td",17)(8,"button",18),t.\u0275\u0275listener("click",function(){const d=t.\u0275\u0275restoreView(e).$implicit;return t.\u0275\u0275nextContext(2).editCategory(d.blogCategoryId)}),t.\u0275\u0275element(9,"img",19),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"button",18),t.\u0275\u0275listener("click",function(){const d=t.\u0275\u0275restoreView(e).$implicit;return t.\u0275\u0275nextContext(2).deleteCategory(d.blogCategoryId)}),t.\u0275\u0275element(11,"img",20),t.\u0275\u0275elementEnd()()()}if(2&o){const e=s.$implicit;t.\u0275\u0275advance(2),t.\u0275\u0275textInterpolate(e.name),t.\u0275\u0275advance(3),t.\u0275\u0275propertyInterpolate("id",e.blogCategoryId),t.\u0275\u0275property("checked",e.isActive),t.\u0275\u0275advance(1),t.\u0275\u0275propertyInterpolate("for",e.blogCategoryId)}}function E(o,s){if(1&o&&(t.\u0275\u0275elementStart(0,"tbody"),t.\u0275\u0275template(1,M,12,4,"tr",13),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementEnd()),2&o){const e=t.\u0275\u0275nextContext();t.\u0275\u0275advance(1),t.\u0275\u0275property("ngForOf",t.\u0275\u0275pipeBind1(2,1,e.categorySandbox.blogCategoryList$))}}function T(o,s){1&o&&(t.\u0275\u0275elementStart(0,"div",21)(1,"div",22),t.\u0275\u0275element(2,"img",23),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(3,"div",24)(4,"h3"),t.\u0275\u0275text(5,"Blog Category"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(6,"p"),t.\u0275\u0275text(7,"This feature is currently not active for you"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(8,"h4"),t.\u0275\u0275text(9,"To activate this feature"),t.\u0275\u0275elementEnd(),t.\u0275\u0275elementStart(10,"h5")(11,"i"),t.\u0275\u0275text(12,"Goto : "),t.\u0275\u0275elementStart(13,"a",25),t.\u0275\u0275text(14," Settings menu > AddOns > Blog "),t.\u0275\u0275elementEnd()()()()())}const O=[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class o{constructor(e,i,r,d,g,f){this.categorySandbox=e,this.route=i,this.router=r,this.modalService=d,this.toastr=g,this.titleService=f,this.categoryImage=[],this.offset=0,this.pageSize="10",this.keyword="",this.status="",this.buttonCheck=!0,this.subscriptions=[],this.queryData={},this.filterData=[],this.filterDataId=[],this.selectAllValues=!1,this.submitted=!1,this.buttonName="Add",this.title="Blog Category"}ngOnInit(){this.titleService.setTitle(this.title),this.categoryTitle=new c.FormControl("",c.Validators.compose([c.Validators.required,c.Validators.maxLength(255)])),this.imageUrl=C.N.imageUrl,this.pageSize=sessionStorage.getItem("itemsPerPage")?sessionStorage.getItem("itemsPerPage"):this.pageSize,this.offset=this.router.snapshot.queryParamMap.get("offset")||0,this.index=this.router.snapshot.queryParamMap.get("index"),this.categoryList(),this.getCategoryListCount()}subscribe(){this.categorySandbox.blogCategoryAddLoaded$.subscribe(e=>{e&&(this.submitted=!1,this.categoryList(),this.categoryTitle.setValue(""))})}categoryAdd(){if(this.submitted=!0,!this.categoryTitle.valid)return;const e={};e.name=this.categoryTitle.value,"Add"==this.buttonName&&(this.categorySandbox.getBlogAdd(e),this.subscribe()),"Update"==this.buttonName&&(e.blogCategoryId=this.blogId,this.categorySandbox.getBlogUpdate(e),this.categorySandbox.blogCategoryUpdateLoaded$.subscribe(i=>{i&&(this.blogId="",this.submitted=!1,this.categoryList(),this.categoryTitle.setValue(""),this.buttonName="Add")}))}categoryList(){const e={};e.limit=this.pageSize,e.offset=this.offset,e.keyword=this.keyword,e.status=this.status,this.categorySandbox.getBlogList(e),this.queryData.offset=this.offset||0,this.queryData.index=this.index||0,this.route.navigate([],{relativeTo:this.router,queryParams:this.queryData,queryParamsHandling:"merge"})}getCategoryListCount(){const e={limit:0,offset:0};e.keyword=this.keyword,e.status=this.status,e.count=1,this.categorySandbox.getBlogCount(e)}addCategories(){this.route.navigate(["/cms/manage-blogs/blog_category/add"],{queryParams:this.queryData})}changeFilter(e){this.buttonCheck=e.target.checked}onPageChange(e){this.currentPage=e.offset,this.pageSize=e.pageSize,this.index=e.pageIndex,this.offset=e.pageSize*e.pageIndex,this.selectedAll=!1,this.filterDataId=[],this.categoryList()}deleteCategory(e){if(e==this.blogId)return void this.toastr.error("Update the category first");const i=this.modalService.open(b.j,{size:"sm",windowClass:"delete-confirm",backdrop:"static",modalDialogClass:"modal-dialog-centered",backdropClass:"createcr"});i.componentInstance.key="",i.componentInstance.id="",i.componentInstance.deleteMessage="Blog Category",i.result.then(r=>{if("deleted"===r){const d={};d.blogCategoryId=e,this.categorySandbox.getBlogDelete(d),this.subscriptions.push(this.categorySandbox.blogCategoryDeleteLoaded$.subscribe(g=>{g&&(this.categoryList(),this.getCategoryListCount())}))}})}receiveProgress(e){this.index=0,this.keyword=e.keyword,this.status=e.status?e.status:"",this.offset=0,this.paginator.firstPage(),this.categoryList(),this.getCategoryListCount()}categoryImageLoading(e){this.categoryImage[e]=!0}selectAll(){for(let e=0;e<this.productListArray.length;e++)this.productListArray[e].selected=this.selectedAll;this.filterDataList()}filterDataList(){this.filterData=this.productListArray.filter(e=>{if(!0===e.selected)return e}),this.filterDataId=this.filterData.map(e=>e.categoryId)}checkIfAllSelected(){this.selectedAll=this.productListArray.every(function(e){return!0===e.selected}),this.filterDataList()}editCategory(e){if(e){this.buttonName="Update";const i={};i.blogCategoryId=e,this.blogId=e,this.categorySandbox.getBlogDetail(i),this.categorySandbox.blogCategoryDetail$.subscribe(r=>{r&&this.categoryTitle.setValue(r.name)})}}statusChange(e,i){const r={};r.blogCategoryId=i,r.status=1==e?1:0,this.categorySandbox.getBlogStatus(r)}ngOnDestroy(){this.subscriptions.forEach(e=>e.unsubscribe())}}return o.\u0275fac=function(e){return new(e||o)(t.\u0275\u0275directiveInject(h.H),t.\u0275\u0275directiveInject(u.F0),t.\u0275\u0275directiveInject(u.gz),t.\u0275\u0275directiveInject(l.FF),t.\u0275\u0275directiveInject(m._W),t.\u0275\u0275directiveInject(p.Dx))},o.\u0275cmp=t.\u0275\u0275defineComponent({type:o,selectors:[["app-spurt-blog-catalog-categories-list"]],viewQuery:function(e,i){if(1&e&&t.\u0275\u0275viewQuery(_,5),2&e){let r;t.\u0275\u0275queryRefresh(r=t.\u0275\u0275loadQuery())&&(i.paginator=r.first)}},decls:12,vars:12,consts:[[1,"blog-cat-add-wrapper"],["class","bcaw-add-row flex",4,"ngIf"],[1,"product-table"],[1,"table-responsive"],[1,"table"],[4,"ngIf"],["class","cash-on-delivery flex",4,"ngIf"],[1,"bcaw-add-row","flex"],["type","text",1,"form-control",3,"formControl","ngClass"],[1,"button-reg","primary",3,"click"],["class","validation-error",4,"ngIf"],[1,"validation-error"],[1,"text-right"],[4,"ngFor","ngForOf"],[1,"toggle"],["type","checkbox",1,"tgl","tgl-light",3,"id","checked","change"],[1,"tgl-btn",3,"for"],[1,"action-btn","text-right"],[3,"click"],["src","assets/img/edit.png","alt",""],["src","assets/img/delete-new.png","alt",""],[1,"cash-on-delivery","flex"],[1,"cod-img"],["src","assets/img/circles-three-plus.svg","alt",""],[1,"cod-content"],["href","#/settings/add-on"]],template:function(e,i){if(1&e&&(t.\u0275\u0275elementStart(0,"div",0),t.\u0275\u0275template(1,L,6,7,"div",1),t.\u0275\u0275pipe(2,"async"),t.\u0275\u0275elementStart(3,"div",2)(4,"div",3)(5,"table",4),t.\u0275\u0275template(6,B,7,0,"thead",5),t.\u0275\u0275pipe(7,"async"),t.\u0275\u0275template(8,E,3,3,"tbody",5),t.\u0275\u0275pipe(9,"async"),t.\u0275\u0275template(10,T,15,0,"div",6),t.\u0275\u0275pipe(11,"async"),t.\u0275\u0275elementEnd()()()()),2&e){let r,d,g,f;t.\u0275\u0275advance(1),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"!=(null==(r=t.\u0275\u0275pipeBind1(2,4,i.categorySandbox.blogCategoryActive$))?null:r.message)),t.\u0275\u0275advance(5),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"!=(null==(d=t.\u0275\u0275pipeBind1(7,6,i.categorySandbox.blogCategoryActive$))?null:d.message)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"!=(null==(g=t.\u0275\u0275pipeBind1(9,8,i.categorySandbox.blogCategoryActive$))?null:g.message)),t.\u0275\u0275advance(2),t.\u0275\u0275property("ngIf","you dont have access for it, please enable addon"==(null==(f=t.\u0275\u0275pipeBind1(11,10,i.categorySandbox.blogCategoryActive$))?null:f.message))}},directives:[n.NgIf,c.DefaultValueAccessor,c.NgControlStatus,c.FormControlDirective,n.NgClass,n.NgForOf],pipes:[n.AsyncPipe,v.X$],styles:[""]}),o})(),canActivate:[a(8300).a],data:{permission:"list-category",urls:[{title:"CMS",url:""},{title:"Manage Blogs",url:""},{title:"Blog Category",url:""},{title:"List",url:""}]}}];let k=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({imports:[[u.Bz.forChild(O)],u.Bz]}),o})();var F=a(47769),N=a(40520),j=a(49876),$=a(34303),V=a(78374),z=a(36642),w=a(60067);let R=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=t.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=t.\u0275\u0275defineInjector({providers:[h.H,V.P],imports:[[n.CommonModule,c.FormsModule,c.ReactiveFormsModule,k,j.dF,z.sQ.forFeature([w.N]),v.aw.forChild({loader:{provide:v.Zw,useFactory:F.g,deps:[N.eN]}}),$.m]]}),o})()},9819:(x,y,a)=>{a.d(y,{j:()=>b});var n=a(5e3),c=a(10518),u=a(85699),C=a(8110);let b=(()=>{class t{constructor(l,m,p){this.activeModal=l,this.sellerSandbox=m,this.productSandbox=p}ngOnInit(){}close(){this.activeModal.close()}deleteContent(){"vendor"===this.key?(this.sellerSandbox.deleteSeller({vendorId:this.id}),this.sellerSandbox.deleteLoaded$.subscribe(l=>{!0===l&&this.activeModal.close("deleted")})):"product"===this.key?(this.productSandbox.doProductDelete({productId:this.id}),this.productSandbox.productDeleteLoaded$.subscribe(l=>{!0===l&&this.activeModal.close("deleted")})):this.activeModal.close("deleted")}}return t.\u0275fac=function(l){return new(l||t)(n.\u0275\u0275directiveInject(c.Kz),n.\u0275\u0275directiveInject(u.A),n.\u0275\u0275directiveInject(C.Z))},t.\u0275cmp=n.\u0275\u0275defineComponent({type:t,selectors:[["app-delete-confirmation-dialog"]],inputs:{deleteMessage:"deleteMessage"},decls:14,vars:1,consts:[[1,"modal-body"],["type","button",1,"close",3,"click"],["aria-hidden","true",2,"background-color","white"],[1,"delete-btns","flex"],["type","button",1,"btn","btn-danger",3,"click"],["type","button",1,"btn","btn-success",3,"click"]],template:function(l,m){1&l&&(n.\u0275\u0275elementStart(0,"div",0)(1,"button",1),n.\u0275\u0275listener("click",function(){return m.close()}),n.\u0275\u0275elementStart(2,"span",2),n.\u0275\u0275text(3,"\xd7"),n.\u0275\u0275elementEnd()(),n.\u0275\u0275elementStart(4,"h3"),n.\u0275\u0275text(5,"Delete Confirmation"),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(6,"p"),n.\u0275\u0275text(7),n.\u0275\u0275elementEnd(),n.\u0275\u0275element(8,"h4"),n.\u0275\u0275elementStart(9,"div",3)(10,"button",4),n.\u0275\u0275listener("click",function(){return m.close()}),n.\u0275\u0275text(11," Cancel "),n.\u0275\u0275elementEnd(),n.\u0275\u0275elementStart(12,"button",5),n.\u0275\u0275listener("click",function(){return m.deleteContent()}),n.\u0275\u0275text(13," Delete "),n.\u0275\u0275elementEnd()()()),2&l&&(n.\u0275\u0275advance(7),n.\u0275\u0275textInterpolate1("Are you sure want to delete this ",m.deleteMessage," ?"))},styles:[".modal-title[_ngcontent-%COMP%]{padding:30px 30px 5px;border-bottom:1px solid #eeeeee}.modal-title[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{text-align:center;font-size:.875rem}.close[_ngcontent-%COMP%]{padding:10px;border:none}.close[_ngcontent-%COMP%]:focus{outline:none!important}.modal-footer[_ngcontent-%COMP%]{justify-content:center!important}"]}),t})()}}]);