import {NextApiRequest, NextApiResponse} from "next";
import Cors from 'cors'

const allowMethod = ['GET', 'POST', 'HEAD']
const cors = Cors({
    methods: allowMethod
})

// export function runMiddleware(req: NextApiRequest, res: NextApiResponse) { // cors 라이브러리 를 사용한 미들 웨어를 생성
//     return new Promise((resolve, reject) => {
//         try {
//             cors(req, res, (result: any) => {
//                 return resolve(result)
//             })
//         } catch (error) {
//             return reject(error)
//         }
//     })
// }

export class Middleware {
    private readonly req: NextApiRequest;
    private readonly res: NextApiResponse;

    constructor(req: NextApiRequest, res: NextApiResponse) {
        this.req = req
        this.res = res
    }
    run(): Promise<unknown> {
        return new Promise((resolve, reject) => {
            try {
                cors(this.req, this.res, (result: any) => {
                    return resolve(result)
                })
            } catch (error) {
                return reject(error)
            }
        })
    }
}