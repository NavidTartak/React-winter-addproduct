import React, { useState } from "react";
import ProductRow from "./ProductRow";
import AddProduct from "./AddProduct";
const Products = () => {
  const [productsState, setProductsState] = useState({
    products: [],
    operationResult: {
      success: false,
      message: "",
    },
    addProductRequest: false,
  });

  const addProduct = (newProduct) => {
    if (newProduct.name === "") {
      setProductsState({
        ...productsState,
        operationResult: {
          success: false,
          message: "Product Name is required",
        },
        addProductRequest: true,
      });
      return;
    }
    if (newProduct.price === "" || parseFloat(newProduct.price) <= 0) {
      setProductsState({
        ...productsState,
        operationResult: {
          success: false,
          message: "Product Price is required",
        },
        addProductRequest: true,
      });
      return;
    }
    if (newProduct.discount !== "" && parseFloat(newProduct.discount) < 0) {
      setProductsState({
        ...productsState,
        operationResult: {
          success: false,
          message: "Product discount can't be lower than zero",
        },
        addProductRequest: true,
      });
      return;
    }
    if (productsState.products.length === 0) {
      if (newProduct.discount === "" || newProduct.discount === "0") {
        const newArray = productsState.products;
        newArray.push({
          id: 1,
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          discount: 0,
        });
        setProductsState({
          products: newArray,
          operationResult: {
            success: true,
            message: "",
          },
          addProductRequest: false,
        });
        return;
      }
      const newArray = productsState.products;
      newArray.push({
        id: 1,
        name: newProduct.name,
        price: parseFloat(newProduct.price),
        discount: parseFloat(newProduct.discount),
      });
      setProductsState({
        products: newArray,
        operationResult: {
          success: true,
          message: "",
        },
        addProductRequest: false,
      });
    } else {
      if (
        productsState.products.some(
          (p) => p.name.toLowerCase() === newProduct.name.toLowerCase()
        )
      ) {
        setProductsState({
          ...productsState,
          operationResult: {
            success: false,
            message: "This product is already exits",
          },
          addProductRequest: true,
        });
        return;
      } else {
        if (newProduct.discount === "" || newProduct.discount === "0") {
          const newArray = productsState.products;
          newArray.push({
            id: Math.max(...productsState.products.map((o) => o.id)) + 1,
            name: newProduct.name,
            price: parseFloat(newProduct.price),
            discount: 0,
          });
          setProductsState({
            products: newArray,
            operationResult: {
              success: true,
              message: "",
            },
            addProductRequest: false,
          });
          return;
        }
        const newArray = productsState.products;
        newArray.push({
          id: Math.max(...productsState.products.map((o) => o.id)) + 1,
          name: newProduct.name,
          price: parseFloat(newProduct.price),
          discount: parseFloat(newProduct.discount),
        });
        setProductsState({
          products: newArray,
          operationResult: {
            success: true,
            message: "",
          },
          addProductRequest: false,
        });
        return;
      }
    }
  };
  const requestToAddProductHandler = () => {
    setProductsState({
      ...productsState,
      operationResult: {
        success: false,
        message: "",
      },
      addProductRequest: true,
    });
  };
  const cancelToAddProductHandler = () => {
    setProductsState({
      ...productsState,
      operationResult: {
        success: false,
        message: "",
      },
      addProductRequest: false,
    });
  };
  const removeProduct = (id) => {
    if (productsState.products.some((x) => x.id === id)) {
      const newArray = productsState.products.filter((x) => x.id !== id);
      setProductsState({
        ...productsState,
        products: newArray,
      });
    }
  };
  if (productsState.addProductRequest) {
    if (productsState.products.length === 0) {
      return (
        <>
          <AddProduct
            operationResult={productsState.operationResult}
            cancel={cancelToAddProductHandler}
            add={addProduct}
          />
          <div className="row">
            <div className="col-12 m-05-auto" dir="rtl">
              <button
                onClick={requestToAddProductHandler}
                className="btn btn-sm btn-secondary"
              >
                <i className="fa fa-plus-circle"></i>&nbsp;Add New Product
              </button>
            </div>
            <h6 className="col-12 m-05-auto h6 text-center text-danger">
              There are not products to show
            </h6>
          </div>
        </>
      );
    }
    return (
      <>
        <AddProduct
          operationResult={productsState.operationResult}
          cancel={cancelToAddProductHandler}
          add={addProduct}
        />
        <div className="row">
          <div className="col-12 m-05-auto" dir="rtl">
            <button
              onClick={requestToAddProductHandler}
              className="btn btn-sm btn-secondary"
            >
              <i className="fa fa-plus-circle"></i>&nbsp;Add New Product
            </button>
          </div>
          <div className="col-12 m-05-auto">
            <table className="table table-bordered table-striped table-sm bg-white width100">
              <thead>
                <tr class="bg-secondary text-white font-09">
                  <th class="col-4 m-auto text-center">Name</th>
                  <th class="col-4 m-auto text-center">Price</th>
                  <th class="col-2 m-auto text-center"></th>
                </tr>
              </thead>
              <tbody>
                {productsState.products.map((item) => {
                  return (
                    <ProductRow
                      key={item.id}
                      product={item}
                      removeFunc={removeProduct}
                    />
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
  if (productsState.products.length === 0) {
    return (
      <div className="row">
        <div className="col-12 m-05-auto" dir="rtl">
          <button
            onClick={requestToAddProductHandler}
            className="btn btn-sm btn-secondary"
          >
            <i className="fa fa-plus-circle"></i>&nbsp;Add New Product
          </button>
        </div>
        <h6 className="col-12 m-05-auto h6 text-center text-danger">
          There are not products to show
        </h6>
      </div>
    );
  }
  return (
    <div className="row">
      <div className="col-12 m-05-auto" dir="rtl">
        <button
          onClick={requestToAddProductHandler}
          className="btn btn-sm btn-secondary"
        >
          <i className="fa fa-plus-circle"></i>&nbsp;Add New Product
        </button>
      </div>
      <div className="col-12 m-05-auto">
        <table className="table table-bordered table-striped table-sm bg-white width100">
          <thead>
            <tr class="bg-secondary text-white font-09">
              <th class="col-4 m-auto text-center">Name</th>
              <th class="col-4 m-auto text-center">Price</th>
              <th class="col-2 m-auto text-center"></th>
            </tr>
          </thead>
          <tbody>
            {productsState.products.map((item) => {
              return (
                <ProductRow
                  key={item.id}
                  product={item}
                  removeProduct={removeProduct}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Products;
