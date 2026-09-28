import type { ReactNode } from "react"

export type CloseModal = () => void

export interface ModalPopupProps {
	triggerLabel: string
	children: (close: CloseModal) => ReactNode
}
