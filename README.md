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

The deployed Storybook can be accessed [here](https://yurihnrq.github.io/next-blog-front-end/).

### ✅ Testing

To run tests with Jest, run:

```bash
yarn test

# Additionally, is possible to pass desired options
yarn test --watch --coverage
```

## 🚀 Deployment

This project is automatically deployed on [Vercel](https://vercel.com/) whenever a new commit is pushed to the `main` branch. A preview is also deployed for pushes to the `dev` branch.

- Production URL: <https://prod-next-blog.vercel.app/>
- Development Preview URL: <https://next-blog-front-end-git-dev-yurihnrq.vercel.app/>

To prevent preview deploys for others branches, [Ignore Build Setup](https://vercel.com/guides/how-do-i-use-the-ignored-build-step-field-on-vercel) was configured to use the [`ignore_build.sh`](./scripts/ignore_build.sh) script with the following command:

```bash
if [ -e ./scripts/ignore_build.sh ]; then ./scripts/ignore_build.sh; else exit 0; fi
```

This condition was necessary as the storybook `/docs` branch does not contain a `ignore_build.sh` file.

## 📝 License

This project is licensed under the MIT License - see the [`LICENSE`](LICENSE) file for details.
