export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  return {
    setMessage: function (text) {
      return (message = text);
    },
    sendMessage: function (name) {
      console.log(
        `Hello, ${name}! ${message}! This message was sent by ${sender}`
      );
    },
    setSender: function (text) {
      return (sender = text);
    },
  };
}
const messanger1 = createMessenger();
const messanger2 = createMessenger();
const messanger3 = createMessenger();

messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
