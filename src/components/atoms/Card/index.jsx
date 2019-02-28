import React from 'react';
import PropTypes from 'prop-types';

import { Container, Bar } from './styles';

class Card extends React.Component {
  state = {
    x: 0,
    y: 0,
    lastPageX: 0,
    lastPageY: 0,
    showBar: true,
    isDragging: false,
  }

  componentWillMount() {
    this.ref = React.createRef();
  }

  componentDidMount() {
    const { current } = this.ref;
    const bounds = current.getBoundingClientRect();
    this.centralize(bounds);
  }

  centralize = (bounds) => {
    const midX = window.innerWidth / 2;
    const midY = window.innerHeight / 2;
    this.updatePosition(
      midX - (bounds.width / 2),
      midY - (bounds.height / 2),
    );
  }

  updatePosition = (x, y) => this.setState({ x, y });

  handleMouseDown = (event) => {
    event.preventDefault();

    this.setState({
      isDragging: true,
    });
    this.setState({ lastPageX: event.pageX, lastPageY: event.pageY });
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
  }

  handleMouseMove = (event) => {
    if (this.state.isDragging) {
      const {
        x, y,
        lastPageX, lastPageY,
      } = this.state;
      const deltaX = event.pageX - lastPageX;
      const deltaY = event.pageY - lastPageY;

      this.updatePosition(x + deltaX, y + deltaY);
      this.setState({ lastPageX: event.pageX, lastPageY: event.pageY });
    }
  }

  handleMouseUp = () => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    this.setState({ isDragging: false });
  }

  render() {
    const { children, ...props } = this.props;
    const { x, y, showBar } = this.state;
    return (
      <Container posX={x} posY={y} ref={this.ref} {...props}>
        <Bar onMouseDown={this.handleMouseDown} visible={showBar} />
        {children}
      </Container>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Card;
