import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

export class ImageGalleryItem extends Component {
  state = {
    modalOpen: false,
  };

  openModal = () => {
    this.setState({ modalOpen: true });
  };

  closeModal = () => {
    this.setState({ modalOpen: false });
  };

  render() {
    const { image } = this.props;
    const { modalOpen } = this.state;

    return (
      <>
        <li onClick={this.openModal}>
          <img src={image.webformatURL} alt="sdas" width={200} />
        </li>
        {modalOpen && (
          <Modal
            image={image.largeImageURL}
            isOpen={modalOpen}
            onClose={this.closeModal}
          />
        )}
      </>
    );
  }
}
