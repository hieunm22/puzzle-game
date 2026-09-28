import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"
import type { GameLevelValue, GameState, MovePayload } from "store/types"

const initialState: GameState = {
	status: 0, // 0: select game level, 1: new game, 2: gameover
	clickedIndex: -1,
	moveDirection: null,
	level: null,
	imageUrl: null,
	gameMatrix: [],
	moveCount: 0
}

const gameSlice = createSlice({
	name: "game",
	initialState,
	reducers: {
		move(state, action: PayloadAction<MovePayload>) {
			state.gameMatrix = action.payload.gameMatrix
			state.moveCount = action.payload.moveCount
			state.clickedIndex = action.payload.clickedIndex
			state.moveDirection = action.payload.moveDirection
		},
		newGame(state, action: PayloadAction<GameLevelValue | null>) {
			state.status = 1
			state.level = action.payload
		},
		selectLevel(state) {
			state.status = 0
		},
		setImage(state, action: PayloadAction<string>) {
			state.imageUrl = action.payload
		},
		setMatrix(state, action: PayloadAction<number[]>) {
			state.gameMatrix = action.payload
		},
		setMoveCount(state, action: PayloadAction<number>) {
			state.moveCount = action.payload
		}
	}
})

export const { move, newGame, selectLevel, setImage, setMatrix, setMoveCount } =
	gameSlice.actions

export default gameSlice.reducer
