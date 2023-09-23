import { createContext, useContext, useReducer } from 'react'
import { data } from '../questions/data'

const initialState = {
  questions: data,
  index: 0,
  answer: null,
  ratedObj: {},

  // ready, active, finished
  status: 'ready'
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'start':
      return { ...state, status: 'active', ratedObj: { ...state.ratedObj, ...action.payload } }
    case 'nextQuestion':
      return { ...state, answer: null, index: state.index + 1 };
    case 'newAnswer':
      return { ...state, answer: action.payload, ratedObj: { ...state.ratedObj, ...action.payload } };
    case 'finished':
      return { ...state, status: 'finished', answer: null };
    default:
      throw new Error('Unknown action!')
  }
}

const QuestionContext = createContext();

function QuestionProvider({ children }) {
  const [{ questions, index, answer, status, ratedObj }, dispatch] = useReducer(reducer, initialState);
  const maxQues = questions.length;
  const question = questions[index];

  return (
    <QuestionContext.Provider value={{ questions, index, answer, status, dispatch, maxQues, question, ratedObj }}>
      {children}
    </QuestionContext.Provider>
  )
}

export default QuestionProvider

// eslint-disable-next-line react-refresh/only-export-components
export const useQuestion = () => {
  const context = useContext(QuestionContext);
  if (!context) throw new Error('Can\t use outside QuestionContext');
  return context
}
