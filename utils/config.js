module.exports = {
  SCHEMAS: {
    BLOGS: "blogs",
  },
  STATUS_CODES: {
    NOT_FOUND: 404,
    SUCCESS: 200,
    SERVER_ERROR: 500,
    URL_NOT_FOUND: 404,
  },
  ROUTES: {
    ROOT: "/",
    BLOG: {
      CREATE: "/create",
      UPDATE: "/update",
      DELETE: "/delete",
      FIND_ONE: '/blog',
      FIND_ALL: '/blogs',
    },
  },
};
