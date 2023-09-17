import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import styles from './FilterByDate.module.scss';

type FilterByDateProps = {
  startDate: Date;
  endDate: Date;
  setStartDate: (date: Date) => void;
  setEndDate: (date: Date) => void;
};

export const FilterByDate: FC<FilterByDateProps> = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate
}) => {
  return (
    <div className={styles.filter}>
      <div className={styles.item}>
        <span>Start Date:</span>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date!)} />
      </div>
      <div className={styles.item}>
        <span>End Date:</span>
        <DatePicker selected={endDate} onChange={(date) => setEndDate(date!)} />
      </div>
    </div>
  );
};
