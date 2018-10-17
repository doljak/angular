var goodbye = require("./talk/goodBye")
var talk = require("./talk")
var makeQuestion = require("./talk/question")

talk.hello()
talk.intro()
goodbye("Je")

const question = makeQuestion.ask("What's the meaning of life?")
console.log(question)

