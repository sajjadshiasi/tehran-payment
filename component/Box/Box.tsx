import { IBoxProps } from "./Interface";
import { BoxWrapper } from "./BoxStyles";
import { memo } from "react";

const Box = (props: IBoxProps) => {
  const { children } = props;

  return <BoxWrapper>{children}</BoxWrapper>;
};
export default memo(Box);
