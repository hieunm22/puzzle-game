import { HEIGHT, WIDTH } from "common/constants"
import { moveTile } from "common/helper"
import type { MoveDirection } from "common/types"
import type { MovePayload } from "store/types"
import type { SlideDirection, TileOffset } from "./types"

// the index of the extra slot below the bottom-left corner
const EXIT_INDEX = WIDTH * HEIGHT + 1
const CORNER_INDEX = WIDTH * HEIGHT - WIDTH + 1

// column and row of the image slice a tile value shows
export const getTileOffset = (element: number): TileOffset => {
	const x = (element - 1) % WIDTH
	const y = Math.floor((element - 1) / WIDTH)
	return { x, y }
}

// which way the tile at index animates after the last move
export const getSlideDirection = (
	moveDirection: MoveDirection | null,
	clickedIndex: number,
	index: number
): SlideDirection | null => {
	const fromBelow = moveDirection === 0 && clickedIndex === index + WIDTH
	const fromExit = moveDirection === -1 && index === EXIT_INDEX
	if (fromBelow || fromExit) {
		return "top"
	}
	if (moveDirection === 1 && clickedIndex === index - 1) {
		return "right"
	}
	const fromAbove = moveDirection === 2 && clickedIndex === index - WIDTH
	const fromCorner = moveDirection === -2 && index === CORNER_INDEX
	if (fromAbove || fromCorner) {
		return "bottom"
	}
	if (moveDirection === 3 && clickedIndex === index + 1) {
		return "left"
	}
	return null
}

// null when the clicked tile has no empty neighbour to slide into
export const getMovePayload = (
	gameMatrix: number[],
	index: number,
	moveCount: number
): MovePayload | null => {
	const result = moveTile(gameMatrix, index)
	const nextMatrix = result.cloneGameMatrix.toString()
	if (nextMatrix === gameMatrix.toString()) {
		return null
	}
	return {
		gameMatrix: result.cloneGameMatrix,
		moveCount: moveCount + 1,
		clickedIndex: index,
		moveDirection: result.moveDirection
	}
}
