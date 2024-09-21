import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Role = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [username, setUsername] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [users, setUsers] = useState([{ user: "", role: "Cheaker" }]);
  const [columns, setColumns] = useState([
    { label: "Cheaker name" },
    { label: "Role" },
  ]);
  const [editingColumnIndex, setEditingColumnIndex] = useState(null);
  const [newColumnLabel, setNewColumnLabel] = useState("");

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

  const handleAddUser = () => {
    const nextRole = "Cheaker";
    setUsers([...users, { user: "", role: nextRole }]);
  };

  const handleAddColumn = () => {
    setColumns([...columns, { label: "Rename" }]);
  };

  const handleUserChange = (index, key, value) => {
    const newUsers = [...users];
    newUsers[index][key] = value;
    setUsers(newUsers);
  };

  const handleEditColumn = (index) => {
    setEditingColumnIndex(index);
    setNewColumnLabel(columns[index].label);
  };

  const handleSaveColumn = (index) => {
    const updatedColumns = [...columns];
    updatedColumns[index].label = newColumnLabel;
    setColumns(updatedColumns);
    setEditingColumnIndex(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Authorization Matrix</h2>
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
        </div>
        <div className="row align-items-center justify-content-center">
          <div className="col-md-6 mb-3">
            <label htmlFor="username" className="form-label">
              Maker Username
            </label>
            <input
              type="text"
              className="form-control"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="col-md-6 mb-3">
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
        </div>
        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="text-center font-weight-bold">
                    {editingColumnIndex === index ? (
                      <input
                        type="text"
                        className="form-control"
                        value={newColumnLabel}
                        onChange={(e) => setNewColumnLabel(e.target.value)}
                        onBlur={() => handleSaveColumn(index)}
                        autoFocus
                      />
                    ) : (
                      <span onClick={() => handleEditColumn(index)}>
                        {col.label}
                      </span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {users.map((user, userIndex) => (
                <tr key={userIndex}>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={user.user}
                      onChange={(e) =>
                        handleUserChange(userIndex, "user", e.target.value)
                      }
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      className="form-control"
                      value={user.role}
                      readOnly
                    />
                  </td>
                  {columns.slice(2).map((col, colIndex) => (
                    <td key={colIndex + 2}>
                      <input
                        type="text"
                        className="form-control"
                        value={user[col.label] || ""}
                        onChange={(e) =>
                          handleUserChange(userIndex, col.label, e.target.value)
                        }
                      />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="row mb-3">
          <div className="col-md-6 text-center">
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleAddUser}
            >
              Add Cheaker
            </button>
          </div>
          <div className="col-md-6 text-center">
            <button
              type="button"
              className="btn btn-secondary"
              onClick={handleAddColumn}
            >
              Add Column
            </button>
          </div>
        </div>
        <button className="btn btn-success">Save</button>
      </form>
    </div>
  );
};

export default Role;
