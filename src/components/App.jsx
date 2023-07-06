import React from 'react';
import { ToastContainer } from 'react-toastify';
import {Searchbar} from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';
import {ErrorMessage} from './ErrorMessage/ErrorMessage';
import {Button} from './Button/Button';
import { FetchGallery } from './servise/gallery-api';


 export class App extends React.Component {
  state = {
    searchText: '',
    page: 1,
    perPage: 12,
    totalPages: 0,
    images: [],
    error: null,
    isLoading: false,
  };

  async componentDidUpdate(_, prevState) {
    const { searchText, page, perPage } = this.state;
    if (page !== prevState.page || searchText !== prevState.searchText) {
      this.setState({ isLoading: true });
      try {
        const response = await FetchGallery({ searchText, page, perPage });
        if (response.hits.length === 0) {
          throw new Error(`Sorry, no photo from ${searchText}!`);
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...response.hits],
          totalPages: Math.ceil(response.totalHits / perPage),
          error: null,
        }));
      } catch (error) {
        this.setState({ error: error.message, isLoading: false });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }

  handleSearch = searchText => {
    this.setState({ searchText, page: 1, images: [] });
  };

  handleLoadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, error, page, totalPages, isLoading } = this.state;
    const showLoadMoreButton = images.length !== 0 && page < totalPages;
    return (
      <div>
        <Searchbar onSubmit={this.handleSearch} />
      {isLoading && <Loader />}
      <ImageGallery images={images} />
      {showLoadMoreButton && (
        <Button onClick={this.handleLoadMore} disabled={isLoading}>
          {isLoading ? 'Loading...' : 'Load More'}
        </Button>
      )}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      <ToastContainer autoClose={3000} /></div>
        
    );
  }
}

