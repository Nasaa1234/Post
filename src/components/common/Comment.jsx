/* eslint-disable react-hooks/rules-of-hooks */
import { Box } from "@mui/material";
import React, { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

const CommentBox = ({ el }) => {
  const [like, setLike] = useState(false);
  return (
    <Box sx={style.container}>
      <Box sx={style.child}>
        <Box>{el}</Box>
        <ThumbUpIcon
          sx={{ color: like && "#1876d2", cursor: "pointer" }}
          onClick={() => setLike(!like)}
        />
      </Box>
    </Box>
  );
};

const Comment = ({ mock, index }) => {
  return (
    <div>
      {mock[index].comment.map((el, ind) => {
        return <CommentBox el={el} key={ind} />;
      })}
    </div>
  );
};
const style = {
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "2%",
  },
  child: {
    border: "0.4px solid gray",
    borderRadius: "15px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    width: "94%",
    paddingLeft: "2%",
    justifyContent: "space-between",
    p: "0px 24px",
  },
};
export default Comment;
