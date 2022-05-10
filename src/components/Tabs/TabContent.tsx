import { ReactNode, useContext } from "react";
import { TabContext } from "./TabContext";

export interface TabContentProps {
  id: string;
  children: ReactNode;
}

export function TabContent({ id, children }: TabContentProps) {
  const { selectedTabId } = useContext(TabContext);
  const isSelected = id === selectedTabId;

  return (
    <div
      id={id}
      role="tabpanel"
      style={{ display: isSelected ? undefined : "none" }}
    >
      {isSelected && children}
    </div>
  );
}
