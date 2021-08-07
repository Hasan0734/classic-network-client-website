import React from "react";
import "./BookingCard.css";
const BookingCard = ({ booking }) => {
  const { bookingService, bookingStatus } = booking;

  return (
    <>
      <div className="col-md-5 mt-4">
        <div className="card p-4 booking-card">
          <div className="card-body">
            <div className="d-flex justify-content-between mb-4">
              <h4 className="card-title">{bookingService.title}</h4>
              <button
                className={
                  bookingStatus === "Done"
                    ? "btn btn-success"
                    : "btn btn-danger"
                }
              >
                {bookingStatus}
              </button>
            </div>

            <p>{bookingService.description}</p>

            <h4>${bookingService.price}</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default BookingCard;
