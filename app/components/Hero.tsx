import Button from '@mui/material/Button';
import Image from 'next/image';
import ButtonCard from './Button';

const Hero = () => {
    return (
        <section className="relative w-full h-[576px] bg-cover bg-center bg-[url('/images/mekah.jpg')]">
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className='flex flex-col gap-3 justify-center items-center h-full'>
                <h1 className='text-white text-6xl font-semibold z-10 text-center'>IN-HARAMAIN TRAVEL</h1>
                <p className='text-4xl text-[#FFB534] font-semibold z-10 text-center'>PENYEDIA JASA TRAVEL UMRAH TERBAIK</p>
                <p className='text-xl text-white z-10 mb-3 text-center'>Dapatkan pelayanan terbaik kami dengan kualitas yang nyaman dengan harga yang aman</p>
                <ButtonCard />
            </div>
        </section>

    )
}

export default Hero