import { API_LINK } from "../utils/constants"

export const addNewFeedback = async feedback => {
  console.log(feedback)
  const res = await fetch(API_LINK, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      customer: feedback
    })
  });
  const data = await res.json();
  console.log(data)
  
  return data
}