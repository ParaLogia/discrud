import { RECEIVE_MESSAGE } from '../actions/message_actions';

export const createSubscription = (threadId, receiveMessage) => {
  const received = (data) => {
    switch (data.type) {
      case RECEIVE_MESSAGE:
        receiveMessage(JSON.parse(data.message));
        break;

      default:
        break;
    }
  }

  return App.cable.subscriptions.create(
    { 
      channel: 'ChatChannel', 
      id: threadId 
    },
    {
      received
    }
  );
}