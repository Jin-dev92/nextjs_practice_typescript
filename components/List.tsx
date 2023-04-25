import styled from "styled-components";
import {Property} from "csstype";

type Props = {
    itemMargin: Property.Margin | undefined
}
export const List = styled.ul`
  & li:not(:last-child) {
    margin-inline-end: ${(props: Props) => props?.itemMargin};
  }
`