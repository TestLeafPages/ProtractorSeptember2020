var map = new Map();

// console.log( map.size );
//      keys, values    entryset
map.set(1001, "Seashell");  // Key - Value pair or entry
map.set(1002, "KFC");
map.set(1003, "Pizza Hut");

// console.log(map);

for (let key of map.keys()) {
    // console.log(key);
}

for (let value of map.values()) {
    // console.log(value);
}

// console.log(map.get(1002));

map.forEach((value, key) => {
    // console.log(value+" "+key);
})

// map.delete(1003)

// map.clear()

// console.log(map.has(1003));

console.log(map);