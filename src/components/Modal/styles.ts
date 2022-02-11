import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${() => css`
    background-color: rgba(0, 0, 0, 0.2);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
  `}
`
export const Centered = styled.div`
  ${() => css`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`
export const Modal = styled.div`
  ${({ theme }) => css`
    width: 559px;
    height: 259px;
    background: ${theme.colors.white};
    color: ${theme.colors.white};
    z-index: 10;
    border-radius: 4px;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    padding: ${theme.spacings.large};
  `}
`
export const Header = styled.header`
  ${({ theme }) => css`
    height: 50px;
    background: ${theme.colors.white};
    overflow: hidden;
    border-top-left-radius: 16px;
    border-top-right-radius: 16px;
  `}
`
export const CloseButton = styled.button`
  ${({ theme }) => css`
    cursor: pointer;
    font-weight: 500;
    padding: 4px 8px;
    border-radius: 4px;
    border: none;
    font-size: ${theme.font.sizes.xsmall};
    color: ${theme.colors.darkGray};
    background: white;
    transition: all 0.25s ease;
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
    position: absolute;
    right: 0;
    top: 0;
    align-self: flex-end;
    margin-top: -7px;
    margin-right: -7px;

    &:hover {
      box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
      transform: translate(-4px, 4px);
    }
  `}
`
export const FormWrapper = styled.form`
  ${() => css``}
`
export const ButtonWrapper = styled.div`
  ${() => css`
    margin-top: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
  `}
`
