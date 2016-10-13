// content of /dkudos/HelloWidget.js
var template = '<table><th><td>Message:</td><td data-dojo-attach-point="mnode">${message}</td></th></table>';
define(
["dojo/_base/declare", "dijit/_WidgetBase", "dijit/_TemplatedMixin"],
function(declare, _WidgetBase, _TemplatedMixin){
return declare(
[_WidgetBase, _TemplatedMixin], {
templateString: template,
postCreate: function() {
	this.mnode.style.color = "red";
}
}
);
}
);
