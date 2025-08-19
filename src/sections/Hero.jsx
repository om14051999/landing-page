import { Button, Container, Typography } from "@mui/material";
import AnimatedBox from "../components/common/AnimatedBox";
import { fadeInUp } from "../utils/animations";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Container style={{ textAlign: "center" }}>
        <AnimatedBox animation={fadeInUp}>
          <Typography variant="h2">Hi, I'm Omkar Yadav</Typography>
        </AnimatedBox>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 2 }}>
          Frontend Developer | React Enthusiast
        </Typography>
        <Button variant="contained" color="primary" sx={{ mt: 4 }}>
          Get in Touch
        </Button>
      </Container>
    </section>
  );
}
