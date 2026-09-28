import classNames from "classnames"
import { formatLevelSize } from "./common"
import type { LevelRowProps } from "./types"

export const LevelRow = ({ level, selectedLevel, onPick }: LevelRowProps) => {
	const isSelected = level.Size === selectedLevel
	const cls = classNames("game-level__level", {
		"game-level__level--selected": isSelected
	})
	const sizeLabel = formatLevelSize(level.Size)

	const onClick = () => onPick(level.Size)

	return (
		<div className={cls} onClick={onClick}>
			<span className="game-level__level-size">{sizeLabel}</span>
			<span className="game-level__level-name">{level.LevelName}</span>
		</div>
	)
}
