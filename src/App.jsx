import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Portfolio from "./pages/Portfolio/Portfolio";
import GlobalStyle from "./general/components/GlobalStyle";
import theme from "./general/components/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Header />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
    ],
  },
]);

const App = () => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};

export default App;
