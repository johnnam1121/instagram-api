import React, { useEffect } from 'react';

function TokenTest() {
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/instagram/token');
      const data = await response.json();
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div>TokenTest</div>
  );
}

export default TokenTest;
