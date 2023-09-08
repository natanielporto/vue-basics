const app = Vue.createApp({
  data() {
    return {
      url: "https://www.google.com",
      showBooks: true,
      title: "This is a title",
      author: "Myself",
      age: 42,
      books: [
        {
          title: "This is a title",
          author: "Myself",
          age: 42,
          img: "assets/1.jpg",
          isFav: true,
        },
        {
          title: "This is a title",
          author: "Myself",
          age: 42,
          img: "assets/2.jpg",
          isFav: false,
        },
        {
          title: "This is a title",
          author: "Myself",
          age: 42,
          img: "assets/3.jpg",
          isFav: true,
        },
      ],
      x: 0,
      y: 0,
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
    toggleShowBooks() {
      this.showBooks = !this.showBooks;
    },
    handleEvent(e, data) {
      console.log(e, e.type);
      if (data) {
        console.log(data);
      }
    },
    handleMousemove(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
    },
    toggleIsFav(book) {
      book.isFav = !book.isFav;
    },
  },
  computed: {
    filteredBooks() {
      return this.books.filter((book) => book.isFav);
    },
  },
});

app.mount("#app");
