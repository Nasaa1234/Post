import { Box, Button, Stack, TextField } from "@mui/material";
import React from "react";

const AddPost = ({ setValue, value, addPost }) => {
  const onImageChange = (e) => {
    const [file] = e.target.files;
    setValue({ ...value, pictureVal: URL.createObjectURL(file) });
  };

  return (
    <Box sx={style.modal}>
      <Stack flexDirection={"row"} alignItems="center">
        <Box sx={style.word}>Picture:</Box>
        <input type="file" onChange={(e) => onImageChange(e)} />
      </Stack>
      <Stack flexDirection={"row"} alignItems="center">
        <Box sx={style.word}>title:</Box>
        <TextField
          size="small"
          onChange={(e) => setValue({ ...value, titleVal: e.target.value })}
        />
      </Stack>
      <Stack flexDirection={"row"} alignItems="center">
        <Box sx={style.word}>method:</Box>
        <TextField
          size="small"
          onChange={(e) => setValue({ ...value, methodVal: e.target.value })}
        />
      </Stack>
      <Button variant="contained" onClick={addPost}>
        Add Post
      </Button>
    </Box>
  );
};

const style = {
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "35%",
  },
  word: {
    width: "100px",
  },
};
export default AddPost;
