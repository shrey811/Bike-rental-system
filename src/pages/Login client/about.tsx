import React from 'react'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { UserOutlined } from '@ant-design/icons';
import { Content } from 'antd/es/layout/layout';
import ContentLayout from '../../Shared/ContentLayout';


const containerStyle = {
  width: '100vw',
    height: '100vh',
 
};

const center = {
  lat: 27.6915,
  lng: 85.3420
};

function About(this: any) {
    // const onMapInit = async map => {
    //     // nice to have map set on the window while debugging
    //     window.map = map
    //     // find a geojson or kml dataset (url or file) to load on the map
    //     const data = {
    //       url: 'https://data.nasa.gov/api/geospatial/7zbq-j77a?method=export&format=KML',
    //       id: 'world_country_boundaries',
    //       name: 'World Country Boundaries'
    //     }
    //     const dataLayer = await loadDataLayer(map, data.url)
        
    //     // set the title and id on the layer to show in LayerPanel
    //     dataLayer.set('title', data.name)
    //     dataLayer.set('id', data.name)
    //   }
    return (
        <div
        >
            <ContentLayout pageTitle={'About'}  >
    {/* <LoadScript
      googleMapsApiKey=" https://maps-api.apple.com/v1/search"
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={10}
      >
              { /* Child components, such as markers, info windows, etc. */}
              {/* <UserOutlined/>
        <></>
      </GoogleMap>
                </LoadScript> */}
            </ContentLayout>
            
    </div>

    
     
    
  )
}

export default React.memo(About)

// import React, { Component } from 'react';
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
// import { render } from 'react-dom';

// const containerStyle = {
//   width: '400px',
//   height: '400px'
// };

// const center = {
//   lat: -3.745,
//   lng: -38.523
// };

// const About = () => {
//     render() {
//         return (
//             <LoadScript
//                 googleMapsApiKey="YOUR_API_KEY"
//             >
//                 <GoogleMap
//                     mapContainerStyle={containerStyle}
//                     center={center}
//                     zoom={10}
//                 >
//                     { /* Child components, such as markers, info windows, etc. */}
//                     <></>
//                 </GoogleMap>
//             </LoadScript>
//         )
//     }
// }