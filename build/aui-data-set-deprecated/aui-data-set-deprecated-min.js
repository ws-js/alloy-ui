YUI.add("aui-data-set-deprecated",function(e,t){var n=e.Lang,r=function(){r.superclass.constructor.apply(this,arguments)};r.NAME="dataset",r.ATTRS={keys:{getter:function(e){var t=this;return t.keys}},first:{getter:function(){var e=this,t=e.values;return t[0]}},includeFunctions:{value:!1},items:{value:null,getter:function(){var e=this;return e.collection||{}}},last:{getter:function(){var e=this,t=e.values;return t[t.length-1]}},getKey:{lazyAdd:!1,value:null,getter:function(e){var t=this;return e||t.getKey},setter:function(e){var t=this;return n.isFunction(e)&&(t.getKey=e),t.getKey}},values:{getter:function(e){var t=this;return t.values},readOnly:!0}},e.extend(r,e.Base,{initializer:function(){var e=this;e.collection={},e.keys=[],e.values=[],e.length=0,e.publish("add",{defaultFn:e._defaultAddFn}),e.publish("clear",{defaultFn:e._defaultClearFn}),e.publish("remove",{defaultFn:e._defaultRemoveFn}),e.publish("replace",{defaultFn:e._defaultReplaceFn}),e.publish("sort",{defaultFn:e._defaultSortFn})},add:function(e,t){var r=this;arguments.length==1&&(t=e,e=r.getKey(t));if(!n.isNull(e)&&!n.isUndefined(e)){var i=r.collection[e];if(!n.isUndefined(i))return r.replace(e,t)}var s=r.length;r.fire("add",{index:s,attrName:e,item:t,newVal:t})},addAll:function(e){var t=this,r=arguments,i=r.length;i==1&&(r=e);if(i>1||n.isArray(e)){i=r.length;for(var s=0;s<i;s++)t.add(r[s])}else for(var s in e){var o=e[s];t.add(s,o)}},clear:function(){var e=this;e.fire("clear")},clone:function(){var e=this,t=new r,n=e.keys,i=e.values,s=i.length;for(var o=0;o<s;o++)t.add(n[o],i[o]);return t.set("getKey",e.get("getKey")),t},contains:function(e){var t=this;return t.indexOf(e)>-1},containsKey:function(e){var t=this;return!n.isUndefined(t.collection[e])},each:function(e,t){var n=this;return n._each(n.values,e,t)},eachKey:function(e,t){var n=this,r=n.keys;return n._each(r,e,t)},filter:function(e,t){var n=this,i=new r;i.set("getKey",n.get("getKey"));var s=n.collection,o=n.keys,u=n.values;t=t||n;var a=i.collection,f=i.values,l=u.length,c;for(var h=0;h<l;h++)c=u[h],e.call(t,c,h,s)&&i.add(o[h],c);return i.length=f.length,i},filterBy:function(t,r,i,s){var o=this;if(n.isUndefined(r)||n.isNull(r)||(n.isArray(r)||n.isString(r))&&!r.length)return o.clone();r=o._generateRegEx(r,i,s);var u=e.bind(o._keyFilter,o,t,r);return o.filter(u)},find:function(t,n){var r=this;return e.Array.find(r.values,t,n)},findIndex:function(e,t,n){var r=this,i=r.collection,s=r.values,o=r.length;n=n||0;for(var u=n;u<o;u++)if(e.call(t,s[u],u,i))return u;return-1},findIndexBy:function(t,r,i,s,o){var u=this;if(n.isUndefined(r)||n.isNull(r)||(n.isArray(r)||n.isString(r))&&!r.length)return-1;r=u._generateRegEx(r,s,o);var a=e.bind(u._keyFilter,u,t,r);return u.findIndex(a,null,i)},getKey:function(e){var t=this;return e.get&&e.get("id")||e.id},indexOf:function(t){var n=this;return e.Array.indexOf(n.values,t)},indexOfKey:function(t){var n=this;return e.Array.indexOf(n.keys,t)},insert:function(e,t,n){var r=this;arguments.length==2&&(n=arguments[1],t=r.getKey(n)),r.containsKey(t)&&r.removeKey(t),r.fire("add",{index:e,attrName:t,item:n,newVal:n})},invoke:function(e,t){var r=this,i=r.values,s=i.length;t?t=[].concat(t):t=[];for(var o=0;o<s;o++){var u=i[o],a=u&&u[e];n.isFunction(a)&&a.apply(u,t)}return r},item:function(e){var t=this,r;if(n.isNumber(e)){var i=t.values;r=i[e]}else r=t.collection[e];return r},keySort:function(e,t){var n=this;n.fire("sort",{direction:e,fn:t||n._keySorter,type:"key"})},remove:function(e){var t=this,n=t.indexOf(e);return t.removeAt(n)},removeAt:function(e){var t=this;if(e<t.length&&e>=0){var n=t.values[e],r=t.keys[e];t.fire("remove",{index:e,attrName:r,item:n,prevVal:n})}},removeKey:function(e){var t=this,n=t.indexOfKey(e);return t.removeAt(n)},replace:function(e,t){var r=this;arguments.length==1&&(t=e,e=r.getKey(t));var i=r.collection[e];if(n.isUndefined(e)||n.isNull(e)||n.isUndefined(i))return r.add(e,t);var s=r.indexOfKey(e);r.fire("replace",{attrName:e,index:s,item:t,prevVal:i,newVal:t})},size:function(){var e=this;return e.length},slice:function(e,t){var n=this,r=n.values;return r.slice.apply(r,arguments)},sort:function(e,t){var n=this;n.fire("sort",{direction:e,fn:t,type:"value"})},_defaultAddFn:function(e){var t=this,r=e.attrName,i=e.item,s=e.index;!n.isNull(r)&&!n.isUndefined(r)&&(t.get("includeFunctions")||!n.isFunction(i))&&(t.collection[r]=i),t.keys.splice(s,0,r),t.values.splice(s,0,i),++t.length},_defaultClearFn:function(e){var t=this;t.collection={},t.keys=[],t.values=[],t.length=0},_defaultRemoveFn:function(e){var t=this,r=e.index,i=e.item,s=e.attrName,o=t.collection,u=t.keys;t.values.splice(r,1),n.isUndefined(s)||delete o[s],u.splice(r,1),t.length--},_defaultReplaceFn:function(e){var t=this,n=e.attrName,r=e.item;t.collection[n]=r},_defaultSortFn:function(e){var t=this;t._sortBy(e.type,e.direction,e.fn)},_each:function(e,t,n){var r=this,i=e.slice(0),s=i.length;n=n||r;for(var o=0;o<s;o++)if(t.call(n,i[o],o,i)===!1)return!1;return!0},_generateRegEx:function(e,t,n){var r=this;if(!(e instanceof RegExp)){e=String(e);var i=[];t!==!1&&i.push("^"),i.push(e);var s;n||(s="i"),e=new RegExp(i.join(""),s)}return e},_keyFilter:function(e,t,n,r,i){var s=this;return n&&t.test(n[e])},_keySorter:function(e,t){var n=this,r=String(e).toLowerCase(),i=String(t).toLowerCase(),s=0;return r>i?s=1:r<i&&(s=-1),s},_sortBy:function(t,n,r){var i=this,s=1,o=[],u=i.keys,a=i.values,f=a.length;r=r||e.Array.numericSort,String(n).toLowerCase()=="desc"&&(s=-1);for(var l=0;l<f;l++)o.push({key:u[l],value:a[l],index:l});o.sort(function(e,n){var i=r(e[t],n[t])*s;return i===0&&(i=1,e.index<n.index&&(i=-1)),i}),f=o.length;var c={};for(var l=0;l<f;l++){var h=o[l],p=h.key,d=h.value;c[p]=d,u[l]=p,a[l]=d}i.collection=c}}),e.DataSet=r},"3.1.0-deprecated.37",{requires:["oop","collection","base"]});
