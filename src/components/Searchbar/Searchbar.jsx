
import React from 'react';
import { toast } from 'react-toastify';
import { AiOutlineSearch } from 'react-icons/ai';
import css from './Searchbar.module.css'

export class Searchbar extends React.Component {
  state = {
    searchText: '',
  };

  handleChange = e => {
    this.setState({ searchText: e.target.value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchText.trim() === '') {
      toast.error("Sorry, the search string can't be empty. Please try again.");
      return;
    }
    this.props.onSubmit(this.state.searchText);
    this.setState({ searchText: '' });
  };

  render() {
    const { searchText } = this.state;
    return (
      <header className={css.Searchbar} onSubmit={this.handleSubmit}>
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
      onChange={this.handleChange}
      value={searchText}
    />
  </form>
</header>
    );
  }
}





