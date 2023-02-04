import { CartItemType } from "../../App";
import { Wrapper } from "./ProductCard.styles";
import Button from "@material-ui/core/Button";

interface Props {
  item: CartItemType;
  handleAddToCart(clickedItem: CartItemType): void;
}

const ProcuctCard: React.FC<Props> = (props): JSX.Element => {
  const { item ,handleAddToCart} = props;
  return (
    <Wrapper>
      <img src={item.image} alt={item.title} />
      <div>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <h3>${item.price}</h3>
      </div>
      <Button onClick={()=>handleAddToCart(item)} >Add To Cart</Button>
    </Wrapper>
  );
};

export default ProcuctCard;
