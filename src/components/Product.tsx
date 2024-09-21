
type ProductsProps = {
    name: string;
    price: number;
    discount: number;
    discountPrice: number;
    description: string;
    image: string;
}

const Products: ProductsProps[] = [
    {
        name: "LEMFO reloj hombre reloj inteligente relojes inteligentes LT10 para hombre mujer accesorio de pulsera deportivo resistente al agua con Bluetooth llamadas seguimiento de actividad y música regalo para Android 2024 2024",
        price: 114991,
        discount: 80,
        discountPrice: 22434,
        description: "LEMFO LT10 reloj inteligente mujeres hombres 2024 Smartwatch Dial táctil llamada música Smartclock para Android IOS Fitness Tracker relojes deportivos",
        image: "https://ae-pic-a1.aliexpress-media.com/kf/S0c6793eea2f0419dbfacef32c743d4f5C.png_120x120.png_.webp",
    },
    {
        name: "De'Longhi Magnifica S ECAM11.112.B, Cafetera Superautomática con Boquilla para Leche, Cafetera Espresso del Grano a la Taza con 2 Recetas One-Touch, Panel de Control Soft-Touch, 1450W, Negro",
        price: 2310443,
        discount: 40,
        discountPrice: 1387193,
        description: "Para un café italiano perfecto. De granos recién molidos a una extraordinaria variedad de cafés intensos y aromáticos. Disfruta de tus bebidas favoritas con sólo pulsar un botón.",
        image: "https://m.media-amazon.com/images/I/71Z3nll3v4L._AC_SX569_.jpg",
    },
    {
        name: "MSI Prestige 13 AI EVO A1MG-024ES Ordenador portátil 13.3 QHD+ OLED (Intel Core Ultra 7 155H, 32GB RAM, 1TB SSD, Intel ARC Graphics, Windows 11 Home Advanced) Stellar Gray, Teclado QWERTY español",
        price: 6954527,
        discount: 13,
        discountPrice: 6026638,
        description: "El MSI Prestige 13 AI Evo A1MG-024ES es un portátil premium diseñado para profesionales que buscan rendimiento y portabilidad. Con un diseño elegante y ultraligero, este equipo ofrece un equilibrio perfecto entre potencia y estilo. Equipado con los últimos procesadores Intel Evo, garantiza un rendimiento fluido y eficiente, ideal para multitareas, edición de contenido y aplicaciones exigentes.",
        image: "https://es-store.msi.com/cdn/shop/files/MSI_NB_Prestige13_Stellar_Gray_photo01_89908746-e0ca-408b-814f-8550e0ded3b2_669x669.png?v=1724945762"
    },
    {
        name: "GameSir-mando inalámbrico T4 Nova Lite, mando para Switch, Android, IOS, PC y Steam, Efecto Hall",
        price: 262304,
        discount: 58,
        discountPrice: 109888,
        description: "GameSir Nova Lite equipa palos de efecto Hall, asegurando una larga vida útil del controlador, Diga adiós a la deriva del palo. Con disparadores analógicos, función Turbo de 20Hz y 2 motores en las empuñaduras, Nova Lite se compromete a satisfacer las necesidades de los jugadores a un precio superasequible, Y los jugadores también tienen la opción de elegir entre dos combinaciones de colores: blanco estelar o púrpura espacial.",
        image: "https://ae01.alicdn.com/kf/S389617d92f81428883fd33dbf95bc41dh.jpg"
    }
]
export const Product = () => {
    return ( 
        <div className="flex flex-col items-center m-4">
            {
                Products.map((product) => (
                        <div className="w-full h-80 bg-gray-200 m-8 rounded-xl shadow-xl flex flex-row">
                            <img src={product.image} alt={product.name} className="flex justify-start transform translate-y-px w-64 h-64 m-6" />
                            <div className="flex flex-col">
                                <h1 className="text-xl font-medium text-start mt-4  ">{product.name}</h1>
                                <p className="text-md font-medium text-start mt-2">{product.description}</p>
                                <div className="mt-3 bg-red-500 w-16 h-8 rounded-full flex items-center justify-center">
                                    <p className="text-lg text-white">{product.discount}%</p>
                                </div>
                                <div className="flex flex-row mt-2 items-center">
                                    <p className="text-xl font-bold text-start">Precio antes: $</p>
                                    <p className="text-xl text-gray-500 font-bold line-through ml-1"> {product.price}</p>
                                </div>
                                <div className="flex flex-row mt-2 items-center">
                                    <p className="text-xl font-bold text-start">Precio ahora: $</p>
                                    <p className="text-xl text-black font-bold ml-1"> {product.discountPrice}</p>
                                </div>
                            </div>
                        </div>
                ))
            }
        </div>
    );
}