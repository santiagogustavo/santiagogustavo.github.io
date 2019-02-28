import React from 'react';
import PropTypes from 'prop-types';

import {
  Container,
  BarContainer,
  Bar,
  Controls,
  Icon,
} from './styles';

class Card extends React.Component {
  state = {
    x: 0,
    y: 0,
    lastPageX: 0,
    lastPageY: 0,
    showBar: true,
    isMaximized: false,
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

  handleMaximizeRestore = () => this.setState(prevState => (
    { isMaximized: !prevState.isMaximized }
  ));

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
    if (this.state.isDragging && !this.state.isMaximized) {
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
    const {
      x, y, showBar,
      isDragging, isMaximized,
    } = this.state;
    return (
      <Container
        posX={x}
        posY={y}
        ref={this.ref}
        isDragging={isDragging}
        isMaximized={isMaximized}
        {...props}
      >
        <BarContainer visible={showBar}>
          <Bar onMouseDown={this.handleMouseDown} />
          <Controls>
            <Icon className="fa fas fa-window-minimize" />
            <Icon
              className={`fa fas fa-window-${isMaximized ? 'restore' : 'maximize'}`}
              onClick={this.handleMaximizeRestore}
            />
            <Icon className="fa fas fa-times" style={{ fontSize: 16 }} />
          </Controls>
        </BarContainer>
        {children}
      </Container>
    );
  }
}

Card.propTypes = {
  children: PropTypes.oneOfType([PropTypes.any]).isRequired,
};

export default Card;
