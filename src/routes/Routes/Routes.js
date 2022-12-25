import { createBrowserRouter } from "react-router-dom";
import AllProjects from "../../layout/AllProjects/AllProjects";
import Main from "../../layout/Main/Main";
import Blog from "../../Page/Blog/Blog";
import ErrorPage from "../../Page/ErrorPage/ErrorPage";
import Home from "../../Page/Homepage/Home/Home";
import Project from "../../Page/Projects/Project";
import Projects from "../../Page/Projects/Projects";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
  {
    path: "/allProjects",
    element: <AllProjects></AllProjects>,
    children: [
      {
        path: "/allProjects/projects",
        element: <Projects></Projects>,
      },
      {
        path: "/allProjects/project/:id",
        element: <Project></Project>,
        loader: ({ params }) =>
          fetch(
            `https://portfolio-mhurdw-server.vercel.app/project/${params.id}`
          ),
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage></ErrorPage>,
  },
]);
