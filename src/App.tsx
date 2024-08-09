import './App.css'
import Router from './routes/Router.tsx'
import  {ThemeProvider}  from './contexts/themeContext.tsx'

function App() {

  return (
    <>
    <ThemeProvider>
      <Router/>
    </ThemeProvider>

    </>
  )
}

export default App
