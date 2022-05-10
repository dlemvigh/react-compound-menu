import React, { HTMLAttributes, ReactNode } from "react"
import styled from "styled-components";

const Svg = styled.svg`
	vertical-align: middle;
	height: 1em;
	width: 1em;
`

export interface IconProps extends HTMLAttributes<SVGSVGElement> {
	children: ReactNode
}

export function Icon({ children, ...domAttributes }: IconProps){
	return (
		<Svg viewBox="0 0 24 24" {...domAttributes}>
			{children}
		</Svg>
	)
}


function svgPath(element: JSX.Element) {
	return (props: HTMLAttributes<SVGPathElement>) => React.cloneElement(element, props)
}

export const ChevronDown = svgPath(<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" fill="currentColor"></path>)

export const ChevronRight = svgPath(<path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" fill="currentColor"></path>)