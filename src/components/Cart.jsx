import styled from "styled-components";
import { useProducts } from "../context/ProductsContext";

const CartStyles = styled.section`
  min-height: 100vh;
  position: fixed;
  right: 0;
  top: 55px;
  bottom: 0px;
  border: red solid 2px;
  width: 15%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  padding: 1rem 1rem 10rem 1rem;
  overflow-y: scroll;
`;

const CartItemStyle = styled.article`
  width: 100%;
  margin-bottom: 2rem;
  padding: 1rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CartImgStyle = styled.img`
  width: 120px;
  height: 100px;
  margin: auto;
`;

const CoutDelBtnStyle = styled.div`
  position: fixed;
  bottom: 0;
  padding: 1rem 2.25rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
`;

const Cart = ({ isCartOpen }) => {
  const { cartItems, deleteItemFromCart, clearCart } = useProducts();

  // an array of product prices
  const itemPrice = [];

  //calculates the total amount to pay
  const totalToPay = () => {
    //   add price to itemPrice array
    for (let i = 0; i < cartItems.length; i++) {
      itemPrice.push(cartItems[i].price.raw);
    }
    if (itemPrice.length <= 0) return "0.00";

    let total = itemPrice.reduce(
      (accumulator, current) => current + accumulator
    );
    return total.toLocaleString();
  };

  console.log(cartItems);

  return (
    <>
      {isCartOpen && (
        <CartStyles className="bg-white">
          <h3>In Cart</h3>
          {cartItems.length <= 0 ? (
            <h4
              style={{
                position: "relative",
                top: "40%",
                transform: "translateY(-50%)",
              }}
            >
              No items
            </h4>
          ) : (
            cartItems.map(item => {
              return (
                <CartItemStyle
                  key={item.id}
                  className="border-bottom border-dark"
                >
                  <CartImgStyle src={item.media.source} alt={item.name} />
                  <h6 className="text-center mt-4">{`${item.name} x ${
                    item.sort_order + 1
                  }`}</h6>
                  <button
                    className="btn btn-danger mt-4"
                    style={{ width: "max-content" }}
                    onClick={() => deleteItemFromCart(item.id)}
                  >
                    Delete
                  </button>
                </CartItemStyle>
              );
            })
          )}
          <CoutDelBtnStyle>
            <div>
              <button className="btn btn-danger" onClick={clearCart}>
                Clear Cart
              </button>
              <button className="btn btn-success  ms-1">Checkout</button>
            </div>
            <p className="mt-2 text-center h5">Total: {totalToPay() + "PHP"}</p>
          </CoutDelBtnStyle>
        </CartStyles>
      )}
    </>
  );
};

export default Cart;
