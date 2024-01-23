import Link from "next/link";

export default function Home() {
    return(
        <div>
            <Link href="/contact" >Direct hubspot integration</Link>
            <Link href="/contact-me" >Through API hubspot integration</Link>
        </div>
    )
}