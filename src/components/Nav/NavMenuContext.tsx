import { createContext, ReactNode, useContext, useMemo } from "react";
import { Placement } from "./NavMenu";

export interface NavMenuContextProps {
	path: string[],
	placement: Placement
}

export const NavMenuContext = createContext<NavMenuContextProps>({ path: [], placement: "bottom" });

export interface NavContextProviderProps {
	id: string,
	placement: Placement,
	children: ReactNode
}

export function NavContextProvider({ id, placement, children }: NavContextProviderProps) {
	const { path } = useContext(NavMenuContext);
	const value = useMemo(() => ({ 
		path: [...path, id],
		placement
	}), [id, path, placement]);
	return (
		<NavMenuContext.Provider value={value}>
			{ children }
		</NavMenuContext.Provider>
	)	
}