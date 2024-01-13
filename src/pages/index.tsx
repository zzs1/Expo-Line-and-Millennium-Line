import dynamic from 'next/dynamic'
import logo from '../../public/images/Logo.png';
import { ImageOverlay, Marker } from 'react-leaflet';
const DynamicMap = dynamic(() => import('../../components/Map'), {ssr: false});



export default function Home() {
  return (
  <div>
    <header style={{ display:'flex',justifyContent: 'center',fontFamily: 'fantasy', fontSize: '50px', }}>
      <img src='/images/Logo.png' height={80} width={80}/>
      SkyTrain Line Tracker</header>
  <DynamicMap/>
  </div>
  )
}
