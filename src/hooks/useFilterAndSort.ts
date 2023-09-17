import { useCallback, useState } from "react";
import { CategoriesEnum, PostType } from "../types";

export const useFilterAndSort = (posts: PostType[]) => {
const [selectedCategory, setSelectedCategory] = useState<CategoriesEnum | 'all'>('all');
  const [startDate, setStartDate] = useState<Date | null>(new Date('2021-05-20'));
  const [endDate, setEndDate] = useState<Date | null>(new Date());
  const [sortByDateAscending, setSortByDateAscending] = useState(false);

  const filterPostsByDateRange = useCallback(() => {
    if (startDate && endDate) {
      return posts.filter((post) => {
        const postDate = new Date(post.date);
        return postDate >= startDate && postDate <= endDate;
      });
    }
    return posts;
  }, [startDate, endDate, posts]);

  const filterPostsByCategory = useCallback((filteredPosts: PostType[]) => {
    if (selectedCategory === 'all') {
      return filteredPosts;
    }
    return filteredPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  const sortPosts = useCallback((sortedPosts: PostType[]) => {
    return sortedPosts.sort((a, b) => {
      const dateA = new Date(a.date);
      const dateB = new Date(b.date);

      return sortByDateAscending ? dateA.getTime() - dateB.getTime() : dateB.getTime() - dateA.getTime();
    });
  }, [sortByDateAscending]);

  const filteredPostsByDate = filterPostsByDateRange();
  const filteredPostsByCategory = filterPostsByCategory(filteredPostsByDate);
  const sortedPosts = sortPosts([...filteredPostsByCategory]);

  const toggleSortOrder = () => {
    setSortByDateAscending((prev) => !prev);
  };

return {setEndDate, endDate, setStartDate, startDate, toggleSortOrder, selectedCategory, setSelectedCategory, sortByDateAscending, sortedPosts}
}