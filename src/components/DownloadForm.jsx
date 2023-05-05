import React, { useState } from 'react';
import axios from 'axios';

function DownloadForm({ onSubmit }) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('/api/mailgun', {
        to: email,
        subject: 'Download your resume',
        text: 'Click the link below to download my resume:',
        attachmentUrl: `${process.env.REACT_APP_API_BASE_URL}/api/download`,
      })
      .then(() => {
        onSubmit(email);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <button type="submit">Download</button>
    </form>
  );
}

export default DownloadForm;
