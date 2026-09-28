import type { CSSProperties } from "react"

export type MoveDirection = -2 | -1 | 0 | 1 | 2 | 3

// inline style that also carries css custom properties
export type CssVariables = CSSProperties &
	Record<`--${string}`, number | string>
