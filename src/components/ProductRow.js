import React from "react";

const ProductRow = (props) => {
  const removeProductHandler = () => {
    props.removeProduct(props.product.id);
  };
  if (props.product.discount === 0) {
    return (
      <tr class="row d-table-row">
        <td class="col-4 m-auto text-center align-items-center font-09 text-dark">
          {props.product.name}
        </td>
        <td class="col-4 m-auto text-center align-items-center font-09 text-dark">
          {props.product.price} $
        </td>
        <td class="col-2 m-auto text-center">
          <i
            onClick={removeProductHandler}
            className="fa fa-trash text-danger cursor-pointer"
          ></i>
        </td>
      </tr>
    );
  }
  return (
    <tr class="row d-table-row">
      <td class="col-4 m-auto text-center align-items-center font-09 text-dark">
        {props.product.name}
      </td>
      <td class="col-4 m-auto text-center align-items-center font-09">
        <span className="text-secondary line-through">
          {props.product.price} $
        </span>
        &nbsp;&nbsp;&nbsp;
        <span className="text-dark">
          {props.product.price - props.product.discount} $
        </span>
      </td>
      <td class="col-2 m-auto text-center">
        <i
          onClick={removeProductHandler}
          className="fa fa-trash text-danger cursor-pointer"
        ></i>
      </td>
    </tr>
  );
};

export default ProductRow;
