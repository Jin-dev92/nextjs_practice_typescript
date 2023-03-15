import {NextApiRequest, NextApiResponse} from "next";
import Cors from 'cors'

const allowMethod = ['GET', 'POST', 'HEAD']
const cors = Cors({
    methods: allowMethod
})

export function runMiddleware(req: NextApiRequest, res: NextApiResponse) { // cors 라이브러리 를 사용한 미들 웨어를 생성
    return new Promise((resolve, reject) => {
        try {
            cors(req, res, (result: any) => {
                return resolve(result)
            })
        } catch (error) {
            return reject(error)
        }
    })
}