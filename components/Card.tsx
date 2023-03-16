import {ProductData} from "../interfaces/ProductInterface";
import {FlexContainer} from "./FlexContainer";
import Image from "next/image";
import styled from "styled-components";

type Props = {
    data: ProductData;
    width: number;
    height: number;
}

const StyledCard = styled(FlexContainer)`
  padding: 2px 16px;

  & {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
  }

  &:hover {
    box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.2);
  }

  & img {
    object-fit: cover;
  }
`

const Card = (props: Props) => {
    const {data, width, height} = props
    const {id, name, stock, price, imageSrc} = data
    return (
        <StyledCard>
            <Image src={imageSrc} alt={name} width={width} height={height}/>
            <title>{name}</title>
            <p>{price}</p>
            <p>{stock}</p>
        </StyledCard>
    )
}
export default Card