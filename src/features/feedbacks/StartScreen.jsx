import { useQuestion } from "../../contexts/QuestionContext"
import styled from "styled-components"
import Main from "../../ui/Main"
import Button from "../../ui/Button"
import Form from "../../ui/Form"
import Input from "../../ui/Input"
import FormRowVertical from "../../ui/FormRowVertical"
import { useForm } from "react-hook-form"

const P = styled.p`
  color: var(--color-grey-600);
  line-height: 1.6;
`

function StartScreen() {
  const { dispatch } = useQuestion();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    dispatch({ type: 'start', payload: data });
  }

  return (
    <Main>
      <P>
        Cảm ơn bạn đã tin tưởng sử dụng dịch vụ và lựa chọn Mitsubishi Bà Rịa Vũng Tàu.
      </P>
      <Form id='form' onSubmit={handleSubmit(onSubmit)}>
        <FormRowVertical label='Tên khách hàng' error={errors.fullName?.message}>
          <Input type='text' id='fullName' {...register('fullName', {
            required: 'Bạn cần nhập tên vào đây'
          })} />
        </FormRowVertical>
        <FormRowVertical label='Số điện thoại' error={errors.phoneNumber?.message}>
          <Input type='text' id='phoneNumber' {...register('phoneNumber', {
            required: 'Bạn cần nhập đúng SĐT',
            pattern: {
              value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
              message: 'Bạn cần nhập đúng SĐT',
            },
          })} />
        </FormRowVertical>
        <FormRowVertical label='Biển số xe' error={errors.licensePlate?.message}>
          <Input type='text'id='licensePlate' {...register('licensePlate', {
            required: 'Bạn cần nhập biển số xe',
          })} />
        </FormRowVertical>
      </Form>
      <Button form="form">Đánh giá</Button>
    </Main>
  )
}

export default StartScreen
