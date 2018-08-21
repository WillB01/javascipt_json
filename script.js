let info = {
    "full_name" : "Bengt Arne",
    "title" : "VD",
    "links": [
        {"blog1" : "lorem lorem lorem1"}, // ARRAY OF OBJECTS LIST
        {"blog2" : "lorem lorem lorem2"},
        {"blog3" : "lorem lorem lorem3"},
        {"blog4" : "lorem lorem lorem4"},
        {"blog5" : "lorem lorem lorem5"},
    ]
}

//OBJECT LIST
let infoTwo = {
    "full_name" : "Bengt Arne",
    "title" : "VD",
    "links": { 
        "blog1" : "lorem lorem lorem1", //OBJECT LIST
        "blog2" : "lorem lorem lorem2", 
        "blog3" : "lorem lorem lorem3",
        "blog4" : "lorem lorem lorem4",
        "blog5" : "lorem lorem lorem5",
    }
};

let output = "";
for (const key in infoTwo.links) {
    if(infoTwo.links.hasOwnProperty(key)){
        output += `<li><a href ="${info.links[key]}">${key}</a></li>`;
    }// if links has the key proerty 
    //for...go through each link
}

let update = document.querySelector("#links");
update.innerHTML = output;
console.log(output);


//deleting from array
// info.links.splice(1,1);

//adding
// info.links.push({"courses" : "lorem lorem"});
