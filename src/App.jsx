import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import Header from "./components/Header/Header";
import GlobalStyles from "./styles/GlobalStyles";
import { useRef } from "react";
import Home from "./pages/Home";
import 'locomotive-scroll/dist/locomotive-scroll.css'
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/Themes";
import Logo from "./components/Logo";
import Navbar from "./components/Navbar";

function App() {
  const containerRef = useRef(null);
  return (
    <>
      <GlobalStyles />
      
      <ThemeProvider theme={theme}>
      <Logo />
      <Navbar />
        
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
          <Home />
          </main>
        </LocomotiveScrollProvider>
        </ThemeProvider>
      
    </>
  );
}

export default App;
