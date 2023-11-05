import { ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	option: 'lg' | 'md' | 'sm'
	color: 'white' | 'black'
}
