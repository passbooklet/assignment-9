// Write a TypeScript program to delete the rollno property from the following object. Also print the object before or after deleting the property.
type student1={
    name:string|null,
    sclass:string|null,
    rollno?:number,

}


var student:student1 = {
    name :prompt("enter your name"),
    sclass : prompt("enter your class"),
    rollno : Number(prompt("enter your roll no"))
};
console.log(student);
delete student.rollno;
console.log(student);

