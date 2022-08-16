import { Box } from "@mui/material";
import React from "react";

const Comment = ({ mock, index }) => {

  return (
    <div>
      {mock[index].comment.map((el, ind) => {
        return (
          <Box key={ind} sx={style.container}>
            <Box sx={style.child}>{el}</Box>
          </Box>
        );
      })}
    </div>
  );
};
const style = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "2%"
  },
  child: {
    border: "0.4px solid gray",
    borderRadius: "15px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    width: "94%",
    paddingLeft: "2%"
  },
};
export default Comment;
