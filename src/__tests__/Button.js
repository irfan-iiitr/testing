
import { render ,screen} from "@testing-library/react";
import Button from "../Button";

test("all buttons renders", () => {
       render(<Button />);
       const btns=screen.getAllByRole("button");
       for(let i=0;i<btns.length;i++) {
              expect(btns[i]).toBeInTheDocument();
       }
});

