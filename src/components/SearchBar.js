import React from "react";
import { connect } from "react-redux";
import { Form, Col, Dropdown, DropdownButton } from "react-bootstrap";
import {
    setNameFilter,
    setStarsFilter,
    setMinPriceFilter,
    setMaxPriceFilter,
    setMinRatingFilter,
    setMaxRatingFilter,
} from "../redux/actionCreators/filter";
import {
    getNameFilter,
    getStarsFilter,
    getMinPriceFilter,
    getMaxPriceFilter,
    getMinRatingFilter,
    getMaxRatingFilter,
} from "../redux/selectors/filter";

function SearchBar(props) {
    return (
        <Form>
            <Form.Row>
                <Col>
                    <Form.Control
                        type="text"
                        placeholder="Search Title"
                        onChange={(e) => props.setNameFilter(e.target.value)}
                        value={props.nameFilter}
                    />
                </Col>
                <Col>
                    <DropdownButton id="stars-selector" title="Stars">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Dropdown.Item
                                key={star}
                                active={star === props.starsFilter}
                                onClick={() => props.setStarsFilter(star)}
                            >
                                {star}
                            </Dropdown.Item>
                        ))}
                    </DropdownButton>
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Min. Price"
                        onChange={(e) =>
                            props.setMinPriceFilter(e.target.value)
                        }
                        value={props.minPrice}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Max. Price"
                        onChange={(e) =>
                            props.setMaxPriceFilter(e.target.value)
                        }
                        value={props.maxPrice}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Min. Rating"
                        onChange={(e) =>
                            props.setMinRatingFilter(e.target.value)
                        }
                        value={props.minRating}
                    />
                </Col>
                <Col>
                    <Form.Control
                        type="number"
                        placeholder="Max. Rating"
                        onChange={(e) =>
                            props.setMaxRatingFilter(e.target.value)
                        }
                        value={props.maxRating}
                    />
                </Col>
            </Form.Row>
        </Form>
    );
}

const mapStateToProps = (state) => {
    const nameFilter = getNameFilter(state);
    const starsFilter = getStarsFilter(state);
    const minPrice = getMinPriceFilter(state);
    const maxPrice = getMaxPriceFilter(state);
    const minRating = getMinRatingFilter(state);
    const maxRating = getMaxRatingFilter(state);
    return {
        nameFilter,
        starsFilter,
        minPrice,
        maxPrice,
        minRating,
        maxRating,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setNameFilter: (filter) => {
        dispatch(setNameFilter(filter));
    },
    setStarsFilter: (filter) => {
        dispatch(setStarsFilter(filter));
    },
    setMinPriceFilter: (filter) => {
        dispatch(setMinPriceFilter(filter));
    },
    setMaxPriceFilter: (filter) => {
        dispatch(setMaxPriceFilter(filter));
    },
    setMinRatingFilter: (filter) => {
        dispatch(setMinRatingFilter(filter));
    },
    setMaxRatingFilter: (filter) => {
        dispatch(setMaxRatingFilter(filter));
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
