import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider, Typography } from "@mui/material";
import { queryClient } from "./client";
import { theme } from "./theme";

import { RouterProvider } from "@tanstack/router";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <Typography>Placeholder text</Typography>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
