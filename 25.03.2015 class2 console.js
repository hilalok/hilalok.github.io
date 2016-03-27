var Student = {
    'ID': '',
    'fName': '',
    'Iname': '',
    'cources': [
        {'courseID': '',
         'grade': ''
        }
   ],
   calcGPA : function () {
       var gpa = 0;
       for (var i=0; i<this.courses.length; i++) {
           gpa += this.cources[i].grade;
       }
       gpa /= this.cources.length;
       return gpa;
       }
   };
   
//alternative way 
 function Course(dep, code, credits, grade, year, semester) {
     this.dep = dep;
     this.code = code;
     this.credits = credits;
     this.grade = grade;
     this.year = year;
     this.semester = semester;
     this.getCourseCode = function() {
         return this.dep + this.code;
     };
  };
 
 var c1 = new Course("MBG","101",2,3.5,2015,"Fall");
 var c2 = new Course("CS","102",3,3,2016,"Spring");
 
 var s1 = Student;
 s1.ID = "123456";
 s1.fname = "John";
 s1.lname = "Doe";
 s1.courses = [c1,c2];
 
 var s1GPA = s1.calcGPA();
 s1GPA;
