'use strict';const a240_0x206869=a240_0x4a6e;function a240_0x24ea(){const _0x2f21db=['modified_date','widget_id','145pfZbXC','TableForeignKey','created_date','created_by','widget','CASCADE','79520xRCTzR','dropTable','int','46665blmWel','columnNames','createTable','108988hqXiPt','CURRENT_TIMESTAMP','2586ecHqzK','modified_by','fk_tbl_widget_item_Related_tbl_widget','2jhsSYF','increment','CreateWidgetItemTable1601270946009','datetime','getTable','defineProperty','16yHqQgQ','10311qSXjSw','typeorm','tableForeignKey','26500463qMASbP','tslib','find','createForeignKey','__awaiter','2125041prhWQZ','Table','widget_item','3368770ZMtjPE'];a240_0x24ea=function(){return _0x2f21db;};return a240_0x24ea();}(function(_0x170a87,_0x3ce93d){const _0x572e9e=a240_0x4a6e,_0x354762=_0x170a87();while(!![]){try{const _0xc26de9=-parseInt(_0x572e9e(0x14b))/0x1*(parseInt(_0x572e9e(0x156))/0x2)+-parseInt(_0x572e9e(0x13f))/0x3+parseInt(_0x572e9e(0x151))/0x4*(-parseInt(_0x572e9e(0x145))/0x5)+parseInt(_0x572e9e(0x153))/0x6*(-parseInt(_0x572e9e(0x137))/0x7)+-parseInt(_0x572e9e(0x136))/0x8*(parseInt(_0x572e9e(0x14e))/0x9)+parseInt(_0x572e9e(0x142))/0xa+parseInt(_0x572e9e(0x13a))/0xb;if(_0xc26de9===_0x3ce93d)break;else _0x354762['push'](_0x354762['shift']());}catch(_0x5dccfe){_0x354762['push'](_0x354762['shift']());}}}(a240_0x24ea,0x7f9fb));function a240_0x4a6e(_0x4f8f8b,_0x4d7f70){const _0x24ea64=a240_0x24ea();return a240_0x4a6e=function(_0x4a6e5b,_0x4b592f){_0x4a6e5b=_0x4a6e5b-0x132;let _0x1dde43=_0x24ea64[_0x4a6e5b];return _0x1dde43;},a240_0x4a6e(_0x4f8f8b,_0x4d7f70);}Object[a240_0x206869(0x135)](exports,'__esModule',{'value':!![]}),exports[a240_0x206869(0x132)]=void 0x0;const tslib_1=require(a240_0x206869(0x13b)),typeorm_1=require(a240_0x206869(0x138));class CreateWidgetItemTable1601270946009{constructor(){const _0xf762c4=a240_0x206869;this[_0xf762c4(0x139)]=new typeorm_1[(_0xf762c4(0x146))]({'name':_0xf762c4(0x155),'columnNames':['widget_id'],'referencedColumnNames':['widget_id'],'referencedTableName':_0xf762c4(0x149),'onDelete':_0xf762c4(0x14a)});}['up'](_0x4102f8){return tslib_1['__awaiter'](this,void 0x0,void 0x0,function*(){const _0xe888b5=a240_0x4a6e,_0x25f7cf=new typeorm_1[(_0xe888b5(0x140))]({'name':_0xe888b5(0x141),'columns':[{'name':'id','type':'int','length':'11','isPrimary':!![],'isNullable':![],'isGenerated':!![],'generationStrategy':_0xe888b5(0x157)},{'name':_0xe888b5(0x144),'type':_0xe888b5(0x14d),'length':'11','isPrimary':![],'isNullable':!![]},{'name':'ref_id','type':'int','length':'11','isPrimary':![],'isNullable':!![]},{'name':_0xe888b5(0x147),'type':_0xe888b5(0x133),'isPrimary':![],'isNullable':!![],'default':_0xe888b5(0x152)},{'name':_0xe888b5(0x143),'type':'datetime','isPrimary':![],'isNullable':!![],'default':_0xe888b5(0x152)},{'name':_0xe888b5(0x148),'type':_0xe888b5(0x14d),'length':'11','isPrimary':![],'isNullable':!![]},{'name':_0xe888b5(0x154),'type':_0xe888b5(0x14d),'length':'11','isPrimary':![],'isNullable':!![]}]}),_0x2e9b3b=yield _0x4102f8['hasTable']('widget_item');!_0x2e9b3b&&(yield _0x4102f8[_0xe888b5(0x150)](_0x25f7cf));const _0x22d839=yield _0x4102f8[_0xe888b5(0x134)](_0xe888b5(0x141)),_0x2a7a19=_0x22d839['foreignKeys'][_0xe888b5(0x13c)](_0x22bfa1=>_0x22bfa1[_0xe888b5(0x14f)]['indexOf'](_0xe888b5(0x144))!==-0x1);!_0x2a7a19&&(yield _0x4102f8[_0xe888b5(0x13d)](_0x25f7cf,this[_0xe888b5(0x139)]));});}['down'](_0x277027){const _0x164a3e=a240_0x206869;return tslib_1[_0x164a3e(0x13e)](this,void 0x0,void 0x0,function*(){const _0x4f1325=_0x164a3e;yield _0x277027[_0x4f1325(0x14c)](_0x4f1325(0x141),!![]);});}}exports[a240_0x206869(0x132)]=CreateWidgetItemTable1601270946009;