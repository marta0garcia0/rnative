import Ionicons from "@expo/vector-icons/Ionicons";
import { StyleSheet, View, Image } from "react-native";

import { Collapsible } from "@/components/Collapsible";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import {
  getAlbumPhotos,
  getUser,
  getUserAlbums,
  getPostComments,
  getUserPosts,
  getUserTodos,
} from "@/app/api/api";
import { useEffect, useState } from "react";
import { NativeStackScreenProps } from "react-native-screens/lib/typescript/native-stack/types";
import { User } from "@/app/api/models";
import { useUser } from "@/app/context/userContext";
import { UserProfile } from "@/app/components/user-profile/UserProfile";
import { ScrollView } from "react-native-gesture-handler";

export default function UserDetailScreen({
  route,
}: NativeStackScreenProps<
  {
    UserList: undefined;
    UserDetail: { id: number };
  },
  "UserDetail"
>) {
  const { users, updateUsers } = useUser();
  const [user, setUser] = useState<User>();
  const { id } = route.params;

  useEffect(() => {
    const userSelected = users.find((u) => u.id === id);
    if (!userSelected)
      getUser(id).then((res) => {
        setUser(res);
      });
    else {
      setUser(userSelected);
    }
  }, [users]);

  const getTodos = (todoId: number) => {
    getUserTodos(todoId).then((res) => {
      updateUsers({
        users: users.map((u) => (u.id !== id ? u : { ...u, todos: res })),
      });
    });
  };

  const getPosts = (userId: number) => {
    getUserPosts(userId).then((res) => {
      updateUsers({
        users: users.map((u) => (u.id !== id ? u : { ...u, posts: res })),
      });
    });
  };

  const getComments = (postId: number) => {
    getPostComments(postId).then((res) => {
      updateUsers({
        users: users.map((u) =>
          u.id !== id
            ? u
            : {
                ...u,
                posts:
                  u.posts?.map((p) =>
                    p.id !== postId
                      ? p
                      : {
                          ...p,
                          comments: res,
                        },
                  ) || [],
              },
        ),
      });
    });
  };

  const getAlbums = (userId: number) => {
    getUserAlbums(userId).then((res) => {
      updateUsers({
        users: users.map((u) => (u.id !== id ? u : { ...u, albums: res })),
      });
    });
  };

  const getPhotos = (albumId: number) => {
    getAlbumPhotos(albumId).then((res) => {
      updateUsers({
        users: users.map((u) =>
          u.id !== id
            ? u
            : {
                ...u,
                albums:
                  u.albums?.map((a) =>
                    a.id !== albumId
                      ? a
                      : {
                          ...a,
                          photos: res,
                        },
                  ) || [],
              },
        ),
      });
    });
  };

  return user ? (
    <ThemedView style={styles.container}>
      <ScrollView>
        <ThemedView style={styles.content}>
          <UserProfile user={user} />

          <Collapsible
            title="Todos"
            onPress={() => {
              if (!user.todos && user.id) {
                getTodos(user.id);
              }
            }}
          >
            <ThemedText>
              {user.todos?.map((todo) => {
                return (
                  <View
                    key={"todo" + todo.id + todo.userId}
                    style={styles.collapsibleItem}
                  >
                    <ThemedText type="defaultSemiBold">
                      {todo.title}
                      <Ionicons
                        size={16}
                        style={[{ marginBottom: -3 }]}
                        name={todo.completed ? "checkmark-done" : "close"}
                      />
                    </ThemedText>
                  </View>
                );
              })}
            </ThemedText>
          </Collapsible>

          <Collapsible
            title="Posts"
            onPress={() => {
              if (!user.posts && user.id) {
                getPosts(user.id);
              }
            }}
          >
            <ThemedText>
              {user.posts?.map((post) => {
                return (
                  <View
                    key={"post" + post.id + post.userId}
                    style={styles.collapsibleItem}
                  >
                    <ThemedText type="subtitle">{post.title}</ThemedText>
                    <ThemedText type="default">{post.body}</ThemedText>
                    <Collapsible
                      title="Comments"
                      onPress={() => {
                        if (!post.comments) {
                          getComments(post.id);
                        }
                      }}
                    >
                      <ThemedText>
                        {post.comments?.map((comment) => {
                          return (
                            <View
                              key={"comment" + comment.id}
                              style={styles.collapsibleItem}
                            >
                              <ThemedText type="subtitle">
                                {comment.name}
                              </ThemedText>
                              <ThemedText type="default">
                                {comment.body}
                              </ThemedText>
                              <ThemedText type="default">
                                {comment.email}
                              </ThemedText>
                            </View>
                          );
                        })}
                      </ThemedText>
                    </Collapsible>
                  </View>
                );
              })}
            </ThemedText>
          </Collapsible>

          <Collapsible
            title="Albums"
            onPress={() => {
              if (!user.albums && user.id) {
                getAlbums(user.id);
              }
            }}
          >
            <ThemedText>
              {user.albums?.map((album) => {
                return (
                  <View
                    key={"album" + album.id + album.userId}
                    style={styles.collapsibleItem}
                  >
                    <ThemedText type="subtitle">{album.title}</ThemedText>
                    <Collapsible
                      title="Photos"
                      onPress={() => {
                        if (!album.photos) {
                          getPhotos(album.id);
                        }
                      }}
                    >
                      <ThemedText>
                        {album.photos?.map((photo) => {
                          return (
                            <View
                              key={"photo" + photo.id}
                              style={styles.collapsibleItem}
                            >
                              <ThemedText type="subtitle">
                                {photo.title}
                              </ThemedText>
                              <ThemedText type="default">
                                {photo.url}
                              </ThemedText>
                              <Image
                                style={{
                                  width: 80,
                                  height: 80,
                                }}
                                source={{
                                  uri: photo.thumbnailUrl,
                                }}
                              />
                            </View>
                          );
                        })}
                      </ThemedText>
                    </Collapsible>
                  </View>
                );
              })}
            </ThemedText>
          </Collapsible>
        </ThemedView>
      </ScrollView>
    </ThemedView>
  ) : null;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 32,
    gap: 16,
    overflow: "hidden",
  },
  header: {
    height: 250,
    overflow: "hidden",
  },
  collapsibleItem: {
    display: "flex",
    paddingTop: 20,
  },
});
