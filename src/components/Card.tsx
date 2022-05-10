import styled from "styled-components";
import { shadow } from "./design-tokens";

const Card = styled.div`
  border-radius: 5px;
  background-color: white;
  box-shadow: ${shadow.dp2};
`;

export default Card;
