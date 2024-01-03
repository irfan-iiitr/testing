import { render, screen } from '@testing-library/react';
import App from './App';

// beforeAll(()=>{
//   console.log('This runs before all tests');
// })

// beforeEach(()=>{
//   console.log('This runs before each tests');
// })

//afterAll() AfterEach() 



// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


// test('renders image',()=>{
//   render(<App/>);
//   const imageElement = screen.getByTitle(/Image Logo/i);
//   expect(imageElement).toBeInTheDocument();
// })

//test input element

test("Testing Input Box",()=>{
  render(<App/>);
  let checkInput =screen.queryByLabelText('inputbox1');
  console.log(checkInput)

  const inputElement = screen.getByPlaceholderText(/Enter username/i);
  expect(inputElement).toBeInTheDocument();
  expect(checkInput).toBeInTheDocument();
  expect(checkInput).toHaveAttribute("id","userId");
})



//using describe method


describe('App Component', () => {
  test('renders learn react link', () => {
    render(<App />);
    const linkElement = screen.getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
  });

  test('renders image', () => {
    render(<App />);
    const imageElement = screen.getByTitle(/Image Logo/i);
    expect(imageElement).toBeInTheDocument();
  });

  test('testing input box', () => {
    render(<App />);
    const inputElement = screen.getByPlaceholderText(/Enter username/i);
    expect(inputElement).toBeInTheDocument();

    const checkInput = screen.getByRole('textbox');
    expect(checkInput).toBeInTheDocument();
    expect(checkInput).toHaveAttribute('id', 'userId');
  });
});


