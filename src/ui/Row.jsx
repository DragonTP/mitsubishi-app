import { css, styled } from "styled-components";

const Row = styled.div`
  display: flex;
  ${({ type }) => type === 'horizontal' ? css`
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
  `: css`
    flex-direction: column;
    gap: 2rem;
  `}
`
Row.defaultProps = {
  type: 'vertical'
}

export default Row