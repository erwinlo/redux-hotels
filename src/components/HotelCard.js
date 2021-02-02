import React from 'react';
import { connect } from 'react-redux';
import { getHotelById } from '../redux/selectors/hotels';
import { Card, Row, Col } from 'react-bootstrap';
import HotelDetails from './HotelDetails';
import BookingDetails from './BookingDetails';


const mapStateToProps = (state, props) => {
     const hotel = getHotelById(state, props.hotelId);
     return { hotel }
}

const HotelImage = ({ photo, name }) => {
     return (
          <Col xs={12} lg={4}>
               <img src={photo} alt={name} className='hotel-image' />
          </Col>
     );
}

const HotelCard = (props) => {
     const hotelId = props.hotelId;
     const hotel = props.hotel;
     
     return (
          <Card>
               <Row>
                    <HotelImage photo={hotel.photo} name={hotel.name} />

                    <HotelDetails hotelId={hotelId} />

                    <BookingDetails hotelId={hotelId} />
               </Row>
          </Card>
     );
}

export default connect(mapStateToProps)(HotelCard);