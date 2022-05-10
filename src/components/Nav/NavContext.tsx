import { createContext } from "react";

type ExpandedMenues = string[];

interface NavContextProps {
	forceShow?: boolean,
	expandedMenues: ExpandedMenues,
	setExpandedMenues: (path: ExpandedMenues) => void
}

const defaultProps: NavContextProps = {
	expandedMenues: [],
	setExpandedMenues: (menues) =>  defaultProps.expandedMenues = menues
}

export const NavContext = createContext<NavContextProps>(defaultProps);
