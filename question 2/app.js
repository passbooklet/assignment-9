var student = {
    name: prompt("enter your name"),
    sclass: prompt("enter your class"),
    rollno: Number(prompt("enter your roll no"))
};
console.log(student);
delete student.rollno;
console.log(student);
