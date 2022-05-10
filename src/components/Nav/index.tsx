import { ReactNode, useMemo, useState } from "react";
import { NavBar } from "./NavBar";
import { NavContext } from "./NavContext";
import { NavItem } from "./NavItem";
import { NavMenu } from "./NavMenu";

export interface NavProps {
	forceShow?: boolean,
	children: ReactNode
}

export function Nav({ forceShow, children }: NavProps) {
	const [expandedMenues, setExpandedMenues] = useState<string[]>([]);
	const context = useMemo(() => ({ forceShow, expandedMenues, setExpandedMenues }), [forceShow, expandedMenues]);
	return (
		<NavContext.Provider value={context} >
			{children}
		</NavContext.Provider>
	)
}

Nav.Bar = NavBar;
Nav.Item = NavItem;
Nav.Menu = NavMenu;

export default Nav;