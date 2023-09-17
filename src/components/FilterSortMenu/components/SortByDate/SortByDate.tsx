import React, { FC } from 'react';
import sortASC from '../../../../icons/sortASC.svg';
import sortDESC from '../../../../icons/sortDESC.svg';
import styles from './SortByDate.module.scss';

type SortByDateProps = {
  sortByDateAscending: boolean;
  toggleSortOrder: () => void;
};

export const SortByDate: FC<SortByDateProps> = ({ sortByDateAscending, toggleSortOrder }) => {
  return (
    <div className={styles.sort}>
      <span>Date Sorting:</span>
      <div className={styles.icon} onClick={toggleSortOrder}>
        {sortByDateAscending ? (
          <img src={sortDESC} alt="sort icon" />
        ) : (
          <img src={sortASC} alt="sort icon" />
        )}
      </div>
    </div>
  );
};
