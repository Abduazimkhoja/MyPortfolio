import '@styles/touchAnimate.scss'
import { ButtonProps } from '@interface/button.interface'
import './style.scss'

export const Button = (props: ButtonProps) => {
   const { children, option, color, ...rest } = props

   const collectClass = `touchAnimate button  button-${color}-${option}`

   return (
      <button {...rest} className={collectClass}>
         {children}
      </button>
   )
}
