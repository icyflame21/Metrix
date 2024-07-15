import team1 from 'assets/team/1.jpg';
import team10 from 'assets/team/10.jpg';


export const rawNewNotifications = [
  {
    id: 1,
    avatar: {
      src: team1,
      size: '2xl'
    },
    children:
      '<strong>Emma Watson</strong> replied to your comment : "Hello world 😍"',
    time: 'Just Now',
    emoji: '💬',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  },

  {
    id: 2,
    avatar: {
      name: 'Albert Brooks',
      size: '2xl'
    },
    children:
      "<strong>Albert Brooks</strong> reacted to <strong>Mia Khalifa's</strong> status",
    time: '9hr',
    emoji: '❤️',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!',
    unread: true
  }
];

export const rawEarlierNotifications = [
  {
    id: 3,
    avatar: {
      src: team10,
      size: 'xl'
    },
    children:
      "<strong>James Cameron</strong> invited to join the group: United Nations International Children's Fund",
    time: '2d',
    emoji: '🙋‍',
    className: 'rounded-0 border-x-0 border-300 border-bottom-0',
    to: '#!'
  }
];
