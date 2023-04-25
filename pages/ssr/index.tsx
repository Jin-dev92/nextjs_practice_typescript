import {getMovieList} from "../../utils/ExternalAPIList";
import Link from "next/link";


export const SSR = ({data: {results}}: any) => {
    return (
        <div className={`m-10`}>
            <p>현재 페이지는 SSR 이 적용 되어 있습니다.</p>
            <ul className={`flex flex-col list-disc list-inside mb-3`}>
                {
                    results.map((item: any, index: number) => (
                        <li key={'item' + index}>{item.title}<Link href={`/ssr/${item?.id}`}></Link></li>
                    ))
                }
            </ul>
        </div>
    )
}

export async function getServerSideProps() {
    // 이곳에 console 선언 -> 서버에서 콘솔 찍은걸로 취급 -> 브라우저에 보이지 않음.
    const {data} = await getMovieList()
    return {
        props: {data}
    }
}

export default SSR