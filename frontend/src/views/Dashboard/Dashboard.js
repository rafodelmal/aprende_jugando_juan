import React, {useState, useEffect} from "react";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Tasks from "components/Tasks/Tasks.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Danger from "components/Typography/Danger.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardBody from "components/Card/CardBody.js";
import CardFooter from "components/Card/CardFooter.js";
import Button from "components/CustomButtons/Button.js";

import { bugs, website, server } from "variables/general.js";


import { LoginButton } from "components/Login/Login.js";
import { LogoutButton } from "components/Logout/Logout.js";
import { Profile } from "components/Profile/Profile.js";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";





const useStyles = makeStyles(styles);

const API = process.env.REACT_APP_API;



export default function Dashboard() {
  const classes = useStyles();
 
  const [users,setUser] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault();    
  }

  
  const getUser = async (id) => {
    const res = await fetch(`${API}/users/${id}`)
    const data = await res.json();
    console.log(data)
  }

  useEffect(() => {
    getUser();

  }, [])



  return (

    <div className="Dashboard">
          
          <Profile />
          <LogoutButton />

          

      </div>
    
  );
}
