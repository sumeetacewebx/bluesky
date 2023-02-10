import { Box, Button, Typography } from "@mui/material";
import Link from "next/link";

export default function LeadDashboardHeader() {
  return (
    <Box
      sx={{ display: 'flex', justifyContent: 'space-between',  alignItems:'center' }}
    >
      <Typography variant="h5">{'Dashboard'}</Typography>
    </Box>

    
  );
}
