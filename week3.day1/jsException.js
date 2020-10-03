

function handleExeption(round){
    try{
         let pi = 3.14159;
         console.log(pi.toFixed(round));
    }catch(error){
         console.log("Seems like the issue is with the range of the input");
    }finally{
         console.log("I'm done");
    }

}

handleExeption(100)