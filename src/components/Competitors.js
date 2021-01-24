import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Badge, DropdownButton, Dropdown } from 'react-bootstrap';
import { formatNumber } from '../shared/functions';
import { getCurrencyName, getCurrencySymbol, getPricesByHotelId } from '../redux/selectors';
import { DISPLAY_LIMIT } from '../shared/variables'

const mapStateToProps = (state, props) => {
     const symbol = getCurrencySymbol(state);
     const currency = getCurrencyName(state);
     const prices = getPricesByHotelId(state, props.hotelId);
     return { symbol, currency, prices }
}

const cheapest = (a, b) => {
     return a[1] - b[1];
}

const DisplayedCompetitors = ({ competitors, ourPrice, symbol, currency }) => (
     competitors.map((item) => {
          const competitorPrice = parseFloat(item[1]);
          const savings = ((ourPrice / competitorPrice - 1) * -100).toFixed(1);

          return (
               <Col key={item[0]} className='mx-2'>
                    <Row>
                         <span className='competitor-name'>{item[0]}</span>
                    </Row>
                    <Row>
                         {symbol + ' ' + formatNumber(currency, competitorPrice)}
                    </Row>
                    {(savings > 0) &&
                         <Row>
                              <Badge variant='warning'>Save {savings}%</Badge>
                         </Row>
                    }
               </Col>
          );
     })
)

const ExtraCompetitors = ({ competitors, symbol, currency }) => (
     (competitors.length > 0) &&
     <Col className='mx-2'>
          <DropdownButton
               title={competitors.length + ' more'}
               menuAlign='right'
               className='more-sites'
          >
               {competitors.map(item =>
                    <Dropdown.Item key={item[0]}>
                         <span className='dropdown-item-left'>{symbol + ' ' + formatNumber(currency, item[1])}</span>
                         <span className='competitor-name'>{item[0]}</span>
                    </Dropdown.Item>
               )}
          </DropdownButton>
     </Col>
)

const Competitors = (props) => {
     const prices = props.prices;
     
     // if no prices or competitors available, display nothing 
     if (!prices || !prices.competitors) return null;

     const ourPrice = parseFloat(prices.price);
     const currency = props.currency;
     const symbol = props.symbol;

     // convert competitors object to array and sort by price desc
     const competitors = Object.entries(prices.competitors);
     competitors.push(['Us', ourPrice]);
     competitors.sort(cheapest);

     const totalCompetitors = competitors.length;

     // if more competitors than DISPLAY_LIMIT, put them in dropdown
     let displayedCompetitors, extraCompetitors = [];
     if (totalCompetitors > DISPLAY_LIMIT) {
          displayedCompetitors = competitors.slice(0, DISPLAY_LIMIT - 1);
          extraCompetitors = competitors.slice(DISPLAY_LIMIT - 1);
     } else {
          displayedCompetitors = competitors.slice();
     }

     return (
          <Row className='border-top mt-auto'>
               <DisplayedCompetitors
                    competitors={displayedCompetitors}
                    ourPrice={ourPrice}
                    symbol={symbol}
                    currency={currency}
               />

               <ExtraCompetitors
                    competitors={extraCompetitors}
                    symbol={symbol}
                    currency={currency}
               />
          </Row>
     );
}

export default connect(mapStateToProps)(Competitors);