let studentListDiv = document.querySelector(".studentList")
const url = "https://v-dresevic.github.io/Advanced-JavaScript-Programming/data/students.txt"

// function getData() {
//     fetch(url)
//         .then(response => response.text())
//         .then(data => showData(data))
//         .catch(err => {
//             console.log(err)
//         })
// }

// async function getData() {
//     let response = await fetch(url)
//     let data = await response.text()
//     let dataArray = data.split("\n")
//
//     while (dataArray.length) {
//         let student = dataArray.splice(0, 4)
//         let studentObj = new Student(student[0], student[1], student[2], student[3])
//         studentListDiv.innerHTML += studentObj.getInfo()
//         studentListDiv.innerHTML += "<br>"
//     }
// }


// getData()


// function showData(data) {
//     let dataArray = data.split("\n")
//     while (dataArray.length) {
//         let student = dataArray.splice(0, 4)
//         let studentObj = new Student(student[0], student[1], student[2], student[3])
//         studentListDiv.innerHTML += studentObj.getInfo()
//         studentListDiv.innerHTML += "<br>"
//     }
// }


async function getData() {
    let response = await fetch(url)
    return await response.text()
}

async function showData() {

    let data = await getData()
    let dataArray = data.split("\n")
    
    while (dataArray.length) {
        let student = dataArray.splice(0, 4)
        let studentObj = new Student(student[0], student[1], student[2], student[3])
        studentListDiv.innerHTML += studentObj.getInfo()
        studentListDiv.innerHTML += "<br>"
    }
}

showData()