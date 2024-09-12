import {
  getUsers,
  getUser,
  getUserTodos,
  getUserPosts,
  getPostComments,
  getUserAlbums,
  getAlbumPhotos,
} from "./../api";

describe("API Integration Tests", () => {
  jest.setTimeout(10000);

  it("should fetch all users", async () => {
    const users = await getUsers();
    expect(users.length).toBeGreaterThan(0);
    expect(users[0]).toHaveProperty("id");
    expect(users[0]).toHaveProperty("name");
  });

  it("should fetch a single user", async () => {
    const user = await getUser(1);
    expect(user).toHaveProperty("id", 1);
    expect(user).toHaveProperty("name");
  });

  it("should fetch user todos", async () => {
    const todos = await getUserTodos(1);
    expect(todos.length).toBeGreaterThan(0);
    expect(todos[0]).toHaveProperty("id");
    expect(todos[0]).toHaveProperty("title");
  });

  it("should fetch user posts", async () => {
    const posts = await getUserPosts(1);
    expect(posts.length).toBeGreaterThan(0);
    expect(posts[0]).toHaveProperty("id");
    expect(posts[0]).toHaveProperty("title");
  });

  it("should fetch post comments", async () => {
    const comments = await getPostComments(1);
    expect(comments.length).toBeGreaterThan(0);
    expect(comments[0]).toHaveProperty("id");
    expect(comments[0]).toHaveProperty("body");
  });

  it("should fetch user albums", async () => {
    const albums = await getUserAlbums(1);
    expect(albums.length).toBeGreaterThan(0);
    expect(albums[0]).toHaveProperty("id");
    expect(albums[0]).toHaveProperty("title");
  });

  it("should fetch album photos", async () => {
    const photos = await getAlbumPhotos(1);
    expect(photos.length).toBeGreaterThan(0);
    expect(photos[0]).toHaveProperty("id");
    expect(photos[0]).toHaveProperty("url");
  });
});
