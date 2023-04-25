import {NextPage} from "next";
import {getMovieList} from "../../utils/ExternalAPIList";

export const MovieDetailComponent: NextPage = () => {
    return (
        <div>

        </div>
    )
}

export async function getStaticProps(context:any) {
    console.log(context)
    return {
        // Passed to the page component as props
        props: {post: {}},
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
    // const posts = await res?.data
    const {data: movies} = res
    // Get the paths we want to prerender based on posts
    // In production environments, prerender all pages
    // (slower builds, but faster initial page load)
    const paths = movies.map((movie: any) => ({
        params: {id: movie.id},
    }))

    // { fallback: false } means other routes should 404
    return {paths, fallback: false}
}

// export async function getStaticPaths(context: any) {
//     const res = await getMovieList()
//     const paths = res.data.map(({id}: any) => ({params: {id}}));
//     return {
//         paths: [],
//         fallback: false,
//     };
// }