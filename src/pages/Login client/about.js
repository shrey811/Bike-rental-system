
import { Col, Row } from 'antd';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import ContentLayout, { Layout } from '../../Shared/ContentLayout';
import MenuList from '../Components/menu';
// import {bike}

export const About = () => {

  const position = [27.6915, 85.3420];

  return (
    <div>
      <MenuList />
      <ContentLayout pageTitle={' '} >
        <Layout
          imageUrl="https://res.cloudinary.com/dvqdtqrou/image/upload/v1680165612/fde18c997b613e8d08cf567920deaa6c_1_ngnrqs.jpg"
          header="About The Company"
          description="Biker Choice offers repair and maintenance services to keep your motorcycle running smoothly. Their full-service garage has experienced mechanics, state-of-the-art equipment, and high-quality parts. They also rent motorcycles and offer a range of accessories and upgrades. Renters can trust that bikes are well-maintained and ready to ride. With Biker Choice, you get rental bikes and garage services in one place."
          imageRight={false}
        />
        <Layout
          imageUrl="https://res.cloudinary.com/dvqdtqrou/image/upload/v1680165914/3321539_xx0151.jpg"
          header="Renting Bikes from us "
          description="Looking for a reliable and affordable way to explore the open road on two wheels? Look no further than Biker Choice's bike rental service! Our fleet of high-quality motorcycles includes a variety of models to suit all riding styles and preferences, from cruisers to sport bikes and everything in between. We offer flexible rental options, including hourly, daily, and weekly rates, so you can choose the duration that best suits your needs. Our rental bikes are meticulously maintained and serviced, ensuring a safe and enjoyable ride every time. Plus, with competitive pricing and convenient online booking, renting a motorcycle has never been easier. So why wait? Book your rental bike today and experience the freedom of the road like never before!"
          imageRight={true}
        />
        <Layout
          imageUrl="https://res.cloudinary.com/dvqdtqrou/image/upload/v1680165684/2979147_c0lqwi.jpg"
          header="Repair and Services of Your Bike"
          description="At Biker Choice, we understand the importance of keeping your motorcycle in top condition for optimal performance and safety. That's why we offer a range of repair and maintenance services to help you maintain your ride. From routine oil changes and tire replacements to more extensive engine repairs and customization, our team of experienced mechanics is equipped to handle it all. We use high-quality parts and equipment to ensure your bike stays running smoothly and reliably for years to come. Whether you're a seasoned rider or just starting out, trust Biker Choice for all your motorcycle repair and maintenance needs."
          imageRight={false}
        />

        <Row>
          <Col>
            <MapContainer
              style={{
                height: "50vh",
                width: "70vw"
              }}
              center={position} zoom={13} scrollWheelZoom={false}>
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={position} >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Col>
          <Col style={{ marginLeft: "20px", marginTop: "10rem", color: "white" }}>
            <h4 style={{
              display: "flex", alignItems: "center", justifyContent: "center", color: "white"
            }}>FIND US HERE </h4>
            <h4 style={{
              display: "flex", alignItems: "center", justifyContent: "center", color: "white"
            }}>AVALILABLE FROM SUNDAY </h4>
            <h4 style={{
              display: "flex", alignItems: "center", justifyContent: "center", color: "white"
            }}> TO FRIDAY</h4>
          </Col>
        </Row>
      </ContentLayout>
    </div>
  );
}
