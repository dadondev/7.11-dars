import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";

import Portfolio from "./pages/Portfolio/Portfolio";
import GlobalStyle from "./general/components/GlobalStyle";
import theme from "./general/components/Theme";
import { ThemeProvider } from "styled-components";
import Header from "./pages/Header/Header";
import Home from "./pages/Home/Home";
import Footer from "./general/components/Footer";
import OnlyPort from "./pages/OnlyPort/OnlyPort";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div
        style={{
          height: "100%",
        }}
      >
        <Header />
        <Outlet />
        <Footer />
      </div>
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
  {
    path: "/portfolio/:id",
    element: (
      <div
        style={{
          height: "100%",
        }}
      >
        <Header />
        <OnlyPort />
        <Footer />
      </div>
    ),
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
