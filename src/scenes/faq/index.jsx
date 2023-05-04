import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is Blake the best dev around?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This is very likely true``
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What has cities, but no houses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            A map
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
          A bat and a ball cost $1.10 together. The bat costs $1 more than the ball. How much does the ball cost?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The ball costs 5 cents. The bat costs $1.05. Many people answer too quickly and say that the ball costs 10 cents. However, if that were true, and the bat costs $1 more than the ball, then the bat would have to cost $1.10, making the total cost $1.20.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            David’s father has three sons: Snap, Crackle, and ________?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          David.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Who is bigger: Mr. Bigger, Mrs. Bigger, or their baby?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          The baby, because he is a little bigger.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;