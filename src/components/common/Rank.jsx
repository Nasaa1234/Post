import { Box } from "@mui/material";
import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Rank = ({ first, second, third }) => {
  return (
    <Box sx={style.container}>
      <Box sx={style.center}>
        <AccountCircleIcon sx={style.svg} />
        <Box sx={style.rankName}>{second}</Box>
        <Box sx={{ ...style.secondBox, ...style.font }}>#2</Box>
      </Box>
      <Box sx={style.center}>
        <AccountCircleIcon sx={style.svg} />
        <Box sx={style.rankName}>{first}</Box>
        <Box sx={{ ...style.firstBox, ...style.font }}>#1</Box>
      </Box>
      <Box sx={style.center}>
        <AccountCircleIcon sx={style.svg} />
        <Box sx={style.rankName}>{third}</Box>
        <Box sx={{ ...style.thirdBox, ...style.font }}>#3</Box>
      </Box>
    </Box>
  );
};
const style = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end",
    margin: "0px 30px",
  },
  secondBox: {
    backgroundColor: "#E4E4E4",
    height: "68px",
    width: "100%",
    borderRadius: "10px 0px 0px 10px",
  },
  firstBox: {
    backgroundColor: "#E4E4E4",
    height: "108px",
    width: "100%",
    borderRadius: "10px 10px 0px 0px",
  },
  thirdBox: {
    backgroundColor: "#E4E4E4",
    height: "50px",
    width: "100%",
    borderRadius: "0px 10px 10px 0px",
  },
  center: {
    width: "28.3vw",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "5px",
  },
  svg: {
    fontSize: "60px",
    color: "white"
  },
  rankName: {
    fontSize: "25px",
    color: "white",
    "@media (max-width: 467px)": {
      display: "none",
    },
  },
  font: {
    display: "flex",
    justifyContent: "center",
    paddingTop: "10px",
    alignItems: "flex-start",
    fontSize: "27px",
  },
};
export default Rank;
