import React from 'react';
import { connect } from 'react-redux';
import { isPriceLoading } from '../redux/selectors/prices';
import { Row, Col, Button, Spinner } from 'react-bootstrap';
import OurPrice from './OurPrice';

const mapStateToProps = state => {
     const priceLoading = isPriceLoading(state);
     return { priceLoading }
}

const BookButton = () => {
     return (
          <Row className='mt-auto'>
               <Col>
                    <Button block data-testid='btn-book'><strong>Book!</strong></Button>
               </Col>
          </Row>
     );
}

const BookingDetails = (props) => {
     return (
          <Col md={2} className='d-flex flex-column border-left m-3'>
               {props.priceLoading ?
                    <Spinner animation='grow' className='mt-auto' />
                    :
                    <OurPrice hotelId={props.hotelId} />
               }
               <BookButton />
          </Col>
     );
}

export default connect(mapStateToProps)(BookingDetails);