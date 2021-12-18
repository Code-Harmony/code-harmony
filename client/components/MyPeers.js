import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dummyUsers } from "./TestUsers";
import Talk from "talkjs";
import { ThemeProvider, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import theme from "./Theme";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import useMediaQuery from "@mui/material/useMediaQuery";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import BoltIcon from "@mui/icons-material/Bolt";
import EmojiPeopleOutlinedIcon from '@mui/icons-material/EmojiPeopleOutlined';
const MyPeers = (props) => {
  let chatboxContainer = React.createRef();
  const myUser = props.auth;
  const [currentUser, setCurrentUser] = React.useState(null);
  useEffect(() => {
    let loggedInUser = props.auth;
    loggedInUser.name = loggedInUser.username;
    setCurrentUser(loggedInUser);
  }, []);

  const { friends } = props;

  const handleClick = (userId) => {
    /* Retrieve the other user who will participate in the conversation */
    console.log(userId);
    const user = friends.find((user) => user.id === userId);

    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user);

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: "t96fOG1M",
            me: me,
          });
        }

        /* Get a conversation ID or create one */
        const conversationId = Talk.oneOnOneId(me, other);
        const conversation =
          window.talkSession.getOrCreateConversation(conversationId);

        /* Set participants of the conversations */
        conversation.setParticipant(me);
        conversation.setParticipant(other);

        /* Create and mount chatbox in container */
        let chatbox = window.talkSession.createChatbox(conversation);

        chatbox.mount(chatboxContainer.current);
      })
      .catch((e) => console.error(e));
  };
  const challengepointStyle = {
    ml: "-.3em",
    mr: "-.3em",
    mt: "0",
    color: "#f9a03f",
    fontSize: "1.7em",
  };

  const bigScreen = useMediaQuery(theme.breakpoints.up("sm"));
  console.log("loaded friends:", friends);
  return (
    <ThemeProvider theme={theme}>
      <div>
      <div style={{marginLeft: 'auto', padding: '3em', textAlign: 'center'}}>

      
      <Typography variant="h5">Chat with friends <EmojiPeopleOutlinedIcon style={{fontSize: '1.5em'}}/></Typography>
        </div>
      <div className="users">
        <div className="current-user-container">
          {currentUser && friends && (
            <Grid
              container
              p={2}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              <Grid item xs={12} lg={12} align="center">
                <Card align="center">
                  <CardContent>
                    <Grid container p={2} rowSpacing={1} columnSpacing={1}>
                      <Grid item xs={12} sm={12} align="center" pt="1.5em">
                        <Avatar
                          alt={myUser.name}
                          src={myUser.photoUrl}
                          sx={{
                            width: 100,
                            height: 100,
                          }}
                        />
                        <Typography variant="h5">{myUser.name}</Typography>
                        <Grid
                          container
                          spacing={0}
                          alignItems="flex-start"
                          justifyContent="center"
                        >
                          <Grid
                            sx={{ maxWidth: "12px" }}
                            item
                            xs={12}
                            align="left"
                            pt="0"
                          >
                            <span style={{ color: "transparent" }}>0</span>
                          </Grid>
                          <Grid
                            sx={{ maxWidth: "12px" }}
                            item
                            xs={12}
                            align="left"
                            pt="0"
                          >
                            <ChevronLeftIcon sx={challengepointStyle} />
                          </Grid>
                          <Grid
                            sx={{ maxWidth: "12px" }}
                            item
                            xs={1}
                            align="left"
                            pt="0"
                          >
                            <BoltIcon sx={challengepointStyle} />
                          </Grid>
                          <Grid
                            sx={{ maxWidth: "12px" }}
                            item
                            xs={1}
                            align="left"
                            pt="0"
                          >
                            <ChevronRightIcon sx={challengepointStyle} />
                          </Grid>
                          <Grid item xs={1} align="left" ml=".2em" pt=".3em">
                            <Typography
                              sx={{ fontSize: "1em" }}
                              color="secondary.main"
                              variant="h6"
                            >
                              {myUser.challenge_points}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          )}
        </div>
        <div className="users-container">
          <ul>
            {friends.map((user) => {
              return (
                <li key={user.name} className="user">
                  <picture
                    onClick={(userId) => handleClick(user.id)}
                    className="user-picture"
                  >
                    <img src={user.photoUrl} alt={`${user.name}`} />
                  </picture>
                  <div className="user-info-container">
                    <div className="user-info">
                      <h4>{user.name}</h4>
                      <p>
                        {user.info}, {user.id}
                      </p>
                      <Button
                        onClick={(userId) => handleClick(user.id)}
                        color="primary"
                        variant="contained"
                        endIcon={<SendIcon />}
                      >
                        Message
                      </Button>
                    </div>
                    {/* <div className="user-action">
                      <button onClick={(userId) => handleClick(user.id)}>
                        Message
                      </button>
                    </div> */}
                  </div>
                </li>
              );
            })}
          </ul>
          <div className="chatbox-container" ref={chatboxContainer}>
            <div id="talkjs-container" style={{ width: "100%" }}>
              <i></i>
            </div>
          </div>
        </div>
      </div>
      </div>
    </ThemeProvider>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
    friends: state.friends,
  };
};

export default connect(mapState)(MyPeers);
