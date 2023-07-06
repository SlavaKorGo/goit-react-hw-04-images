
import React, {useState} from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css'

export function Searchbar ({onSubmit}) {
  
  const [searchText, setsearchText] = useState('')

  const handleChange = e => setsearchText(e.target.value.toLowerCase())
   
  const handleSubmit = e => {
    e.preventDefault();
    if (searchText.trim() === '') {
      toast.error("Sorry, the search string can't be empty. Please try again.");
      return;
    }
    onSubmit(searchText);
    setsearchText('');
  };

  
    return (
      <header className={css.Searchbar} onSubmit={handleSubmit}>
  <form className={css.SearchForm}>
    <button type="submit" className={css.SearchFormButton}>
    <AiOutlineSearch />
      <span className={css.SearchFormButtonLabel}>Search</span>
    </button>

    <input
      className={css.SearchFormInput}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
      onChange={handleChange}
      value={searchText}
    />
  </form>
</header>
    );
  
}





