class Student{
    static count=0; //static variable to call
   constructor(name,age,ph_no,marks){
      //complete this contructor. Variable name should be same as above params
      this.name=name;
      this.age=age;
      this.ph_no=ph_no;
      this.marks=marks;
    //Dont change anyting below this
       Student.increaseStudentCount();
   }

   eligible(){
       if(this.marks >=40){
           console.log(`${this.name} age ${this.age} is eligible`);
       }
       else if(this.marks<40){
           console.log(`${this.name} age ${this.age} is not eligible`);
       }
   }
    static increaseStudentCount(){
    //increase the count of students by 1 whenever this is called
       Student.count++;
   }

   static printStudentCount(){
        console.log(Student.count)
   }
}