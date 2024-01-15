import { PostCard } from "../postCard";
import "./styles.css";

export const Posts = ({ posts }) => {
  return (
    <div className="posts">
      {posts.map((posts) => (
        <PostCard key={posts.id} post={posts} />
      ))}
    </div>
  );
};
