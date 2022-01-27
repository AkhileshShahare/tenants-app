import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetchTenantsByIdService from "../customHooks/useFetchTenantByIdService";
import { Item } from "./TenantsList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  bold: {
    fontWeight: "600 !important"
  }
});

const TenantDetails = () => {
  let { id } = useParams();
  let navigate = useNavigate();
  const service = useFetchTenantsByIdService(id || "");
  const classes = useStyles();
  return (
    <>
      {service.status === "loading" && <div className="center">Loading...</div>}
      {service.status === "loaded" && (
        <>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 3, sm: 8, md: 12 }}
          >
            <Grid item xs={9}>
              <Item>{service.payload.results.name}'s Details</Item>
            </Grid>
            <Grid item xs={3}>
              <Item>
                <Button
                  variant="outlined"
                  onClick={() => navigate(-1)}
                  endIcon={<ArrowBackIcon />}
                >
                  Go Back
                </Button>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>ID</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.id}
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>Name</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.name}
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>Description</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.description}
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>Code</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.code}
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>Type</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.type}
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.bold}>Status</Typography>
            </Grid>
            <Grid item xs={6}>
              {service.payload.results.status}
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
};

export default TenantDetails;
