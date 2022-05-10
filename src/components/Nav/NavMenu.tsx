import { HTMLAttributes, ReactNode, useCallback, useContext, useMemo } from "react";
import styled, { css } from "styled-components";

import { color, shadow, space } from "../design-tokens";
import { ChevronDown, ChevronRight, Icon } from "../Icon";

import { NavContext } from "./NavContext";
import { NavItem } from "./NavItem";
import { NavContextProvider, NavMenuContext } from "./NavMenuContext";

const ContainerItem = styled.div`
	position: relative;
	display: flex;

	margin: -${space.hitBox}px;
	padding: ${space.hitBox}px;
`

interface ContainerMenuProps {
	placement: Placement
}
const ContainerMenu = styled.div<ContainerMenuProps>`
	position: absolute;
	${getPosition}

	border-radius: 5px;
	background-color: white;
	padding: 8px;
	box-shadow: ${shadow.dp2};

	display: flex;
	flex-direction: column;
	white-space: nowrap;
`

function getPosition({ placement }: ContainerMenuProps) {
	switch(placement) {
		case "bottom":
			return css`
				top: 100%;
				left: ${space.hitBox}px;
			`
		case "right":
			return css`
				top: ${space.hitBox}px;
				left: 100%;
			`;
	}
}

const Button = styled.button`
	all: unset;

	color: ${color.link};
	text-decoration: none;
	cursor: pointer;

	
	:focus-visible {
		outline: 1px solid black;
		outline-color: rgb(16, 16, 16);
		outline-style: auto;
		outline-offset: 1px;
	}
`

export type Placement = "bottom" | "right";

export interface NavMenuProps extends HTMLAttributes<HTMLButtonElement> {
	id: string,
	href?: string,
	title: string,
	placement?: Placement,
	children: ReactNode
}

export function NavMenu({ id, placement: propPlacement, href, title, children, ...domAttributes }: NavMenuProps) {
	const { forceShow, expandedMenues, setExpandedMenues } = useContext(NavContext);
	const { path, placement: fallbackPlacement } = useContext(NavMenuContext);
	const placement = propPlacement || fallbackPlacement;
	const isExpanded = useMemo(() => {
		const currentPath = [...path, id];
		for (let i = 0; i < currentPath.length; i++) {
			if (expandedMenues[i] !== currentPath[i]) return false;
		}
		return true;
	}, [expandedMenues, path, id])

		const handleClick = useCallback(() => {
			if (isExpanded) {
				setExpandedMenues(path);
			}
			else {
				setExpandedMenues([...path, id])
			}
	}, [path, id, isExpanded, setExpandedMenues]);

	const handleMouseenter = useCallback(() => {
		setExpandedMenues([...path, id]);
	}, [id, path, setExpandedMenues]);
	const handleMouseleave = useCallback(() => {
		setExpandedMenues(path);
	}, [path, setExpandedMenues]);

	return (
		<ContainerItem onMouseEnter={handleMouseenter} onMouseLeave={handleMouseleave}>
			<>
				{href && <NavItem href={href}>{title}</NavItem>}
				<Button {...domAttributes} onClick={handleClick}>
					{!href && title}
					<Icon>
						{placement === "bottom" && <ChevronDown />}
						{placement === "right" && <ChevronRight />}
					</Icon>
				</Button>
				
				{(forceShow || isExpanded) && (
					<NavContextProvider id={id} placement="right">
						<ContainerMenu placement={placement}>
							{children}
						</ContainerMenu>
					</NavContextProvider>)}
				</>
		</ContainerItem>
	)
}
