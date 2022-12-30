"use strict";(self.webpackChunkpro_grado=self.webpackChunkpro_grado||[]).push([[642],{4205:(U,p,n)=>{n.d(p,{m:()=>M});var _=n(4762),o=n(3679),m=n(2238),h=n(8259),e=n.n(h),A=n(4741),t=n(7716),D=n(745),I=n(3147),b=n(9258),x=n(1228),R=n(1095),L=n(1436),O=n(6627),E=n(8295),C=n(7441),v=n(8583),u=n(9983),c=n(2458);function l(i,r){if(1&i&&(t.TgZ(0,"mat-option",19),t._uU(1),t.qZA()),2&i){const a=r.$implicit;t.Q6J("value",a.nmdato),t.xp6(1),t.hij(" ",a.cddato," ")}}function s(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Selecci\xf3n requerida"),t.qZA())}function d(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Solo se aceptan n\xfameros"),t.qZA())}function y(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"N\xfamero de documento requerido "),t.qZA())}function W(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Escriba un nombre"),t.qZA())}function K(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Tel\xe9fono requerido"),t.qZA())}function S(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Solo se aceptan n\xfameros"),t.qZA())}function J(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Escriba la direcci\xf3n"),t.qZA())}function Y(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Email requerido"),t.qZA())}function F(i,r){1&i&&(t.TgZ(0,"mat-error"),t._uU(1,"Escriba un email v\xe1lido"),t.qZA())}class M{constructor(r,a,f,g,Z,P,T){this.fb=r,this.serviceRol=a,this.utilService=f,this.dialogRef=g,this.service=Z,this.auth=P,this.inData=T,this.formCliente=this.fb.group({cduniccliente:[""],cdestado:[""],cdtipodocumento:["",[o.kI.required]],cddocumento:["",[o.kI.required,o.kI.pattern("^[0-9,$]*")]],dsnombreCompleto:["",o.kI.required],dsdireccion:["",o.kI.required],dsemail:["",[o.kI.required,o.kI.email]],cdtelefono:["",[o.kI.required,o.kI.pattern("^[0-9,$]*")]],dtfechacreacion:[""],dtfechamodificacion:[""],cdusuario:[""],dsdocumento:[""]}),null!==T&&(this.formCliente.setValue(this.inData.cliente),this.formCliente.get("cdusuario").setValue(this.auth.getCurrentUser().email))}ngOnInit(){this.getDocumentos()}saveUpdate(){if("INVALID"==this.formCliente.status)return void e().fire("","<b>Debes diligenciar todo el formulario</b>","warning");let a,r=this.formCliente.get("cduniccliente")?.value;a=""===r?"\xbfDeseas agregar este cliente?":"\xbfDeseas modificar este cliente?",this.utilService.confirmacion(`${a}`).then(f=>{f.isConfirmed?(this.blockUI.start("Guardando..."),this.service.saveOrUpdate(this.formCliente.getRawValue()).subscribe(g=>{console.log(g),200===g.status?(e().fire(g.message,"","success"),this.blockUI.stop(),this.dialogRef.close({data:g})):(this.blockUI.stop(),e().fire({icon:"warning",text:g.message}))},()=>{this.blockUI.stop(),e().fire("ERROR","Error al editar el cliente","error")})):f.isDenied&&e().fire("Cancelado","","info")})}getDocumentos(){this.blockUI.start("Cargando..."),this.serviceRol.getParametros().subscribe(r=>{200==r.status?(this.listTipoDocumento=r.data.TIPO_DOCUMENTO,this.blockUI.stop()):e().fire("","Ha ocurrido un error cargando los par\xe1metros","error")},()=>{this.blockUI.stop(),e().fire("ERROR","Ha ocurrido un error cargando los par\xe1metros","error")})}getValue(r){return this.formCliente.get(r)}}M.\u0275fac=function(r){return new(r||M)(t.Y36(o.qu),t.Y36(D.m),t.Y36(I.o),t.Y36(m.so),t.Y36(b.$),t.Y36(x.e),t.Y36(m.WI))},M.\u0275cmp=t.Xpm({type:M,selectors:[["app-add-edit-client"]],decls:48,vars:12,consts:[["mat-dialog-close","","mat-icon-button","","matTooltip","Cerrar","matTooltipPosition","left",1,"close"],[3,"formGroup","ngSubmit"],[1,"mat-typography"],["id","container"],["appearance","outline","id","documento1"],["formControlName","cdtipodocumento"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],["appearance","outline","border","1px",1,"documento"],["id","documento","matInput","","placeholder","N\xfamero de documento","formControlName","cddocumento","maxlength","20","required",""],["appearance","outline",1,"full-width"],["matInput","","placeholder","Nombre completo","formControlName","dsnombreCompleto","maxlength","20","required",""],[1,"example-container"],["appearance","outline"],["matInput","","placeholder","Tel\xe9fono","formControlName","cdtelefono","maxlength","20","required",""],["matInput","","placeholder","Direcci\xf3n","formControlName","dsdireccion","maxlength","100","required",""],["matInput","","placeholder","Correo electr\xf3nico","formControlName","dsemail","maxlength","120","required",""],["align","center"],["type","submit","mat-mini-fab","","color","primary","matTooltip","Guardar","matTooltipPosition","above"],[3,"value"]],template:function(r,a){if(1&r&&(t.TgZ(0,"button",0),t.TgZ(1,"mat-icon"),t._uU(2,"close"),t.qZA(),t.qZA(),t.TgZ(3,"h2"),t._uU(4),t.qZA(),t.TgZ(5,"form",1),t.NdJ("ngSubmit",function(){return a.saveUpdate()}),t.TgZ(6,"mat-dialog-content",2),t._UZ(7,"br"),t.TgZ(8,"div",3),t.TgZ(9,"mat-form-field",4),t.TgZ(10,"mat-label"),t._uU(11,"Tipo"),t.qZA(),t.TgZ(12,"mat-select",5),t.YNc(13,l,2,2,"mat-option",6),t.qZA(),t.YNc(14,s,2,0,"mat-error",7),t.qZA(),t.TgZ(15,"mat-form-field",8),t.TgZ(16,"mat-label"),t._uU(17,"Documento"),t.qZA(),t._UZ(18,"input",9),t.YNc(19,d,2,0,"mat-error",7),t.YNc(20,y,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(21,"mat-form-field",10),t.TgZ(22,"mat-label"),t._uU(23,"Nombre"),t.qZA(),t._UZ(24,"input",11),t.YNc(25,W,2,0,"mat-error",7),t.qZA(),t.TgZ(26,"div",12),t.TgZ(27,"mat-form-field",13),t.TgZ(28,"mat-label"),t._uU(29,"Tel\xe9fono"),t.qZA(),t._UZ(30,"input",14),t.YNc(31,K,2,0,"mat-error",7),t.YNc(32,S,2,0,"mat-error",7),t.qZA(),t.TgZ(33,"mat-form-field",13),t.TgZ(34,"mat-label"),t._uU(35,"Direcci\xf3n"),t.qZA(),t._UZ(36,"input",15),t.YNc(37,J,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(38,"mat-form-field",10),t.TgZ(39,"mat-label"),t._uU(40,"Correo Electr\xf3nico"),t.qZA(),t._UZ(41,"input",16),t.YNc(42,Y,2,0,"mat-error",7),t.YNc(43,F,2,0,"mat-error",7),t.qZA(),t.qZA(),t.TgZ(44,"mat-dialog-actions",17),t.TgZ(45,"button",18),t.TgZ(46,"mat-icon"),t._uU(47,"save"),t.qZA(),t.qZA(),t.qZA(),t.qZA()),2&r){let f,g,Z,P,T,B,k,N,q;t.xp6(4),t.Oqu(null==a.inData?"Agregar cliente":"Modificar cliente"),t.xp6(1),t.Q6J("formGroup",a.formCliente),t.xp6(8),t.Q6J("ngForOf",a.listTipoDocumento),t.xp6(1),t.Q6J("ngIf",null==(f=a.getValue("cdtipodocumento"))||null==f.errors?null:f.errors.required),t.xp6(5),t.Q6J("ngIf",null==(g=a.getValue("cddocumento"))||null==g.errors?null:g.errors.pattern),t.xp6(1),t.Q6J("ngIf",null==(Z=a.getValue("cddocumento"))||null==Z.errors?null:Z.errors.required),t.xp6(5),t.Q6J("ngIf",null==(P=a.getValue("dsnombreCompleto"))||null==P.errors?null:P.errors.required),t.xp6(6),t.Q6J("ngIf",null==(T=a.getValue("cdtelefono"))||null==T.errors?null:T.errors.required),t.xp6(1),t.Q6J("ngIf",null==(B=a.getValue("cdtelefono"))||null==B.errors?null:B.errors.pattern),t.xp6(5),t.Q6J("ngIf",null==(k=a.getValue("dsdireccion"))||null==k.errors?null:k.errors.required),t.xp6(5),t.Q6J("ngIf",null==(N=a.getValue("dsemail"))||null==N.errors?null:N.errors.required),t.xp6(1),t.Q6J("ngIf",null==(q=a.getValue("dsemail"))||null==q.errors?null:q.errors.email)}},directives:[R.lW,m.ZT,L.gM,O.Hw,o._Y,o.JL,o.sg,m.xY,E.KE,E.hX,C.gD,o.JJ,o.u,v.sg,v.O5,u.Nt,o.Fj,o.nD,o.Q7,m.H8,c.ey,E.TO],styles:[".mat-form-field[_ngcontent-%COMP%]{margin-left:5px;margin-right:5px}.containerI[_ngcontent-%COMP%]   .mat-form-field[_ngcontent-%COMP%] + .mat-form-field[_ngcontent-%COMP%]{margin-left:8px}.fullContainer[_ngcontent-%COMP%]{width:100%}.example-button-container[_ngcontent-%COMP%]{margin:0 auto}input[type=number][_ngcontent-%COMP%]::-webkit-outer-spin-button, input[type=number][_ngcontent-%COMP%]::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.close[_ngcontent-%COMP%]{float:right}.documento[_ngcontent-%COMP%]{width:97.5%}#documento1[_ngcontent-%COMP%]{width:29%}#container[_ngcontent-%COMP%]{display:flex;align-items:center}h2[_ngcontent-%COMP%]{text-align:center;margin-left:40px}#numerocuenta[_ngcontent-%COMP%]{width:97%}#scroll[_ngcontent-%COMP%]{overflow:auto}.full-width[_ngcontent-%COMP%]{width:97.5%}.example-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between}"]}),(0,_.gn)([(0,A.bH)()],M.prototype,"blockUI",void 0)},9824:(U,p,n)=>{n.d(p,{M:()=>C});var _=n(4762),o=n(6797),m=n(8248),h=n(4741),e=n(7716),A=n(5072),t=n(4655),D=n(1228),I=n(8141),b=n(2522),x=n(1095),R=n(1436),L=n(6627),O=n(3017),E=n(7746);class C{constructor(u,c,l,s,d){this.changeDetectorRef=u,this.route=l,this.authService=s,this.authActiveGuard=d,this.title="LABORATORIO UNICORDOBA",this.mobileQuery=window.matchMedia("(max-width: 600px)"),this.mobileQuery.addEventListener("change",()=>{this._mobileQueryListener()}),this.mobileQuery=c.matchMedia("(max-width: 600px)"),this._mobileQueryListener=()=>u.detectChanges()}ngOnInit(){this.getPermitsAlls();const u=this.authService.getCurrentUser();if(null!==u){this.isAdmin=u.isAdmin,this.userName=u.fullName;let c=(0,o.H)(2e3,5e3);this.autoLogoutSubscription=c.subscribe(()=>{this.authActiveGuard.canActivate()})}}ngAfterViewInit(){this.changeDetectorRef.detectChanges()}getPermitsAlls(){const c=this.authService.getCurrentUser();let l=null;if(c&&(l=c.token),null!=l){let s=(0,m.Z)(l);JSON.parse(s.sub)}}logout(){this.blockUI.start("Saliendo..."),this.authService.logout(),this.blockUI.stop()}}C.\u0275fac=function(u){return new(u||C)(e.Y36(e.sBO),e.Y36(A.vx),e.Y36(t.gz),e.Y36(D.e),e.Y36(I.K))},C.\u0275cmp=e.Xpm({type:C,selectors:[["app-menu"]],decls:49,vars:5,consts:[[1,"toolbar-container"],[1,"header-toolbar"],["mat-icon-button","","matTooltip","Men\xfa","matTooltipPosition","right",2,"left","1%",3,"click"],[1,"icon"],[2,"color","white"],["mat-icon-button","","matTooltip","Salir","matTooltipPosition","left",2,"right","1%","padding-left","5px",3,"click"],[1,"sidenav-container"],["fixedTopGap","56",1,"sidenav",3,"mode","fixedInViewport"],["snav",""],[1,"nav-list"],["src","./../../../../../assets/image/unicordoba_logo_retina1.png","alt","",1,"menu-logo"],[1,"items_container"],["mat-list-item","","routerLink","/home","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],["mat-list-item","","routerLink","/usuarios","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],["mat-list-item","","routerLink","/maestras","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],["mat-list-item","","routerLink","/reactivos","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],["mat-list-item","","routerLink","/cliente","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],["mat-list-item","","routerLink","/muestras","routerLinkActive","active","id","link-us-menu",1,"menu-item",3,"click"],[1,"content"]],template:function(u,c){if(1&u){const l=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"div"),e.TgZ(2,"mat-toolbar",1),e.TgZ(3,"button",2),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(4,"mat-icon",3),e._uU(5,"menu"),e.qZA(),e.qZA(),e.TgZ(6,"h2",4),e._uU(7),e.qZA(),e.TgZ(8,"button",5),e.NdJ("click",function(){return c.logout()}),e.TgZ(9,"mat-icon",3),e._uU(10,"logout"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(11,"mat-sidenav-container",6),e.TgZ(12,"mat-sidenav",7,8),e.TgZ(14,"mat-nav-list",9),e.TgZ(15,"div"),e._UZ(16,"img",10),e.qZA(),e.TgZ(17,"div",11),e.TgZ(18,"a",12),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(19,"mat-icon"),e._uU(20,"home"),e.qZA(),e._uU(21,"\xa0HOME "),e.qZA(),e.TgZ(22,"a",13),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(23,"mat-icon"),e._uU(24,"supervisor_account"),e.qZA(),e._uU(25,"\xa0USUARIOS "),e.qZA(),e.TgZ(26,"a",14),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(27,"mat-icon"),e._uU(28,"menu_book"),e.qZA(),e._uU(29,"\xa0PAR\xc1METROS "),e.qZA(),e.TgZ(30,"a",15),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(31,"mat-icon"),e._uU(32,"science"),e.qZA(),e._uU(33,"\xa0REACTIVOS "),e.qZA(),e.TgZ(34,"a",16),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(35,"mat-icon"),e._uU(36,"work"),e.qZA(),e._uU(37,"\xa0CLIENTES "),e.qZA(),e.TgZ(38,"a",17),e.NdJ("click",function(){return e.CHM(l),e.MAs(13).toggle()}),e.TgZ(39,"mat-icon"),e._uU(40,"biotech"),e.qZA(),e._uU(41,"\xa0MUESTRAS "),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(42,"mat-sidenav-content",18),e._UZ(43,"br"),e._UZ(44,"br"),e._UZ(45,"br"),e.TgZ(46,"block-ui"),e._UZ(47,"router-outlet"),e.qZA(),e.qZA(),e.qZA(),e._UZ(48,"footer"),e.qZA()}2&u&&(e.xp6(7),e.Oqu(c.title),e.xp6(4),e.Udp("margin-top",c.mobileQuery.matches?56:0,"px"),e.xp6(1),e.Q6J("mode",c.mobileQuery.matches?"over":"side")("fixedInViewport",c.mobileQuery.matches))},directives:[b.Ye,x.lW,R.gM,L.Hw,O.TM,O.JX,E.Hk,E.Tg,t.yS,t.Od,O.Rh,h.G8,t.lC],styles:[".toolbar-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0}.menu-item[_ngcontent-%COMP%]{font-size:110%}.header-toolbar[_ngcontent-%COMP%]{justify-content:space-between;padding:0 2px;background-color:#268d3c;position:fixed;z-index:2}h2.menu-app-name[_ngcontent-%COMP%]{color:#fff;margin-right:20px;font-size:20px;padding:5px 10px;border-radius:5px}.icon[_ngcontent-%COMP%]{color:#fff}.menu-logo[_ngcontent-%COMP%]{margin:100px 15px 0;width:200px;object-fit:cover}.sidenav-container[_ngcontent-%COMP%]{flex:1}.content[_ngcontent-%COMP%]{background-color:#fff}.sidenav[_ngcontent-%COMP%]{background-color:#268d3c84}.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#fff}.active[_ngcontent-%COMP%]{background-color:#058497}.primerItem[_ngcontent-%COMP%]{margin-top:50px}footer[_ngcontent-%COMP%]{background-color:#2d2e2e;display:flex;justify-content:center;align-items:center;height:4%}p[_ngcontent-%COMP%]{margin-bottom:0;color:#fff}@media only screen and (max-width: 770px){h2.menu-app-name[_ngcontent-%COMP%]{margin-right:15px;font-size:15px}}@media only screen and (max-width: 750px){.sidenav[_ngcontent-%COMP%]{width:100%}.sidenav[_ngcontent-%COMP%]   .nav-list[_ngcontent-%COMP%]{margin-top:20px;display:flex;flex-direction:column;align-items:center}}@media only screen and (max-width: 300px){h2.menu-app-name[_ngcontent-%COMP%]{margin-right:5px;font-size:11px}.icon[_ngcontent-%COMP%]{color:#fff;font-size:20px}}"]}),(0,_.gn)([(0,h.bH)()],C.prototype,"blockUI",void 0)},9258:(U,p,n)=>{n.d(p,{$:()=>h});var _=n(9019),o=n(7716),m=n(1841);let h=(()=>{class e{constructor(t){this.http=t,this.urlBase=_.N.urlBase}saveOrUpdate(t){return this.http.post(`${_.N.urlBase}/cliente`,t)}consultaByparameter(t){return this.http.post(`${this.urlBase}/cliente/filtrar`,t)}changedStatus(t){return this.http.post(`${_.N.urlBase}/cliente/changed-status`,t)}getaAll(){return this.http.get(`${_.N.urlBase}/cliente`)}getaAllActive(){return this.http.get(`${_.N.urlBase}/cliente/active`)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(m.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},745:(U,p,n)=>{n.d(p,{m:()=>h});var _=n(2340),o=n(7716),m=n(1841);let h=(()=>{class e{constructor(t){this.http=t,this.url=_.N.urlBase}getParametros(){return this.http.get(`${this.url}/role`)}getById(t){return this.http.get(`${this.url}/role/${t}`)}updateRolEstado(t){return this.http.put(`${this.url}/role/estado`,t)}saveData(t){return this.http.post(`${this.url}/role`,t)}updateData(t){return this.http.put(`${this.url}/role`,t)}}return e.\u0275fac=function(t){return new(t||e)(o.LFG(m.eN))},e.\u0275prov=o.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})()},9019:(U,p,n)=>{n.d(p,{N:()=>_});const _={urlBase:"http://ec2-54-224-159-164.compute-1.amazonaws.com:8082/api",production:!0}}}]);