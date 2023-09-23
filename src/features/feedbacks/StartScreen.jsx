import { useQuestion } from "../../contexts/QuestionContext"
import styled from "styled-components"
import Main from "../../ui/Main"
import Button from "../../ui/Button"

const P = styled.p`
  color: var(--color-grey-600);
  line-height: 1.6;
`
const P2 = styled.p`
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-weight: 600;
  text-align: center;
  font-size: 1.4rem;
`

function StartScreen() {
  const { dispatch } = useQuestion();

  return (
    <Main>
      <P>
        Cảm ơn bạn đã tin tưởng sử dụng dịch vụ và lựa chọn Mitsubishi Bà Rịa Vũng Tàu.
      </P>
      <P2>Đánh giá để chúng tôi ngày càng hoàn thiện hơn!</P2>
      <Button onClick={() => dispatch({ type: 'start' })}>Đánh giá</Button>
    </Main>
  )
}

export default StartScreen
