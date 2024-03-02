var json = [{
    "name" : "Niranjani", 
    "skills"   : "c. c++, html, css",
    "experience" : "3 years",
    "mail": "niranjanipurushothaman11@gmail.com"
},
{
    "name" : "Niru", 
    "skills"   : "c, c++, java",
    "experience" : "2 years",
    "mail": "niranjanikp04@gmail.com"
}];

//for loop
for(var i = 0; i < json.length; i++) {
    var obj = json[i];

    console.log(obj.name);
    console.log(obj.skills);
    console.log(obj.experience);
    console.log(obj.mail);

}

//for Each
json.forEach(function(obj) 
{ 
    console.log(obj.name); 
}
);

//for In
for (var key in json) {
if (json.hasOwnProperty(key)) {
  console.log(json[key].name);
  //console.log(json[key].msg);
 
}
}

//for Of
let text = "";
for (let x of json[key].name) {
 text += x; 
}
 console.log(text);

