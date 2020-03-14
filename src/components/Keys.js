import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  iconSecondary: {
    fontSize: "26px",
    color: "#969696",
    verticalAlign: "middle",
    display: "inline-block"
  },
  list: {
    margin: "20px 16px",
  },
  detailList: {
    fontSize: "14px",
    display: "inline-block",
    padding: '0 30px '
  }
}));

const Keys = props => {
  const classes = useStyles();

  let alphabet = [ 'a', 'b', 'c', 'd', 'e',
                   'f', 'g', 'h', 'i', 'j',
                   'k', 'l', 'm', 'n', 'o',
                   'p', 'q', 'r', 's', 't',
                   'u', 'v', 'w', 'x', 'y',
                   'z' ];

  return (
  
     
        <div className={classes.list}>
          <AccountCircleOutlinedIcon className={classes.iconSecondary} />
          <Typography className={classes.detailList}>{`${alphabet[props.index]}. ${props.keys.title}`}</Typography>
        </div>
  );
};

export default Keys;
