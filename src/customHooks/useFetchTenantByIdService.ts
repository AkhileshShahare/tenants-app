import { useEffect, useState } from "react";
import { Service, Tenant } from "../types";

export interface Tenants {
  results: Tenant;
}

const useFetchTenantsByIdService = (id: string) => {
  const [result, setResult] = useState<Service<Tenants>>({
    status: "loading"
  });

  useEffect(() => {
    fetch("https://hungry-skinny-cappelletti.glitch.me/tenants")
      .then((response) => response.json())
      .then((response) =>
        setResult({
          status: "loaded",
          payload: { results: response.find((x: Tenant) => x.id === id) }
        })
      )
      .catch((error) => setResult({ status: "error", error }));
  }, []);

  return result;
};

export default useFetchTenantsByIdService;
