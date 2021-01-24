import React from 'react';
import { connect } from 'react-redux';
import { getHotelById } from '../redux/selectors';
import { Row, Col, Badge } from 'react-bootstrap';
import Competitors from './Competitors';


const mapStateToProps = (state, props) => {
     const hotel = getHotelById(state, props.hotelId);
     return { hotel }
}

const HotelDetails = (props) => {
     const hotelId = props.hotelId;
     const hotel = props.hotel;

     return (
          <Col className='d-flex flex-column mx-1 my-3 pl-4'>
               <Row>
                    <h4><strong>{hotel.name}</strong></h4>
               </Row>

               <Row>
                    {Array(hotel.stars).fill().map((n, i) =>
                         <i key={i} className='fas fa-star' data-testid={hotel.stars+'-star'}></i>
                    )}
               </Row>

               <Row>
                    <h4><Badge variant='success'>{hotel.rating}</Badge></h4>
               </Row>

               <Competitors hotelId={hotelId} />

          </Col>
     );
}

export default connect(mapStateToProps)(HotelDetails);