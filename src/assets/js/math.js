function generateMathQuestions() {
    const questions = [];
  
    for (let i = 0; i < 3; i++) {
      const num1 = Math.floor(Math.random() * 10) + 1;
      const num2 = Math.floor(Math.random() * 10) + 1;
      const operator = Math.random() < 0.5 ? '+' : '-';
      const question = `${num1} ${operator} ${num2} = `;
      const answer = operator === '+' ? num1 + num2 : num1 - num2;
      questions.push({ question, answer });
    }
  
    return questions;
  }
  
  function validateMathQuestions(questions, userAnswers) {
    for (let i = 0; i < questions.length; i++) {
      if (parseInt(userAnswers[i]) !== questions[i].answer) {
        return false;
      }
    }
  
    return true;
  }
  
  function handleDownloadResume() {
    const questions = generateMathQuestions();
    const userAnswers = [];
  
    for (let i = 0; i < questions.length; i++) {
      const answer = prompt(`Question ${i + 1}: ${questions[i].question}`);
      userAnswers.push(answer);
    }
  
    if (validateMathQuestions(questions, userAnswers)) {
      // Allow download
    } else {
      alert('Incorrect answers. Please try again.');
    }
  }
  