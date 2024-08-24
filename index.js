//declaring three variables to store the names
const name1 = "James";
const name2 = "John";
const name3 = "Micheal";

//declaring three variables to store the length of the respective name variables
const name1Length = name1.length;
const name2Length = name2.length;
const name3Length = name3.length;

//writing the conditons for all the cases posssible
if(name1Length > name2Length && name1Length > name3Length) {
console.log(`${name1} has the longest name`)
}else if(name2Length > name3Length && name2Length > name1Length){
console.log(`${name2} has the longest name`)
}else if(name3Length > name1Length && name3Length > name2Length){
console.log(`${name3} has the longest name`)
}else if(name1Length == name2Length && name2Length != name3Length){
console.log(`${name1} and ${name2} tied for the longest name`);
}else if(name1Length == name3Length && name2Length != name3Length){
console.log(`${name1} and ${name3} tied for the longest name`);
}else if(name3Length == name2Length && name2Length != name1Length){
console.log(`${name3} and ${name2} tied for the longest name`);
}else if(name1Length == name2Length && name2Length == name3Length){
console.log(`All three names, ${name1}, ${name2}, and ${name3}, are the same length.`)
}

