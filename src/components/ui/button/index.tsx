import { ButtonProps } from '@interface/button.interface'
import '@styles/touchAnimate.scss'
import { FC } from 'react'
import './style.scss'

export const Button: FC<ButtonProps> = props => {
   const { children, option, color, ...rest } = props

   const collectClass = `touchAnimate button  button-${color}-${option}`

   return (
      <button {...rest} className={collectClass}>
         {children}
      </button>
   )
}
