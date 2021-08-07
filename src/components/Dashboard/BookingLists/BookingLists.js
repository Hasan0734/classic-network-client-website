import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../App";
import BookingCard from "../BookingCard/BookingCard";

const BookingLists = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [bookingData, setBookingData] = useState([]);
  useEffect(() => {
    fetch(
      `https://evening-lowlands-38698.herokuapp.com/booking-lists/?email=` +
        loggedInUser.email
    )
      .then((res) => res.json())
      .then((data) => {
        setBookingData(data);
      });
  }, [loggedInUser.email]);

  return (
    <div className="container-area">
      <div className="row">
        {bookingData.length > 0 ? (
          bookingData.map((booking) => (
            <BookingCard booking={booking} key={booking._id}></BookingCard>
          ))
        ) : (
          <p className="text-danger">No booking available</p>
        )}
      </div>
    </div>
  );
};

export default BookingLists;
