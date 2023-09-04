// Check the exam

// The first input array is the key to the correct answers to an exam, like ["a", "a", "b", "d"]. The second one contains a student's submitted answers.

// The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer, represented as an empty string (in C the space character is used).

// If the score < 0, return 0.

const checkExam = (answers, student) => {
    let score = 0;
    for(let i = 0; i < answers.length; i++){
        if(answers[i] === student[i]){
            score += 4
        }else if(student[i] === ''){
            score += 0
        }else{
            score -= 1
        }
    };
    if(score < 0){
        return 0
    }else{
        return score
    }
};


// additional solution

const checkExamAgain=(arr1,arr2)=>Math.max(arr2.reduce((a,b,i) =>b==arr1[i]?a+4:b?a-1:a,0),0)