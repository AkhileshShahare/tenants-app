import { useEffect, useState } from "react";
import { Service, Tenant } from "../types";

export interface Tenants {
  results: Tenant[];
  totalCount: number;
}

const useFetchTenantsService = () => {
  const [result, setResult] = useState<Service<Tenants>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("https://hungry-skinny-cappelletti.glitch.me/tenants")
      .then((response) => response.json())
      .then((response) =>
        setResult({ status: "loaded", payload: { results: response, totalCount: response.length } })
      )
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useFetchTenantsService;
