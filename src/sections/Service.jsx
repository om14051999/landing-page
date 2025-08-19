import { Container, Grid } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";
import ServiceCard from "../components/services/ServiceCard";
import { SERVICES } from "../utils/constants";

export default function Service() {
  return (
    <section id="services" style={{ padding: "4rem 0", background: "#f9f9f9" }}>
      <Container>
        <SectionTitle title="Services" subtitle="What I Offer" />
        <Grid container spacing={4}>
          {SERVICES.map((service, index) => (
            <Grid item xs={12} md={4} key={index}>
              <ServiceCard {...service} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </section>
  );
}
