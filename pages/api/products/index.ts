// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {HttpStatusCode} from "axios";
import {ProductData} from "../../../interfaces/ProductInterface";
// import {Middleware} from "../../../cors";
import productDataList from '../../../data/productMock.json'

export default async function handler(
    request: NextApiRequest,
    response: NextApiResponse<ProductData[]>
) {
    // 미들 웨어를 통하여 백엔드에서 데이터를 받아오거나, graphql 을 사용해서 데이터를 fetch 해온다.
    // 지금은 그냥 mock 데이터를 사용하여 가져옴
    // const middleWare = new Middleware(request, response)
    // await middleWare.run()
    response.status(HttpStatusCode.Ok).json(productDataList)
}
