// Export functions
exports.message = () =>{
    console.log("Hello World");
}

// or 
module.exports.printName =(name) =>{
    console.log(name);
}

// Export multiple Functions
module.exports = {
    welcome: (name) =>{console.log("Hi! " + name);},
    goodBye: () =>{console.log("Good Bye");}
}


