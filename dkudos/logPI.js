// content of /dkudos/logPI.js
var PI = 3.14;
define(function(){
// this line will be executed when the module is being loaded by dojo.
console.log("module is getting initialized, PI=", PI);
return function() {
// this is the actual "content" of the module. whoever *requires* this
// module will get access to this anonymous function
console.log("PI=", PI);
}
});