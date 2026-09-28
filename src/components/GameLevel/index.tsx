import ActionButton from "components/ActionButton"
import { GAME_LEVELS } from "./constant"
import { LevelRow } from "./components"
import { useGameLevel } from "./hooks"
import "./GameLevel.scss"

const GameLevel = () => {
	const { selectedLevel, canStart, startGame, pickLevel } = useGameLevel()

	return (
		<div className="game-level">
			<div className="game-level__title">Select game level</div>
			<div className="game-level__levels">
				{GAME_LEVELS.map(level => (
					<LevelRow
						key={level.Index}
						level={level}
						selectedLevel={selectedLevel}
						onPick={pickLevel}
					/>
				))}
			</div>
			<ActionButton
				label="Start game"
				className="game-level__start"
				disabled={!canStart}
				onClick={startGame}
			/>
		</div>
	)
}

export default GameLevel
