import {FlexContainer} from "../../components/FlexContainer";
import {useQuery} from "react-query";
import {NextPage} from "next";
import {getProductList} from "../../utils/LocalAPIList";
import {CardList} from "../../components/CardList";


const ProductsPage: NextPage = () => {
    const {data, error, isLoading} = useQuery('getProductList', () => getProductList(), {
        // onSuccess: (response) => {
        //     console.log("response",response)
        // }
    })

    return !isLoading && data ? (
        <FlexContainer>
            <CardList data={data.data}/>
        </FlexContainer>
    ) : null
}
export default ProductsPage