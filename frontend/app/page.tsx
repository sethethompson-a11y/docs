"use client";

import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:5000/results")
      .then((res) => res.json())
      .then(setData)
      .catch(() => {
        setData({
          week: "Demo Week",
          results: [],
          summary: {}
        });
      });
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <div style={{ padding: 20 }}>
      <h1>{data.week}</h1>
      <p>Leaderboard coming soon...</p>
    </div>
  );
}