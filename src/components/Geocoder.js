import React from 'react';
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { useControl } from 'react-map-gl';
const Geocoder = () => {
	const control = new MapboxGeocoder({
		accessToken:
			'pk.eyJ1IjoiYW5hc2FsZmF0ZWgiLCJhIjoiY2xjZDl0YWozMDFmZDNxcGFscjlsNHJ1MiJ9.im-OtsFpY6Jy8IighW3dHw',
		marker: false,
		collapsed: true,
	});
	useControl(() => control);
	return;
};

export default Geocoder;
