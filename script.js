fetch('http://localhost:3000/posts/')
  .then(function(response) {
    return response.json()
  }).then(function(json) {
    console.log('parsed json: ', json)
    let output = "";
    for (let index = 0; index < json.posts; index++) {
        const element = array[index];
        
    }
    for (const key in json) {
        if (json.hasOwnProperty(key)) {
           
            const element = json[key].test;
            output += `<li><a href ="${element}">${element}</a></li>`;
        }
    }
    console.log(json[0].title);
    
// for (let index = 0; index <= json.comments.length; index++) {
//     for(let key in json.comments[index]){
//         if(json.comments[index].hasOwnProperty(key)){
//             output += `<li><a href ="${json.comments[index][key]}">${key}</a></li>`;
//         }//has own propertycheck
//     }// for each obejct
    
// }//for each array element

let update= document.querySelector("#links-three");
update.innerHTML = output;
    

  }).catch(function(ex) {
    console.log('parsing failed: ', ex)
  });

 


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
let output = "";
for (let index = 0; index <= info.links.length; index++) {
    for(let key in info.links[index]){
        if(info.links[index].hasOwnProperty(key)){
            output += `<li><a href ="${info.links[index][key]}">${key}</a></li>`;
        }//has own propertycheck
    }// for each obejct
    
}//for each array element

let update= document.querySelector("#links");
update.innerHTML = output;

//OBJECT LIST
let infoTwo = {
    "full_name" : "Bengt Arne",
    "title" : "VD",
    "links": { 
        "blog12" : "lorem lorem lorem1", //OBJECT LIST
        "blog22" : "lorem lorem lorem2", 
        "blog32" : "lorem lorem lorem3",
        "blog42" : "lorem lorem lorem4",
        "blog52" : "lorem lorem lorem5",
    }
};

//for in loop with objects ///////////////////////////////
let outputTwo = "";
for (let key in infoTwo.links) {
    if(infoTwo.links.hasOwnProperty(key)){
        outputTwo += `<li><a href ="${info.links[key]}">${key}</a></li>`;
    }// if links has the key proerty 
    //for...go through each link
}

let updateTwo = document.querySelector("#links-two");
updateTwo.innerHTML = outputTwo;

////////////////////////////////////////////////////////





//deleting from array
// info.links.splice(1,1);

//adding
// info.links.push({"courses" : "lorem lorem"});
