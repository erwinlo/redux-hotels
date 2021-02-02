import React from "react";
import { connect } from "react-redux";
import { Row, Col, OverlayTrigger, Tooltip } from "react-bootstrap";
import { formatNumber } from "../shared/functions";
import {
    getCurrencyName,
    getCurrencySymbol,
} from "../redux/selectors/currency";
import { getPricesByHotelId } from "../redux/selectors/prices";

const mapStateToProps = (state, props) => {
    const symbol = getCurrencySymbol(state);
    const currency = getCurrencyName(state);
    const prices = getPricesByHotelId(state, props.hotelId);
    return { symbol, currency, prices };
};

const OurPrice = (props) => {
    const symbol = props.symbol;
    const currency = props.currency;
    const price = props.prices ? props.prices.price : null;
    const fees = props.prices ? props.prices.taxes_and_fees : null;

    const feesTooltip = fees ? (
        <Tooltip id="fees-tooltip">
            Tax: {symbol + " " + fees.tax}
            <br />
            Hotel fee: {symbol + " " + fees.hotel_fees}
        </Tooltip>
    ) : null;

    return (
        <Row className="mt-auto">
            <Col>
                {price ? (
                    <>
                        <h4>
                            <strong>
                                {symbol + " " + formatNumber(currency, price)}
                            </strong>
                        </h4>
                        {fees ? (
                            <OverlayTrigger
                                placement="bottom"
                                overlay={feesTooltip}
                            >
                                <small>* Taxes & Fees incl.</small>
                            </OverlayTrigger>
                        ) : null}
                    </>
                ) : (
                    <span>Rates unavailable</span>
                )}
            </Col>
        </Row>
    );
};

export default connect(mapStateToProps)(OurPrice);
