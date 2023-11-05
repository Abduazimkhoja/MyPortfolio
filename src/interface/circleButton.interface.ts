import { ButtonHTMLAttributes } from 'react'

export interface CircleButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	option: 'lg' | 'sm'
}
