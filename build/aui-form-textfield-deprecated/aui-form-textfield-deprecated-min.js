YUI.add("aui-form-textfield-deprecated",function(e,t){var n=e.Lang,r=e.getClassName,t="textfield",i=r(t),s=e.Component.create({NAME:t,ATTRS:{selectOnFocus:{value:!1},allowOnly:{value:null,validator:function(e){var t=this;return e instanceof RegExp}},defaultValue:{value:""},validator:{value:null}},EXTENDS:e.Field,prototype:{bindUI:function(){var e=this;s.superclass.bindUI.call(e);var t=e.get("node");e.get("allowOnly")&&t.on("keypress",e._filterInputText,e),e.get("selectOnFocus")&&t.on("focus",e._selectInputText,e);var n=e.get("defaultValue");n&&(t.on("blur",e._checkDefaultValue,e),t.on("focus",e._checkDefaultValue,e))},syncUI:function(){var e=this,t=e.get("value");if(!t){var n=e.get("defaultValue");e.set("value",e.get("defaultValue"))}s.superclass.syncUI.apply(e,arguments)},_filterInputText:function(e){var t=this,n=t.get("allowOnly"),r=String.fromCharCode(e.charCode);n.test(r)||e.halt()},_checkDefaultValue:function(e){var t=this,r=t.get("defaultValue"),i=t.get("node"),s=n.trim(t.get("value")),o=e.type,u=o=="focus"||o=="focusin";if(r){var a=s;u&&s==r?a="":!u&&!s&&(a=r),t.set("value",a)}},_selectInputText:function(e){var t=this;e.currentTarget.select()}}});e.Textfield=s},"3.0.3-deprecated.61",{requires:["aui-form-field-deprecated"]});
