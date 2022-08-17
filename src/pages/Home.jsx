import { Box, Button, Modal, TextareaAutosize } from "@mui/material";
import React, { useState } from "react";
import Post from "../components/common/Post";
import { useAuthContext } from "../common/context/AuthContext";
import Header from "../components/common/Header";
import LeftBar from "../components/common/LeftBar";

const Home = () => {
  const { user } = useAuthContext();
  const today = new Date();
  const [mock, setMock] = useState([
    {
      userName: "user",
      date: `${
        today.getMonth() + 1
      }-${today.getDate()}, ${today.getFullYear()}`,
      picture:
        "https://image.shutterstock.com/image-vector/zero-waste-concept-young-male-600w-1535297816.jpg",
      title:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
      method:
        "Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10 minutes.Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.",
      loading: false,
      comment: ["hello", "muu bn"],
    },
  ]);
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState({
    pictureVal: "",
    titleVal: "",
    methodVal: "",
  });
  const addPost = () => {
    setOpen(false);
    setMock([
      ...mock,
      {
        userName: user,
        date: `${
          today.getMonth() + 1
        }-${today.getDate()}, ${today.getFullYear()}`,
        picture:
          "https://image.shutterstock.com/image-vector/zero-waste-concept-young-male-600w-1535297816.jpg",
        title: value.titleVal,
        method: value.methodVal,
        comment: [],
      },
    ]);
  };

  return (
    <div style={style.container}>
      <Header />
      <Box sx={style.body}>
        <LeftBar />
        <Box>
          <div>
            <Button
              onClick={() =>
                user ? setOpen(!open) : alert("pls login and signUp")
              }
              variant="contained"
            >
              Add Post
            </Button>
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style.modal}>
                <Box>
                  Picture:
                  <input type="file" onChange={(e) => console.log(e)} />
                </Box>
                <Box>
                  title:
                  <TextareaAutosize
                    onChange={(e) =>
                      setValue({ ...value, titleVal: e.target.value })
                    }
                  />
                </Box>
                <Box>
                  method:
                  <TextareaAutosize
                    onChange={(e) =>
                      setValue({ ...value, methodVal: e.target.value })
                    }
                  />
                </Box>
                <Button variant="contained" onClick={addPost}>
                  Add Post
                </Button>
              </Box>
            </Modal>
          </div>
          {mock.map((el, ind) => {
            return (
              <Post
                key={ind}
                userName={el.userName}
                date={el.date}
                picture={el.picture}
                title={el.title}
                method={el.method}
                loading={el.loading}
                ind={ind}
                open={open}
                setMock={setMock}
                mock={mock}
              />
            );
          })}
        </Box>
        <Box>
          <LeftBar />
        </Box>
      </Box>
    </div>
  );
};

const style = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  modal: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
  },
  body: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100vw",
  },
};

export default Home;
