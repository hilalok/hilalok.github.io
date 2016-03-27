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
   
   var s1 = Student;
   s1['ID'] = "210104023";
   s1['fName'] = "first";
   s1['Iname'] = "last";
   for (var i=0; i<5; i++) {
       s1['courses'][i] = {'courseID':'c'+i, 'grade':Math.random()*100+1};
   };
   s1['tel']= "2327504738";
var gpa = s1.calGPA ();

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    
};

var p1 = new Person ("first","last",112,"yellow");
var p2 = new Person ("first","last",12,"green");
