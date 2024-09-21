import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Role = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [accountNo, setAccountNo] = useState("");
  const [accountNocheack, setAccountNocheack] = useState("");
  const [role, setRole] = useState("");
  const [rolename, setRolename] = useState("");
  const [rolecheack, setcheak] = useState("");
  const [moduleActions, setModuleActions] = useState([]);

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
    initializeModuleActions();
  }, []);

  const navigate = useNavigate();
  const refresh = () => {
    window.location.reload();
  };

  const generateRandomCifAndCorporate = () => {
    const randomCifId = Math.floor(100000000 + Math.random() * 900000000);
    setCifId(randomCifId.toString());

    const getRandomIndustryName = () => {
      const industries = [
        "Technology",
        "Healthcare",
        "Finance",
        "Retail",
        "Education",
        "Manufacturing",
        "Hospitality",
        "Transportation",
        "Entertainment",
        "Telecommunications",
      ];

      return industries[Math.floor(Math.random() * industries.length)];
    };

    setCorporateName(getRandomIndustryName());
  };

  const initializeModuleActions = () => {
    const initialActions = [
      {
        module: "One to One Payment",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Onscreen Bulk Payment",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Bulk File Upload",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Cheque Payment",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "DD",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Payment Enquiry",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Notification Maintenance",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
      {
        module: "Mis Reports",
        initiate: false,
        modify: false,
        deleteCancel: false,
        view: false,
      },
    ];
    setModuleActions(initialActions);
  };

  const handleCheckboxChange = (index, action) => {
    const updatedActions = [...moduleActions];
    updatedActions[index] = {
      ...updatedActions[index],
      [action]: !updatedActions[index][action],
    };
    setModuleActions(updatedActions);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Role Module</h2>
      <form>
        <div className="row mb-3">
          <div className="col-md-6 mb-3">
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
          <div className="col-md-6 mb-3">
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
          <div className="col-md-6 mb-3">
            <label htmlFor="accountNo" className="form-label">
              Account No:
            </label>
            <input
              type="number"
              className="form-control"
              id="accountNo"
              value={accountNo}
              onChange={(e) => setAccountNo(e.target.value)}
            />
          </div>
          <div className="col-md-6 mb-3">
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
        </div>
        {role === "maker" && (
          <div className="col-md-6 mb-3">
            <label htmlFor="rolename" className="form-label">
              Maker Name
            </label>
            <input
              type="text"
              className="form-control"
              id="rolename"
              value={rolename}
              onChange={(e) => setRolename(e.target.value)}
            />
          </div>
        )}
      </form>

      {role === "maker" && (
        <>
          <h3 className="mb-3">Module Actions for Maker</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Module</th>
                <th scope="col">Initiate</th>
                <th scope="col">Modify</th>
                <th scope="col">Delete/Cancel</th>
              </tr>
            </thead>
            <tbody>
              {moduleActions.map((action, index) => (
                <tr key={index}>
                  <td>{action.module}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.initiate}
                      onChange={() => handleCheckboxChange(index, "initiate")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.modify}
                      onChange={() => handleCheckboxChange(index, "modify")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.deleteCancel}
                      onChange={() =>
                        handleCheckboxChange(index, "deleteCancel")
                      }
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      {role === "checker" && (
        <>
          <div className="col-md-6 mb-3">
            <label htmlFor="rolecheack" className="form-label">
              Checker Name
            </label>
            <input
              type="text"
              className="form-control"
              id="rolecheack"
              value={rolecheack}
              onChange={(e) => setcheak(e.target.value)}
            />
          </div>

          <h3 className="mb-3 mt-5">Module Actions for Checker</h3>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Module</th>
                <th scope="col">Authorize</th>
                <th scope="col">Revoke</th>
                <th scope="col">Delete</th>
                <th scope="col">View</th>
              </tr>
            </thead>
            <tbody>
              {moduleActions.map((action, index) => (
                <tr key={index}>
                  <td>{action.module}</td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.initiate}
                      onChange={() => handleCheckboxChange(index, "initiate")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.modify}
                      onChange={() => handleCheckboxChange(index, "modify")}
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.deleteCancel}
                      onChange={() =>
                        handleCheckboxChange(index, "deleteCancel")
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="checkbox"
                      checked={action.view}
                      onChange={() => handleCheckboxChange(index, "view")}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      )}

      <div className="d-flex justify-content-start mt-4">
        <button className="btn btn-success mx-2" onClick={refresh}>
          Save
        </button>
        <button
          className="btn btn-primary mx-2"
          onClick={() => navigate("/User")}
        >
          Submit
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => alert("Cancel button clicked")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Role;
