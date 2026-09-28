import type { GameLevelOption } from "./types"

export const GAME_LEVELS: GameLevelOption[] = [
	{ Index: 0, Size: 3, LevelName: "Easy" },
	{ Index: 1, Size: 4, LevelName: "Medium" },
	{ Index: 2, Size: 5, LevelName: "Hard" },
	{ Index: 3, Size: 6, LevelName: "Very Hard" }
]

// the smallest board a game can start on
export const MIN_LEVEL_SIZE = 3
