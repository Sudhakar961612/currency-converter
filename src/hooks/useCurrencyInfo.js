import { useState, useEffect } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
      .then((res) => res.json())
      .then((res) => setData(res[currency]));

    console.log(data);
  }, [currency]);
  console.log(data);
  return data;
}

export default useCurrencyInfo;

// import { useState, useEffect } from "react";

// function useCurrencyInfo(currency) {
//   const [data, setData] = useState({});
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setData({}); // Clear previous data
//     setError(null); // Clear previous error
//     fetch(`https://2024-03-06.currency-api.pages.dev/v1/currencies/${currency}.json`)
//       .then((res) => {
//         if (!res.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return res.json();
//       })
//       .then((res) => setData(res[currency]))
//       .catch((err) => setError(err.message));
//   }, [currency]);

//   console.log(data);
//   console.log(error);

//   return { data, error };
// }

// export default useCurrencyInfo;
