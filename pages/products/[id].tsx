import {NextPage} from "next";
import {FlexContainer} from "../../components/FlexContainer";
import {withRouter} from "next/router";
import {ExcludeRouterProps} from "next/dist/client/with-router";
import Image from "next/image";
import {ImageWrapper} from "../../components/ImageWrapper";
import {InformationWrapper} from "../../components/InformationWrapper";

const ProductsDetailPage: NextPage = ({router}: ExcludeRouterProps<any>) => {
    const {query} = router
    const product = JSON.parse(query.product)
    const {name, price, stock, imageSrc} = product
    return (
        <FlexContainer flexDirection={'row'}>
            <ImageWrapper>
                <Image src={imageSrc} alt={name} width={100} height={100}/>
            </ImageWrapper>
            <InformationWrapper>
                <p className={'title'}>{name}</p>
                <p>{price}</p>
                <p>{stock}</p>
            </InformationWrapper>
        </FlexContainer>
    )
}
export default withRouter(ProductsDetailPage)