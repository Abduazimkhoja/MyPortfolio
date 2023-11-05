import '../../../assets/styles/touchAnimate.scss'
import { CircleButtonProps } from '../../../interface/circleButton.interface'
import './style.scss'

export const CircleButton = (props: CircleButtonProps) => {
	const { children, option, ...rest } = props

	const collectClass = `touchAnimate circleButton circleButton-${option}`

	return (
		<button {...rest} className={collectClass}>
			{children}
		</button>
	)
}
