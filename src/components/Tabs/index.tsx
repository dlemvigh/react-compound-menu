import { ReactNode } from "react";
import { TabContent } from "./TabContent";
import { TabContextProvider } from "./TabContext";
import { TabHeaderDivider, TabDivider } from "./TabDivider";
import { TabHeader } from "./TabHeader";
import { TabHeaderBar } from "./TabsHeaderBar";

export interface TabsProps {
  initialTab?: string;
  tabIds?: string[];
  children: ReactNode;
}

export function Tabs({ initialTab, tabIds, children }: TabsProps) {
  return (
    <TabContextProvider initialTab={initialTab} tabIds={tabIds}>
      {children}
    </TabContextProvider>
  );
}

Tabs.HeaderBar = TabHeaderBar;
Tabs.Header = TabHeader;
Tabs.HeaderDivider = TabHeaderDivider;
Tabs.Content = TabContent;
Tabs.Divider = TabDivider;

export default Tabs;
