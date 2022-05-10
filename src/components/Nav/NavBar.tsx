import {
  FocusEventHandler,
  HTMLAttributes,
  ReactNode,
  useCallback,
  useContext,
  useRef,
} from "react";
import styled from "styled-components";
import { color } from "../design-tokens";
import { NavContext } from "./NavContext";

const Nav = styled.nav`
  color: ${color.link};

  display: flex;
  justify-content: center;
  gap: 32px;
`;

export interface NavBarProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function NavBar({ children, ...domAttributes }: NavBarProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { setExpandedMenues } = useContext(NavContext);

  const handleBlur: FocusEventHandler<HTMLDivElement> = useCallback(
    (event) => {
      const isInside = ref.current?.contains(event.relatedTarget);
      if (!isInside) {
        setExpandedMenues([]);
      }
    },
    [setExpandedMenues]
  );

  return (
    <Nav {...domAttributes} ref={ref} onBlur={handleBlur}>
      {children}
    </Nav>
  );
}
