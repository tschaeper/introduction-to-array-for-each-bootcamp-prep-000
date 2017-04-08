var evens = [0, 2, 4, 6, 8, 10]
 
for (var i = 0, l = evens.length; i < l; i++) {
  console.log(`${evens[i]} is not odd!`)
}

var evens = [0, 2, 4, 6, 8, 10]
 
evens.forEach(even => {
  console.log(`${even} is not odd!`)
})
