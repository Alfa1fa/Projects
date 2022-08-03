function PrintHello() {
    console.log("Hello world")
}
PrintHello()

function PrintBye(name) {
    console.log("Bye" + name)
}
PrintBye(" Joel")

function sum(num1, num2, num3) {
    result = num1 + num2 + num3
    console.log(result)
}

sum(20, 30, 50)
sum(70, 90)

// function calculator(operation, num1, num2){
//   let result
//   if (operation.toLowerCase()==="add"){
//       result = num1+num2

//   }
// else if ( operation.toLowerCase()==="sub"){
//     result = num1-num2
//   }
//   else if ( operation.toLowerCase()==="div"){
//     result = num1/num2
//   }
//   else if ( operation.toLowerCase()==="mult"){ 
//     result = num1*num2
//   }
//   else{
//       result = " this operation is not allowed"
//   }
//   console.log(result)
// }
// calculator("add", 10,30)
// calculator("sub", 10,30)
// calculator("div", 10,30)
// calculator("mult", 10,30)

//  function score( CA1,CA2, exam){
//      return CA1+CA2+exam
//  }
//  function PrintScore(totalscore){ 
//      console.log("your score is" + totalscore)
//  }
// PrintScore(score(5,2,12))

function Totalscore(grade) {
    if (grade >= 70 && grade <= 100) {
        result = "A"
    } else if (grade >= 60 && grade <= 69) {
        result = "B"
    } else if (grade >= 50 && grade <= 59) {
        result = "C"
    } else if (grade >= 45 && grade <= 49) {
        result = "D"
    } else if (grade >= 40 && grade <= 35) {
        result = "E"
    } else if (grade >= 0 && grade <= 39) {
        result = "F"
    } else {
        result = "Invalid Score"
    }
    console.log("Your Grade is " + result)
}

function score(ca1, ca2, exam) {
    return ca1 + ca2 + exam
}
Totalscore(score(20, 2, 1))