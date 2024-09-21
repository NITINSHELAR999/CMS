import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Template.css";

const TemplateDesign = () => {
  const [cifId, setCifId] = useState("");
  const [corporateName, setCorporateName] = useState("");
  const [templateId, setTemplateId] = useState("");
  const [templateId2, setTemplateId2] = useState("");
  const [debitedTemplate, setDebitedTemplate] = useState("");
  const [creditedTemplate, setCreditedTemplate] = useState("");

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
    // Handle submission logic
    console.log("Form submitted");
    navigate("/Paymentadvice");
  };

  return (
    <div className="template-design-container">
      <div className="template-design">
        <h2 className="heading">Template Design Module</h2>
        <div className="corporate-details">
          <p className="detail">
            <strong>CIF ID:</strong> {cifId}
          </p>
          <p className="detail">
            <strong>Corporate Name:</strong> {corporateName}
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="templateId" className="input-label">
              Template ID:
            </label>
            <input
              type="text"
              id="templateId"
              value={templateId}
              onChange={(e) => setTemplateId(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="template-section">
            <h3 className="section-heading">Debited Amount Template</h3>
            <div className="input-group">
              <label htmlFor="debitedTemplate" className="input-label">
                Debited Template:
              </label>
              <textarea
                id="debitedTemplate"
                value={debitedTemplate}
                onChange={(e) => setDebitedTemplate(e.target.value)}
                className="textarea-field"
              />
            </div>
          </div>
          <div className="input-group">
            <label htmlFor="templateId" className="input-label">
              Template ID:
            </label>
            <input
              type="text"
              id="templateId"
              value={templateId2}
              onChange={(e) => setTemplateId2(e.target.value)}
              className="input-field"
            />
          </div>
          <div className="template-section">
            <h3 className="section-heading">Credited Amount Template</h3>
            <div className="input-group">
              <label htmlFor="creditedTemplate" className="input-label">
                Credited Template:
              </label>
              <textarea
                id="creditedTemplate"
                value={creditedTemplate}
                onChange={(e) => setCreditedTemplate(e.target.value)}
                className="textarea-field"
              />
            </div>
          </div>
          <button type="submit" className="submit-button">
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default TemplateDesign;
