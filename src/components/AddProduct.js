import React, { useState } from "react";
import "./AddProduct.css";
const AddProduct = (props) => {
  const [addProductState, setAddProductState] = useState({
    name: {
      value: "",
      validation: "*",
      isValid: false,
    },
    price: {
      value: "",
      validation: "*",
      isValid: false,
    },
    discount: {
      value: "",
      validation: "",
      isValid: false,
    },
  });
  const cancelAddProductHandler = () => {
    props.cancel();
  };
  const productNameHandler = (e) => {
    props.operationResult.message = "";
    if (e.target.value === "") {
      setAddProductState({
        ...addProductState,
        name: {
          value: e.target.value,
          validation: "*",
          isValid: false,
        },
      });
      return;
    }
    if (e.target.value.length < 3) {
      setAddProductState({
        ...addProductState,
        name: {
          value: e.target.value,
          validation: "product name can't be lower than 3 characters",
          isValid: false,
        },
      });
      return;
    }
    if (e.target.value.length > 20) {
      setAddProductState({
        ...addProductState,
        name: {
          value: addProductState.name.value,
          validation: "",
          isValid: true,
        },
      });
      return;
    }
    setAddProductState({
      ...addProductState,
      name: {
        value: e.target.value,
        validation: "",
        isValid: true,
      },
    });
    return;
  };
  const productPriceHandler = (e) => {
    props.operationResult.message = "";
    if (e.target.value === "") {
      setAddProductState({
        ...addProductState,
        price: {
          value: e.target.value,
          validation: "*",
          isValid: false,
        },
      });
      return;
    }
    if (parseFloat(e.target.value) <= 0) {
      setAddProductState({
        ...addProductState,
        price: {
          value: e.target.value,
          validation: "price must be greater than zero",
          isValid: false,
        },
      });
      return;
    }
    setAddProductState({
      ...addProductState,
      price: {
        value: e.target.value,
        validation: "",
        isValid: true,
      },
    });
    return;
  };
  const productDiscountHandler = (e) => {
    props.operationResult.message = "";
    if (parseFloat(e.target.value) < 0) {
      setAddProductState({
        ...addProductState,
        discount: {
          value: e.target.value,
          validation: "discount can't be lower than zero",
          isValid: false,
        },
      });
      return;
    }
    setAddProductState({
      ...addProductState,
      discount: {
        value: e.target.value,
        validation: "",
        isValid: true,
      },
    });
    return;
  };
  const addNewProductHandler = (e) => {
    e.preventDefault();
    if (
      addProductState.name.isValid &&
      addProductState.price.isValid &&
      addProductState.discount.isValid
    ) {
      props.add({
        name: addProductState.name.value,
        price: addProductState.price.value,
        discount: addProductState.discount.value,
      });
      return;
    }
  };
  return (
    <div className="add-product-container container-fluid">
      <form className="container">
        <div className="row m-9-top">
          <div className="col-xl-7 col-11 m-05-auto">
            <div className="row">
              <h6 className="col-12 m-auto text-center h6 text-danger">
                {props.operationResult.message}
              </h6>
            </div>
            <div className="row">
              <label className="d-block col-12 m-auto text-left padding-0 text-secondary font-09">
                Name
              </label>
              <input
                type="text"
                className="d-block col-12 m-05-auto form-control form-control-sm"
                value={addProductState.name.value}
                onChange={productNameHandler}
              />
              <span className="d-block col-12 m-auto text-left padding-0 text-danger font-09">
                {addProductState.name.validation}
              </span>

              <label className="d-block col-12 m-auto text-left padding-0 text-secondary font-09">
                Price
              </label>
              <input
                type="number"
                className="d-block col-12 m-05-auto form-control form-control-sm"
                value={addProductState.price.value}
                onChange={productPriceHandler}
              />
              <span className="d-block col-12 m-auto text-left padding-0 text-danger font-09">
                {addProductState.price.validation}
              </span>

              <label className="d-block col-12 m-auto text-left padding-0 text-secondary font-09">
                Discount
              </label>
              <input
                type="number"
                className="d-block col-12 m-05-auto form-control form-control-sm"
                value={addProductState.discount.value}
                onChange={productDiscountHandler}
              />
              <span className="d-block col-12 m-auto text-left padding-0 text-danger font-09">
                {addProductState.discount.validation}
              </span>
              <input
                type="submit"
                className="d-block col-4 m-05-auto btn btn-sm btn-dark"
                value="Add Product"
                onClick={addNewProductHandler}
              />
              <input
                type="button"
                className="d-block col-4 m-05-auto btn btn-sm btn-danger"
                value="Cancel"
                onClick={cancelAddProductHandler}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddProduct;
