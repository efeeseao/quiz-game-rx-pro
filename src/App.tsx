import { ThemeProvider } from 'components'
import { Home } from 'templates'
import { GlobalStyle } from 'styles/global'

function App() {
  return (
    <ThemeProvider>
      <Home />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
