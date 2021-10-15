import Router from "next/router";
import {MainLayout} from "../../components/MainLayout";

export default function About({ title }) {

    const linkHandler = () => {
        Router.push('/')
    }

    return (
        <MainLayout title={"About page"}>
            <h1>{title}</h1>

            <button onClick={linkHandler}>Go back to home</button>
            <button onClick={() => Router.push('/posts')}>Go to posts inline</button>
        </MainLayout>

    )
}

About.getInitialProps = async () => {
    const response = await fetch('http://localhost:4200/about')
    const data = await response.json()

    return {
        title: data.title
    }
}
