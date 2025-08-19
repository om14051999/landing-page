import { Container, TextField, Button } from "@mui/material";
import SectionTitle from "../components/common/SectionTitle";

export default function Contact() {
  return (
    <section id="contact" style={{ padding: "4rem 0" }}>
      <Container maxWidth="sm">
        <SectionTitle title="Contact Me" subtitle="Let's Work Together" />
        <form style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField label="Name" variant="outlined" fullWidth required />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            fullWidth
            required
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            required
          />
          <Button variant="contained" color="primary">
            Send Message
          </Button>
        </form>
      </Container>
    </section>
  );
}
