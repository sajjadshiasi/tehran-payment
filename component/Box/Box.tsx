import { IBoxProps } from "./Interface";
import { BoxWrapper } from "./BoxStyles";

const Box = (props: IBoxProps) => {
  const { children } = props;

  return <BoxWrapper>{children}</BoxWrapper>;
};
export default Box;
