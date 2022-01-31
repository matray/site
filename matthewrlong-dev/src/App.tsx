import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReactDom from 'react-dom'
import * as mui from '@mui/material'
import * as icons from '@mui/icons-material'
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import { spacing } from '@mui/system';
import { LinearProgress } from '@mui/material';
import Box from '@mui/material/Box';

import { Accordion } from '@mui/material';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const valueToProgress = function(val: string) {
  if (val === "Beginner") {
    return 25
  } else if (val === "Intermediate") {
    return 50
  } else if (val === "Advanced") {
    return 75
  }
}

const SkillSection = function(props: { data: (string)[][]; }) {
  
  return (<>
  <mui.Grid container spacing={2} alignItems="stretch">
    {props.data.map((entry: (string )[]) => {
      return (
        <>
      <mui.Grid item xs={2}>
        {entry[0]}
        </mui.Grid>
        <mui.Grid item xs={7}>
        <LinearProgress sx={{align: "center", alignItems: "center", justifyContent: "center"}} variant="determinate" value={valueToProgress(entry[1])}/>
      </mui.Grid>
      <mui.Grid item xs={3}>
        {entry[1]}
      </mui.Grid>
      </>
      )
    })}
  </mui.Grid>
  </>
  )
}

const CredSection = function(props: { data: (string)[][]; }) {
  
  return (<>
  <mui.Grid container spacing={2} alignItems="stretch">
    {props.data.map((entry: (string )[]) => {
      return (
        <>
      <mui.Grid item xs={4} alignItems="center">
        <Box height="100%" display="flex" justifyContent="center" flexDirection="column">
        {entry[0]}
        </Box>
        </mui.Grid>
        <mui.Grid item xs={4} alignItems="center">
        <Box height="100%" display="flex" justifyContent="center" flexDirection="column">
        
        {entry[1]}
        </Box>
      </mui.Grid>
      <mui.Grid item xs={3} alignItems="center">
      <Box height="100%" display="flex" justifyContent="center" flexDirection="column">
        
      {entry[2]}
      </Box>
      </mui.Grid>
      <mui.Grid item xs={1} alignItems="center">
      <Box height="100%" display="flex" justifyContent="center" flexDirection="column">
          {entry[3] !== "" ? ( <><a href={entry[3]}><img style={{
            height: "100%",
            width: "100%",
            objectFit: "scale-down"
          }}
                src={entry[4]} /></a></>) : (<a></a>) }
        </Box>
      </mui.Grid>
      </>
      )
    })}
  </mui.Grid>
  </>
  )
}

const ExperienceSection = function(props: { bullets: (string)[]; company: string, location: string, position: string, timeframe: string}) {
  const company = props.company;
  const location = props.location;
  const position = props.position;
  const timeframe = props.timeframe;
  const bullets = props.bullets;
  return (<>
    <Accordion defaultExpanded={false} sx={{mx:2}}>
      <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
                  <>
            <mui.Grid container spacing={2} alignItems="stretch">
              <>
                <mui.Grid item xs={3}>
                  {<h4>{company}</h4>}
                  </mui.Grid>
                  <mui.Grid item xs={2}>
                  {<h4>{location}</h4>}
                </mui.Grid>
                <mui.Grid item xs={3}>
                {<h4>{position}</h4>}
                </mui.Grid>
                <mui.Grid item xs={4}>
                {<h4>{timeframe}</h4>}
                </mui.Grid>
                </>
            </mui.Grid>
            </>
         </AccordionSummary>
      <AccordionDetails>
        {bullets.map((bullet) => {
          return (<li>{bullet}</li>)
        })}
      </AccordionDetails>
    </Accordion>
  </>)
}

const EducationSection = function(props: { bullets: (string)[]; school: string, location: string, degree: string, timeframe: string}) {
  const school = props.school;
  const location = props.location;
  const degree = props.degree;
  const timeframe = props.timeframe;
  const bullets = props.bullets;
  return (<>
    <Accordion defaultExpanded={false} sx={{mx:2}}>
      <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
                  <>
            <mui.Grid container spacing={2} alignItems="stretch">
              <>
                <mui.Grid item xs={3}>
                  {<h4>{school}</h4>}
                  </mui.Grid>
                  <mui.Grid item xs={2}>
                  {<h4>{location}</h4>}
                </mui.Grid>
                <mui.Grid item xs={3}>
                {<h4>{degree}</h4>}
                </mui.Grid>
                <mui.Grid item xs={4}>
                {<h4>{timeframe}</h4>}
                </mui.Grid>
                </>
            </mui.Grid>
            </>
         </AccordionSummary>
      <AccordionDetails>
        {bullets.map((bullet) => {
          return (<li>{bullet}</li>)
        })}
      </AccordionDetails>
    </Accordion>
  </>)
}

const ProjectSection = function(props: { bullets: (string)[]; name: string, description: string, timeframe: string}) {
  const name = props.name;
  const description = props.description;
  const timeframe = props.timeframe;
  const bullets = props.bullets;
  return (<>
    <Accordion defaultExpanded={false} sx={{mx:2}}>
      <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
                  <>
            <mui.Grid container spacing={2} alignItems="stretch">
              <>
                <mui.Grid item xs={4}>
                  {<h4>{name}</h4>}
                  </mui.Grid>
                  <mui.Grid item xs={4}>
                  {<h4>{description}</h4>}
                </mui.Grid>
                <mui.Grid item xs={4}>
                {<h4>{timeframe}</h4>}
                </mui.Grid>
                </>
            </mui.Grid>
            </>
         </AccordionSummary>
      <AccordionDetails>
        {bullets[0]}
      </AccordionDetails>
    </Accordion>
  </>)
}


function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
      <mui.AppBar>
        <mui.Box alignItems="center" display="flex" justifyContent="center">
        <mui.Toolbar>
          <Typography
            variant="h6"
            color="inherit"
          >
              Matthew Raymond Long
              </Typography>
        </mui.Toolbar>
        </mui.Box>
      </mui.AppBar>
          <mui.Box m={2} pt={8} alignItems="center" display="flex" justifyContent="center">
          <mui.Avatar alt="Matthew Raymond Long" src="mrl.JPG" sx={{ width: 200, height: 200 }}/>
          </mui.Box>
          <mui.Box mx={2}>
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Skills</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Accordion defaultExpanded={true} sx={{mx:2}}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Languages</Typography>
            </AccordionSummary>
            <AccordionDetails>
            <SkillSection data={[
              ["C++", "Advanced"],
              ["Python", "Advanced"],
              ["C#", "Intermediate"],
              ["Bash", "Intermediate"],
              ["Javascript", "Intermediate"],
              ["PowerShell", "Advanced"],
              ["Java", "Intermediate"],
              ["VHDL", "Beginner"],
              ["MIPS", "Beginner"],
              ["x86", "Beginner"]
              ]}/>
              </AccordionDetails>
              </Accordion>
              <Accordion defaultExpanded={false} sx={{mx:2}}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Frameworks</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SkillSection data={[
                ["React/JSX", "Intermediate"],
                ["Node.js", "Advanced"],
                ["Electron", "Advanced"],
                ["Boost", "Intermediate"],
                ["Google Protocol Buffers", "Intermediate"],
                [".NET", "Advanced"],
                ["Regex", "Advanced"],
                ["OpemMP", "Beginner"],
                ["pthreads", "Intermediate"],
                ["CUDA", "Beginner"],
                ["tensorflow", "Beginner"],
                ["scipy", "Intermediate"],
                ["numpy", "Intermediate"]
              ]} />
              </AccordionDetails>
              </Accordion>
                          <Accordion defaultExpanded={false} sx={{mx:2}}>
              <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Tools</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <SkillSection data={[
                ["Git", "Advanced"],
                ["Jira", "Advanced"],
                ["CMake", "Advanced"],
                ["MSVC/Visual Studio", "Advanced"],
                ["Docker", "Intermediate"],
                ["GCC", "Advanced"],
                ["Clang", "Advanced"],
                ["GDB", "Advanced"],
                ["Doxygen", "Beginner"],
                ["Sphinx", "Intermediate"],
                ["Jenkins", "Advanced"],
                ["WinDbg", "Intermediate"],
                ["Synopsys", "Beginner"],
              ]} />
              </AccordionDetails>
              </Accordion>
          </AccordionDetails>
          </Accordion>
          
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h5">Awards and Certifications</Typography>
          </AccordionSummary>
          <AccordionDetails>
          <>
            <mui.Grid container spacing={2} alignItems="stretch">
              <>
                <mui.Grid item xs={4}>
                  {<h4>{"Credential"}</h4>}
                  </mui.Grid>
                  <mui.Grid item xs={4}>
                  {<h4>{"Issuer"}</h4>}
                </mui.Grid>
                <mui.Grid item xs={3}>
                {<h4>{"Timeframe"}</h4>}
                </mui.Grid>
                <mui.Grid item xs={1}>
                {<h4>{"Linked Image"}</h4>}
                </mui.Grid>
                </>
            </mui.Grid>
            </>
            <CredSection data={[
              ["Certified Scrum Product Owner", "Scrum Alliance, Inc.", "	08/27/2021 - 09/03/2023", "https://bcert.me/shlllyelk", "https://bcert.me/bc/html/img/badges/generated/badge-7224.png"],
              ["Unisys DevSecOps for Software Developers", "Unisys", "09/16/2020 - Present", "https://www.credly.com/badges/3fd3688b-df1a-411a-8194-65254a481bb7/public_url", "https://images.credly.com/size/340x340/images/60fc00b1-6b10-421c-adf5-ad71fe327a6a/badge-designs-DevSecOps-softwaredeveloper.png"],
              ["Dean's List", "Drexel University", "2019", "https://drexel.edu/", "https://drexel.edu/~/media/Images/identity/pageLogos/Drexel_Vertical-stacked_gold.ashx?la=en"],
              ["A.J. Drexel Scholarship", "Drexel University", "2015 - 2019", "http://drexel.edu/", "https://drexel.edu/~/media/Images/identity/pageLogos/Drexel_Vertical-stacked_gold.ashx?la=en"],
              ["Drexel Dragon Scholarship", "Drexel University", "2015 - 2019", "http://drexel.edu/", "https://drexel.edu/~/media/Images/identity/pageLogos/Drexel_Vertical-stacked_gold.ashx?la=en"],
              ["Eagle Scout", "Boy Scouts of America", "2012 - Present", "https://nesa.org/", "https://nesa.org/wp-content/uploads/2021/07/EagleMedalHeaderImage2000x1310-729x1024.png"],
            ]} />
          </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography variant="h5">Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ExperienceSection company="Unisys Corporation" location="Blue Bell, PA" timeframe="July 2019 - Present" position="Stealth Security Engineer" bullets={[
              "Architected, designed, built, maintained, and automated testing of features for a networking sniffing, modeling, and visualization tool that spanned the entire stack - from C-level network sniffers to an Electron/React frontend",
              "Mentored co-ops (6 total, over 1.5 years) on multiple projects - automated performance testing, automated Jira issue creation for regressions, and wrapping internal REST APIs in multiple programming languages",
              "Worked with internal delivery and documentation teams for feature estimation, cloud-based deployments, support, and OEM reselling by third parties"
            ]} />
            <ExperienceSection company="Unisys Corporation" location="Blue Bell, PA" timeframe="September 2018 - July 2019" position="Stealth Security Associate Engineer" bullets={[
"Developed applications to integrate Unisys Stealth with ServiceNow for Forrester Wave Demos resulting in Unisys Stealth being classified as a Strong Performer",
"Worked externally with Splunk to make Unisys a Splunk Technology Partner",
"Worked with Microsoft developers and Unisys Federal to create a Windows Service making Unisys Stealth cloud-capable"
            ]} />
            <ExperienceSection company="Susquehanna International Group" location="Bala Cynwyd, PA" timeframe="September 2017 - September 2018" position="Middleware Development Co-Op" bullets={[
"Improved build systems and performant, low resource, cross-platform C++ monitoring tools, low-level libraries, routers, and applications that communicate over multicast and utilize Google Protocol Buffers",
"Debugged and resolved high-impact production failures on Linux and Windows hosts relating to aforementioned tooling"
            ]} />
            <ExperienceSection
              company="Unisys Corporation"
              location="Malvern, PA"
              timeframe="September 2016 - September 2017"
              position="Stealth Security Co-Op" bullets={[
                "Created a PowerShell module with vSphere’s PowerCLI for CI/DevOps teams to deploy and simulate cross-platform company network usage for testing a managed network security application",
                "Developed a PowerShell module for clients and system administrators that wraps the product’s REST API"
                
            ]} />
            <ExperienceSection
              company="Sunoco, LP"
              location="Newtown Square, PA"
              timeframe="September 2015 - March 2016"
              position="Retail Technology Project Assistant " bullets={[
                "Revised existing and built new processes and systems for automating accounting, project management of device installations, and management - resulting in spotting and resolving losses of half a million dollars",
                "Assisted in testing and compliance of ISO/IES 7813 and ATL 105 (credit card/transaction standards)"
                    
            ]} />
          </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography variant="h5">Education</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <EducationSection
            school='MITx - edX'
            location="Online"
            degree="MicroMasters in Data Science and Analytics"
            timeframe="Feburary 2020 - November 2021"
            bullets={[]}/>
            <EducationSection
            school='Drexel University'
            location="Philadelphia, PA"
            degree="Bachelor of Science in Computer Engineering"
            timeframe="August 2016 - May 2019"
            bullets={[
              "Competing Member, Drexel Cyber Dragons (MACCDC 2019), 2018 - 2019",
"Captain, Secretary, and Tournament Software Developer, Drexel Undergraduate Mock Trial, 2014 - 2019",
"Drexel Hyperloop, Electronics and Controls, 2016",
"Drexel TechServ (Giving back to the community with technical support and hardware), 2018 - 2019",
"Drexel Student Advisory Board, 2015 - 2016",
"Drexel Van Rensselaer Hall Representative, MyVan Hall Council, 2014-2015"


            ]}/>
<EducationSection
            school='St. Joseph’s Preparatory High School'
            location="Philadelphia, PA"
            degree="High School Diploma"
            timeframe="September 2010 - June 2014"
            bullets={[]}/>
          </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography variant="h5">Experience</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ExperienceSection company="Unisys Corporation" location="Blue Bell, PA" timeframe="July 2019 - Present" position="Stealth Security Engineer" bullets={[
              "Architected, designed, built, maintained, and automated testing of features for a networking sniffing, modeling, and visualization tool that spanned the entire stack - from C-level network sniffers to an Electron/React frontend",
              "Mentored co-ops (6 total, over 1.5 years) on multiple projects - automated performance testing, automated Jira issue creation for regressions, and wrapping internal REST APIs in multiple programming languages",
              "Worked with internal delivery and documentation teams for feature estimation, cloud-based deployments, support, and OEM reselling by third parties"
            ]} />
            <ExperienceSection company="Unisys Corporation" location="Blue Bell, PA" timeframe="September 2018 - July 2019" position="Stealth Security Associate Engineer" bullets={[
"Developed applications to integrate Unisys Stealth with ServiceNow for Forrester Wave Demos resulting in Unisys Stealth being classified as a Strong Performer",
"Worked externally with Splunk to make Unisys a Splunk Technology Partner",
"Worked with Microsoft developers and Unisys Federal to create a Windows Service making Unisys Stealth cloud-capable"
            ]} />
            <ExperienceSection company="Susquehanna International Group" location="Bala Cynwyd, PA" timeframe="September 2017 - September 2018" position="Middleware Development Co-Op" bullets={[
"Improved build systems and performant, low resource, cross-platform C++ monitoring tools, low-level libraries, routers, and applications that communicate over multicast and utilize Google Protocol Buffers",
"Debugged and resolved high-impact production failures on Linux and Windows hosts relating to aforementioned tooling"
            ]} />
            <ExperienceSection
              company="Unisys Corporation"
              location="Malvern, PA"
              timeframe="September 2016 - September 2017"
              position="Stealth Security Co-Op" bullets={[
                "Created a PowerShell module with vSphere’s PowerCLI for CI/DevOps teams to deploy and simulate cross-platform company network usage for testing a managed network security application",
                "Developed a PowerShell module for clients and system administrators that wraps the product’s REST API"
                
            ]} />
            <ExperienceSection
              company="Sunoco, LP"
              location="Newtown Square, PA"
              timeframe="September 2015 - March 2016"
              position="Retail Technology Project Assistant " bullets={[
                "Revised existing and built new processes and systems for automating accounting, project management of device installations, and management - resulting in spotting and resolving losses of half a million dollars",
                "Assisted in testing and compliance of ISO/IES 7813 and ATL 105 (credit card/transaction standards)"
                    
            ]} />
          </AccordionDetails>
          </Accordion>
          <Accordion defaultExpanded={true} sx={{mx:4}}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            
          >
            <Typography variant="h5">Projects</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <ProjectSection
            name="Mute"
            description='Senior Design Project (9 month project) https://dev.azure.com/C2C4/Mute'
            timeframe="September 2018 - May 2019"
            bullets={[
              "Working with Security Risk Advisors (an external company), the Mute framework was created. Mute is a post-exploitation framework for command and control. It communicates with a host while evading modern command and control detection. This is done by leveraging legitimate services and domains for nefarious purposes. The framework is written in C# (.NET 3.5) to be compatible with Windows 7 and later. Mute is lightweight, powerful, and persistent - enabling a red team to operate with a level of ease and collaboration unique to the tool set Mute provides."
            ]}/>
            <ProjectSection
            name="Engineering Design"
            description='College Freshman Year'
            timeframe="September 2014 - March 2015"
            bullets={[
              "Designed the highest ranking autonomous robot to retrieve and sort simulated nuclear waste."
            ]}/>
            <ProjectSection
            name="Personal Homelab"
            description='Continuous Learning'
            timeframe="September 2015 - Present"
            bullets={[
              "Dell R710 with Proxmox for VMs/Docker instances to host DNS, websites, file shares, and development projects/tools."
            ]}/>
                        <ProjectSection
            name="Magic Money Machine"
            description='DragonHacks (Drexel Hackathon)'
            timeframe="September 2018"
            bullets={[
              "Worked with a team of 4 to design and implement an autonomous cryptocurrency trading application using the Binance crypto exchange using Python and WebSockets within 24 hours. Project was profitable and featured by Vanguard within their company for review and inspiration."
            ]}/>
          </AccordionDetails>
          </Accordion>
          </mui.Box>
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
