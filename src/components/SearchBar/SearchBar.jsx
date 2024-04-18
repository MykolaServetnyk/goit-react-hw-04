import css from "./SearchBar.module.css"
import { AiOutlineSearch } from "react-icons/ai";
import toast, { Toaster } from "react-hot-toast";


export default function SearchBar({ onSubmit }) {
  const onSubmitBar = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.elements.topic.value;
    if (data.trim() === "") {
      toast.error("Please, enter your request!");
      return;
    }
    onSubmit(data.trim());
    form.reset();
  };

  return (
    <header className={css.header}>
      <form className={css.form} onSubmit={onSubmitBar}>
        <input
          className={css.input}
          type="text"
          name="topic"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />

        <button className={css.btn} type="submit">
          <AiOutlineSearch /> Search
        </button>
        <Toaster />
      </form>
    </header>
  );
}