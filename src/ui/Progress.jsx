import styled from "styled-components"
import { useQuestion } from "../contexts/QuestionContext";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  margin-bottom: 2.8rem;
`

const StyledProgress = styled.progress` 
  appearance: none;
  -webkit-appearance: none;
  height: 12px;
  width: 100%;

  &::-webkit-progress-bar {
    background-color: var(--color-grey-200);
    border-radius: 100px;
  }
  &::-webkit-progress-value {
    background-color: var(--color-theme);
    border-radius: 100px;
  }
`

function Progress() {
  const { maxQues, index, answer } = useQuestion();

  return (
    <Header>
      <StyledProgress max={maxQues} value={index + Number(answer !== null)} />
      <p>Câu hỏi <strong>{index + 1}</strong>/{maxQues}</p>
    </Header>
  )
}

export default Progress
