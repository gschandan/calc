import React, { useState, useEffect } from "react";
import axios from "axios";

const TestComponent = () => {
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5221/api/test")
      .then((response) => {
        setMessage(response.data.message);
      })
      .catch((error) => {
        setError("Error fetching data: " + error.message);
      });
  }, []);

  return (
    <div className="p-4 bg-gray-100 rounded-lg">
      <h2 className="text-xl font-bold mb-4">API Test</h2>
      {message && <p className="text-green-600">{message}</p>}
      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default TestComponent;
