import '../styles/globals.scss'
import type {AppProps} from 'next/app'

function MyApp({Component, pageProps}: AppProps) {
    /*
    *  최초 실행 파일, 이곳에서 렌더링 하는 값은 모든 페이지에 영향을 준다. ( 글로벌 이외에 앱에 부담이 될 만한 행동은 x)
    * */
    return (
        <Component {...pageProps} />
    )
}

export default MyApp
