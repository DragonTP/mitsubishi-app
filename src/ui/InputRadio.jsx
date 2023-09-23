import styled from "styled-components"

const StyledInputRadio = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: space-evenly;
  min-height: 54.66px;
`
const LabelRadio = styled.label`
  display: flex;
  gap: 1rem;
  align-items: center;
  cursor: pointer;
`
const Input = styled.input.attrs({ type: 'radio' })`
  width: 1.5rem;
  aspect-ratio: 1;
`

function InputRadio({ name, onChange }) {
  return (
    <StyledInputRadio>
      <LabelRadio htmlFor="yes">
        <Input onChange={e => onChange(e.target.value)} value='Có' name={name} id="yes" />
        <span>Có</span>
      </LabelRadio>
      <LabelRadio htmlFor="no">
        <Input onChange={e => onChange(e.target.value)} value='Không' name={name} id="no" />
        <span>Không</span>
      </LabelRadio>
    </StyledInputRadio>
  )
}

export default InputRadio
