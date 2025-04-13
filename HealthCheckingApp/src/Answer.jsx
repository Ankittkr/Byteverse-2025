import React, { useEffect, useState } from 'react';

export default function FeverCauses({ apiResponse }) {
  const [causes, setCauses] = useState([]);

  useEffect(() => {
    if (!apiResponse) return;

    const rawText = apiResponse?.data?.candidates?.[0]?.content?.parts?.[0]?.text || '';
    const lines = rawText.split('\n').filter(Boolean);

    const parsedCauses = [];

    lines.forEach((line) => {
      const match = line.match(/^\d+\.\s\*\*(.+?)\*\*:\s(.+)/);
      if (match) {
        parsedCauses.push({
          title: match[1].trim(),
          description: match[2].trim(),
        });
      }
    });

    setCauses(parsedCauses);
  }, [apiResponse]);

  return (
    <div className="fever-causes max-w-xl p-4">
      <h2 className="text-xl font-bold mb-4">Highly Possible Conditions That Can Cause Fever:</h2>
      {causes.map((item, index) => (
        <div key={index} className="mb-4">
          <strong>{index + 1}. {item.title}:</strong>
          <p className="ml-4">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
