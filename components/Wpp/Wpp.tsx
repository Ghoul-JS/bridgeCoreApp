import Link from "next/link"
import wpp from '../../public/whatsapp-fill.svg'
import Image from "next/image"

const Wpp = () => {
    return (
        <div className="fixed z-40 sm:right-10 right-5 bottom-5 transform transition-transform duration-300 hover:scale-150">
            <Link href='https://wa.me/573168435020?text=Hola, dime en que te podemos ayudar!' target="_black">
                <Image alt="wpp-image" src={wpp} width={50} height={50}/> 
            </Link>
        </div>
    )
}

export default Wpp