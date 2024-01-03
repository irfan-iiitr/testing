import {fireEvent, render, screen } from '@testing-library/react';
import Home from '../Home';

//Snapshot testing is a technique used in software testing to verify that the output 
//of a particular piece of code remains unchanged over time 

// test('renders Home component correctly', () => {
//     const { container } = render(<Home />);
//     expect(container.firstChild).toMatchSnapshot();
//   });

//select multiple elements by name


test('button click updates correctly', () => {
    render(<Home />);
    const button1 = screen.getByRole("button",{name:"button 1"});
const button2 = screen.getByRole("button",{name:"button 2"});
  expect(button1).toBeInTheDocument(); 
expect(button2).toBeInTheDocument();
});
