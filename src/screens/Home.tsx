import { Product } from "../components/product";


export const Home = () => {

    return (
        <div>
            <h1 className="text-4xl font-medium text-center">
            Nuevas <p className="text-6xl text-[#FF4D4D] font-medium text-center">OFERTAS</p> disponibles
            </h1>
            <Product />
        </div>
    )
}