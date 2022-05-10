import {
  KeyboardEventHandler,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useRef,
} from "react";
import styled from "styled-components";
import { TabContext } from "./TabContext";
import { Key } from "ts-key-enum";

const Header = styled.button`
  all: unset;
  cursor: pointer;
  transition: box-shadow 0.2s;

  padding: 1.25rem;

  :hover {
    background: rgba(60, 72, 94, 0.05);
    box-shadow: inset 0 -0.125rem 0 rgb(60 72 94 / 15%);
  }

  :active {
    background: #e7f1f7;
    box-shadow: inset 0 -0.1875rem 0 0 #1b4ea1;
  }

  &[aria-selected="true"] {
    box-shadow: inset 0 -0.1875rem 0 0 #1b4ea1;
  }

  :focus-visible {
    outline-style: auto;
  }
`;

export interface TabHeaderProps {
  id: string;
  children: ReactNode;
}

export function TabHeader({ id, children }: TabHeaderProps) {
  const {
    tabIds,
    selectedTabId,
    focusedTabId,
    setSelectedTabId,
    setFocusedTabId,
  } = useContext(TabContext);
  const ref = useRef<HTMLButtonElement>(null);

  const isSelected = id === selectedTabId;
  const isFocused = id === (focusedTabId || selectedTabId);

  const handleClick = useCallback(() => {
    setSelectedTabId(id);
    setFocusedTabId(id);
  }, [id, setSelectedTabId, setFocusedTabId]);

  useEffect(() => {
    if (id === focusedTabId) {
      ref.current?.focus();
    }
  }, [id, focusedTabId]);

  const handleKeyEvent = useCallback<KeyboardEventHandler<HTMLButtonElement>>(
    (event) => {
      const id = focusedTabId || selectedTabId;
      if (!id) {
        return console.error("No focused tab id");
      }
      const currentIndex = tabIds.indexOf(id);
      let index = currentIndex;
      if (event.key === Key.Home) {
        index = 0;
      }
      if (event.key === Key.ArrowLeft) {
        index = (currentIndex - 1 + tabIds.length) % tabIds.length;
      }
      if (event.key === Key.ArrowRight) {
        index = (currentIndex + 1) % tabIds.length;
      }
      if (event.key === Key.End) {
        index = tabIds.length - 1;
      }
      const tabId = tabIds[index];
      setFocusedTabId(tabId);
    },
    [selectedTabId, focusedTabId, tabIds, setFocusedTabId]
  );

  return (
    <Header
      ref={ref}
      tabIndex={isFocused ? 0 : -1}
      onClick={handleClick}
      onKeyDown={handleKeyEvent}
      aria-selected={isSelected}
      type="button"
      role="tab"
    >
      {children}
    </Header>
  );
}
