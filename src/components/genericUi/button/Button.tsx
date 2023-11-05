import { ButtonProps } from '../../../interface/button.interface'
import './button.scss'

export const Button = (props: ButtonProps) => {
	const { children, option, color, ...rest } = props
	
	const collectClass = `button button-${color}-${option}`
	
	return (
		<button {...rest} className={collectClass}>
			{children}
		</button>
	)
}
