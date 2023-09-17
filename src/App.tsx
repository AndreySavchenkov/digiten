import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { MainLayout } from './layouts/MainLayout/MainLayout';
import { Posts } from './components/Posts/Posts';
import { FilterSortMenu } from './components/FilterSortMenu/FilterSortMenu';
import { useFilterAndSort } from './hooks/useFilterAndSort';
import posts from './mockData/data.json'

function App() {

const {
  endDate, 
  startDate, 
  setEndDate, 
  sortedPosts, 
  setStartDate, 
  toggleSortOrder, 
  selectedCategory, 
  setSelectedCategory, 
  sortByDateAscending, 
} = useFilterAndSort(posts);

  return (
    <MainLayout>
      <FilterSortMenu 
        setEndDate={setEndDate}
        endDate={endDate as Date}
        setStartDate={setStartDate}
        startDate={startDate as Date}
        toggleSortOrder={toggleSortOrder}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        sortByDateAscending={sortByDateAscending}
      />
      <Posts posts={sortedPosts}/>
    </MainLayout>
  );
}

export default App;
