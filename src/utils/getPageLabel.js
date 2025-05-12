// utils/getPageLabel.js
import Cookies from 'js-cookie';

export const getPageLabel = () => {
  const currentPath = Cookies.get('currentPath');

  if (!currentPath) return null;

  if (currentPath === '/') {
    return 'Homepage';
  }

  if (currentPath.startsWith('/category/')) {
    const categoryName = currentPath.split('/category/')[1];
    return `Category - ${capitalize(categoryName)}`;
  }

  if (currentPath.startsWith('/movie/details/')) {
    return `Details`;
  }

  return 'Unknown Page';
};

const capitalize = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
