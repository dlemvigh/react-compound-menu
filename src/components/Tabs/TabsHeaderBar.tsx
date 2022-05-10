import {
  Children,
  isValidElement,
  ReactNode,
  useContext,
  useEffect,
} from "react";
import styled from "styled-components";
import { TabContext } from "./TabContext";
import { TabHeader, TabHeaderProps } from "./TabHeader";

const TabList = styled.div`
  display: flex;
  justify-content: center;
`;

export interface TabHeaderBarProps {
  children: ReactNode;
}

export function TabHeaderBar({ children }: TabHeaderBarProps) {
  const { autoRegisterTabs, registerTabs } = useContext(TabContext);
  // console.log("auto", autoRegisterTabs);

  useEffect(() => {
    if (autoRegisterTabs) {
      const childProps = Children.toArray(children)
        .filter(isValidElement)
        .filter((child) => child.type === TabHeader)
        .map((child) => child.props as TabHeaderProps);

      const tabIds = childProps.map((props) => props.id);

      registerTabs(tabIds);
    }
  }, [children, autoRegisterTabs, registerTabs]);

  return <TabList role="tablist">{children}</TabList>;
}
