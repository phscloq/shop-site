import Link from "next/link"
export default function Footer(){
    return (
        <footer className="  bg-gray-100">
            <div className="container mx-auto px-4 py-8">
                <p className="text-center text-gray-600">Made by 
                    <Link className=" ml-2 text-blue-500 font-bold" href={'https://github.com/phscloq'} target="_blank">Baran</Link>
                </p>
            </div>
        </footer>
       
    )
}