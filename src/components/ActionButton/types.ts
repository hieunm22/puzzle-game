import type { MouseEventHandler, Ref } from "react"
import type { IconName } from "components/Icon/types"

export interface ActionButtonProps {
	label: string
	icon?: IconName
	className?: string
	disabled?: boolean
	onClick?: MouseEventHandler<HTMLButtonElement>
	// reactjs-popup attaches its own ref and click handler to a trigger
	ref?: Ref<HTMLButtonElement>
}
