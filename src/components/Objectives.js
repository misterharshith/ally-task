import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import Keys from "./Keys";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  panel:{
      boxShadow: '0px 2px 1px -1px rgba(0, 0, 0, 0), 0px 1px 1px 0px rgba(0, 0, 0, 0), 0px 1px 3px 0px rgba(0,0,0,0.12) !important'
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    padding: "3px 18px",
    fontSize: "16px"
  },
  icon: {
    fontSize: "30px",
    color: "#969696"
  },

  detail: {
    display: "block",
    textAlign: "left",
    paddingLeft: "62px"
  }
}));

const Objectives = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {props.objectives &&
        props.objectives.map((objective, i) => {
          return (
            <ExpansionPanel className={classes.panel} key={objective.id}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                {" "}
                <AccountCircleOutlinedIcon className={classes.icon} />
                <Typography className={classes.heading}>
                  {`${i + 1}. ${objective.title}`}
                </Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                className={classes.detail}
            
              >
                {objective.value.map((keys, i) => {
                  return <Keys keys={keys} index={i} />;
                })}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
    </div>
  );
};

export default Objectives;
