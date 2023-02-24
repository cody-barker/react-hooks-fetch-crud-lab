import React, {useEffect} from "react";
import QuestionItem from './QuestionItem'

function QuestionList({questionList, setQuestionList}) {

  useEffect(() => {
    fetch('http://localhost:4000/questions')
    .then(resp => resp.json())
    .then(questions => setQuestionList(questions))
  }, [])

  const questionComps = questionList.map(question => {
    return (
      <QuestionItem question={question} key={question.id} questionList={questionList} setQuestionList={setQuestionList}/>
    )
  })

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questionComps}</ul>
    </section>
  );
}

export default QuestionList;
