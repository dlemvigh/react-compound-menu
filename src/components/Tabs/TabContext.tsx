import {
  createContext,
  useCallback,
  useMemo,
  useState,
  ReactNode,
} from "react";

interface TabContextProps {
  tabIds: string[];
  autoRegisterTabs: boolean;
  registerTabs: (tabIds: string[]) => void;
  selectedTabId?: string;
  setSelectedTabId: (tabId: string) => void;
  focusedTabId?: string;
  setFocusedTabId: (tabId?: string) => void;
}

export const TabContext = createContext<TabContextProps>({} as TabContextProps);

export interface TabContextProviderProps {
  initialTab?: string;
  tabIds?: string[];
  children: ReactNode;
}

export function TabContextProvider({
  initialTab,
  tabIds: tabIdsFromProps,
  children,
}: TabContextProviderProps) {
  const [tabIds, setTabIds] = useState<string[]>(tabIdsFromProps || []);
  const [selectedTabId, setSelectedTabId] = useState<string | undefined>(
    initialTab || tabIdsFromProps?.[0]
  );
  const [focusedTabId, setFocusedTabId] = useState<string | undefined>(
    undefined
  );

  const registerTabs = useCallback(
    (tabIds: string[]) => {
      setTabIds(tabIds);
      if (initialTab == null) {
        const tabId = tabIds[0];
        setSelectedTabId(tabId);
      }
    },
    [initialTab]
  );

  const value = useMemo<TabContextProps>(
    () => ({
      tabIds,
      autoRegisterTabs: tabIdsFromProps == null,
      registerTabs,
      selectedTabId,
      setSelectedTabId,
      focusedTabId,
      setFocusedTabId,
    }),
    [
      tabIds,
      tabIdsFromProps,
      registerTabs,
      selectedTabId,
      setSelectedTabId,
      focusedTabId,
      setFocusedTabId,
    ]
  );

  return <TabContext.Provider value={value}>{children}</TabContext.Provider>;
}
