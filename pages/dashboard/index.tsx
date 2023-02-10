import { Grid } from "@mui/material";
import React from "react";
// import Layout from "../../../src/Layout/layout";
import Layout from "../../src/Layout/layout";
import LeadDashboardHeader from "./header";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Box, Typography } from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import DashboardTopBlock from "./DashboardTopBlock";

function dashboard() {

  return (
    <Layout commonHeader={<LeadDashboardHeader />}>
      <DashboardTopBlock />

      <Grid container spacing={2} className="flex">

        <Grid item xs={12} sm={6} md={12} lg={12}>
          <Box className="mt-6 shadow-sm shadow-gray-400 px-6 py-6">
          </Box>
        </Grid>

      </Grid>
    </Layout>
  );
}

export default dashboard;
