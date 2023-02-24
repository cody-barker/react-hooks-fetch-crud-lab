import React from "react";

function QuestionItem({ question, questionList, setQuestionList }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));

  function handleDelete(id) {
    fetch(`http://localhost:4000/questions/${id}`, {
      method: "DELETE",
    })
    setQuestionList(questionList.filter(question => question.id !== id))
  }

  function handlePatch(id) {
    // console.log(option.innerText)
    // fetch(`http://localhost:4000/questions/${id}`, {
    //   method: "PATCH",
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   body: JSON.stringify({"correctIndex": option.value})
    // })
  }

  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select onChange={() => handlePatch(id)} defaultValue={correctIndex}>{options}</select>
      </label>
      <button onClick={() => handleDelete(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;
