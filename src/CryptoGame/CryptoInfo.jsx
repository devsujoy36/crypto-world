import img1 from '../assets/CryptoImgs/hamster.jpg'
import img2 from '../assets/CryptoImgs/yescoin.webp'
import img3 from '../assets/CryptoImgs/tomarket.webp'
import img4 from '../assets/CryptoImgs/major.jpg'
import img5 from '../assets/CryptoImgs/blum.jpg'
import img6 from '../assets/CryptoImgs/cats.jpg'
import img7 from '../assets/CryptoImgs/hotwallet.jpg'
import img8 from '../assets/CryptoImgs/timefarm.jpg'
import img9 from '../assets/CryptoImgs/tonee.jpg'
import img10 from '../assets/CryptoImgs/memefi.jpg'
import img11 from '../assets/CryptoImgs/cherrygame.jpg'
import img12 from '../assets/CryptoImgs/freedoruvs.jpg'
import img13 from '../assets/CryptoImgs/pixelverse.jpg'
import img14 from '../assets/CryptoImgs/goats.jpg'
export default function cryptoInfo() {
    const cryptoData = [
        { name: 'Hamster Kombat', img: `${img1}`, reflink: 'https://t.me/hamSter_kombat_bot/start?startapp=kentId5564811482' },
        { name: 'Yescoin', img: `${img2}`, reflink: 'https://t.me/theYescoin_bot/Yescoin?startapp=4vi46L' },
        { name: 'Tomarket', img: `${img3}`, reflink: 'https://t.me/Tomarket_ai_bot/app?startapp=0000FZlU' },
        { name: 'Major', img: `${img4}`, reflink: 'https://t.me/major/start?startapp=5564811482' },
        { name: 'Blum', img: `${img5}`, reflink: 'https://t.me/blum/app?startapp=ref_RVfN5zzK4T' },
        { name: 'Cats', img: `${img6}`, reflink: 'https://t.me/catsgang_bot/join?startapp=qg3FBTgBdblINSKhWRBuk' },
        { name: 'Hot Wallet', img: `${img7}`, reflink: 'https://t.me/herewalletbot/app?startapp=13962966' },
        { name: 'Time Farm', img: `${img8}`, reflink: 'https://t.me/TimeFarmCryptoBot?start=ht7We9ryqtLfCgam' },
        { name: 'TONEE', img: `${img9}`, reflink: 'https://t.me/tonee_app_bot?start=897e16a4' },
        { name: 'MemeFi', img: `${img10}`, reflink: 'https://t.me/memefi_coin_bot/main?startapp=r_e2bf11aace' },
        { name: 'Cherrygame', img: `${img11}`, reflink: 'https://t.me/cherrygame_io_bot/game?startapp=r_5564811482 ' },
        { name: 'FreeDoruv', img: `${img12}`, reflink: 'https://t.me/FreeDurovBot/app?startapp=ref_AiJbZjb6' },
        { name: 'Pixelverse', img: `${img13}`, reflink: 'https://t.me/pixelversexyzbot?start=5564811482' },
        { name: 'Goats', img: `${img14}`, reflink: 'https://t.me/realgoats_bot/run?startapp=d49845f9-e3ec-4bea-a73f-f751a9217e2b' }
    ]


    return (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 m-4 ">
            {cryptoData.map((cryptoIteam, index) => (

                <div key={index} className="card bg-base-100 shadow-xl">
                    <figure className="p-2">
                        <img src={cryptoIteam.img || 'src/assets/CryptoImgs/default.jpg'} alt={cryptoIteam.name} className="h-30 lg:h-40 lg:w-full rounded-lg" />
                    </figure>
                    
                    <div className="card-body">
                        <h2 className="font-bold text-xl">{cryptoIteam.name}</h2>
                        <p className="text-sm">Click on join button to Earn Real Money</p>
                        <div className="card-actions justify-end">
                            <a className="btn btn-primary text-sm" href={cryptoIteam.reflink} target="_blank" rel="noopener noreferrer"> Join Now </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>

    )
}