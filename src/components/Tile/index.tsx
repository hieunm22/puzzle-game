import classNames from "classnames"
import { useTile } from "./hooks"
import type { TileProps } from "./types"
import "./Tile.scss"

const Tile = ({ index }: TileProps) => {
	const { isEmpty, slide, style, onClick } = useTile(index)
	const slideCls = slide && `tile--move-${slide}`
	const cls = classNames("tile", slideCls, { "tile--empty": isEmpty })

	return isEmpty ? (
		<div className={cls} />
	) : (
		<div className={cls} style={style} onClick={onClick} />
	)
}

export default Tile
