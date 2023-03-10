import Link from "next/link"


export default function Navbar (){
    return(
        <nav>
            <ul>
                <Link href={"/"}><li> HOME</li></Link>
                <Link href={"/contact"}><li> Contact</li></Link>
                

            </ul>

        </nav>

    )
}