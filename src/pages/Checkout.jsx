import { useContext } from "react";
import { BasketContext } from "./../context/basketContext";
import { Link } from "react-router-dom";

const Checkout = () => {
  const { basket, addToBasket, removeFromBasket } = useContext(BasketContext);
 
  const totalPrice= basket.reduce((total,i)=>total+i.amount*i.price,0);
  const totalAmount= basket.reduce((total,i)=>total+i.amount,0);
  return (
    <div className="container" style={{maxWidth:"95vh"}}>
      <div className="d-flex flex-column gap-5">
        {basket.length === 0 && (
          <p className="text-center my-5  gap-2">
            <span className="mx-3">
First add a product to the basket..</span>{" "}
            <Link to="/">Products</Link>
          </p>
        )}
        {basket.map((product) => (
          <div className="d-flex justify-content-between gap-3 align-item-center">
            <div
              style={{ width: "100px", height: "100px" }}
              className="bg-white rounded"
            >
              <img
                src={product.image}
                className="rounded shadow object-fit-contain "
                style={{ width: "100px", height: "100px" }}
                alt=""
              />
            </div>

            <h4 className="text-truncate">{product.title}</h4>
            <h3 className="text-success">${product.price}</h3>
            <p className="text-sm text-nowrap">miktar:{product.amount}</p>
            <div className="d-flex gap-3"></div>

            <button
              onClick={() => removeFromBasket(product.id)}
              className="btn btn-danger"
            >
              -
            </button>
            <button
              className="btn btn-success"
              onClick={() => addToBasket(product)}
            >
              +
            </button>
          </div>
        ))}
      </div>
      <div className="border p-5 rounded my-5 fs-4">
         <p>product in basket: <span className="text-warning">{totalAmount}</span></p>
         <p>Total Price: <span className="text-success">${totalPrice.toFixed(2)}</span></p>
        </div>
    </div>
  );
};

export default Checkout;
