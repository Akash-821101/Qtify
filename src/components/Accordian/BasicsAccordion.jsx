import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function BasicsAccordion() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          aria-controls="panel1a-content"
          id="panel1a-header"
          sx={{
            backgroundColor: "#121212",
            color: "white",
            borderRadius: "5px",
            border: "1px solid white",
          }}
        >
          <Typography>Is Qtify free to use</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "0px, 0px, 10px, 10px" }}>
          <Typography>Yes! it is 100% free, and has 0% ads</Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon color="success" />}
          sx={{
            backgroundColor: "#121212",
            color: "white",
            borderRadius: "5px",
            border: "1px solid white",
          }}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Can i downloads and listens to songs offline</Typography>
        </AccordionSummary>
        <AccordionDetails sx={{ borderRadius: "0px, 0px, 10px, 10px" }}>
          <Typography>
            Sorry, unfortunately we don't provide the service to download any
            songs.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
