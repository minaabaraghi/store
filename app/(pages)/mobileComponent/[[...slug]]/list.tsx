"use Client";
import { Grid } from "@mui/material";
import React from "react";

export default function Prodoct() {
  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      {[...Array(8)].map((item) => (
        <Grid item xs={3} md={3} sm={3} lg={2} className="m-3">
          <img
            src="/images/userProfileIcon.png"
            width={500}
            height={500}
            alt="Picture"
          />
        </Grid>
      ))}
    </Grid>
  );
}
