import { useEffect, useState } from "react";
import { postsApi } from "../api/api";
import { articles } from "../data/articles";
import { categoryImages, imgs } from "../assets/images";

export function normalizePost(post) {
  const image =
    post.images?.[0]?.blobUrl || categoryImages[post.category] || imgs.planets;
  const content = post.content || "";
  return {
    id: post.id,
    title: post.title,
    cat: post.category || "Space science",
    time: `${Math.max(1, Math.ceil(content.split(/\s+/).length / 180))} min read`,
    image,
    excerpt: content.slice(0, 180) + (content.length > 180 ? "..." : ""),
    body: content,
    author: post.authorId
      ? "CosmoSphere researcher"
      : "CosmoSphere Editorial Desk",
    date: post.createdAt
      ? new Date(post.createdAt).toLocaleDateString(undefined, {
          month: "long",
          day: "numeric",
          year: "numeric",
        })
      : "Recently published",
    tags: [post.category || "Space science"],
    postType: post.postType,
  };
}

export function useArticles() {
  const [items, setItems] = useState(articles);
  useEffect(() => {
    postsApi
      .list()
      .then((posts) => setItems(posts.map(normalizePost)))
      .catch(() => {});
  }, []);
  return items;
}
