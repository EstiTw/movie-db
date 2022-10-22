// import React, { useEffect } from "react";
// import { useGlobalContext } from "./context";

// export const useFetch = (url) => {
//   const { setProducts, setLoading } = useGlobalContext();

//   const getProducts = async () => {
//     const response = await fetch(url);
//     const items = await response.json();
//     setProducts(items);
//     setLoading(false);
//   };

//   useEffect(() => {
//     getProducts();
//   }, [url]);
// };
