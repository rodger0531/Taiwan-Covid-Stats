import React, { useState } from "react";
import { Paper, Tab, Tabs, Box, AppBar } from "@material-ui/core";
import LineChart from "../components/lineChart";
import BarChart from "../components/barChart";
import ChartCard from "../components/chartCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

const ChartTabs = ({ data, isLoading }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Paper elevation={0} className="max-w-5xl m-auto">
      <AppBar position="static" color="secondary">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="累積確診數" className="text-lg" />
          <Tab label="最近7日確診數" className="text-lg" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {isLoading && <div>Graph Loading</div>}
        {!isLoading && (
          <ChartCard title="COVID-19 累積確診數">
            <LineChart data={data} className="mb-4" />
          </ChartCard>
        )}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {isLoading && <div>Gradivh Loading</div>}
        {!isLoading && (
          <ChartCard title="最近7日確診數">
            <BarChart data={data} />
          </ChartCard>
        )}
      </TabPanel>
    </Paper>
  );
};

export default ChartTabs;
