import { useEffect, useCallback } from "react";
import { useGlobalContext } from "./context";

export const useFetch = (url) => {
  const { setLoading, setErrorMessage, setData } = useGlobalContext();

  const getData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      const { Response, Error } = data;
      if (Response === "False") {
        setErrorMessage(Error);
        setData(null);
      } else {
        setData(data);
        setErrorMessage(null);
      }
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  }, [url]);

  useEffect(() => {
    getData();
  }, [getData]);
};
