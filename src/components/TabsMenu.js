import * as React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
// import List from "@mui/material/List";
// import ListItem from "@mui/material/ListItem";
// import ListItemText from "@mui/material/ListItemText";
// import ListItemAvatar from "@mui/material/ListItemAvatar";
// import Avatar from "@mui/material/Avatar";
// import ImageIcon from "@mui/icons-material/Image";
// import WorkIcon from "@mui/icons-material/Work";
// import BeachAccessIcon from "@mui/icons-material/BeachAccess";
// import Divider from "@mui/material/Divider";

import "./menuStyle.css";
import { filterData } from "../Data";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        typography: "body1",
      }}
    >
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <TabList
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            {filterData.map((item) => (
              <Tab
                className="scroll"
                key={item.id}
                label={item.name}
                value={item.id}
              />
            ))}
            {/* <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
            <Tab label="Item four" value="4" />
            <Tab label="Item five" value="5" />
            <Tab label="Item six" value="6" />
            <Tab label="Item seven" value="7" />
            <Tab label="Item eight" value="8" />
            <Tab label="Item nine" value="9" />
            <Tab label="Item ten" value="10" /> */}
          </TabList>
        </Box>

        <h2 className="menu-heading mt-3 mb-2">{filterData[value - 1].name}</h2>

        {filterData.map((item) => (
          <TabPanel key={item.id} value={item.id}>
            <div className="Cards ">
              {item.content.map((index) => (
                <div className="card  mb-3" key={item.id}>
                  <div className="row ">
                    <div className="col-5 imag">
                      <img src={index.image} className="card-img " alt="..." />
                    </div>
                    <div className="col-7 ">
                      <div className="card-body ">
                        <h5 className="card-title "> {index.title}</h5>

                        <p className="card-text">
                          <small className="text-warning">{item.price}</small>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
