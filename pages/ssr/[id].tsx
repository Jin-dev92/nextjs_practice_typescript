import {NextPage} from "next";
import {getMovieList} from "../../utils/ExternalAPIList";
import {useRouter} from "next/router";
import Image from "next/image";

const defaultSize = 300

const MovieDetailComponent: NextPage = ({movies}: any) => {
    const router = useRouter()
    const movie = movies.find((movie: any) => movie.id.toString() === router.query.id)
    const {title, backdrop_path} = movie
    const rootURL = [process.env.NEXT_PUBLIC_MOVIE_DB_IMAGE_ROOT, `w${defaultSize}`].join('/') + backdrop_path
    return (
        <div className={`flex-col-center`}>
            <div className={`image-wrapper`}>
                <Image alt={`${title}`} src={`${rootURL}`} width={defaultSize} height={defaultSize}/>
            </div>
            {JSON.stringify(movie)}
        </div>
    )
}

export async function getStaticProps(context: any) {
    const res = await getMovieList()
    const {data} = res
    const {page, results: movies} = data
    return {
        props: {movies},
    }
}

export async function getStaticPaths() {
    // When this is true (in preview environments) don't
    // prerender any static pages
    // (faster builds, but slower initial page load)
    if (process.env.SKIP_BUILD_STATIC_GENERATION) {
        return {
            paths: [],
            fallback: 'blocking',
        }
    }

    // Call an external API endpoint to get posts
    const res = await getMovieList()
    const {data: movies} = res
    const {page, results} = movies
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = results.map((movie: any) => ({
        params: {id: movie.id.toString()},
    }))

    // { fallback: false } means other routes should 404
    return {paths, fallback: false}
}

export default MovieDetailComponent