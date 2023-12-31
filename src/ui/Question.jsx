import styled from "styled-components";
import { useQuestion } from "../contexts/QuestionContext";
import StarRating from './StarRating';
import InputRadio from "../ui/InputRadio";

const H4 = styled.h4`
  font-size: 1.8rem;
  margin-bottom: 2.4rem;
  height: 12rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

function Question() {
  const { question: { question, field, type }, dispatch } = useQuestion();
  const handleRating = value => {
    const answer = {
      [field]: value
    };
    dispatch({ type: 'newAnswer', payload: answer });
  }

  return (
    <div>
      <H4>{question}</H4>
      {type === 'starRating' && <StarRating key={field} onSetRating={handleRating} size={24} />}
      {type === 'radio' && <InputRadio name={field} onChange={handleRating} />}
    </div>
  )
}

export default Question
