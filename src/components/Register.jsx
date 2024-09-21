import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Cifaccount from "./Cifaccount"; // Including the Cifaccount component

const Register = () => {
  const initialFormData = {
    cifId: "",
    corporateName: "",
    accounts: [{ accountNumber: "" }],
    corporateAddress: "",
    corporateOffice: "",
    gstNo: "",
    ciiNo: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [customerList, setCustomerList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Load existing customer list from localStorage on component mount
    const storedCustomers = localStorage.getItem("customerList");
    if (storedCustomers) {
      setCustomerList(JSON.parse(storedCustomers));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleAccountChange = (index, value) => {
    const newAccounts = [...formData.accounts];
    newAccounts[index].accountNumber = value;
    setFormData({
      ...formData,
      accounts: newAccounts,
    });
  };

  const handleAddAccount = () => {
    setFormData({
      ...formData,
      accounts: [...formData.accounts, { accountNumber: "" }],
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update customer list with new form data
    const updatedCustomerList = [...customerList, formData];
    setCustomerList(updatedCustomerList);
    // Store updated customer list in localStorage
    localStorage.setItem("customerList", JSON.stringify(updatedCustomerList));
    localStorage.setItem("cifId", formData.cifId);
    localStorage.setItem("corporateName", formData.corporateName);
    localStorage.setItem("accounts", JSON.stringify(formData.accounts));
    console.log("Form submitted:", formData);
    // Clear form fields
    setFormData(initialFormData);
    navigate("/PaymentProductMapping");
  };

  return (
    <div>
      <Cifaccount />
      <div className="container mt-5">
        <h2 className="text-center mb-4">Corporate Customer Registration</h2>
        <div className="card shadow p-4">
          <form onSubmit={handleSubmit}>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cifId">CIF ID</label>
                  <input
                    type="text"
                    id="cifId"
                    name="cifId"
                    value={formData.cifId}
                    onChange={handleInputChange}
                    className="form-control"
                    maxLength={9}
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="corporateName">Corporate Name</label>
                  <input
                    type="text"
                    id="corporateName"
                    name="corporateName"
                    value={formData.corporateName}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="form-group mb-3">
              <label>Account Number(s)</label>
              {formData.accounts.map((account, index) => (
                <div key={index} className="input-group mb-2">
                  <input
                    type="text"
                    maxLength={16}
                    value={account.accountNumber}
                    onChange={(e) => handleAccountChange(index, e.target.value)}
                    className="form-control"
                    placeholder="Account Number"
                  />
                  {index === formData.accounts.length - 1 && (
                    <div className="input-group-append">
                      <button
                        type="button"
                        className="btn btn-outline-primary"
                        onClick={handleAddAccount}
                      >
                        Add +
                      </button>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="corporateAddress">Corporate Address</label>
                  <input
                    type="text"
                    id="corporateAddress"
                    name="corporateAddress"
                    value={formData.corporateAddress}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="corporateOffice">Corporate Office</label>
                  <input
                    type="text"
                    id="corporateOffice"
                    name="corporateOffice"
                    value={formData.corporateOffice}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="row mb-3">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="gstNo">GST Number</label>
                  <input
                    type="text"
                    id="gstNo"
                    name="gstNo"
                    value={formData.gstNo}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="ciiNo">CII Number</label>
                  <input
                    type="text"
                    id="ciiNo"
                    name="ciiNo"
                    value={formData.ciiNo}
                    onChange={handleInputChange}
                    className="form-control"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
