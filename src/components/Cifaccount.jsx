import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const RandomNumberGenerator = () => {
  const [quantity, setQuantity] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleGenerateNumbers = () => {
    let newNumbers = [];
    let maxNumber;
    let numberLength;

    if (selectedOption === "cif") {
      maxNumber = 999999999; // Maximum 9-digit number
      numberLength = 9;
    } else if (selectedOption === "account") {
      maxNumber = 9999999999999999; // Maximum 16-digit number
      numberLength = 16;
    }

    for (let i = 0; i < quantity; i++) {
      const randomNumber = Math.floor(Math.random() * (maxNumber + 1));
      newNumbers.push(randomNumber.toString().padStart(numberLength, "0"));
    }

    setNumbers(newNumbers);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setNumbers([]);
  };

  const handleChangeQuantity = (e) => {
    const value = parseInt(e.target.value, 10);
    setQuantity(value);
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-sm">
        <div className="card-body">
          <h2 className="card-title text-center">
            Bank Request: CIF ID and Account Numbers
          </h2>
          <h5 className="text-center mb-4">Core Banking System</h5>
          <div className="d-flex justify-content-center mb-4">
            <button
              className="btn btn-primary mx-2"
              onClick={() => handleOptionSelect("cif")}
            >
              Generate CIF IDs
            </button>
            <button
              className="btn btn-success mx-2"
              onClick={() => handleOptionSelect("account")}
            >
              Generate Account Numbers
            </button>
          </div>
          {selectedOption && (
            <div className="d-flex justify-content-center mb-4">
              <div className="form-inline">
                <label htmlFor="quantity" className="mr-2">
                  Quantity:
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  onChange={handleChangeQuantity}
                  className="form-control mr-2"
                  min="1"
                />
                <button
                  className="btn btn-dark"
                  onClick={handleGenerateNumbers}
                >
                  Generate
                </button>
              </div>
            </div>
          )}
          {numbers.length > 0 && (
            <div>
              <h4 className="text-center">
                Generated CIF IDs and Account Numbers:
              </h4>
              <ul className="list-group mt-3">
                {numbers.map((number, index) => (
                  <li key={index} className="list-group-item">
                    {number}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
