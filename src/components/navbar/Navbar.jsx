import { AppBar, Toolbar, Button } from "@mui/material";
import { NAV_LINKS } from "../../utils/constants";

export default function Navbar() {
  return (
    <AppBar position="sticky" color="transparent" elevation={0}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <h2 style={{ fontWeight: "bold" }}>MyPortfolio</h2>
        <div>
          {NAV_LINKS.map((link) => (
            <Button key={link.href} href={link.href} color="inherit">
              {link.label}
            </Button>
          ))}
        </div>
      </Toolbar>
    </AppBar>
  );
}
