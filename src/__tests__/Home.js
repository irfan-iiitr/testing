import {fireEvent, render, screen } from '@testing-library/react';
import Home from '../Home';

//onchange event 

test('input field updates correctly', () => {
    const { getByPlaceholderText } = render(<Home />);
    const inputField = getByPlaceholderText('Enter text here');
  
    fireEvent.change(inputField, { target: { value: 'Hello' } });
  
    expect(inputField.value).toBe('Hellos');
  });

    //onclick event

    test('button click updates correctly', () => {
        const { getByText } = render(<Home />);
        const button = getByText('Click ME');
      
        fireEvent.click(button);
      
        expect(screen.getByText(/hello every/)).toBeInTheDocument();
      });





