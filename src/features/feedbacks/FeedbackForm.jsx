import { useQuestion } from "../../contexts/QuestionContext"
import { useAddNewFeedback } from './useAddNewFeedback';
import styled from "styled-components"
import Button from "../../ui/Button"
import Main from "../../ui/Main"
import Progress from "../../ui/Progress"
import Question from "../../ui/Question"
import SpinnerMini from "../../ui/SpinnerMini"
import { format } from "date-fns";

const Footer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  min-height: 4.1rem;
`

function FeedbackForm() {
  const { answer, questions, dispatch, index, ratedObj } = useQuestion();
  const { isLoading, addFeedback } = useAddNewFeedback();
  const isEnd = index === questions.length - 1;
  const completedRate = {
    ...ratedObj,
    createdAt: format(new Date(), 'dd/MM/yyyy HH:mm:ss')
  }

  return (
    <Main>
      <Progress />
      <Question />
      <Footer>
        {answer && (
          isEnd ? <Button disabled={isLoading} onClick={() => addFeedback(completedRate, {
            onSuccess: () => dispatch({ type: 'finished' })
          })}>{isLoading ? <SpinnerMini /> : 'Gửi đánh giá'}</Button> : <Button onClick={() => dispatch({ type: 'nextQuestion' })}>Tiếp theo &rarr;</Button>
        )}
      </Footer>
    </Main>
  )
}

export default FeedbackForm
