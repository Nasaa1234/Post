import { Box } from "@mui/material";
import React from "react";
import LeaderBoard from "../components/common/LeaderBoard";
import { MOCK_DATA_LIST } from "../components/common/MOCK_DATA";
import Rank from "../components/common/Rank";
const Home = () => {
  return (
    <Box sx={{ backgroundColor: "black", height: "100vh" }}>
      <Box sx={style.succesContainer}>
        <Rank
          second="name#1234"
          first="name#1235"
          third="name#1236"
        />
      </Box>
      <Box sx={style.container}>
        <Box sx={style.header}>
          <Box sx={{ display: "flex", gap: "23px", width: "40px" }}>
            <Box>№</Box>
            <Box>Нэрс</Box>
          </Box>
          <Box>Оноо</Box>
          <Box>Цол</Box>
        </Box>
      </Box>
      <Box sx={style.container}>
        {MOCK_DATA_LIST.map((el, ind) => {
          return (
            <LeaderBoard
              number={el.number}
              userName={el.userName}
              userId={el.userId}
              point={el.point}
              titleImg={el.titleImg}
              active={el.active}
              key={ind}
              you={el.you}
            />
          );
        })}
      </Box>
    </Box>
  );
};
const style = {
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  },
  succesContainer: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  header: {
    width: "85vw",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    color: "#646B71",
    padding: "20px",
    fontSize: "25px",
  },
};
export default Home;
