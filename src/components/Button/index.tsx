import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  as?: React.ElementType
  fullWidth?: boolean
  icon?: JSX.Element
  minimal?: boolean
  size?: 'small' | 'medium' | 'large'
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<
  S.ButtonStyledProps,
  ButtonProps
> = (
  {
    children,
    fullWidth = false,
    minimal = false,
    size = 'medium',
    icon,
    ...props
  },
  ref
) => (
  <S.Wrapper
    size={size}
    minimal={minimal}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    ref={ref}
    {...props}
  >
    {icon}
    {!!children && <span>{children}</span>}
  </S.Wrapper>
)

export default forwardRef(Button)
