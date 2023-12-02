import axios from 'axios';
import './main-user.css';
import React, { useEffect, useState } from 'react';
import {  useDispatch, useSelector } from 'react-redux';
import { editUser } from '../../reducers/users.reducer';
import { useNavigate } from 'react-router-dom';
import Transaction from '../transaction/Transaction';
const MainUser = () => {
  
  const userName = useSelector((state) => state.user.profile.userName);
  const [isOpen, setIsOpen] = useState(false);
  const [editName, setEditName] = useState(userName);
  const dispatch = useDispatch();

  const token = useSelector((state) => state.user.token);

  function toggleOpen() {
    setIsOpen(!isOpen);
  }

  function toggleClose() {
    setIsOpen(false);
  }

  const handleCancel = () => {
    toggleClose();
    
  };

  const handleUserNameChange = (e) => {
    setEditName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(
      "http://localhost:3001/api/v1/user/profile",
      {
        userName: editName,
      },
      {
        "Content-Type": "application/json",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    ).then((res) => {
      const resData = res.data;
      console.log("Username update", resData);
      dispatch(editUser(editName));
    }).catch((error) => {
      console.error("Error updating username:", error);
    })
  };
  const navigate = useNavigate()
  useEffect(() => {
    if(!localStorage.token) {
      navigate("/sign")
    }
  }, [])

  const transactions = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: 2082.79,
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: 928.42,
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: 184.30,
    }
  ]

  return (
    <div className='main-div'>
      <main className="main bg-dark">
        <div className="header">
          <h1>Welcome back <br/> 
          {userName}
          </h1>
          <button 
            className="edit-button"
            onClick={toggleOpen}
          >
            Edit Name
          </button>
          {isOpen && (
        <div className="display-flex">
          <div className="input-welcomeback">
            <label>User Name: </label>
            <input value={editName ? editName : ""} onChange={(e) => handleUserNameChange(e)} />
          </div>
          <button
            className="edit-button edit-button-margin-right"
            onClick={(e) => handleSubmit(e)}
          >
            Save
          </button>
          <button className="edit-button" onClick={handleCancel}>
            Cancel
          </button>
        </div>
      )}
        </div>
        <h2 className="sr-only">Accounts</h2>
        {transactions.map((transaction, index) => 
          <Transaction key={index} transaction={transaction} />
        )}
      </main>
    </div>
  );
};

export default MainUser;