import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@mui/material";
import { queryClient } from "./client";
import { theme } from "./theme";

import { RouterProvider } from "@tanstack/router";
import { router } from "./routes";

function App() {

  return (
   <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />  
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
