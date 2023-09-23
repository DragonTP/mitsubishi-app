import { useQuestion } from "../contexts/QuestionContext";
import { useEffect } from "react";
import styled from "styled-components";
import FeedbackForm from "../features/feedbacks/FeedbackForm";
import Row from '../ui/Row';
import Heading from '../ui/Heading';
import Logo from '../ui/Logo';
import StartScreen from "../features/feedbacks/StartScreen";
import FinishScreen from "../features/feedbacks/FinishScreen";

const StyledFeedback = styled.div`
  min-height: 100vh;
  background-color: rgb(171, 230, 229, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-size: cover;

  &::before {
    content: '';
    display: block;
    position: absolute;
    inset: 0;
    background-image: url('/mitsubishi.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    z-index: -2;
  }
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: var(--border-radius-lg);
  background-color: var(--color-grey-50);
  padding: 2.8rem;
  gap: 2.8rem;
  max-width: 34rem;
  height: 80vh;
  box-shadow: var(--shadow-md);
`

function Feedback() {
  const { status } = useQuestion();

  useEffect(() => {
    document.title = 'Mitsubishi: Đánh giá'
  }, [])

  return (
    <StyledFeedback>
      <Container>
        {status === 'finished' ? <FinishScreen /> : (
          <>
            <Row type='horizontal' as='header'>
              <Heading as='h1'>Mitsubishi</Heading>
              <Logo />
            </Row>
            {status === 'ready' && <StartScreen />}
            {status === 'active' && <FeedbackForm />}
          </>
        )}
      </Container>
    </StyledFeedback>
  )
}

export default Feedback
