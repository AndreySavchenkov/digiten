import React, { FC } from 'react';
import { CategoriesEnum } from '../../../../types';
import { DropDownMenu } from '../../../../ui/DropDownMenu/DropDownMenu';
import styles from './FilterByCategory.module.scss';

type FilterByCategoryProps = {
  selectedCategory: CategoriesEnum | 'all';
  setSelectedCategory: (category: CategoriesEnum | 'all') => void;
};

export const FilterByCategory: FC<FilterByCategoryProps> = ({
  selectedCategory,
  setSelectedCategory
}) => {
  return (
    <div className={styles.filter}>
      <span>Category:</span>
      <DropDownMenu selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  );
};
