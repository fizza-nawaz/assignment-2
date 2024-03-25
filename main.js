// storing in a personname in vareable
var personname = "Ahemad";
//printing a prsonname in Lowercase
console.log("Lowercase", personname.toLowerCase());
//printing a personname in uppercase
console.log("Uppercase", personname.toUpperCase());
//printing a personname in titlecase
console.log("Titlecase", personname.replace(/\bw/g, function (c) { return c.toUpperCase(); }));
