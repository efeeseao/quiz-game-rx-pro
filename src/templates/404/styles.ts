import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    text-align: center;

    h1 {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.large};
      font-weight: ${theme.font.bold};
      margin-bottom: ${theme.spacings.xxsmall};
      text-align: center;
    }
    p {
      color: ${theme.colors.black};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.normal};
      margin-bottom: ${theme.spacings.medium};
    }
    a {
      color: ${theme.colors.primary};
      font-size: ${theme.font.sizes.medium};
      font-weight: ${theme.font.bold};
      text-decoration: underline;
      text-transform: uppercase;
    }
  `}
`
