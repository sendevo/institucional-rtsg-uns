import { Box, Container, Typography, Link } from "@mui/material";
import SlideShow from "../../components/SlideShow";


const View = () => (
  <Box>
    <Container maxWidth="md" sx={{ textAlign: "center"}}>
      <Typography variant="h4" gutterBottom sx={{ fontWeight: 600, mt:4 }}>
        Real Time and Embedded Systems Research Group
      </Typography>
    </Container>

    <SlideShow />

    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        History
      </Typography>
      <Typography>
        The Real-Time Systems Group was started in 1987. It has worked in schedulability of local and wide area networks, task scheduling in mono processor and multicore processors with energy constraints and has explored mechanisms for fault-tolerance in real-time systems.
      </Typography>
      <Typography sx={{ mt: 1 }}>
        The group has developed a real-time operating systems (SOOS) for embedded systems and has worked in the modeling and requirement analysis of cyber-physical systems. In the last years, opportunistic and mobile ad-hoc networks have led the research towards collaborative systems and the IoT. The group works with different researchers from Italy, Spain, Chile, Brazil and USA. Together with the real-time and communication systems research, the use of hardware description languages for the implementation of reconfigurable digital architectures is an important area of work. Since 2012, the group is working with the Analytic Chemestry group from INQUISUR in instrumentation and analysis for different applications generating a transfer of technology in an interdisciplinary project. Recently a new line of research was opened with researchers from CERZOS. The list of publications, with dates and authors, represents a chronological synthesis of the evolution of the group. The Digital Systems Laboratory, home of the Group, is part of the <Link rel="noopener noreferrer" target="_blank" href="http://www.diec.uns.edu.ar/" >Department of Electrical Engineering and Computers (DIEC)</Link> and of the <Link rel="noopener noreferrer" target="_blank" href="http://www.icic.conicet.gov.ar/">Institute of Computer Sciences and Engineering (ICIC)</Link>.
      </Typography>
    </Container>

    <Container maxWidth="lg" sx={{ mt: 1 }}>
      <Typography variant="h5" gutterBottom>
        Mission
      </Typography>
      <Typography>
        The group's main line of research involves the study, analysis, simulation and implementation of real-time restricted systems that runs on digital hardware, in general, embedded systems, FPGA, communication networks and their applications that are of interest in the local industrial and socioeconomic sector.
      </Typography>
    </Container>
  </Box>
);

export default View;
