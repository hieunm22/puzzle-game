import { ICONS } from "./constant"
import type { IconProps } from "./types"
import "@fortawesome/fontawesome-free/css/all.css"

const Icon = ({ name }: IconProps) => <i className={ICONS[name]} />

export default Icon
