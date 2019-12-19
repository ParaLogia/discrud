import { RECEIVE_NEW_MESSAGE, REMOVE_MESSAGE } from '../actions/message_actions';

export const createThreadSubscription = (threadId, receiveNewMessage, removeMessage) => {
  const received = (data) => {
    const message = JSON.parse(data.message);

    switch (data.type) {
      case RECEIVE_NEW_MESSAGE:
        receiveNewMessage(message);
        break;

      case REMOVE_MESSAGE:
        removeMessage(message);
        break;

      default:
        console.warn('Unknown socket response to thread subscription: ', data);
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