import { Card, CardContent, Typography } from "@mui/material";

export default function ServiceCard({ icon, title, description }) {
  return (
    <Card elevation={3} sx={{ borderRadius: 3, textAlign: "center", p: 2 }}>
      <CardContent>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>{icon}</div>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}
