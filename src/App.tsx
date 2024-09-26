import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home";
import { Layout } from "./components/layout/layout";
import { About } from "./pages/about";
import { Contact } from "./pages/contact";
import { Services } from "./pages/services";
import { Projects } from "./pages/projects";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/services",
        element: <Services />
      },
      {
        path: "/projects",
        element: <Projects />
      }
    ]
  }
])

export { router };