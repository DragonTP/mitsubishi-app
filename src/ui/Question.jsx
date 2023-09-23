import styled from "styled-components";
import { useQuestion } from "../contexts/QuestionContext";
import StarRating from './StarRating';
import InputRadio from "../ui/InputRadio";

const Container = styled.div`
  margin-bottom: 2.8rem;
`

const H4 = styled.h4`
  font-size: 1.6rem;
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
    <Container>
      <H4>{question}</H4>
      {type === 'starRating' && <StarRating key={field} onSetRating={handleRating} size={26} />}
      {type === 'radio' && <InputRadio name={field} onChange={handleRating} />}
    </Container>
  )
}

export default Question
