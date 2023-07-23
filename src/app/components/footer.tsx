import Link from "next/link"
export default function Footer(){
    return (
        <footer className=" py-2 text-lg  text-black">
        <p className="text-center">Made by 
        <Link className=" ml-2 underline text-orange-500 font-bold" href={'https://github.com/phscloq'} target="_blank">Baran</Link>
        </p>
        </footer>
       
    )
}