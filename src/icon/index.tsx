import React from "react"
import { EditIcon } from './edit'

export {
  EditIcon,
}

export const IconsList = {
  edit: EditIcon,
}

export type IconsNameType = keyof typeof IconsList
export type SVGComponentIcon = {
  className?: string,
  size?: number,
  style?: React.CSSProperties,
  color?: string,
}

export interface IconProps {
  icon: IconsNameType,
  className?: string,
  size?: number,
  style?: React.CSSProperties,
  color?: string,
}

export const Icon: React.FC<IconProps> = ({ icon, className = "", style = {}, size = 50, color = "black" }) => {
  const Component = IconsList[icon]

  return (
    <Component
      className={className}
      style={{
        ...style,
        minWidth: size,
        minHeight: size
      }}
      size={size}
      color={color}
    />
  );
}