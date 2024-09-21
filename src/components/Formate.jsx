import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

const FileFormatManager = () => {
  const [formats, setFormats] = useState([
    {
      columns: ["Column Name", "Header Name", "Input Type", "Length"],
      rows: [["", "", "", ""]],
    },
  ]);
  const [rejectionLevel, setRejectionLevel] = useState("");
  const [fileformatename, setFileformatename] = useState("");
  const [fileType, setFileType] = useState("");
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedCifId = localStorage.getItem("cifId");
    const storedCorporateName = localStorage.getItem("corporateName");
    if (storedCifId) setCifId(storedCifId);
    if (storedCorporateName) setCorporateName(storedCorporateName);
  }, []);

  const handleAddFormat = () => {
    setFormats([
      ...formats,
      {
        columns: ["Column Name", "Header Name", "Input Type", "Length"],
        rows: [["", "", "", ""]],
      },
    ]);
  };

  const handleRemoveFormat = (index) => {
    const newFormats = formats.filter((_, i) => i !== index);
    setFormats(newFormats);
  };

  const handleAddRow = (formatIndex) => {
    const newFormats = formats.map((format, index) => {
      if (index === formatIndex) {
        return {
          ...format,
          rows: [...format.rows, ["", "", "", ""]],
        };
      }
      return format;
    });
    setFormats(newFormats);
  };

  const handleRemoveRow = (formatIndex, rowIndex) => {
    const newFormats = formats.map((format, index) => {
      if (index === formatIndex) {
        const newRows = format.rows.filter((_, i) => i !== rowIndex);
        return { ...format, rows: newRows };
      }
      return format;
    });
    setFormats(newFormats);
  };

  const handleRowChange = (formatIndex, rowIndex, columnIndex, value) => {
    const newFormats = formats.map((format, index) => {
      if (index === formatIndex) {
        const newRows = format.rows.map((row, i) => {
          if (i === rowIndex) {
            const newRow = row.map((cell, j) =>
              j === columnIndex ? value : cell
            );
            return newRow;
          }
          return row;
        });
        return { ...format, rows: newRows };
      }
      return format;
    });
    setFormats(newFormats);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted formats:", formats);
    navigate("/template");
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">File Format Manager</h1>
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
      </form>

      <form onSubmit={handleSubmit}>
        {formats.map((format, formatIndex) => (
          <div key={formatIndex} className="mb-4">
            <div className="d-flex justify-content-between mb-2">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={() => handleAddRow(formatIndex)}
              >
                Add Row
              </button>
              {formats.length > 1 && (
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => handleRemoveFormat(formatIndex)}
                >
                  Remove Format
                </button>
              )}
            </div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  {format.columns.map((columnName, columnIndex) => (
                    <th key={columnIndex}>{columnName}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {format.rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, columnIndex) => (
                      <td key={columnIndex}>
                        <input
                          type="text"
                          value={cell}
                          onChange={(e) =>
                            handleRowChange(
                              formatIndex,
                              rowIndex,
                              columnIndex,
                              e.target.value
                            )
                          }
                          className="form-control"
                          placeholder="Data"
                        />
                      </td>
                    ))}
                    <td>
                      <button
                        type="button"
                        className="btn btn-danger btn-sm ml-2"
                        onClick={() => handleRemoveRow(formatIndex, rowIndex)}
                      >
                        &times;
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}

        <div className="form-row mb-4 row align-items-center justify-content-center">
          <div className="form-group col-md-6">
            <label htmlFor="rejectionLevel">Rejection Level</label>
            <select
              id="rejectionLevel"
              value={rejectionLevel}
              onChange={(e) => setRejectionLevel(e.target.value)}
              className="form-select"
            >
              <option value="relevel">Select Rejection Level</option>
              <option value="file">File Level Rejection</option>
              <option value="record">Record Level Rejection</option>
            </select>
          </div>
          <div className="form-group col-md-6">
            <label htmlFor="fileType">File Type</label>
            <select
              id="fileType"
              value={fileType}
              onChange={(e) => setFileType(e.target.value)}
              className="form-select"
            >
              <option value="select">Select</option>
              <option value="excel">Excel</option>
              <option value="xlsx">Xlsx</option>
              <option value="csv">Csv</option>
              <option value="text">Text Delimited</option>
            </select>
          </div>
        </div>

        <div class="form-group col-md-6">
          <label for="inputCity">File formate name</label>
          <input type="text" class="form-control" id="inputCity" />
        </div>

        {/* <div className="text-center mb-3">
          <button
            type="button"
            className="btn btn-primary"
            onClick={handleAddFormat}
          >
            Add Another Format
          </button>
        </div> */}
        <div className="text-center py-2">
          <button type="submit" className="btn btn-success py-2">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FileFormatManager;
