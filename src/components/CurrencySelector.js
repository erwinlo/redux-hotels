import React, { Component } from "react";
import { connect } from "react-redux";
import { setCurrency } from "../redux/actionCreators/currency";
import { fetchPrices } from "../redux/actionCreators/prices";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { CURRENCIES, CURRENCIES_SYMBOLS } from "../shared/variables";

const mapStateToProps = (state) => {
    return {
        currency: state.currency,
    };
};

const mapDispatchToProps = (dispatch) => ({
    setCurrency: (currency) => {
        dispatch(setCurrency(currency));
    },
    fetchPrices: (currency) => {
        dispatch(fetchPrices(currency));
    },
});

class CurrencySelector extends Component {
    handleCurrency(currency) {
        localStorage.setItem("currency", currency);
        this.props.setCurrency(currency);
        this.props.fetchPrices(currency);
    }

    render() {
        const currency = this.props.currency.name;
        const symbol = this.props.currency.symbol;

        return (
            <DropdownButton
                menuAlign="right"
                title={symbol + " " + currency}
                className="p-4"
            >
                {CURRENCIES.map((item) => (
                    <Dropdown.Item
                        key={item}
                        active={item === currency}
                        onClick={() => this.handleCurrency(item)}
                    >
                        <span className="dropdown-item-left">
                            {CURRENCIES_SYMBOLS[item]}
                        </span>
                        <span>{item}</span>
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CurrencySelector);
