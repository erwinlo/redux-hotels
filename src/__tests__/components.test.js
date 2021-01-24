import React from 'react'
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from '../test-utils';
import CurrencySelector from '../components/CurrencySelector';
import BookingDetails from '../components/BookingDetails';
import Competitors from '../components/Competitors';
import OurPrice from '../components/OurPrice';
import HotelDetails from '../components/HotelDetails';
import HotelCard from '../components/HotelCard';

const state = {
     currency: {
          name: 'SGD',
          symbol: 'S$'
     },
     hotels: {
          hotels: [
               {
                    "id": "1",
                    "name": "Shinagawa Prince Hotel",
                    "rating": "7.7",
                    "stars": "4",
                    "address": "108-8611 Tokyo Prefecture, Minato-ku, Takanawa 4-10-30, Japan",
                    "photo": "https://d2ey9sqrvkqdfs.cloudfront.net/ZqSQ/i1_t.jpg"
               }
          ]
     },
     prices: {
          prices: [
               {
                    "id": "1",
                    "price": "163.2",
                    "competitors": {
                         "Traveloka": "190",
                         "Booking.com": "175",
                         "Hotels.com": "171.3",
                         "Expedia": "169.9",
                         "getaroom": "174",
                         "AMOMA.com": "172.77"
                    },
                    "taxes_and_fees": {
                         "tax": "13.12",
                         "hotel_fees": "16.4"
                    }
               }
          ]
     }
}

describe('CurrencySelector component', () => {
     it('should display selected currency', () => {
          render(<CurrencySelector />, { initialState: state })
          expect(screen.getByText('S$ SGD', 'button')).toBeInTheDocument()
     })
})

describe('BookingDetails component', () => {
     it('should display Book! button', () => {
          render(<BookingDetails />)
          expect(screen.getByTestId('btn-book')).toBeTruthy()
     })
})

describe('Competitors component', () => {
     it('should display competitors\' names and prices correctly', () => {
          render(<Competitors hotelId='1' />, { initialState: state })
          expect(screen.getByText('Expedia')).toBeInTheDocument()
          expect(screen.getByText('S$ 170')).toBeInTheDocument()
          expect(screen.getByText('Hotels.com')).toBeInTheDocument()
          expect(screen.getByText('S$ 171')).toBeInTheDocument()
     })

     it('should display us and our price', () => {
          render(<Competitors hotelId='1' />, { initialState: state })
          expect(screen.getByText('Us')).toBeInTheDocument()
          expect(screen.getByText('S$ 163')).toBeInTheDocument()
     })

     it('should highlight savings %', () => {
          render(<Competitors hotelId='1' />, { initialState: state })
          expect(screen.getByText('Save 3.9%')).toBeInTheDocument()
     })

     it('should hide extra competitors', () => {
          render(<Competitors hotelId='1' />, { initialState: state })
          expect(screen.getByText('4 more')).toBeInTheDocument()
     })
})

describe('OurPrice component', () => {
     it('should display our price correctly', () => {
          render(<OurPrice hotelId='1' />, { initialState: state })
          expect(screen.getByText('S$ 163')).toBeInTheDocument()
     })

     it('should highlight Tax & Fees incl.', () => {
          render(<OurPrice hotelId='1' />, { initialState: state })
          expect(screen.getByText('* Taxes & Fees incl.')).toBeInTheDocument()
     })
})

describe('HotelDetails component', () => {
     it('should display hotel\'s name', () => {
          render(<HotelDetails hotelId='1' />, { initialState: state })
          expect(screen.getByText('Shinagawa Prince Hotel')).toBeInTheDocument()
     })

     it('should display hotel\'s stars', () => {
          render(<HotelDetails hotelId='1' />, { initialState: state })
          expect(screen.getByTestId('4-star')).toBeInTheDocument()
     })

     it('should display hotel\'s rating', () => {
          render(<HotelDetails hotelId='1' />, { initialState: state })
          expect(screen.getByText('7.7', 'span')).toBeInTheDocument()
     })
})

describe('HotelCard component', () => {
     it('should display hotel\'s image', () => {
          render(<HotelCard hotelId='1' />, { initialState: state })
          expect(screen.getByRole('img', { class: 'hotel-image' })).toBeInTheDocument()
     })
})