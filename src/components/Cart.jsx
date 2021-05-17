import styled from "styled-components";
import { useProducts } from "../context/ProductsContext";

import Error from "./Error";

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
  min-width: 300px;
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
  const {
    cart,
    deleteItemFromCart,
    clearCart,
    isFetching,
    isError,
    isLoading,
  } = useProducts();

  const renderCartItems = () => {
    return (
      <CartStyles className="bg-white">
        <h3>In Cart</h3>

        {cart.line_items.map(item => {
          return (
            <CartItemStyle key={item.id} className="border-bottom border-dark">
              <CartImgStyle src={item.media.source} alt={item.name} />
              <h6 className="text-center mt-4">{item.name}</h6>
              <h6>{`${item.price.formatted_with_symbol} x ${item.quantity} `}</h6>
              <button
                className="btn btn-danger mt-2"
                style={{ width: "max-content" }}
                onClick={() => deleteItemFromCart(item.id)}
              >
                Delete
              </button>
            </CartItemStyle>
          );
        })}
        <CoutDelBtnStyle>
          <div>
            <button
              className={
                cart.line_items <= 0
                  ? "btn btn-danger ms-1 disabled"
                  : "btn btn-danger ms-1"
              }
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <a
              href={cart.hosted_checkout_url}
              className={
                cart.line_items <= 0
                  ? "btn btn-success ms-1 disabled"
                  : "btn btn-success ms-1"
              }
            >
              Checkout
            </a>
          </div>
          <p className="mt-2 text-center h5">
            Total: {cart.subtotal.formatted_with_symbol}
          </p>
        </CoutDelBtnStyle>
      </CartStyles>
    );
  };

  if (isFetching || isLoading)
    return (
      isCartOpen && (
        <>
          <CartStyles className="bg-white">
            <h3>In Cart</h3>
            <CoutDelBtnStyle>
              <div>
                <button className="btn btn-danger ms-1 disabled">
                  Clear Cart
                </button>
                <button className="btn btn-success ms-1 disabled">
                  Checkout
                </button>
              </div>
              <p className="mt-2 text-center h5">Total: 0.00</p>
            </CoutDelBtnStyle>
          </CartStyles>
        </>
      )
    );

  if (isError) return <Error />;

  return <>{isCartOpen && renderCartItems()}</>;
};

export default Cart;
