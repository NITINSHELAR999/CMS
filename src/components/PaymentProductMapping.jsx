import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const PaymentProductMapping = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [accounts, setAccounts] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch CIF ID, Corporate Name, and Accounts from localStorage
    const storedCifId = localStorage.getItem("cifId");
    const storedCorporateName = localStorage.getItem("corporateName");
    const storedAccounts = localStorage.getItem("accounts");

    if (storedCifId) setCifId(storedCifId);
    if (storedCorporateName) setCorporateName(storedCorporateName);
    if (storedAccounts) setAccounts(JSON.parse(storedAccounts));
  }, []); // Run once on component mount

  const handleInputChange = (index, field, value) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index] = {
      ...updatedAccounts[index],
      [field]: value,
    };
    setAccounts(updatedAccounts);
  };

  const handleCheckboxChange = (index, field) => {
    const updatedAccounts = [...accounts];
    updatedAccounts[index] = {
      ...updatedAccounts[index],
      [field]: !updatedAccounts[index][field],
    };
    setAccounts(updatedAccounts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic, e.g., save settings
    console.log("Form submitted", accounts);
    navigate("/Formate");
  };

  return (
    <div className="container mt-4">
      <div className="payment-product-mapping">
        <h2 className="mb-4">Payment Product Mapping</h2>
        <div className="corporate-details mb-4">
          <p>
            <strong>CIF ID:</strong> {cifId}
          </p>
          <p>
            <strong>Corporate Name:</strong> {corporateName}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead className="thead-light">
                <tr>
                  <th>Account Number</th>
                  <th>NEFT</th>
                  <th>RTGS</th>
                  <th>IMPS</th>
                  <th>IFT</th>
                  <th>Cut-off Time</th>
                  <th>24X7</th>
                </tr>
              </thead>
              <tbody>
                {accounts.map((account, index) => (
                  <tr key={index}>
                    <td>{account.accountNumber}</td>
                    <td>
                      <input
                        type="checkbox"
                        checked={account.neft || false}
                        onChange={() => handleCheckboxChange(index, "neft")}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={account.rtgs || false}
                        onChange={() => handleCheckboxChange(index, "rtgs")}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={account.imps || false}
                        onChange={() => handleCheckboxChange(index, "imps")}
                      />
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={account.ift || false}
                        onChange={() => handleCheckboxChange(index, "ift")}
                      />
                    </td>
                    <td>
                      <div className="d-flex align-items-center">
                        <input
                          type="text"
                          size="5"
                          value={account.cutoffTimeStart || ""}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "cutoffTimeStart",
                              e.target.value
                            )
                          }
                          placeholder="HH:MM"
                          className="form-control me-2"
                        />
                        <span>
                          <strong>TO</strong>
                        </span>
                        <input
                          type="text"
                          value={account.cutoffTimeEnd || ""}
                          onChange={(e) =>
                            handleInputChange(
                              index,
                              "cutoffTimeEnd",
                              e.target.value
                            )
                          }
                          placeholder="HH:MM"
                          className="form-control ms-2"
                        />
                      </div>
                    </td>
                    <td>
                      <input
                        type="checkbox"
                        checked={account.twentyFourSeven || false}
                        onChange={() =>
                          handleCheckboxChange(index, "twentyFourSeven")
                        }
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <button type="submit" className="btn btn-primary mt-3">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default PaymentProductMapping;
