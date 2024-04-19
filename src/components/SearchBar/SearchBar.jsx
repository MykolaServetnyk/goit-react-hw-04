import React from "react";
import css from "./SearchBar.module.css";
import { AiOutlineSearch } from "react-icons/ai";
import toast from "react-hot-toast";

export default function SearchBar({ onSubmit }) {
  const onSubmitBar = (event) => {
    event.preventDefault();
    const form = event.target;
    const data = form.elements.topic.value.trim(); // Змінили data.trim() на form.elements.topic.value.trim()
    if (data === "") {
      toast.error("Please, enter your request!");
      return;
    }
    onSubmit(data);
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
      </form>
    </header>
  );
}
