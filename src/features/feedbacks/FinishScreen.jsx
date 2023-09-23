import styled from "styled-components"
import Heading from "../../ui/Heading"
import Main from "../../ui/Main"
import { HiCheckCircle, HiOutlineHandRaised } from 'react-icons/hi2'

const StyledHeading = styled(Heading)`
  color: var(--color-theme);
  font-size: 2.8rem;
  text-align: center;
  display: flex;
  gap: 1rem;
  align-items: center;
`

const P = styled.p`
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
`

function FinishScreen() {
  return (
    <Main>
      <StyledHeading>
        <HiCheckCircle />
        <span>Cảm ơn bạn đã đánh giá</span>
      </StyledHeading>
      <div style={{textAlign: "center"}}>
        <p>Chúng tôi sẽ nâng cao chất lượng dịch vụ tốt nhất</p>
        <P>Hẹn gặp lại <HiOutlineHandRaised /></P>
      </div>
    </Main>
  )
}

export default FinishScreen
