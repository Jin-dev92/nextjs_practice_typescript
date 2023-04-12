import {NextPage} from "next";
import {FlexContainer} from "../../components/FlexContainer";
import Image from "next/image";
import {ImageWrapper} from "../../components/ImageWrapper";
import {InformationWrapper} from "../../components/InformationWrapper";
import {useRouter} from "next/router";

const ProductsDetailPage: NextPage = () => {
    const router = useRouter()
    const {imageSrc, name, price, stock} = JSON.parse(router.query?.product as string)
    return (
        <FlexContainer>
            <ImageWrapper>
                <Image src={imageSrc} alt={name} width={100} height={100}/>
            </ImageWrapper>
            <InformationWrapper>
                <p className={'title'}>{name}</p>
                <p>가격 : {price.toLocaleString()}</p>
                <p>재고량 : {stock.toLocaleString()}</p>
            </InformationWrapper>
        </FlexContainer>
    )
}

export default ProductsDetailPage