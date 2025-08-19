import { Container, Grid, Typography } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";

export default function About() {
  return (
    <section id="about" style={{ padding: "4rem 0" }}>
      <Container>
        <SectionTitle title="About Me" subtitle="Who I Am" />
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <img
              src="https://via.placeholder.com/400"
              alt="profile"
              style={{ borderRadius: "1rem", width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="body1">
              I’m a frontend developer passionate about building clean and
              responsive web applications using React, Material UI, and modern
              CSS.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
