import styled, { css } from 'styled-components'

const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    max-width: ${theme.grid.container};
    margin-right: auto;
    margin-left: auto;
    padding-right: ${theme.grid.gutter};
    padding-left: ${theme.grid.gutter};
  `}
`

export default Container
