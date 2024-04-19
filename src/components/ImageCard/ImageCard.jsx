import css from "./ImageCard.module.css";

export default function ImageCard({
  alt_description,
  tags,
  urls,
  likes,
  user,
}) {
  return (
    <div className={css.container}>
      <img className={css.img} src={urls.small} alt={alt_description} />
      <ul className={css.list}>
        <li className={css.item}>
          Likes: <span className={css.text}>{likes}</span>
        </li>
        <li className={css.item}>
          {/* Tags: <span className={css.text}>{tags.title}</span> */}
        </li>
        <li className={css.item}>
          Author: <span className={css.text}>{user.name}</span>
        </li>
      </ul>
    </div>
  );
}
