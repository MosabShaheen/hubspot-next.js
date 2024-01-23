import Link from "next/link";

export default function Home() {
    return(
        <div>
            <Link className="px-10 py-10 bg-red-700" href="/contact" >Direct hubspot integration</Link>
        </div>
    )
}