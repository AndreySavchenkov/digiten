import React, { FC } from 'react'
import { SortByDate } from './components/SortByDate/SortByDate'
import { FilterByDate } from './components/FilterByDate/FilterByDate'
import { FilterByCategory } from './components/FilterByCategory/FilterByCategory'
import { CategoriesEnum } from '../../types'
import styles from './FilterSortMenu.module.scss';

type FilterSortMenuProps = {
  selectedCategory: CategoriesEnum | 'all';
  setSelectedCategory: (category: CategoriesEnum | 'all') => void;
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
  sortByDateAscending: boolean;
  toggleSortOrder: () => void;
}

export const FilterSortMenu:FC<FilterSortMenuProps> = ({
  selectedCategory,
  setSelectedCategory,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  sortByDateAscending,
  toggleSortOrder,
}) => {
  return (
    <div className={styles.menu}>
      <SortByDate toggleSortOrder={toggleSortOrder} sortByDateAscending={sortByDateAscending} />
      <FilterByDate startDate={startDate as Date} endDate={endDate as Date} setStartDate={setStartDate} setEndDate={setEndDate}  />
      <FilterByCategory selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
    </div>
  )
}
