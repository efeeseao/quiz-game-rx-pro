import styled, { css } from 'styled-components'

export const Wrapper = styled.div``
export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: ${theme.spacings.medium};
  `}
`
