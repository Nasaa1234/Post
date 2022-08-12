/* eslint-disable @next/next/no-img-element */
import React from "react";
import { Box } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const LeaderBoard = ({
  number,
  userName,
  userId,
  point,
  active,
  titleImg,
  you,
}) => {
  const Img = () => {
    switch (titleImg) {
      case "bronze":
        return "https://cdn.iconscout.com/icon/premium/png-256-thumb/bronze-medal-3216849-2677337.png";
      case "gold":
        return "https://cdn.iconscout.com/icon/premium/png-256-thumb/gold-medal-3216853-2677340.png";
      default:
        return "https://cdn.iconscout.com/icon/premium/png-256-thumb/silver-medal-3216854-2677341.png";
    }
  };

  return (
    <Box
      sx={style.container}
      style={{
        boxShadow: active && "0px 0px 6px #9FEF00",
        background:
          you &&
          " linear-gradient(180deg, rgba(38,42,46,1) 0%, rgba(118,153,42,1) 100%)",
      }}
    >
      <Box sx={style.userSide}>
        <Box sx={style.number}>#{number}</Box>
        <Box sx={style.user}>
          <Box sx={style.userMedia}>
            <AccountCircleIcon />
            {userName}
          </Box>
          <Box sx={style.Color}>#${userId}</Box>
        </Box>
      </Box>
      <Box sx={{ ...style.Color, ...style.point }}>{point}</Box>
      <Box sx={style.title}>
        <img src={Img()} alt="" style={{ width: "40px" }} />
      </Box>
    </Box>
  );
};

const style = {
  container: {
    fontFamily: "Jaldi",
    fontSize: "25px",
    lineHeight: "81px",
    backgroundColor: "rgb(38,42,46)",
    borderRadius: "10px",
    color: "white",
    width: "85vw",
    height: "69px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px",
  },
  userSide: {
    display: "flex",
    gap: "40px",
    width: "40px",
    "@media (max-width: 767px)": {
      gap: "20px",
    },
  },
  Color: {
    color: "#6F7881",
  },
  title: {
    fontSize: "15px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  number: {
    width: "10px",
  },
  user: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  userMedia: {
    display: "flex",
    alignItems: "center",
    "@media (max-width: 767px)": {
      display: "none",
      gap: "0px",
    },
  },
};

export default LeaderBoard;
