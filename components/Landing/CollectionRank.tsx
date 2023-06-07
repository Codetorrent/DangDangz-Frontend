import * as React from 'react'
import styled from "@emotion/styled";
import {Tabs, Tab, Box } from '@mui/material';
import RankGrid from './RankGrid';


const  CollectionRank = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const dangdangzLogo = '/img/dangdangz-logo.png'
  const shibaInuLogo = '/img/shiba-inu.png'
  
  return (
    <Box sx={{ width: '100%' }}>
      <Box>
        <StyledTabs
          value={value}
          onChange={handleChange}
          aria-label="styled tabs example"
        >
          <StyledTab label="PUPPY" />
          <StyledTab label="ETC.." />
        </StyledTabs>
        <Box sx={{ p: 3 }} />
      </Box>
      <TabPanel value={value} index={0}>
        <RankGrid img={shibaInuLogo} />

      </TabPanel>
      <TabPanel value={value} index={1}>
        <RankGrid img={dangdangzLogo} />

      </TabPanel>
    </Box>
  );
}



interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </div>
  );
}


interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    centered
  />
))({
  '& .MuiTabs-indicator': {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  '& .MuiTabs-indicatorSpan': {
    // maxWidth: 40,
    width: '100%',
    backgroundColor: 'black',
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  fontSize: '24px',
  marginRight: "15px",
  fontWeight: 600,
  color: '#707A83',
  '&.Mui-selected': {
    color: '#000',
  },
  '&.Mui-focusVisible': {
    backgroundColor: 'rgba(100, 95, 228, 0.32)',
  },
}));



export default CollectionRank

