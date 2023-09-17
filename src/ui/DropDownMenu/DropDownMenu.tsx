import React, { FC, useState } from 'react';
import { CategoriesEnum } from '../../types';
import styles from './DropDownMenu.module.scss';
import { capitalizeFirstLetter } from '../../helpers';

type DropDownMenuProps = {
  selectedCategory: CategoriesEnum | 'all';
  setSelectedCategory: (category: CategoriesEnum | 'all') => void;
};

const categoriesForMenu: (CategoriesEnum | 'all')[] = ['all', ...Object.values(CategoriesEnum)];

export const DropDownMenu: FC<DropDownMenuProps> = ({ selectedCategory, setSelectedCategory }) => {
  const [isShowMenu, setIsShowMenu] = useState(false);

  const changeCategoryAndCloseMenu = (category: CategoriesEnum | 'all') => {
    setSelectedCategory(category);
    setIsShowMenu(false);
  };

  return (
    <div className={styles.root}>
      <div onClick={() => setIsShowMenu(true)}>{capitalizeFirstLetter(selectedCategory)}</div>

      {isShowMenu && (
        <div className={styles.menu}>
          {categoriesForMenu.map(
            (category) =>
              category !== selectedCategory && (
                <span
                  className={styles.item}
                  key={category}
                  onClick={() => changeCategoryAndCloseMenu(category)}>
                  {capitalizeFirstLetter(category)}
                </span>
              )
          )}
        </div>
      )}
    </div>
  );
};
