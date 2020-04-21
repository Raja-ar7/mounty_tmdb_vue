let storage = {
  apiKey: 'YOUR_TMDB_API_KEY',
  sessionId: localStorage.getItem('session_id') || null,
  userId: localStorage.getItem('user_id') || null,
  pageTitlePostfix: ' — ' + document.title,
  listTypes: [
    {
      title: 'Top Rated Movies',
      shortTitle: 'Top Rated',
      query: 'top_rated',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Upcoming Movies',
      shortTitle: 'Upcoming',
      query: 'upcoming',
      type: 'collection',
      isCategory: true
    },
    {
      title: 'Search Results',
      query: 'search',
      isCategory: false
    },
  ],
  categories: {},
  // For Browser History
  backTitle: '',
  moviePath: '',
  createMoviePopup: false,
  moviePopupOnHistory: false
};

// Create categories titles
storage.listTypes.forEach(function(listType){
  storage.categories[listType.query] = listType.title;
});

export default storage;
