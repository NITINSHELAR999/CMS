import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Alert,
  Table,
} from "react-bootstrap";

const generateYesNo = () => {
  return Math.random() > 0.5 ? "Yes" : "No";
};

const paymentProducts = ["NEFT", "RTGS", "IMPS", "IFT"];

const generateRandomPaymentProducts = () => {
  const shuffled = paymentProducts.sort(() => 0.5 - Math.random());
  const randomCount = Math.floor(Math.random() * paymentProducts.length) + 1;
  return shuffled.slice(0, randomCount).join(", ");
};

const Customersideapplication = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [fetchedCifId, setFetchedCifId] = useState("");
  const [fetchedCorporateName, setFetchedCorporateName] = useState("");
  const [accountNumbers, setAccountNumbers] = useState([]);
  const [showFetchedData, setShowFetchedData] = useState(false);
  const [address] = useState("106 Kharardi IT Park, Chinchwad, Pune");
  const [fileFormatName] = useState("Salary Transaction");
  const [templateId] = useState("1");
  const [templateId2] = useState("2");

  const navigate = useNavigate();

  const handleCifIdChange = (e) => {
    const inputCifId = e.target.value;

    if (/^\d{0,9}$/.test(inputCifId)) {
      setCifId(inputCifId);
      if (inputCifId.length === 9) {
        const generatedName = generateRandomName();
        setCorporateName(generatedName);
        // Store CIF ID and Corporate Name in local storage
        localStorage.setItem("corporateCifid", inputCifId);
        localStorage.setItem("corporatecustomerName", generatedName);
      } else {
        setCorporateName("");
      }
    }
  };

  const generateRandomName = () => {
    const prefixes = [
      "Global",
      "Dynamic",
      "Prime",
      "Apex",
      "Quantum",
      "Nexus",
      "Vertex",
      "Omni",
      "Synergy",
      "Horizon",
    ];
    const suffixes = [
      "Industries",
      "Solutions",
      "Technologies",
      "Enterprises",
      "Systems",
      "Innovations",
      "Services",
      "Dynamics",
      "Labs",
      "Networks",
    ];
    const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
    const randomSuffix = suffixes[Math.floor(Math.random() * suffixes.length)];
    return `${randomPrefix} ${randomSuffix}`;
  };

  const handleFetchData = (e) => {
    const inputCifId = e.target.value;
    console.log(inputCifId);

    const storedCifId = localStorage.getItem("corporateCifid");
    const storedCorporateName = localStorage.getItem("corporatecustomerName");
    const storedAccounts = JSON.parse(localStorage.getItem("accounts"));

    if (storedCifId && storedCorporateName && storedAccounts) {
      setFetchedCifId(storedCifId);
      setFetchedCorporateName(storedCorporateName);
      setAccountNumbers(storedAccounts.map((account) => account.accountNumber));
      setShowFetchedData(true);
    }
  };

  const handleSave = () => {
    alert("Save button clicked");
  };

  const handleSubmit = () => {
    navigate("/Customerconfiguration");
  };

  const handleCancel = () => {
    alert("Cancel button clicked");
  };

  return (
    <Container className="mt-5">
      <h1 className="mb-4">Customer Side Application</h1>
      <Row>
        <Col>
          <Form.Group controlId="cifId">
            <Form.Label>CIF ID</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter 9-digit CIF ID"
              value={cifId}
              onChange={handleCifIdChange}
              maxLength={9}
              pattern="\d*"
              required
            />
          </Form.Group>
        </Col>
        <Col>
          <Form.Group controlId="corporateName">
            <Form.Label>Corporate Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Automatically fetched corporate name"
              value={corporateName}
              readOnly
            />
          </Form.Group>
        </Col>
      </Row>
      <div className="py-3">
        <button
          type="button"
          className="btn btn-primary btn-lg"
          data-toggle="button"
          aria-pressed="false"
          autocomplete="off"
          height="12px"
          widhth="20px"
          onClick={handleFetchData}
        >
          Fetch
        </button>
      </div>

      {showFetchedData && (
        <Alert variant="info" className="mt-4">
          <div className="d-flex justify-content-between">
            <p>
              <strong>Fetched CIF ID:</strong> {fetchedCifId}
            </p>
            <p>
              <strong>Fetched Corporate Name:</strong> {fetchedCorporateName}
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <p>
              <strong>Address:</strong> {address}
            </p>
            <div>
              <p>
                <strong>File Format Name:</strong> {fileFormatName}
              </p>
              <p>
                <strong> Rejection Level :</strong> File Level Rejection
              </p>
              <p>
                <strong>File Type:</strong> Excel
              </p>
              <p>
                <strong>File Format ID:</strong> {templateId}
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <strong>Template 1:</strong>
                <p>
                  Dear customer A/C *3606 Credited for Rs:# on 02-04-2024:10:00
                  by
                </p>
                <p>
                  neft Debited account no *5468 Avl Bal Rs:XXXX if not you Call
                </p>
                <p>18000222243 Sbi India</p>
              </p>
            </div>
            <p className="align-self-center">
              <strong>Template ID: {templateId}</strong>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <strong>Template 2:</strong>
                <p>
                  Dear customer A/C *3606 Debited for Rs:# on 02-04-2024:10:00
                  by
                </p>
                <p>
                  neft Debited account no *5468 Avl Bal Rs:XXXX if not you Call
                </p>
                <p>18000222243 Sbi India</p>
              </p>
            </div>
            <p className="align-self-center">
              <strong>Template ID: {templateId2}</strong>
            </p>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <strong>Payment Advice 1:</strong>
                <p>
                  Dear customer A/C *3606 Debited for Rs:# on 02-04-2024:10:00
                  by
                </p>
                <p>
                  neft Debited account no *5468 Avl Bal Rs:XXXX if not you Call
                </p>
                <p>18000222243 Sbi India</p>
              </p>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <div>
              <p>
                <strong>Payment Advice 2:</strong>
                <p>
                  Dear customer A/C *3606 Debited for Rs:# on 02-04-2024:10:00
                  by
                </p>
                <p>
                  neft Debited account no *5468 Avl Bal Rs:XXXX if not you Call
                </p>
                <p>18000222243 Sbi India</p>
              </p>
            </div>
          </div>
          <h5 className="mt-4">Account Numbers</h5>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Account No</th>
                <th>Account Number</th>
                <th>Cut Off Time</th>
                <th>24X7</th>
                <th>Payment Products</th>
                <th>Limits</th>
              </tr>
            </thead>
            <tbody>
              {accountNumbers.map((account, index) => (
                <tr key={index}>
                  <td>Account {index + 1}</td>
                  <td>{account}</td>
                  <td>NA</td>
                  <td>{generateYesNo()}</td>
                  <td>{generateRandomPaymentProducts()}</td>
                  <td>As Per Standard</td>
                </tr>
              ))}
            </tbody>
          </Table>
          <div className="d-flex justify-content-between mt-4">
            <Button variant="success" onClick={handleSave}>
              Save
            </Button>
            <Button variant="primary" onClick={handleSubmit}>
              Submit
            </Button>
            <Button variant="danger" onClick={handleCancel}>
              Cancel
            </Button>
          </div>
        </Alert>
      )}
    </Container>
  );
};

export default Customersideapplication;
