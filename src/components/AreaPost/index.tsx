import { Container } from "./style";

import { Post } from "../Post";
import posts from "../../Posts/posts.json";

export function AreaPost() {
  return (
    <Container>
      {posts.map((post, index) => (
        <Post
          key={index}
          title={post.title}
          description={post.description}
          date={post.date}
        />
      ))}
    </Container>
  );
}
