import { ThemeProvider } from 'styled-components'

import theme from 'styles/theme'

type Props = {
  children: React.ReactNode
}

const AppThemeProvider = ({ children }: Props) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)

export default AppThemeProvider
