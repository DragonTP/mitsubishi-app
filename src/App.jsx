import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Feedback from "./pages/Feedback"
import GlobalStyles from "./styles/GlobalStyles"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import QuestionProvider from "./contexts/QuestionContext"

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate to='feedback' replace={true} />} />
          <Route path="feedback" element={(
            <QuestionProvider>
              <Feedback />
            </QuestionProvider>
          )} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
