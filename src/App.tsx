import { ThemeProvider } from "@mui/material";
import { QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { queryClient } from "./client";
import { TestComponent } from "./TestComponent";
import { theme } from "./theme";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route index element={<TestComponent />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
