import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    width: "100%",
    maxWidth: 500,
    padding: 10
  }
});

export default function Title(props) {
  const classes = useStyles()
  const { data } = props
  return (
    <div className={classes.root}>
      <Typography variant="h6" gutterBottom align="left">{data.title}</Typography>
    </div>
  );
}