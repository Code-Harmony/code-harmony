import React, { useEffect } from "react";
import { connect } from "react-redux";
import { dummyUsers } from "./TestUsers";
import Talk from "talkjs";

const MyPeers = (props) => {
  let chatboxContainer = React.createRef()

  const [currentUser, setCurrentUser] = React.useState(null);
  useEffect(() => {
    let loggedInUser = props.auth;
    loggedInUser.name = loggedInUser.username
    setCurrentUser(loggedInUser);
    console.log("this is the props:", currentUser);
  }, []);
  
  let container;


  console.log(props.auth)
  //const {accounts, friends} = this.props;
  /*let firstFriendId = friends.find((user) => user.user1id === currentUser.id)
  let secondFriendId = firstFriendId.find((user) => user.user2id === currentUser.id)
  let friendslist = accounts.find((friend) => friend.id === secondFriendId.id)
*/

  const handleClick = (userId) => {
    /* Retrieve the other user who will participate in the conversation */
    const user = dummyUsers.find((user) => user.id === userId);

    /* Session initialization code */
    Talk.ready
      .then(() => {
        /* Create the two users that will participate in the conversation */
        const me = new Talk.User(currentUser);
        const other = new Talk.User(user);

        /* Create a talk session if this does not exist. Remember to replace tthe APP ID with the one on your dashboard */
        if (!window.talkSession) {
          window.talkSession = new Talk.Session({
            appId: 't96fOG1M',
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

  return (
    <div className="users">
      <div className="current-user-container">
        {currentUser && (
          <div>
            <div className="current-user-info">
              <h3>{currentUser.username}</h3>
              <p> User ID: {currentUser.id}</p>
              <button onClick={()=> console.log(currentUser)}>console log user</button>
            </div>
          </div>
        )}
      </div>
      <div className="users-container">
        <ul>
          {dummyUsers.map((user) => (
            <li key={user.id} className="user">
              <picture className="user-picture">
                <img src={user.photoUrl} alt={`${user.name}`} />
              </picture>
              <div className="user-info-container">
                <div className="user-info">
                  <h4>{user.name}</h4>
                  <p>{user.info}</p>
                </div>
                <div className="user-action">
                  <button onClick={(userId) => handleClick(user.id)}>
                    Message
                  </button>
                </div>
              </div>
            </li>
          ))}
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
  };
};

export default connect(mapState)(MyPeers);
