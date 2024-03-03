import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from './Carrousel';
import '@testing-library/jest-dom'

describe('Carousel component', () => {
  const pictures = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  test('renders with initial state', () => {
    render(<Carousel pictures={pictures} />);
    
    expect(screen.getByAltText('imagecarrousel')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getByText('1/3')).toBeInTheDocument();
  });

  test('navigates to next image', () => {
    render(<Carousel pictures={pictures} />);
    
    fireEvent.click(screen.getByAltText('goToNextImage'));
    
    expect(screen.getByAltText('imagecarrousel')).toHaveAttribute('src', 'image2.jpg');
    expect(screen.getByText('2/3')).toBeInTheDocument();
  });

  test('navigates to previous image', () => {
    render(<Carousel pictures={pictures} />);
    
    fireEvent.click(screen.getByAltText('goToPreviousImage'));
    
    expect(screen.getByAltText('imagecarrousel')).toHaveAttribute('src', 'image3.jpg');
    expect(screen.getByText('3/3')).toBeInTheDocument();
  });
});
