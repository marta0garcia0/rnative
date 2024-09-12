import axios from "axios";
import { Todo, User } from "./models";

const baseURL = "https://jsonplaceholder.typicode.com/";

export const getUsers = async (): Promise<User[]> => {
  const { data, status } = await axios.get<User[]>(`${baseURL}/users`);
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getUser = async (id: number): Promise<User> => {
  const { data, status } = await axios.get<User>(`${baseURL}/users/${id}`);
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getUserTodos = async (id: number): Promise<Todo[]> => {
  const { data, status } = await axios.get<Todo[]>(
    `${baseURL}/users/${id}/todos`,
  );
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getUserPosts = async (id: number): Promise<any> => {
  const { data, status } = await axios.get<any>(`${baseURL}/users/${id}/posts`);
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getPostComments = async (id: number): Promise<any> => {
  const { data, status } = await axios.get<any>(
    `${baseURL}/posts/${id}/comments`,
  );
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getUserAlbums = async (id: number): Promise<any> => {
  const { data, status } = await axios.get<any>(
    `${baseURL}/users/${id}/albums`,
  );
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};

export const getAlbumPhotos = async (id: number): Promise<any> => {
  const { data, status } = await axios.get<any>(
    `${baseURL}/albums/${id}/photos`,
  );
  if (status !== 200) throw new Error("Something went wrong");
  return data;
};
