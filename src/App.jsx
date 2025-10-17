import React from "react";
import Portfolio from "./pages/Portfolio.jsx";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import ProjectPage from "./pages/ProjectPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Portfolio />,
  },
  {
    path: "/ProjectPage/:title",
    element: <ProjectPage />,
  },
]);
function App() {
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
