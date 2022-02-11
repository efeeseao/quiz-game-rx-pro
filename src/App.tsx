import { ThemeProvider } from 'components'
import { GlobalStyle } from 'styles/global'

import Routes from 'routes'

function App() {
  return (
    <ThemeProvider>
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default App
