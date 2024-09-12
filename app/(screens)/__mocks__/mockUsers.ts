import { User } from "./../../api/models";

const mockUsers: User[] = [
  {
    id: 1,
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    address: {
      street: "123 Elm St",
      suite: "Apt 4",
      city: "Gotham",
      zipcode: "12345",
      geo: {
        lat: "40.7128",
        lng: "-74.0060",
      },
    },
    phone: "555-555-5555",
    website: "johndoe.com",
    company: {
      name: "Doe Enterprises",
      catchPhrase: "We do things differently",
      bs: "innovate synergy",
    },
    todos: [
      {
        userId: 1,
        id: 1,
        title: "Complete unit tests",
        completed: false,
      },
      {
        userId: 1,
        id: 2,
        title: "Write documentation",
        completed: true,
      },
    ],
    posts: [
      {
        userId: 1,
        id: 1,
        title: "First Post",
        body: "This is the body of the first post.",
        comments: [
          {
            postId: 1,
            id: 1,
            name: "Alice",
            email: "alice@example.com",
            body: "Great post!",
          },
          {
            postId: 1,
            id: 2,
            name: "Bob",
            email: "bob@example.com",
            body: "Thanks for sharing!",
          },
        ],
      },
    ],
    albums: [
      {
        userId: 1,
        id: 1,
        title: "Vacation Photos",
        photos: [
          {
            albumId: 1,
            id: 1,
            title: "Beach",
            url: "https://example.com/beach.jpg",
            thumbnailUrl: "https://example.com/beach-thumbnail.jpg",
          },
          {
            albumId: 1,
            id: 2,
            title: "Mountains",
            url: "https://example.com/mountains.jpg",
            thumbnailUrl: "https://example.com/mountains-thumbnail.jpg",
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    username: "janesmith",
    email: "janesmith@example.com",
    address: {
      street: "456 Oak St",
      suite: "Suite 2",
      city: "Metropolis",
      zipcode: "67890",
      geo: {
        lat: "34.0522",
        lng: "-118.2437",
      },
    },
    phone: "555-555-1234",
    website: "janesmith.com",
    company: {
      name: "Smith Solutions",
      catchPhrase: "Excellence in every solution",
      bs: "leverage paradigms",
    },
    todos: [
      {
        userId: 2,
        id: 3,
        title: "Update resume",
        completed: false,
      },
    ],
    posts: [],
    albums: [],
  },
];

export default mockUsers;
