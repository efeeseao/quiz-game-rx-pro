import styled, { css } from 'styled-components'

export const Wrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.medium};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `}
`
export const GameWrapper = styled.section`
  ${({ theme }) => css`
    background-color: ${theme.colors.mainBg};
    padding: ${theme.spacings.xxlarge};
    width: 70rem;

    .answer {
      text-align: center;
      margin: ${theme.spacings.xsmall} 0;
    }
  `}
`
export const Title = styled.h3`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.medium};
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const QuestionTitle = styled.h2`
  ${({ theme }) => css`
    text-align: center;
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.medium};
  `}
`
export const CurrentQuestion = styled.span`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    color: ${theme.colors.white};
    padding: ${theme.spacings.xsmall};
    border-radius: 4px;
  `}
`
export const MyAnswer = styled.div`
  ${({ theme }) => css`
    margin-top: -1rem;
    .correctAnswer {
      color: ${theme.colors.white};
      background: ${theme.colors.success};
      padding: ${theme.spacings.small};
    }

    .incorrectAnswer {
      background: ${theme.colors.red};
      color: ${theme.colors.white};
      padding: ${theme.spacings.small};
    }

    p {
      background-color: ${theme.colors.primary};
      color: ${theme.colors.white};
      padding: ${theme.spacings.small};
      margin-top: ${theme.spacings.medium};
      border-radius: 4px;
      cursor: pointer;
    }
  `}
`
export const ButtonWrapper = styled.div`
  ${({ theme }) => css`
    margin-top: ${theme.spacings.xsmall};
  `}
`
