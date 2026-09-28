import type { MoveDirection } from "common/types"

export type GameStatus = 0 | 1 | 2

export type GameLevelValue = number | string

export interface GameState {
	status: GameStatus
	clickedIndex: number
	moveDirection: MoveDirection | null
	level: GameLevelValue | null
	imageUrl: string | null
	gameMatrix: number[]
	moveCount: number
}

export interface MovePayload {
	gameMatrix: number[]
	moveCount: number
	clickedIndex: number
	moveDirection: MoveDirection | null
}
