import React from "react";
import slides  from '../data/photoCarouselData.json'
// import Button from '@mui/material/Button';
import { AppBar, Container, Box } from "@mui/material";
import Header from "./Header";
import {
  LandingSplash,
  About,
  FAQ,
  Events,
  Sponsors,
  PhotoCarousel,
  Footer,
} from "./index.js";

const Home = () => {
  return (
      <Box sx={{ bgcolor: "#D6CEA2", display: 'flex', flexDirection: 'column' }} >
        <Header />
        <Container component="main" sx={{ flex: 1 }}>
          <LandingSplash />
          <About />
          <Events />
          <FAQ />
          {<Sponsors/>}
          <PhotoCarousel data={slides} />
        </Container>
        <Footer />
      </Box>
  );
};

export default Home;
