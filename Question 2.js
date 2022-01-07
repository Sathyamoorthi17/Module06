// Write a “person” class to hold all the details

class Person
{
    
    constructor(name,age,gender,contact,email)
    {

        this.name=name;
        this.age=age;
        this.gender=gender;
        this.contact=contact;
        this.email=email;
    }
    displaydetail()
    {
        console.log(`name : ${this.name} age : ${this.age} gender : ${this.gender} contact : ${this.contact} email : ${this.e_mail}`);
        
    }
    

}
const personobject= new Person("sathya","22","male","9876543210","sathya@gmail.com");

console.log(personobject);

//Output : 
// Person {
// name: 'sathya',
// age: '22',
// gender: 'male',
// contact: '9876543210',
// email: 'sathya@gmail.com' }
