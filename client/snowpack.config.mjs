export default {
  mount: {
    src: "/dist",
    public: "/",
  },
  routes: [
    {
      match: "routes",
      src: ".*",
      dest: "/index.html",
    },
  ],
};
