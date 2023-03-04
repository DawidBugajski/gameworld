import { useSelector } from 'react-redux';

const OpacityNavItem = ({ children }) => {
  const { isMenuOpen } = useSelector((state) => state.toggleMenu);
  const opacity = isMenuOpen ? 'opacity-1' : 'opacity-0';
  return (
    <div className={`transition-all duration-500 ${opacity}`}>{children}</div>
  );
};

export default OpacityNavItem;
