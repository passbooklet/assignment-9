type student1={
    name:string|null,
    sclass:string|null,
    rollno:number
}

var student:student1={
    name:prompt("enter your name"),
    sclass:prompt("enter your class"),
    rollno:Number(prompt("enter your roll no")),
}
console.log(student);
console.log("the length is",Object.keys(student).length);

