import { HashRouter, Routes, Route } from "react-router-dom"
import StartPage from "./pages/startPage/Page.jsx"

export default function App() {
  return(
    <HashRouter>
      <Routes>
        <Route path="/" element={<StartPage />} />
      </Routes>
    </HashRouter>
  )
}