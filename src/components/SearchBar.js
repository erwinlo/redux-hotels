import React, { Component } from "react";
import { connect } from "react-redux";
import { Row, Col, Dropdown, DropdownButton } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { setNameFilter } from "../redux/ActionCreators";
import { getNameFilter } from "../redux/selectors";

class SearchBar extends Component {
    render() {
        return (
            <Row>
                <Col>
                    <Form.Group>
                        <Form.Control
                            type="text"
                            placeholder="Search Title"
                            onChange={(e) =>
                                this.props.setNameFilter(e.target.value)
                            }
                            value={this.props.nameFilter}
                        />
                    </Form.Group>
                </Col>
                <Col>
                    <DropdownButton
                        id="dropdown-basic-button"
                        title="Stars"
                    >
                        <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                            2
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            3
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            4
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                            5
                        </Dropdown.Item>
                    </DropdownButton>
                </Col>
            </Row>
        );
    }
}

const mapStateToProps = (state) => {
    const nameFilter = getNameFilter(state);
    return { nameFilter };
};

const mapDispatchToProps = (dispatch) => ({
    setNameFilter: (filter) => {
        dispatch(setNameFilter(filter));
    },
});

export default connect(null, mapDispatchToProps)(SearchBar);
