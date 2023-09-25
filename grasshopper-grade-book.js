// Grasshopper - Grade book

// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.


// Numerical Score	Letter Grade
// 90 <= score <= 100	'A'
// 80 <= score < 90	'B'
// 70 <= score < 80	'C'
// 60 <= score < 70	'D'
// 0 <= score < 60	'F'


// shorthand
const getGrade = (s1,s2,s3) => {
    let a = (s1 + s2 + s3) / 3
    return a >= 90 ? 'A' : a >= 80 ? 'B' : a >= 70 ? 'C': a >= 60 ? 'D' : 'F'
}

// longer expression

const getGradeToo=(s1,s2,s3)=>{
    let avg =((s1 + s2 + s3)/3)
    if(avg>=0 && avg<60){
      return 'F'
    }else if(avg>=60 && avg<70){
      return 'D'
    }else if(avg>=70 && avg<80){
      return 'C'
    }else if(avg>=80 && avg<90){
      return 'B'
    }else if(avg>=90 && avg<=100){
      return 'A'
    }
  }

  //
