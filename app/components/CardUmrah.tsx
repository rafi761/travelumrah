import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ButtonCard from './Button';

export default function CardUmrah() {
    return (
        <section className='w-full h-auto flex flex-col gap-y-4 px-10 py-10 '>
            <div className='flex justify-between items-center mb-4 px-24 max-lg:flex-col max-lg:gap-4 max-lg:px-5 max-lg:text-center'>
                <div className='flex flex-col gap-y-2'>
                    <h1 className='text-3xl font-semibold'>PAKET TERSEDIA</h1>
                    <p className='text-md max-w-[768px]'>Temukan kebijakan perjalanan Anda melalui In-Haramain, dengan menjelajahi beragam paket Umrah kami yang sesuai kebutuhan.</p>
                </div>
                <div className='flex items-center'>
                    <ButtonCard />
                </div>
            </div>
            <div className='grid justify-center grid-cols-1 gap-4 md:grid-cols-3'>
                <Card sx={{ maxWidth: 345 }} className="bg-gray-200 mx-auto shadow-none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/umrohcard.jpeg"
                            alt="Card Umroh"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Umroh Regular
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Travel In-Haramin adalah penyedia paket umrah yang diakui dan terpercaya, yang menawarkan pengalaman spiritual yang mendalam bagi para peziarah yang ingin melakukan ibadah umrah di Tanah Suci. Dengan komitmen untuk menyediakan layanan yang berkualitas tinggi dan memahami kebutuhan individual setiap pelanggan, Travel In-Haramin menawarkan paket umrah yang komprehensif dan terjangkau.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Pesan Sekarang
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="bg-gray-200 mx-auto shadow-none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/umrohcard.jpeg"
                            alt="Card Umroh"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Umroh Regular
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Travel In-Haramin adalah penyedia paket umrah yang diakui dan terpercaya, yang menawarkan pengalaman spiritual yang mendalam bagi para peziarah yang ingin melakukan ibadah umrah di Tanah Suci. Dengan komitmen untuk menyediakan layanan yang berkualitas tinggi dan memahami kebutuhan individual setiap pelanggan, Travel In-Haramin menawarkan paket umrah yang komprehensif dan terjangkau.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Pesan Sekarang
                        </Button>
                    </CardActions>
                </Card>
                <Card sx={{ maxWidth: 345 }} className="bg-gray-200 mx-auto shadow-none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="/images/umrohcard.jpeg"
                            alt="Card Umroh"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Umroh Regular
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Travel In-Haramin adalah penyedia paket umrah yang diakui dan terpercaya, yang menawarkan pengalaman spiritual yang mendalam bagi para peziarah yang ingin melakukan ibadah umrah di Tanah Suci. Dengan komitmen untuk menyediakan layanan yang berkualitas tinggi dan memahami kebutuhan individual setiap pelanggan, Travel In-Haramin menawarkan paket umrah yang komprehensif dan terjangkau.
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Pesan Sekarang
                        </Button>
                    </CardActions>
                </Card>
            </div>
        </section>
    );
}