var obj = {
    name: "Sam",
    job: "SDET",
    city: "Chennai",
    address: [
        {
            permanent: "Chennai"
        },
        {
            temporary: "Bangalore"
        }
    ]
}

// console.log(obj.address[1].temporary);

var res = obj.address.filter((temp)=>{
    if (temp.temporary == "Bangalore") {
        return true;
    }
})

console.log(res);