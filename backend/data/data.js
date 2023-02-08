const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "rupom",
        email: "rupom@example.com",
      },
      {
        name: "rakib",
        email: "rakib@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "John Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Guest User",
        email: "guest@example.com",
      },
      {
        name: "rakib",
        email: "rakib@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Guest User",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Shawn",
        email: "Shawn@example.com",
      },
      {
        name: "rakib",
        email: "rakib@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Shawn",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Mithu Talukder",
        email: "jon@example.com",
      },
      {
        name: "mithu",
        email: "mithu@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Jane Doe",
        email: "jane@example.com",
      },
      {
        name: "rakib",
        email: "rakib@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Jane Doe",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "John Doe",
        email: "jon@example.com",
      },
      {
        name: "Piyush",
        email: "piyush@example.com",
      },
      {
        name: "Guest User",
        email: "guest@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Guest User",
      email: "guest@example.com",
    },
  },
];

module.exports = chats;
