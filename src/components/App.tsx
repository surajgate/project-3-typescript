import React from "react";
import { Container, Box, Typography, Card } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Review from "./Review";

const useStyles = makeStyles({
  underline: {
    height: "0.25rem",
    background: "#49a6e9",
    marginLeft: "auto",
    marginRight: "auto",
  },
});

function App() {
  const classes = useStyles();

  return (
    <>
      <Container sx={{ width: "40rem" }}>
        <Box>
          <Typography
            fontWeight={"bold"}
            fontSize={38}
            variant="h2"
            sx={{ display: "flex", justifyContent: "center", m: 0.5 }}
          >
            Our Reviews
          </Typography>
        </Box>
        <Container
          sx={{ width: "10%", marginBottom: 4 }}
          className={classes.underline}
        ></Container>
        <Box>
          <Card sx={{ m: 2, p: 2, display :'block' }}>
            <Box>
              <Review />
            </Box>
          </Card>
        </Box>
      </Container>
    </>
    // <main>
    //   <section className="conatiner">
    //     <div className="title">
    //       <h2>Our Reviews</h2>
    //       <div className="underline"></div>
    //     </div>
    //     <Review />
    //   </section>
    // </main>
  );
}

export default App;
