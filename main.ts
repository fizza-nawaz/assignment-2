// storing in a personname in vareable

let personname : string ="Ahemad"; 

//printing a prsonname in Lowercase

console.log("Lowercase",personname.toLowerCase());

//printing a personname in uppercase

console.log("Uppercase",personname.toUpperCase());

//printing a personname in titlecase

console.log("Titlecase",personname.replace(/\bw/g,c => c.toUpperCase()));
