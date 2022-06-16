import HEAD from "next/head";

export default function Seo({ title }) {
    return (
        <HEAD>
            <title>{title} | the api page</title>
        </HEAD>
    )
}