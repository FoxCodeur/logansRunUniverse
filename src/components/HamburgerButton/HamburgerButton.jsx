import PropTypes from "prop-types";
import "../Nav/Nav.scss";

const HamburgerButton = () => {
  return <span className="burger-bar"></span>;
};

HamburgerButton.propTypes = {
  opened: PropTypes.bool,
};

HamburgerButton.defaultProps = {
  opened: false,
};

export default HamburgerButton;
