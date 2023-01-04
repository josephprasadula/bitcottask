import React from 'react';
import Image from 'next/image';
import Facebook from '../../public/facebook-white.svg';
import Twitter from '../../public/twitter-white.svg';
import Instagram from '../../public/instagram-white.svg';
import Playstore from '../../public/store/play-store.svg';
import Windowstore from '../../public/store/windows-store.svg';
import Appstore from '../../public/store/app-store.svg';
export default function Footer({ position }) {
    return (
        <div className='footer'>
            <div className='highlights'>
                <p>Home <span className='line'>|</span></p>
                <p>Terms and Conditions<span className='line'>|</span></p>
                <p>Privacy Policy<span className='line'>|</span></p>
                <p>Collection Statement<span className='line'>|</span></p>
                <p>Help<span className='line'>|</span></p>
                <p>Manage Account</p>
            </div>
            <div className='copyrights'>copyright &#169; 2016  DEMO  Streaming . All  Rights  Reserved</div>
            <div className='logos'>
                <div className='sociamedia-logos'>
                    <Image className='logo-imgs' src={Facebook} alt='facebook-logo'></Image>
                    <Image className='logo-imgs' src={Twitter} alt='Twitter-logo'></Image>
                    <Image className='logo-imgs' src={Instagram} alt='Instagram-logo'></Image>
                </div>
                <div className='playstore-logos'>
                    <Image src={Appstore} className='store-logos' alt='appstore-logo'></Image>
                    <Image src={Playstore} className='store-logos' alt='playstore-logo'></Image>
                    <Image src={Windowstore} className='store-logos' alt='windowstore-logo'></Image>
                </div>
            </div>
        </div>
    )
}
