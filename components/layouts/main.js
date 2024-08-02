import { Box, Container, useColorModeValue } from "@chakra-ui/react";
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Cursor from "../cursor";
import Footer from "../footer";
import Navbar from "../navbar";
import ProgressBar from "../progressBar";

const Main = ({ children, router }) => {
  const ref = useRef();
  const cursor = useRef(null);
  const cursorVisible = useRef(true);
  const cursorEnlarged = useRef(false);

  const [scroll, setScroll] = useState(0);

  const animateProgressBar = () => {
    if (ref.current) {
      let scrollDistance = -ref.current.getBoundingClientRect().top;
      let progressWidth =
        (scrollDistance /
          (ref.current.getBoundingClientRect().height -
            document.documentElement.clientHeight)) *
        100;
      let value = Math.floor(progressWidth);
      if (value < 0) value = 0
      else if (value >= 99) value = 100;
      setScroll(value);
    }
  };

  const toggleCursorVisibility = () => {
    if (cursorVisible.current) {
      cursor.current.style.opacity = 1;
    } else {
      cursor.current.style.opacity = 0;
    }
  };

  const toggleCursorSize = () => {
    if (cursorEnlarged.current) {
      cursor.current.style.transform = "translate(-50%, -50%) scale(2)";
    } else {
      cursor.current.style.transform = "translate(-50%, -50%) scale(1)";
    }
  };

  const mouseOverEvent = () => {
    cursorEnlarged.current = true;
    // console.log("mouseOverEvent");
    toggleCursorSize();
  };

  const mouseOutEvent = () => {
    cursorEnlarged.current = false;
    // console.log("mouseOutEvent");
    toggleCursorSize();
  };

  const mouseEnterEvent = () => {
    cursorVisible.current = true;
    // console.log("mouseEnterEvent");
    toggleCursorVisibility();
  };

  const mouseLeaveEvent = () => {
    cursorVisible.current = false;
    // console.log("mouseLeaveEvent");
    toggleCursorVisibility();
  };

  const moveCursor = (e) => {
    cursorVisible.current = true;
    toggleCursorVisibility();

    cursor.current.style.top = e.clientY + "px";
    cursor.current.style.left = e.clientX + "px";
  };

  useEffect(() => {
    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("scroll", animateProgressBar, true);
    document.addEventListener("mousedown", mouseOverEvent);
    document.addEventListener("mouseup", mouseOutEvent);
    document.addEventListener("mouseenter", mouseEnterEvent);
    document.addEventListener("mouseleave", mouseLeaveEvent);
    document.querySelectorAll(".animate-cursor").forEach((el) => {
      el.addEventListener("mouseover", mouseOverEvent);
      el.addEventListener("mouseout", mouseOutEvent);
    });
    router.events.on("routeChangeComplete", () => {
      setTimeout(() => {
        document.querySelectorAll(".animate-cursor").forEach((el) => {
          el.addEventListener("mouseover", mouseOverEvent);
          el.addEventListener("mouseout", mouseOutEvent);
        });
      }, 1000);
    });

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("scroll", animateProgressBar, true);
      document.removeEventListener("mousedown", mouseOverEvent);
      document.removeEventListener("mouseup", mouseOutEvent);
      document.removeEventListener("mouseenter", mouseEnterEvent);
      document.removeEventListener("mouseleave", mouseLeaveEvent);
    };
  }, []);

  return (
    <Box as="main" pb={8} ref={ref}>
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
        <title>maryantocinn - Homepage</title>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
        <Footer />
      </Container>
      <ProgressBar width={scroll} mode={useColorModeValue("light", "dark")} />
      <Cursor ref={cursor} />
    </Box>
  );
};

export default Main;
