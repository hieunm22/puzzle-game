import classNames from "classnames"
import Icon from "components/Icon"
import type { ActionButtonProps } from "./types"
import "./ActionButton.scss"

const ActionButton = ({
	label,
	icon,
	className,
	disabled,
	onClick,
	ref
}: ActionButtonProps) => {
	const cls = classNames("action-button", className)

	return (
		<button
			ref={ref}
			type="button"
			className={cls}
			disabled={disabled}
			onClick={onClick}
		>
			{icon && <Icon name={icon} />}
			<span className="action-button__label">{label}</span>
		</button>
	)
}

export default ActionButton
