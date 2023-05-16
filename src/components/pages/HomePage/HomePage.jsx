import React from "react";
import { useInLogin } from "../../../hooks/useInLogin";
import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  const isLogin = useInLogin();

  return (
    <Box>
      <Typography variant="h1">HomePage</Typography>
      {isLogin ? <Link to="/profile">Profile</Link> : <Link to="/auth/login">Auth</Link>}
    </Box>
  );
}

export default HomePage;
