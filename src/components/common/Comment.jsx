import { Avatar, Box } from "@mui/material";
import React, { useState, useEffect } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import { useAuthContext } from "../../common/context/AuthContext";

const CommentBox = ({ el }) => {
  const { user } = useAuthContext();

  const [like, setLike] = useState(false);
  return (
    <Box sx={[style.container, style.avatar]}>
      <Avatar sx={{ bgcolor: "orange" }}>
        {/* login and signUp users Name(first letter) */}
        {el.slice(0, 1).toUpperCase(0)}
        {/* {user ? user.slice(0, 1).toUpperCase() : el.slice(0, 1).toUpperCase(0)} */}
      </Avatar>
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
  const [more, setMore] = useState(
    mock[index].comment.length > 3 ? true : false
  );
  useEffect(() => {
    setMore(mock[index].comment.length > 3 ? true : false);
  }, [index, mock]);
  return (
    <Box sx={style.commments}>
      {more ? (
        <>
          {[0, 1, 2].map((_el, ind) => {
            return (
              mock[index].comment[ind] && (
                <CommentBox el={mock[index].comment[ind]} key={ind} />
              )
            );
          })}
        </>
      ) : (
        <>
          {mock[index].comment.map((el, ind) => {
            return <CommentBox el={el} key={ind} />;
          })}
        </>
      )}
      {mock[index].comment.length > 3 &&
        (more ? (
          <MoreHorizIcon sx={{ ml: 2 }} onClick={() => setMore(false)} />
        ) : (
          <ArrowDropUpIcon sx={{ ml: 2 }} onClick={() => setMore(true)} />
        ))}
    </Box>
  );
};
const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "2%",
    width: "100%",
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
  avatar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "94%",
    gap: "5%",
  },
  commments: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
};
export default Comment;
