import React from 'react';
import mapMarker from '../images/map-marker.svg';
import {Link} from 'react-router-dom';
import {FiPlus} from 'react-icons/fi';
import '../styles/pages/orphanages.css';
import {Map, TileLayer} from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

function OrphanagesMap() {
    const URL_MAP = `https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`;
    return (
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarker} alt="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <p>Muitas crianças estão esperando a sua visita :)</p>
                </header>
                <footer>
                    <strong>Sumaré</strong>
                    <span>São Paulo</span>
                </footer>
            </aside>
            {/*https://www.google.com.br/maps/@-22.8329376,-47.2044824,15z*/}
            <Map
                center={[-22.8329376, -47.2044824]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
            >
                {/*OLD - <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>*/}
                <TileLayer url={URL_MAP}/>
            </Map>
            <Link to="" className="create-orphanage">
                <FiPlus size={32} color="#FFF"/>
            </Link>
        </div>
    )
}

export default OrphanagesMap;
