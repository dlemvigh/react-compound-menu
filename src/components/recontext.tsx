import { createContext, ReactNode, useContext, useMemo } from "react"

export interface RecontextProps {
	name: string,
	path: string
}

export const Recontext = createContext<RecontextProps>({ name: "default", path: "root" });

interface RecontextProviderProps {
	name: string,
	children: ReactNode
}
export function RecontextProvider({ name, children } : RecontextProviderProps) {
	const context = useContext(Recontext);

	const value = useMemo<RecontextProps>(() =>({ name, path: `${context.path} > ${name}`}), [name, context]);

	return (
		<Recontext.Provider value={value}>
			{children}
		</Recontext.Provider>
	)
}

export function RecontextConsumer() {
	const { name, path } = useContext(Recontext);
	return (
		<div>
			name: {name} 
			<br/>
			path: {path}
		</div>
	)
}
