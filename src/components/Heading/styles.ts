import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps, LineColors } from '.'

export const wrapperModifiers = {
  small: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.medium};
    &::after {
      width: 3rem;
    }
  `,
  medium: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.xlarge};
    ${media.greaterThan('medium')`
    font-size: ${theme.font.sizes.xxlarge};
    `}
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
    line-height: ${theme.spacings.xlarge};
  `,

  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,
  lineBottom: (theme: DefaultTheme, lineColor: LineColors) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      content: '';
      left: 0%;
      bottom: -1rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
      position: absolute;
      width: 5rem;
    }
  `,
  left: () => css`
    text-align: left;
  `,
  right: () => css`
    text-align: right;
  `,
  center: () => css`
    text-align: center;
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, color, lineLeft, lineBottom, size, lineColor, align }) => css`
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    margin-bottom: 0.8rem;
    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor!)}
    ${lineBottom && wrapperModifiers.lineBottom(theme, lineColor!)}
    ${!!size && wrapperModifiers[size](theme)}
    ${!!align && wrapperModifiers[align]()}
  `}
`
