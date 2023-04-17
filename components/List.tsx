import styled from "styled-components";
import {Property} from "csstype";
import Margin = Property.Margin;

type Props = {
    itemMargin: Margin | undefined
}
export const List = styled.ul`
  & li:not(:last-child) {
    margin-inline-end: ${(props: Props) => props?.itemMargin};
  }
`