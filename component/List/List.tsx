import { IAllCoinProps } from "@/types/res";
import { IListProps } from "./Interface";
import {
  HeadTitle,
  HeadWrapper,
  ListItems,
  ListWrapper,
  Typography,
} from "./ListStyle";

const List = (props: IListProps) => {
  const { item } = props;
  return (
    <>
      <ListWrapper>
        <HeadWrapper>
          <HeadTitle>Coin</HeadTitle>
          <HeadTitle>Price</HeadTitle>
        </HeadWrapper>
        {item.map((items: IAllCoinProps, index: number) => (
          <ListItems key={index}>
            <Typography>{items.name}</Typography>
            <Typography>R${items.current_price}</Typography>
          </ListItems>
        ))}
      </ListWrapper>
    </>
  );
};
export default List;
