const Footer = () => {
    return (
        <section className="w-full h-auto px-32 py-14 flex flex-col gap-y-8 bg-white max-lg:px-4">
            <div className="flex justify-between items-start max-lg:flex-col max-lg:gap-y-6">
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-2xl text-[#FFB534]">IN-HARAMAIN UMRAH TRAVEL</h1>
                    <div className="flex flex-col gap-y-2 text-black">
                        <h1 className="text-xl font-semibold">Kantor Surakarta</h1>
                        <p className="text-lg">Jl. Untung Suropati No. 86 PasarKliwon</p>
                        <p className="text-lg">0817271271261</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-xl text-[#FFB534]">PAKET UMRAH REGULAR</h1>
                    <div className="flex flex-col gap-y-4 text-black">
                        <p className="text-lg">Umrah Ekonomis</p>
                        <p className="text-lg">Umrah Hemat</p>
                        <p className="text-lg">Umrah Hebat</p>
                        <p className="text-lg">Umrah Premium</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-xl text-[#FFB534]">PAKET UMRAH REGULAR</h1>
                    <div className="flex flex-col gap-y-4 text-black">
                        <p className="text-lg">Umrah Plus Eropa</p>
                        <p className="text-lg">Umrah Plus Dubai</p>
                        <p className="text-lg">Umrah Plus Turki</p>
                        <p className="text-lg">Umrah Plus Mesir</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-6">
                    <h1 className="text-xl text-[#FFB534]">ALAMAT KANTOR</h1>
                    <div className="flex flex-col gap-y-4 text-black">
                        <p className="text-lg">Kantor Surakarta</p>
                        <p className="text-lg">Kantor Jakarta</p>
                    </div>
                </div>
            </div>

            <hr className="border-t-2 border-gray-400" />
            <p className="text-lg font-semibold text-gray-500 max-lg:text-center">IN-HARAMAIN UMRAH TRAVEL © 2024 Online Support - IT In-Haramain</p>
        </section>
    )
}

export default Footer