import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Header from "./components/navbar/Navbar";
import { useRef } from "react";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Blog from "./pages/blog/Blog";
import Faq from "./pages/faq/Faq";
import Contact from "./pages/contact/Contact";
import Shop from "./pages/shop/Shop";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

const Layout =()=>{
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />

    </div>
  )

}
const router = createBrowserRouter([
  {
    path:"/",
    element: <Layout />,
    children:[
      {
        path:"/",
        element: <Home />
      },
      {
        path:"/shop",
        element: <Shop />
      },
      {
        path:"/about",
        element: <About />
      },
      {
        path:"/blog",
        element: <Blog />
      },
      {
        path:"/faq",
        element: <Faq />
      },
      {
        path:"/contact",
        element: <Contact />
      }
      
    ]

  },
 

])

function App() {

  const containerRef = useRef(null);
  return (
    <>

        <LocomotiveScrollProvider
          options={{
            smooth: true,
            // ... all available Locomotive Scroll instance options
          }}
          watch={
            [
              //..all the dependencies you want to watch to update the scroll.
              //  Basicaly, you would want to watch page/location changes
              //  For exemple, on Next.js you would want to watch properties like `router.asPath` (you may want to add more criterias if the instance should be update on locations with query parameters)
            ]
          }
          containerRef={containerRef}
        >
          <main data-scroll-container ref={containerRef}>
<RouterProvider router={router} />
          </main>
        </LocomotiveScrollProvider>
    </>
  );
}

export default App;
