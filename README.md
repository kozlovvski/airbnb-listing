# Airbnb Listing &middot; ![GitHub package.json version](https://img.shields.io/github/package-json/v/kozlovvski/airbnb-listing) ![Codecov](https://img.shields.io/codecov/c/gh/kozlovvski/airbnb-listing?logo=codecov) ![Website](https://img.shields.io/website?url=https%3A%2F%2Fairbnb-listing.vercel.app%2F)

Airbnb rentals listing with MongoDB Atlas + GraphQL backend & Next.js frontend. Database is built with [Sample AirBnB Listings Dataset](https://www.mongodb.com/docs/atlas/sample-data/sample-airbnb/#std-label-sample-airbnb) from MongoDB Docs

Live demo: https://airbnb-listing.vercel.app

## Stack

### Backend

- [MongoDB Atlas](https://www.mongodb.com/atlas/database)
- [MongoDB Atlas GraphQL API](https://www.mongodb.com/docs/atlas/app-services/graphql/) (configuration can be found in `/mongodb` directory)
- [Next.js API Route](https://nextjs.org/docs/api-routes/introduction) serving as a [reverse proxy](https://www.nginx.com/resources/glossary/reverse-proxy-server/) for the MongoDB Atlas GraphQL API (`api/index.page.js`).

### Frontend

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Query](https://react-query-v2.tanstack.com/)
- [Chakra UI](https://chakra-ui.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [next-i18next](https://github.com/i18next/next-i18next)
- [next-pwa](https://github.com/shadowwalker/next-pwa)

### Tools

- [GraphQL Code Generator](https://www.graphql-code-generator.com/)
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

### Tests

- [Jest](https://jestjs.io/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)

### CI & Deployment

- [Vercel](https://vercel.com/docs)
- [Codecov](https://about.codecov.io/)
- [GitHub Actions](https://github.com/features/actions)
