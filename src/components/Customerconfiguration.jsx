import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Customerconfiguration = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [dailyTransactionLimit, setDailyTransactionLimit] = useState("");
  const [transactionLimitRole, setTransactionLimitRole] = useState("");
  const [makerCheckerOption, setMakerCheckerOption] = useState("");
  const [numberOfUsers, setNumberOfUsers] = useState("");
  const [numberOfmakers, setNumberOfmakers] = useState("");
  const [numberOfcheakers, setNumberOfcheakers] = useState("");
  const [gracePeriod, setGracePeriod] = useState("");

  const navigate = useNavigate();

  // Retrieve CIF ID and Corporate Name from local storage on page load
  useEffect(() => {
    const storedCifId = localStorage.getItem("corporateCifid");
    const storedCorporateName = localStorage.getItem("corporatecustomerName");

    if (storedCifId) {
      setCifId(storedCifId);
    }

    if (storedCorporateName) {
      setCorporateName(storedCorporateName);
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, such as saving data or sending it to an API
    const configParams = {
      cifId,
      corporateName,
      dailyTransactionLimit,
      transactionLimitRole,
      makerCheckerOption,
      numberOfUsers,
      gracePeriod,
    };
    console.log("Submitted config params:", configParams);
    // Reset form fields or perform any other necessary actions after submission
    // For demo purposes, clear fields
    setDailyTransactionLimit("");
    setTransactionLimitRole("");
    setMakerCheckerOption("");
    setNumberOfUsers("");
    setGracePeriod("");
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Customer Configuration Parameters</h2>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="cifId" className="form-label">
              CIF ID:
            </label>
            <input
              type="text"
              className="form-control"
              id="cifId"
              value={cifId}
              readOnly
            />
          </div>
          <div className="col-md-6">
            <label htmlFor="corporateName" className="form-label">
              Corporate Name:
            </label>
            <input
              type="text"
              className="form-control"
              id="corporateName"
              value={corporateName}
              readOnly
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-4">
            <label htmlFor="dailyTransactionLimit" className="form-label">
              Daily Transaction Limit:
            </label>
            <input
              type="text"
              className="form-control"
              id="dailyTransactionLimit"
              value={dailyTransactionLimit}
              onChange={(e) => setDailyTransactionLimit(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="transactionLimitRole" className="form-label">
              Transaction Limit Role:
            </label>
            <input
              type="text"
              className="form-control"
              id="transactionLimitRole"
              value={transactionLimitRole}
              onChange={(e) => setTransactionLimitRole(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="numberOfUsers" className="form-label">
              Number of Users:
            </label>
            <input
              type="number"
              className="form-control"
              id="numberOfUsers"
              value={numberOfUsers}
              onChange={(e) => setNumberOfUsers(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="numberOfmakers" className="form-label">
              Number of Makers:
            </label>
            <input
              type="number"
              className="form-control"
              id="numberOfmakers"
              value={numberOfmakers}
              onChange={(e) => setNumberOfmakers(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="numberOfcheakers" className="form-label">
              Number of Checkers:
            </label>
            <input
              type="number"
              className="form-control"
              id="numberOfcheakers"
              value={numberOfcheakers}
              onChange={(e) => setNumberOfcheakers(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="gracePeriod" className="form-label">
              Grace Period:
            </label>
            <input
              type="text"
              className="form-control"
              id="gracePeriod"
              value={gracePeriod}
              onChange={(e) => setGracePeriod(e.target.value)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => {
            navigate("/role");
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default Customerconfiguration;
