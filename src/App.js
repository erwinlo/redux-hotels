import React, { Component } from "react";
import { Container, Row, Col, Spinner } from "react-bootstrap";
import { connect } from "react-redux";
import { areHotelsLoading, getHotelsByFilter } from "./redux/selectors/hotels";
import { getPricesState } from "./redux/selectors/prices";
import { getFilterState } from "./redux/selectors/filter";
import { setCurrency } from "./redux/actionCreators/currency";
import { fetchHotels } from "./redux/actionCreators/hotels";
import { fetchPrices } from "./redux/actionCreators/prices";
import CurrencySelector from "./components/CurrencySelector";
import HotelCard from "./components/HotelCard";
import SearchBar from "./components/SearchBar";

const mapStateToProps = (state) => {
    const filter = getFilterState(state);
    const hotels = getHotelsByFilter(state, filter);
    const hotelsLoading = areHotelsLoading(state);
    const prices = getPricesState(state);
    return { hotels, hotelsLoading, prices };
};

const mapDispatchToProps = (dispatch) => ({
    fetchHotels: () => {
        dispatch(fetchHotels());
    },
    setCurrency: (currency) => {
        dispatch(setCurrency(currency));
    },
    fetchPrices: (currency) => {
        dispatch(fetchPrices(currency));
    },
});

class App extends Component {
    componentDidMount() {
        this.props.fetchHotels();

        // check if currency preference is stored
        let currency = localStorage.getItem("currency");

        // set default value if none is stored
        if (!currency) {
            currency = "USD";
            localStorage.setItem("currency", currency);
        }

        this.props.setCurrency(currency);
        this.props.fetchPrices(currency);
    }

    render() {
        const hotels = this.props.hotels;
        const prices = this.props.prices;

        return (
            <Container>
                <Row>
                    <Col className="d-flex justify-content-end">
                        <CurrencySelector />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <SearchBar />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {this.props.hotelsLoading && (
                            <Spinner animation="grow" />
                        )}

                        {
                            // display hotels with pricing first
                            hotels.map((hotel) =>
                                prices.filter((price) => price.id === hotel.id)
                                    .length > 0 ? (
                                    <HotelCard
                                        key={hotel.id}
                                        hotelId={hotel.id}
                                    />
                                ) : null
                            )
                        }

                        {
                            // then display hotels without pricing
                            hotels.map((hotel) =>
                                prices.filter((price) => price.id === hotel.id)
                                    .length === 0 ? (
                                    <HotelCard
                                        key={hotel.id}
                                        hotelId={hotel.id}
                                    />
                                ) : null
                            )
                        }
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
