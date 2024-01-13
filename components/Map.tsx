import {MapContainer, TileLayer, Marker, Popup, Polyline, Circle, CircleMarker} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

const icon = L.icon({ iconUrl: "/images/marker-icon.png" })

const polyline:[number,number][] = [

    [49.26592754144363, -123.07898575195125],//vcc clark
    [49.26265800385083, -123.06922873128033],//Commercial-Broadway station/overlap
    [49.2588935694453, -123.04535280479828],//Renfrew
    [49.26084439564367, -123.03285163682106],//Rupert
    [49.26498428683327, -123.01362471959492],//Gilmore
    [49.266347218548354, -123.00160638566115],//Brentwood Town Centre
    [49.264720779522555, -122.98216001156807],//Holdom
    [49.25913233867413, -122.9639275699041],//Sperling-Burnaby Lake
    [49.25461436503123, -122.93909024432784],//Lake City Way
    [49.25344014135678, -122.91813117738306],//overlap/production way university
    [49.248476695382095, -122.89695665534256],//lougheed town center/overlapp
    [49.26131789391816, -122.8898416214451],//Burquitlam
    [49.27800031789796, -122.8460762106686],//Moody Centre
    [49.277258558941966, -122.8282203539307],//Inlet Centre
    [49.274833080055515, -122.80056791096342],//Coquitlam Centre
    [49.28037824331595, -122.793968084484],//Lincoln
    [49.285630040882914, -122.7916147459417],//Lafarge Lake-Douglas
]

const multiPolyline:[number,number][][] =[
    [
        [49.18283739145187, -122.84485613837849],//king george station
        [49.18956204089905, -122.84804233981559],//surrey central station
        [49.19896417274467, -122.85067647210217],//gate way station
        [49.204411510846654, -122.87429852162104],//scott road station
        [49.20486860089228, -122.90614916067194],//Columbia station//overlap
        [49.2063783875499, -122.90297442138728],//overlap
        [49.20144911406522, -122.91262486618285],//westminister station
        [49.19997393250628, -122.94904511192377],//22nd street station
        [49.21232344559085, -122.9591647428694],//Edmond station
        [49.22010880664702, -122.98843882000897],//Royal Oak station
        [49.225865597405594, -123.00385384359824],//Metrotown station
        [49.229780947960386, -123.01262352361009],//Patterson station
        [49.23842525176179, -123.0315870460205],//Joyce-Collingwood station
        [49.24435945152063, -123.04603887557747],//29th Avenue station
        [49.24835388238695, -123.05599114539031],//Nanaimo station
        [49.26265800385083, -123.06922873128033],//Commercial-Broadway station/overlap
        [49.27322248192518, -123.10003882754069],//Main street Science-World station
        [49.27964586197674, -123.10977457155381],//Stadium-Chinatown station
        [49.283363642430224, -123.11614690318196],//Granville station
        [49.28560892974318, -123.12005656722772],//Burrard station
        [49.2860050485548, -123.11156020729072],//Waterfront station
    ],
    [
        [49.20486860089228, -122.90614916067194],//Columbia station/Overlapp
        [49.2063783875499, -122.90297442138728],//overlap
        [49.22468152080744, -122.88940884547279],//Sapperton station
        [49.23323561608246, -122.88282423134973],//Braid station
        [49.248476695382095, -122.89695665534256],//lougheed towncenter station//overlap
        [49.25344014135678, -122.91813117738306],//production-way university station//overlap
    ]
]

const blueOptions = { color: 'blue' }
const redOption = {color: 'red' }

const center:[number,number] = [49.24966,-123.00934]

const Map = () => {
     return (
      <MapContainer
      style={{height:"100vh"}}
      center={[49.24966,-123.00934]}
      zoom={14}
      scrollWheelZoom={false}
      >
      <TileLayer
      attribution='&copy; <a href="https://github.com/zzs1/Expo-Line-and-Millennium-Line">By Shin Zhu</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[49.18283739145187, -122.84485613837849]} icon={icon}>
       <Popup>
        King George Station
       </Popup>
      </Marker>

      <Marker position={[49.18956204089905, -122.84804233981559]} icon={icon}>
       <Popup>
       Surrey Central Station
       </Popup>
      </Marker>

      <Marker position={[49.19896417274467, -122.85067647210217]} icon={icon}>
       <Popup>
        Gate Way Station
       </Popup>
      </Marker>

      <Marker position={[49.204411510846654, -122.87429852162104]} icon={icon}>
       <Popup>
       Scott Road Station
       </Popup>
      </Marker>

      <Marker position={[49.20486860089228, -122.90614916067194]} icon={icon}>
       <Popup>
       Columbia Station
       </Popup>
      </Marker>

      <Marker position={[49.20144911406522, -122.91262486618285]} icon={icon}>
       <Popup>
       Westminister Station
       </Popup>
      </Marker>

      <Marker position={[49.19997393250628, -122.94904511192377]} icon={icon}>
       <Popup>
       22nd Street Station
       </Popup>
      </Marker>

      <Marker position={[49.21232344559085, -122.9591647428694]} icon={icon}>
       <Popup>
       Edmond Station
       </Popup>
      </Marker>

      <Marker position={[49.22010880664702, -122.98843882000897]} icon={icon}>
       <Popup>
       Royal Oak Station
       </Popup>
      </Marker>

      <Marker position={[49.225865597405594, -123.00385384359824]} icon={icon}>
       <Popup>
       Metrotown Station
       </Popup>
      </Marker>

      <Marker position={[49.229780947960386, -123.01262352361009]} icon={icon}>
       <Popup>
       Patterson Station
       </Popup>
      </Marker>
      
      <Marker position={[49.23842525176179, -123.0315870460205]} icon={icon}>
       <Popup>
       Joyce-Collingwood Station
       </Popup>
      </Marker>

      <Marker position={[49.24435945152063, -123.04603887557747]} icon={icon}>
       <Popup>
       29th Avenue Station
       </Popup>
      </Marker>

      <Marker position={[49.24835388238695, -123.05599114539031]} icon={icon}>
       <Popup>
       Nanaimo Station
       </Popup>
      </Marker>

      <Marker position={[49.26265800385083, -123.06922873128033]} icon={icon}>
       <Popup>
       Commercial-Broadway Station
       </Popup>
      </Marker>

      <Marker position={[49.27322248192518, -123.10003882754069]} icon={icon}>
       <Popup>
       Main street Science-World Station
       </Popup>
      </Marker>

      <Marker position={[49.27964586197674, -123.10977457155381]} icon={icon}>
       <Popup>
       Stadium-Chinatown Station
       </Popup>
      </Marker>

      <Marker position={[49.283363642430224, -123.11614690318196]} icon={icon}>
       <Popup>
       Granville
       </Popup>
      </Marker>

      <Marker position={[49.28560892974318, -123.12005656722772]} icon={icon}>
       <Popup>
       Burrard Station
       </Popup>
      </Marker>

      <Marker position={[49.2860050485548, -123.11156020729072]} icon={icon}>
       <Popup>
       Waterfront Station
       </Popup>
      </Marker>

      <Marker position={[49.22468152080744, -122.88940884547279]} icon={icon}>
       <Popup>
       Sapperton Station
       </Popup>
      </Marker>

      <Marker position={[49.23323561608246, -122.88282423134973]} icon={icon}>
       <Popup>
       Braid Station
       </Popup>
      </Marker>

      <Marker position={[49.248476695382095, -122.89695665534256]} icon={icon}>
       <Popup>
       Lougheed Town center Station
       </Popup>
      </Marker>

      <Marker position={[49.25344014135678, -122.91813117738306]} icon={icon}>
       <Popup>
       Production-Way University Station
       </Popup>
      </Marker>

      <Marker position={[49.26592754144363, -123.07898575195125]} icon={icon}>
       <Popup>
       VCC-Clark Station
       </Popup>
      </Marker>

      <Marker position={[49.2588935694453, -123.04535280479828]} icon={icon}>
       <Popup>
       Renfrew Station
       </Popup>
      </Marker>

      <Marker position={[49.26084439564367, -123.03285163682106]} icon={icon}>
       <Popup>
       Rupert Station
       </Popup>
      </Marker>

      <Marker position={[49.26498428683327, -123.01362471959492]} icon={icon}>
       <Popup>
       Gilmore Station
       </Popup>
      </Marker>

      <Marker position={[49.266347218548354, -123.00160638566115]} icon={icon}>
       <Popup>
       BrentWood Town Centre Station
       </Popup>
      </Marker>

      <Marker position={[49.264720779522555, -122.98216001156807]} icon={icon}>
       <Popup>
       Holdom Station
       </Popup>
      </Marker>

      <Marker position={[49.25913233867413, -122.9639275699041]} icon={icon}>
       <Popup>
       Sperling-Burnaby Lake Station
       </Popup>
      </Marker>

      <Marker position={[49.25461436503123, -122.93909024432784]} icon={icon}>
       <Popup>
       Lake-city Way Station
       </Popup>
      </Marker>

      <Marker position={[49.26131789391816, -122.8898416214451]} icon={icon}>
       <Popup>
       Burquitlam Station
       </Popup>
      </Marker>

      <Marker position={[49.27800031789796, -122.8460762106686]} icon={icon}>
       <Popup>
       Moody Centre Station
       </Popup>
      </Marker>

      <Marker position={[49.277258558941966, -122.8282203539307]} icon={icon}>
       <Popup>
       Inlet Centre Station
       </Popup>
      </Marker>

      <Marker position={[49.274833080055515, -122.80056791096342]} icon={icon}>
       <Popup>
       Coquitlam Centre Station
       </Popup>
      </Marker>

      <Marker position={[49.28037824331595, -122.793968084484]} icon={icon}>
       <Popup>
       Lincoln Station
       </Popup>
      </Marker>

      <Marker position={[49.285630040882914, -122.7916147459417]} icon={icon}>
       <Popup>
       Lafarge Lake-Douglas Station
       </Popup>
      </Marker>

      <Polyline pathOptions={redOption} positions={polyline}/>
      <Polyline pathOptions={blueOptions} positions={multiPolyline}/>
      </MapContainer>
     )
}

export default Map;
