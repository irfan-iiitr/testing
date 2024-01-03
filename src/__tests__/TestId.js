import TestId from "../TestId";
import { render,screen ,configure} from "@testing-library/react";

configure({testIdAttribute: 'id'})

// test('test by  test id', () => {
//     render(<TestId />);
//     const divElement = screen.getByTestId('div-test-id1');
//     expect(divElement).toBeInTheDocument();
// })


//override testID

test(' by custom test id', () => {
    render(<TestId />);
    const divElement = screen.getByTestId('testid-div2');
    expect(divElement).toBeInTheDocument();
})

