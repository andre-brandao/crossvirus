## License Notice

This repository is intentionally unlicensed and adheres
to a [no-permission license](https://choosealicense.com/no-permission/), as
defined by [GitHub](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository#choosing-the-right-license).
By accessing this repository, you acknowledge and agree to the following terms:

- You are **not permitted to copy, distribute, or modify** any part of this repository.
- Access to this repository is provided **exclusively for personal use** on your local machine. Any other use, including use in commercial projects, is prohibited.
- Redistribution of any part of this repository or its contents, whether publicly or privately, is strictly prohibited.

Violation of these terms will result in revocation of access.


### Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/andre-brandao/template

cd deds-template

npm install
# or
pnpm install
# or
yarn install
# or
bun install
```

## Libraries docs

- [DaisyUI](https://daisyui.com/components/) component library
- [Tailwind](https://tailwindcomponents.com/cheatsheet/) css classes but simple
  sometimes too simple
- [Drizzle](https://orm.drizzle.team/) sql orm
- [TRPC](https://trpc.io/docs) typesafe api
- [TRPC SvelteKit](https://icflorescu.github.io/trpc-sveltekit/) trpc svelte
  adapter
- [Zod](https://zod.dev/) Type Validations
- [LayerCHart](https://www.layerchart.com/) Beutiful Charts
- [Svelte5](https://svelte-5-preview.vercel.app/docs/introduction)
- [SvelteKit](https://kit.svelte.dev/docs/introduction)
- [Svelte Tutorial](https://learn.svelte.dev/tutorial/introducing-sveltekit)

## Project Structure


## Developing

Once you've cloned the project and installed dependencies with `npm install` (or
`pnpm install`, `yarn` or `bun`), start a development server:

```bash
npm run dev
```

## Building

To create a production version of your app:

```bash
npm run build
```


## DB
Run Local DB
```bash
docker compose up
```

## Drizzle

Drizzle ORM Commands The following commands help manage the database schema and
migrations, refer to [Commands Docs](https://orm.drizzle.team/kit-docs/commands)

Push changes to the development database:
 Push command is good for situations where you need to quickly test new schema designs or changes in a local development environment, allowing for fast iterations without the overhead of managing migration files. 
```bash
npm run db:push
```

Apply database migrations:

```bash
npm run db:migrate --name <migration name>
```

Open Drizzle Studio:

```bash
npm run db:studio
```

Seed the database using faker.js:

```bash
npm run db:seed
```

Generate database types:

```bash
npm run db:generate
```

Drop the database:

```bash
npm run db:drop
```

Bring the database up (alias for db:push and db:migrate):

```bash
npm run db:up
```

Check the database schema:

```bash
npm run db:check
```

# Contributing

Feel free to submit issues or pull requests. Contributions are welcome!
