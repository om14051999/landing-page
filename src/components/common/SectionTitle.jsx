import { Typography } from "@mui/material";

export default function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "2rem" }}>
      <Typography variant="h4" fontWeight="bold">
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body1" color="text.secondary">
          {subtitle}
        </Typography>
      )}
    </div>
  );
}
