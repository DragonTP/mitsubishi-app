import { useMutation } from "@tanstack/react-query"
import { addNewFeedback } from "../../services/apiFeedback"
import toast from "react-hot-toast"

export const useAddNewFeedback = () => {
  const { isLoading, mutate: addFeedback } = useMutation({
    mutationFn: addNewFeedback,
    onError: () => toast.error('Có lỗi lúc gửi đánh giá! 😓')
  })
  return { isLoading, addFeedback }
}