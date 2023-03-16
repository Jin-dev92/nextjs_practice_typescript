import styled from "styled-components";
import {Property} from "csstype";
import FlexDirection = Property.FlexDirection;

type Props = {
    flexDirection?: FlexDirection
}
export const FlexContainer = styled.div`
  display: flex;
  flex-direction: ${(props: Props) => props.flexDirection || "column"};
  justify-content: center;
  align-items: center;
`