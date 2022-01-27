import React, { useEffect, useState} from "react";
import { Tenant } from "../types";
import { TenantCard } from "./TenantCard";
import { Grid, Paper } from "@mui/material";
import { Paginator } from "./Paginator";
import { styled } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import useFetchTenantsService from "../customHooks/useFetchTenantsService";
import { makeStyles } from "@mui/styles";

//Custom style for title
export const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.h4,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  boxShadow: "none",
  boxRadius: "none"
}));

const useStyles = makeStyles({
  root: {
    paddingBottom: "2em"
  }
})

const TenantsList = () => {
    const [page, setPage] = useState(0);
    const rowsPerPage = 20;
    const [tenants, setTenants] = useState<Tenant[]>([]);
    let navigate = useNavigate();
    const service = useFetchTenantsService();
    const classes = useStyles()

  useEffect(() => {
    if(service.status === "loaded") handleChange(service.payload.results);
  }, [service.status, page, rowsPerPage]);

  const handleChange = (arr: Tenant[]) => {
    const currentTenants = arr.slice(
      page * rowsPerPage,
      page * rowsPerPage + rowsPerPage
    );
    setTenants(currentTenants);
  };

  return (
    <div>
      {service.status === "loading" && <div className="center">Loading...</div>}
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 3, sm: 8, md: 12 }}
        className={classes.root}
      >
        {service.status === "loaded" && (
          <>
            <Grid item xs={6}>
              <Item>{service.payload.totalCount || 0} | Tenants</Item>
            </Grid>
            <Grid item xs={6}>
              <Paginator
                page={page}
                rowsPerPage={rowsPerPage}
                totalCount={service.payload.totalCount || 0}
                setPage={(page) => {
                  setPage(page);
                }}
              />
            </Grid>
            {tenants.map((tenant: Tenant, index: number) => (
              <Grid item xs={2} sm={4} md={4} key={index}>
                <TenantCard {...tenant} handleClick={() => navigate(`/${tenant.id}`)} />
              </Grid>
            ))}
          </>
        )}
      </Grid>
      {service.status === "error" && <div>Error!</div>}
    </div>
  );
};

export default TenantsList;
