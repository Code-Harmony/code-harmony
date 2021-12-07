import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dummyUsers } from "./TestUsers";
import Talk from "talkjs";

const MyPeers = (props) => {
  let chatboxContainer = React.createRef();

  const [currentUser, setCurrentUser] = React.useState(null);
  useEffect(() => {
    let loggedInUser = props.auth;
    loggedInUser.name = loggedInUser.username;
    setCurrentUser(loggedInUser);
  }, []);

  let container;

  const { friends } = props;

  // console.log('TESTING WITH AMATA AND STEPHEN. Friends:', friends)
  /*
    let firstFriendId = friends.find((user) => user.user1id === currentUser.id)
    let secondFriendId = firstFriendId.find((user) => user.user2id === currentUser.id)
    let friendslist = accounts.find((friend) => friend.id === secondFriendId.id)
  */

  const handleClick = (userId) => {
    /* Retrieve the other user who will participate in the conversation */
    console.log(userId)
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
  console.log("loaded friends:", friends);
  return (
    <div className="users">
      <div className="current-user-container">
        {currentUser && friends && (
          <div>
            <div className="current-user-info">
              <h3>{currentUser.username}</h3>
              <p> User ID: {currentUser.id}</p>
              <button onClick={() => console.log(currentUser)}>
                console log user
              </button>
            </div>
          </div>
        )}
      </div>
      <div className="users-container">
        <ul>
          {friends.map((user) => {
            let userId = user.id
            return(
            <li key={userId} className="user">
              <picture className="user-picture">
                <img src={user.photoUrl} alt={`${user.name}`} />
              </picture>
              <div className="user-info-container">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.info}, {user.id}</p>
                </div>
                <div className="user-action">
                  <button onClick={(userId) => handleClick(user.id)}>
                    Message
                  </button>
                </div>
              </div>
            </li>
            )
          })}
        </ul>
        <div className="chatbox-container" ref={chatboxContainer}>
          <div id="talkjs-container" style={{ width: "100%" }}>
            <i></i>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapState = (state) => {
  return {
    auth: state.auth,
    friends: state.friends,
  };
};

export default connect(mapState)(MyPeers);
