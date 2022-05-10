import { HTMLAttributes, ReactNode } from "react";
import styled from "styled-components";
import { color } from "../design-tokens";

const A = styled.a`
	color: inherit;
	text-decoration: none;
	font-size: 1em;

	:focus-visible {
		color: ${color.link};
	}
`

export interface NavItemProps extends HTMLAttributes<HTMLAnchorElement> {
	href: string,
	children: ReactNode
}

export function NavItem({ href, children, ...domAttributes }: NavItemProps) {
	return (
		<A href={href} {...domAttributes}>
			{children}
		</A>
	)
}

