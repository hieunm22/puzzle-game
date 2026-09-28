export interface GameLevelOption {
	Index: number
	Size: number
	LevelName: string
}

export interface LevelRowProps {
	level: GameLevelOption
	selectedLevel: number | null
	onPick: (size: number) => void
}
