# 📰 Next Blog Front End

This project is a front end for the Next Blog API, allowing users to create, read, update, and delete blog posts and comments.

Technologies used:

- Next.js (React)
- Tailwind CSS
- Storybook
- Jest
- ESLint and Prettier
- Husky and lint-staged

## 🤩 Getting Started

This project uses `yarn` as its package manager.

After cloning the repository, install project dependencies:

```bash
yarn install
```

Then create a `.env.local` file in the root directory of the project and add necessary environment variables as describe in the [`.env.example`](.env.example) file.

After that, start the development server with:

```bash
yarn dev
```

### 📕 Storybook

To start Storybook local server, run:

```bash
yarn storybook
```

### ✅ Testing

To run tests with Jest, run:

```bash
yarn test

# Additionally, is possible to pass desired options
yarn test --watch --coverage
```

## 📝 License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.
