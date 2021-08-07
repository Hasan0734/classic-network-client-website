import React from "react";

const OrderTableData = ({ order, handleData }) => {
  const {
    shipment,
    bookingService,
    paymentId,
    bookingStatus,
    _id,
    bookingTime,
  } = order;

  const handleSelect = (e) => {
    const update = e.target.value;
    console.log(update);
    fetch(
      `https://evening-lowlands-38698.herokuapp.com/order-lists/?id=${_id}&status=${update}`,
      {
        method: "PUT",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        handleData();
      });
  };

  return (
    <tr className="text-center">
      <td className="text-start">{shipment.name}</td>
      <td>{shipment.email}</td>
      <td>{bookingService.title}</td>
      <td>{paymentId}</td>
      <td>{new Date(bookingTime).toLocaleDateString()}</td>
      <td>
        <select
          className={
            bookingStatus === "Done" ? "btn btn-success" : "btn btn-danger"
          }
          onChange={handleSelect}
          defaultValue={bookingStatus}
        >
          <option value="Pending">Pending</option>
          <option value="Done">Done</option>
          <option value="Processing">Processing</option>
        </select>
      </td>
    </tr>
  );
};

export default OrderTableData;
