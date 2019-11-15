const fs = require('fs')
// const book = {
//     title: 'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json' , bookJSON)

// const dataBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dataBuffer.toString()
// const data = JSON.parse(dataJSON)

// console.log(data.title)


//read the file 
const dataBuffer = fs.readFileSync('1-json.json')

//grab the buffer data and turn to string
const dataJSON = dataBuffer.toString()

//parse the string into myInfo const
const myInfo = JSON.parse(dataJSON)

//give new values to keys
myInfo.name = 'Capo'
myInfo.planet = 'Mars'
myInfo.age = 2

// turn it back to json response
const myInfoJSON = JSON.stringify(myInfo)

// write and save new data on json foler path and update myinfojson
fs.writeFileSync('1-json.json' , myInfoJSON)



