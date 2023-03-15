// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {runMiddleware} from "../../cors";

type Data = {
    name: string
}
// https://tecoble.techcourse.co.kr/post/2022-11-07-typeAlias-interface/ interface 와 type 의 차이
// interface 는 확장이 가능 하다. ( 선언 병합 )

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    res.status(200).json({name: 'John Doe'})
}
