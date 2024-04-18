
import css from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

export default function ImageGallery({ items }) {
  return (
    <ul className={css.list}>
      {items.map(({ id, alt_description, tags, urls, likes, user }) => (
        <li key={id}>
          <ImageCard
            alt_description={alt_description}
            tags={tags}
            urls={urls}
            likes={likes}
            user={user}
          />
        </li>
      ))}
    </ul>
  );
}
