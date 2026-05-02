
export const useReviews = fetch('/reviews.json').then((res) => res.json());

  

export default useReviews;