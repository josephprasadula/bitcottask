import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Header from '../components/header'
import Footer from '../components/footer'
import { useRouter } from 'next/router'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header item={'titles'} />
      <div className='body index-grid'>
        <div className='index-card' onClick={() => router.push('/series')}><p>Series</p></div>
        <div className='index-card' onClick={() => router.push('/movies')}><p>Movies</p></div>
      </div>
      <Footer postion={'fixed'} />
    </>
  )
}
