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
          Likes<p className={css.text}>{likes}</p>
        </li>
        <li className={css.item}><p className={css.text}>{tags.title}</p>
        </li>
        <li className={css.item}>
          Author<p className={css.text}>{user.name}</p>
        </li>
      </ul>
    </div>
  );
}
