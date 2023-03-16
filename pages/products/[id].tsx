import {NextPage} from "next";
import {FlexContainer} from "../../components/FlexContainer";
import {withRouter} from "next/router";
import {ExcludeRouterProps} from "next/dist/client/with-router";
import Image from "next/image";

const ProductsDetailPage: NextPage = ({router}: ExcludeRouterProps<any>) => {
    const {query} = router
    const product = JSON.parse(query.product)
    const {name, price, stock, imageSrc} = product
    return (
        <FlexContainer flexDirection={'row'}>
            <div>
                <Image src={imageSrc} alt={name} width={100} height={100}/>
            </div>
            <div>
                <p>{price}</p>
                <p>{stock}</p>
            </div>
        </FlexContainer>
    )
}
export default withRouter(ProductsDetailPage)