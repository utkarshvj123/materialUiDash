import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import LinearProgress from "@material-ui/core/LinearProgress";
import GetAppIcon from "@material-ui/icons/GetApp";

const BorderLinearProgress = withStyles((theme) => ({
  root: {
    height: 10,
    borderRadius: 5,
    width: "90%",
  },
  colorPrimary: {
    backgroundColor:
      theme.palette.grey[theme.palette.type === "light" ? 200 : 700],
  },
  bar: {
    borderRadius: 5,
    backgroundColor: "#1a90ff",
  },
}))(LinearProgress);

const useStyles = makeStyles({
  root: {
    border: "1px solid antiquewhite",
    padding: "15px 25px",
    background: "#fff",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },

  barTitle: {
    display: "flex",
  },
});

const detailData = {
  name: "Income",
  iconUrl: GetAppIcon,
  data: [
    { title: "Markting", value: 70 },
    { title: "Advertisement", value: 80 },
    { title: "Consulting", value: 40 },
    { title: "Development", value: 60 },
  ],
};

function IncomeData(props) {
  const classes = useStyles();
  const IconUrl = detailData?.iconUrl;
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h2 style={{ fontWeight: "500" }}>Income</h2>
        {detailData?.iconUrl && (
          <div>
            <IconUrl />
          </div>
        )}
      </div>
      {detailData?.data.map((obj) => {
        return (
          <div>
            <div className={classes.barTitle}>
              <h3 style={{ fontWeight: "500", color: "grey", margin: "0" }}>
                {obj.title}
              </h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <BorderLinearProgress variant="determinate" value={obj.value} />
              <span>
                <h3>{obj.value}%</h3>
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default IncomeData;
