import {ListItem} from "./ListItem";
import Card from "./Card";
import {List} from "./List";
import {ProductData} from "../interfaces/ProductInterface";

type Props = {
    data: ProductData[]
}
export const CardList = (props: Props) => {
    let html = []
    for (const item of props.data) {
        html.push(
            <ListItem >
                <Card data={item} width={100} height={100}/>
            </ListItem>
        )
    }
    return (
        <List itemMargin={'10px'}>
            {html}
        </List>
    )
}