const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const bodyParser = require('body-parser')
const uuid = require('uuid')
const User = require('./view/user')
const res = require('express/lib/response')

const app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

module.exports = {app}

app.listen(8000, () => {
    // const questions = [new Question("MCQ", "React", "React is a ?", ["FrontEnd Tech", "Backend Tech", "DB Tech", "None"], "FrontEnd Tech", 6),
    // new Question("MCQ", "Node", "Node is a ?", ["FrontEnd Tech", "Backend Tech", "DB Tech", "None"], "Backend Tech", 4),
    // new Question("MCQ", "Mongo", "Mongo is a ?", ["FrontEnd Tech", "Backend Tech", "DB Tech", "None"], "DB Tech", 7), new Question("MCQ", "Node", "2212112Node is a ?", ["FrontEnd Tech", "Backend Tech", "DB Tech", "None"], "Backend Tech", 4)]
    // const test = [new Test("React"), new Test("Node"), new Test("Mongo")]
    // for (let index = 0; index < test.length; index++) {
    //     AllTest.push(test[index])
    // }
    // for (let index = 0; index < questions.length; index++) {
    //     AllQuestions.push(questions[index])
    //     for (let j = 0; j < AllTest.length; j++) {
    //         if (AllTest[j].tech == questions[index].tech) {
    //             AllTest[j].insertQuestiontoTest(questions[index])
    //         }

    //     }
    // }
    // const adminStack = new Stack("React", "Node", "Mongo")
    // const adminCred = new Credentials("yash123", "$2b$10$wc.wxLlpEpciU0JB9QSh.uJmf7GLIxi/fM7ruPHRX6NsvlypKNQEO")
    // const userCred = new Credentials("kanan123", "$2b$10$wc.wxLlpEpciU0JB9QSh.uJmf7GLIxi/fM7ruPHRX6NsvlypKNQEO")
    // const adminUser = new User("Yash Shah", "admin", adminStack, 10, "India", adminCred)
    // const newuser = new User("Kanan", "user", adminStack, 10, "India", userCred)
    // // let mydb = new MyDataBase()
    // // mydb.connectDatabase()
    // // mydb.createNewUser(adminUser)
    // // mydb.createNewUser(newuser)
    // AllUsers.push(adminUser, newuser)
    // // console.log("AllQuestions****************************************")
    // // console.log(AllQuestions)
    // // console.log("AllUsers****************************************")
    // // console.log(AllUsers)
    // // console.log("AllTest****************************************")
    // // console.log(AllTest)
    console.log("Backend service running at 8000")
});
console.log("hello");