import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const User = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [dailyTransactionLimit, setDailyTransactionLimit] = useState("");
  const [transactionLimit, setTransactionLimit] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted!");
    // Reset fields after submission (optional)
    resetForm();
  };

  const resetForm = () => {
    setUserName("");
    setPassword("");
    setAccountNumber("");
    setDailyTransactionLimit("");
    setTransactionLimit("");
    setRole("");
    setEmail("");
    setMobileNo("");
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setFatherName("");
    setMotherName("");
  };

  // Generate random CIF ID and Corporate Name on page load
  useEffect(() => {
    const storedCifId = localStorage.getItem("corporateCifid");
    const storedCorporateName = localStorage.getItem("corporatecustomerName");

    if (storedCifId) {
      setCifId(storedCifId);
    }

    if (storedCorporateName) {
      setCorporateName(storedCorporateName);
    }

    // generateRandomCifAndCorporate();
    // initializeModuleActions();
  }, []);

  const generateRandomCifAndCorporate = () => {
    // Generate random 9-digit CIF ID
    const randomCifId = Math.floor(100000000 + Math.random() * 900000000);
    setCifId(randomCifId.toString());

    const getRandomIndustryName = () => {
      const industries = [
        "Ratan tata",
        "infosys",
        "Hanumant industry",
        "Stark industry",
        "Agrawal builders",
        "shards infoted",
        "google",
        "levitate",
        "Zee_Media",
        "News",
      ];

      return industries[Math.floor(Math.random() * industries.length)];
    };

    // Example usage:
    const randomIndustry = getRandomIndustryName();

    // Generate random corporate name
    setCorporateName(randomIndustry);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">User Module</h2>
      <form>
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
          <div className="container mt-4">
            <h2 className="mb-4"></h2>
            <div className="row">
              {/* Left Side */}
              <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="role" className="form-label">
                      Role:
                    </label>
                    <select
                      id="role"
                      className="form-select"
                      value={role}
                      onChange={(e) => setRole(e.target.value)}
                    >
                      <option value="">Select Role</option>
                      <option value="maker">Maker</option>
                      <option value="checker">Checker</option>
                    </select>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="accountNumber" className="form-label">
                      Account Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="accountNumber"
                      value={accountNumber}
                      onChange={(e) => setAccountNumber(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="userName" className="form-label">
                      User Name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="userName"
                      value={userName}
                      onChange={(e) => setUserName(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password:
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label
                      htmlFor="dailyTransactionLimit"
                      className="form-label"
                    >
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
                  <div className="mb-3">
                    <label htmlFor="transactionLimit" className="form-label">
                      Transaction Limit:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="transactionLimit"
                      value={transactionLimit}
                      onChange={(e) => setTransactionLimit(e.target.value)}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email ID:
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="mobileNo" className="form-label">
                      Mobile Number:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="mobileNo"
                      value={mobileNo}
                      onChange={(e) => setMobileNo(e.target.value)}
                    />
                  </div>
                  <button type="submit" className="btn btn-primary me-2">
                    Save
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary me-2"
                    onClick={() => navigate("/Authorizationmatrix")}
                  >
                    Submit
                  </button>
                  <button type="button" className="btn btn-danger">
                    Cancel
                  </button>
                </form>
              </div>

              {/* Right Side */}
              <div className="col-md-6">
                <div className="mb-3">
                  <label htmlFor="firstName" className="form-label">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="middleName" className="form-label">
                    Middle Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="middleName"
                    value={middleName}
                    onChange={(e) => setMiddleName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="lastName" className="form-label">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="fatherName" className="form-label">
                    Father's Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fatherName"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="motherName" className="form-label">
                    Mother's Name:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="motherName"
                    value={motherName}
                    onChange={(e) => setMotherName(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default User;
