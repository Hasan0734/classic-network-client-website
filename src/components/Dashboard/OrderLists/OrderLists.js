import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import OrderTableData from '../OrderTableData/OrderTableData';
import Sidebar from '../Sidebar/Sidebar';
import './OrderLists.css'

const OrderLists = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])

    useEffect(() => {
        handleData()
    }, [])
    const handleData = () => {
        fetch('https://evening-lowlands-38698.herokuapp.com/order-lists')
        .then(res => res.json())
        .then(data => {
            setOrders(data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div className="container-fluid row dashboard">
            <div className="col-md-2 sidebar">
                <Sidebar/>
            </div>
            <div className="col-md-10 pe-0">
                 <div className="d-flex align-items-center justify-content-between">
                    <h4 style={{padding: "22px"}}>Order Lists</h4>
                    <div className="user-area d-flex align-items-center">
          <img className="img-fluid" src={loggedInUser.img} alt="" />
          <h5 className="user-name">{loggedInUser.name}</h5>
          </div>
                </div>
                <div className="container-area">
                    <div className="card p-5">
                   <div className="table-responsive">
                   <table className="table table-sm  table-hover">
                        <thead className="thead-dark text-center">
                            <tr>
                                <th className="text-start" scope="col">Name</th>
                                <th scope="col">Email ID</th>
                                <th scope="col">Service</th>
                                <th scope="col">Payment ID</th>
                                <th scope="col">Booking Date</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        <tbody>
                          {orders.map(order => <OrderTableData handleData={handleData} order={order} key={order._id}></OrderTableData>) }
                        </tbody>
                    </table>
                   </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderLists;