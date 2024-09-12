export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  todos?: Todo[];
  posts?: Post[];
  albums?: Album[];
};

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
  comments?: Comment[];
};

export type Comment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export type Album = {
  userId: number;
  id: number;
  title: string;
  photos?: Photo[];
};

export type Photo = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
