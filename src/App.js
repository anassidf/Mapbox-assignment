import { useEffect, lazy, Suspense } from 'react';
import './App.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Marker, NavigationControl, GeolocateControl } from 'react-map-gl';
import Geocoder from './components/Geocoder';
const ReactMapGL = lazy(() => import('react-map-gl'));
function App() {
	useEffect(() => {
		alert('PWC Assignmnet');
	}, []);
	return (
		<>
			<section style={{ height: '100vh' }}>
				<Suspense fallback={<h2>Loading....</h2>}>
					<ReactMapGL
						mapboxAccessToken='pk.eyJ1IjoiYW5hc2FsZmF0ZWgiLCJhIjoiY2xjZDl0YWozMDFmZDNxcGFscjlsNHJ1MiJ9.im-OtsFpY6Jy8IighW3dHw'
						initialViewState={{
							latitude: 32.556957,
							longitude: 35.847908,
							zoom: 8,
						}}
						mapStyle='mapbox://styles/mapbox/dark-v11'>
						<Marker
							longitude={35.847908}
							latitude={32.556957}
							draggable={true}
							onDragEnd={(e) => {
								console.log(e.lngLat);
							}}
						/>
						<NavigationControl position='bottom-right' />
						<GeolocateControl position='top-right' />
						<Geocoder />
					</ReactMapGL>
				</Suspense>
			</section>
		</>
	);
}

export default App;
