import {ListItem} from "./ListItem";
import Card from "./Card";
import {List} from "./List";
import {ProductData} from "../interfaces/ProductInterface";

type Props = {
    data: ProductData[]
}
export const CardList = (props: Props) => {
    let html = []
    for (const index in props.data) {
        html.push(
                <ListItem key={'list_item_' + index}>
                    <Card data={props.data[index]} width={100} height={100}/>
                </ListItem>
        )
    }

    return (
        <List itemMargin={'10px'}>
            {html}
        </List>
    )
}