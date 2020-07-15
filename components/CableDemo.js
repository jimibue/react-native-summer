// fetch(`${API_ROOT}/conversations`)
// .then((res) => res.json())
// .then((conversations) => this.setState({ conversations }));

import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Cable from './Cable';
import {ActionCable} from 'react-actioncable-provider';

export default function CableDemo() {
  const [conversations, setConversations] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:3001/conversations`)
      .then((res) => res.json())
      .then((conversations) => {
        console.log(conversations);
        setConversations(conversations);
      });
  }, []);

  function handleReceivedMessage(response) {
    const {message} = response;
    const conversations = [...conversations];
    const conversation = conversations.find(
      (conversation) => conversation.id === message.conversation_id,
    );
    conversation.messages = [...conversation.messages, message];
    setConversations(conversations);
    console.log(conversations);
  }

  function handleReceivedConversation(response) {
    const {conversation} = response;
    console.log('c:', conversation);
    setConversations([...conversations, conversation]);
  }

  return (
    <View>
      {/* <ActionCable
        channel={{channel: 'ConversationsChannel'}}
        onReceived={handleReceivedConversation}
      /> */}
      {conversations && conversations.map((c) => <Text>{c.title}</Text>)}
      {conversations.length ? (
        <Cable
          conversations={conversations}
          // conversations={[]}
          handleReceivedMessage={handleReceivedMessage}
        />
      ) : null}
    </View>
  );
}
