import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Paymentadvice.css";

const Paymentadvice = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [beneficiaryName, setBeneficiaryName] = useState("");
  const [amount, setAmount] = useState("");
  const [paymentDate, setPaymentDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [referenceNumber, setReferenceNumber] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [transactionType, setTransactionType] = useState("");

  useEffect(() => {
    // Fetch CIF ID and Corporate Name from localStorage
    const storedCifId = localStorage.getItem("cifId");
    const storedCorporateName = localStorage.getItem("corporateName");

    if (storedCifId) setCifId(storedCifId);
    if (storedCorporateName) setCorporateName(storedCorporateName);
  }, []); // Run once on component mount

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic, e.g., send payment advice
    console.log("Payment advice submitted");
  };

  return (
    <div className="payment-advice-container">
      <div className="payment-advice">
        <h2 className="heading">Payment Advice Module</h2>
        <div className="corporate-details">
          <p className="detail">
            <strong>CIF ID:</strong> {cifId}
          </p>
          <p className="detail">
            <strong>Corporate Name:</strong> {corporateName}
          </p>
          <p>Here customer will be registered successfully</p>
        </div>
      </div>
      <div>
        <button
          className="btn btn-success mx-2"
          onClick={() => navigate("/Customersideapplication")}
        >
          Customer Side Application
        </button>
      </div>
    </div>
  );
};

export default Paymentadvice;
