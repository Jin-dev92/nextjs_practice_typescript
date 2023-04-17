// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {HttpStatusCode} from "axios";

type Data = {
    name: string
}
// https://tecoble.techcourse.co.kr/post/2022-11-07-typeAlias-interface/ interface 와 type 의 차이
// interface 는 확장이 가능 하다. ( 선언 병합 )

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    // const middleWare = new Middleware(req, res)
    // await middleWare.run()
    res.status(HttpStatusCode.Ok).json({name: 'John Doe'})
}
