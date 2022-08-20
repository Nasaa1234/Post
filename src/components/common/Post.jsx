import React, { useState } from "react";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { MailOutline } from "@mui/icons-material";
import SendIcon from "@mui/icons-material/Send";
import {
  Button,
  Popover,
  Skeleton,
  Typography,
  IconButton,
  Avatar,
  Collapse,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Card,
  styled,
  Badge,
  Box,
  TextField,
  Stack,
} from "@mui/material";
import { FacebookButton, FacebookCount } from "react-social";
import Comment from "./Comment";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const Post = (props) => {
  const { open, ind, setMock, mock } = props;
  const [expanded, setExpanded] = useState(false);
  const [favorite, setFavorite] = useState();
  const [anchor, setAnchor] = useState({
    delete: "",
    el: "",
  });
  const [comment, setComment] = useState({
    see: false,
    value: "",
  });
  const handleClick = (event, type) => {
    type
      ? setAnchor({ ...anchor, delete: event.currentTarget })
      : setAnchor({ ...anchor, el: event.currentTarget });
  };
  const AddComment = () => {
    comment.value !== "" && mock[ind].comment.push(comment.value);
    setMock([...mock]);
    setComment({ ...comment, value: "" });
  };

  return (
    <Card sx={{ width: "30vw", mt: "10%" }}>
      <Popover
        id={open ? "simple-popover" : undefined}
        open={Boolean(anchor.el)}
        anchorEl={anchor.el}
        onClose={() => setAnchor({ delete: null, el: null })}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <FacebookButton url={"http://github.com"} appId={1068922870664355}>
          <FacebookCount url={"http://github.com"} />
          share + http://github.com
        </FacebookButton>
      </Popover>
      <Popover
        id={open ? "simple-popover" : undefined}
        open={Boolean(anchor.delete)}
        anchorEl={anchor.delete}
        onClose={() => setAnchor({ delete: null, el: null })}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Button
          onClick={() => {
            setMock(mock.filter((_el, index) => index !== ind));
            setAnchor({ delete: null, el: null });
          }}
        >
          delete
        </Button>
      </Popover>
      <CardHeader
        avatar={
          mock[ind].loading ? (
            <Skeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40}
            />
          ) : (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {mock[ind].userName?.slice(0, 1)}
            </Avatar>
          )
        }
        action={
          mock[ind].loading ? null : (
            <IconButton
              aria-label="settings"
              onClick={(e) => handleClick(e, true)}
            >
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={
          mock[ind].loading ? (
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            mock[ind].userName
          )
        }
        subheader={
          mock[ind].loading ? (
            <Skeleton animation="wave" height={10} width="40%" />
          ) : (
            mock[ind].date
          )
        }
      />
      {mock[ind].loading ? (
        <Skeleton sx={{ height: 190 }} animation="wave" variant="rectangular" />
      ) : (
        <CardMedia
          component="img"
          image={mock[ind].picture}
          alt="Paella dish"
        />
      )}
      <CardContent>
        {mock[ind].loading ? (
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
        ) : (
          <Typography variant="body2" color="text.secondary">
            {mock[ind].title}
          </Typography>
        )}
      </CardContent>
      <CardActions
        disableSpacing
        sx={{ display: "flex", justifyContent: "space-between" }}
      >
        {mock[ind].loading ? (
          <Stack flexDirection="row" ml={1} gap={1}>
            <Skeleton
              height={35}
              width={35}
              animation="wave"
              variant="circular"
            />
            <Skeleton
              height={35}
              width={35}
              animation="wave"
              variant="circular"
            />
          </Stack>
        ) : (
          <Box>
            <IconButton aria-label="add to favorites">
              <FavoriteIcon
                style={{ color: favorite && "#eb3b3b" }}
                onClick={() => setFavorite(!favorite)}
              />
            </IconButton>
            <IconButton aria-label="share">
              <ShareIcon onClick={handleClick} />
            </IconButton>
          </Box>
        )}

        {mock[ind].loading ? (
          <Stack flexDirection="row" mr={1} gap={1}>
            <Skeleton
              height={35}
              width={35}
              animation="wave"
              variant="circular"
            />
            <Skeleton
              height={35}
              width={35}
              animation="wave"
              variant="circular"
            />
          </Stack>
        ) : (
          <Box>
            <Badge
              badgeContent={mock[ind].comment.length}
              color="primary"
              onClick={() => setComment(!comment)}
            >
              <MailOutline color="action" />
            </Badge>
            <ExpandMore
              expand={expanded}
              onClick={() => setExpanded(!expanded)}
              aria-expanded={expanded}
              aria-label="show more"
            >
              <ExpandMoreIcon />
            </ExpandMore>
          </Box>
        )}
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          {mock[ind].loading ? (
            <React.Fragment>
              <Skeleton
                animation="wave"
                height={10}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={10} width="80%" />
            </React.Fragment>
          ) : (
            mock[ind].method
          )}
        </CardContent>
      </Collapse>
      {mock[ind].loading ? (
        <Stack flexDirection={"row"} m={2}>
          <Skeleton
            animation="wave"
            variant="circular"
            width={40}
            height={40}
            sx={{ mr: 2 }}
          />
          <Skeleton
            height={35}
            width={400}
            animation="wave"
            sx={{ borderRadius: "10px" }}
            variant="rectangular"
          />
        </Stack>
      ) : (
        comment && <Comment mock={mock} index={ind} />
      )}
      <Box sx={style.comment}>
        {mock[ind].loading ? (
          <Skeleton
            height={35}
            width={200}
            animation="wave"
            sx={{ borderRadius: "5px" }}
            variant="rectangular"
          />
        ) : (
          <TextField
            size="small"
            id="standard-basic"
            label="Comment"
            value={comment.value}
            onChange={(e) => setComment({ ...comment, value: e.target.value })}
            onKeyDown={(e) => e.code === "Enter" && AddComment()}
          />
        )}
        {mock[ind].loading ? (
          <Skeleton
            height={35}
            width={35}
            animation="wave"
            variant="circular"
          />
        ) : (
          <SendIcon onClick={AddComment} sx={{ cursor: "pointer" }} />
        )}
      </Box>
    </Card>
  );
};

const style = {
  comment: {
    width: "93%",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "2%",
    marginBottom: "2%",
    marginLeft: "3%",
  },
};

export default Post;
