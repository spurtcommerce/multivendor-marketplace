"use strict";(self.webpackChunkspurtcommerce=self.webpackChunkspurtcommerce||[]).push([[6176],{6176:(i,l,o)=>{o.r(l),o.d(l,{ManageContentModule:()=>h});var m=o(9808),g=o(9291),a=o(8300);const u=[{path:"widgets",loadChildren:()=>o.e(3669).then(o.bind(o,3669)).then(t=>t.WidgetsModule),canActivate:[a.a],data:{permissionForHeader:"cms-widgets",root:"cms"}}];var n=o(5e3);const e=[{path:"",redirectTo:"pages",pathMatch:"full"},{path:"pages",loadChildren:()=>Promise.all([o.e(8592),o.e(7185)]).then(o.bind(o,7185)).then(t=>t.PagesModule),canActivate:[a.a],data:{permissionForHeader:"cms-pages",root:"cms"}},{path:"page-group",loadChildren:()=>Promise.all([o.e(8592),o.e(5864)]).then(o.bind(o,5864)).then(t=>t.PageGroupModule),canActivate:[a.a],data:{permissionForHeader:"cms-page-group",root:"cms"}}];e.forEach(t=>{t&&e.push(u[0])});let c=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[g.Bz.forChild(e)],g.Bz]}),t})(),h=(()=>{class t{}return t.\u0275fac=function(d){return new(d||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[[m.ez,c]]}),t})()}}]);