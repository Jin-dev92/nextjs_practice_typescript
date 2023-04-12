import {FlexContainer} from "../../components/FlexContainer";
import {NextPage} from "next";
import {getProductList} from "../../utils/LocalAPIList";
import {CardList} from "../../components/CardList";
import useSWR from "swr";


const ProductsPage: NextPage = () => {
    const {data, isLoading, error} = useSWR('/api/products', getProductList);
    return (
        <FlexContainer>
            <CardList data={data?.data}/>
        </FlexContainer>
    )
}
export default ProductsPage