import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blog from "../../pages/Blog/Blog";
import Home from "../../pages/Home/Home";
import ProjectDetails from "../../pages/ProjectDetails/ProjectDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { index: true, element: <Home /> },
      { path: "blog", element: <Blog /> },
      {
        path: "/projects/:id",
        element: <ProjectDetails />,
        loader: ({ params }) =>
          fetch(
            `https://muntashir-wahid-server.vercel.app/api/v1/projects/${params.id}`
          ),
      },
    ],
  },
]);

export default router;
