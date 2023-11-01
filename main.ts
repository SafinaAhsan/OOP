import inquirer from "inquirer"

class Person {
    private personality: string
    
    constructor(personality?: string) {
        this.personality = personality ? personality :  "Mystery"
    }
    public AskQues(personality: string): void {
        if (personality == "1") {
           this.personality="Extravert"
        }
        else if (personality == "2") {
           this.personality="Introvert"
        }
        else {
            console.log
            ("Please enter a valid integer");
        }
    }
    public GetPersonality(){
        return this.personality}
}


const ques = await inquirer.prompt([{
    type: "input",
    name: "Answer",
    message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself."
}])
let myPerson=new Person()


myPerson.AskQues(ques.Answer)

class Student extends Person {
    private _name: string
    constructor(personality:string) {
        super(personality)
        this._name = ""
    }
    get name():string {
        return this._name
    }
    set name(input: string) {
        this._name = input
    }

}

const name = await inquirer.prompt([{
    type: "input",
    name: "input",
    message: "What is your name?"
}])

let student1 = new Student(myPerson.GetPersonality())
student1.name=name.input
console.log(`Your name is:`, student1.name, `and your personality type is: `, student1.GetPersonality());

