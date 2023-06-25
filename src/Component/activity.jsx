import React, { useState, useEffect } from "react";
import "./activity.css";
import { ReactComponent as Download } from "../images/download.svg";
import { ReactComponent as Search } from "../images/search.svg";

export const Activity = () => {
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [statusFilter, setStatusFilter] = useState("");
  const [typeFilter, setTypeFilter] = useState("");

  const allTransactions = [
    {
      id: 1,
      name: "Name.com Inc.",
      price: 9.89,
      type: "Payment",
      status: "Completed",
      date: "Jun 22",
      img: "https://play-lh.googleusercontent.com/DTzWtkxfnKwFO3ruybY1SKjJQnLYeuK3KmQmwV5OQ3dULr5iXxeEtzBLceultrKTIUTr",
    },
    {
      id: 2,
      name: "Name.com Inc.",
      price: 7.88,
      type: "Payment",
      status: "Pending",
      date: "Jun 21",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJz8IX6WzdrcIE859ipyk8Q82eI52_Vu3D7g&usqp=CAU",
    },
    {
      id: 3,
      name: "Name.com Inc.",
      price: 3.45,
      type: "Refund",
      status: "Completed",
      date: "Jun 20",
      img: "https://marketplace.canva.com/EAE2-UabFFY/1/0/1600w/canva-a-letter-tech-logo-A6Vdrh0dthw.jpg",
    },
  ];

  useEffect(() => {
    let filtered = allTransactions;

    if (statusFilter) {
      filtered = filtered.filter(
        (transaction) => transaction.status === statusFilter
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(
        (transaction) => transaction.type === typeFilter
      );
    }

    setFilteredTransactions(filtered);
  }, [statusFilter, typeFilter]);

  return (
    <div className="page">
      <div className="inner-container">
        <div className="search-input">
          <div className="search-icon">
            <Search />
            <input
              type="text"
              className="search-area"
              placeholder="Search by name or email"
            ></input>
          </div>
          <div className="download-btn">
            <Download />
          </div>
        </div>
        <div className="filters-heading">Filter by</div>
        <div className="filters">
          <div className="filter-item">Last 90 days</div>
          <div className="filter-item">
            <label>Status:</label>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              style={{ border: "none", outline: "none" }}
            >
              <option value="">All</option>
              <option value="Completed">Completed</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="filter-item">
            <label>Type:</label>
            <select
              value={typeFilter}
              onChange={(e) => setTypeFilter(e.target.value)}
              style={{ border: "none", outline: "none" }}
            >
              <option value="">All</option>
              <option value="Payment">Payment</option>
              <option value="Refund">Refund</option>
            </select>
          </div>
        </div>
        <div className="status">
          {statusFilter === "" ? <>All </> : statusFilter}
        </div>

        {filteredTransactions.map((item, key) => {
          return (
            <div className="data">
              <div className="details">
                <div className="image">
                  <div id="image">
                    <img src={item.img} style={{ width: "100%" }} alt="" />
                  </div>
                </div>
                <div className="name">
                  <span style={{ fontWeight: "700", color: "black" }}>
                    {item.name}
                  </span>
                  <div>{item.date} . Automatic Payment</div>
                </div>
              </div>
              <div className="price">-${item.price}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
