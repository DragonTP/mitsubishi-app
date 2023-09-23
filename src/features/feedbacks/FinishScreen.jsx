import styled from "styled-components"
import Heading from "../../ui/Heading"
import Main from "../../ui/Main"
import { HiCheckCircle, HiOutlineHandRaised } from 'react-icons/hi2'

const StyledMain = styled(Main)`
  align-items: center;
  text-align: center;
  justify-content: center;
  gap: 2rem;
`

const StyledHeading = styled(Heading)`
  color: var(--color-theme);
`

const P = styled.p`
  color: var(--color-grey-500);
  text-transform: uppercase;
  font-size: 1.4rem;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 1rem;
`
const Img = styled.img`
  border-radius: var(--border-radius-sm);
  width: 100%;
`

function FinishScreen() {
  return (
    <StyledMain>
      <HiCheckCircle color="var(--color-theme)" size={70} />
      <StyledHeading>Cảm ơn bạn đã đánh giá</StyledHeading>
      <Img src="/mitsubishi-garage.png" alt="Ảnh garage Mitsubishi" />
      <p>Chúng tôi sẽ cố gắng nâng cao chất lượng dịch vụ tốt nhất.</p>
      <P>Hẹn gặp lại <HiOutlineHandRaised size={20} /></P>
    </StyledMain>
  )
}

export default FinishScreen
