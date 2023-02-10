import Layout from "../Layout/layout";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Box, Stack } from "@mui/system";
import { useRouter } from "next/router"; 
import UserDetail from "./userDetail";

export default function TopBar() {

  return (
    <>
      <AppBar
      className="pr-3.5"
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems:'center'
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
            Bluesky
            </Typography>
          </Toolbar>
          <Stack spacing={2} direction="row">
           <UserDetail/>
          </Stack>
        </Box>
      </AppBar>
    </>
  );
}
