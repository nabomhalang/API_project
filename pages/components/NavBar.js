import Link from "next/link";

export default function NavBar() {
    return (
        <>
            <Link href="/">Home </Link>
            <Link href="/about">About </Link>
            <Link href="/coc">cocAPI </Link>
            <Link href="/movies">MovieAPI </Link>
        </>
    );
}