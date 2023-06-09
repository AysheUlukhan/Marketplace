# Gulp with TailwindCSS Starter Kit

Gulp with TailwindCSS v3 Starter Kit ( ~~Updated with [TailwindCSS JIT](https://github.com/tailwindlabs/tailwindcss-jit)~~ - **latest tailwind has JIT is built-in** ) - A repo which makes your development easier with predefined gulp tasks that help you to use [tailwindcss](https://github.com/tailwindcss/tailwindcss) with simple commands.

## Included Tailwind Plugins

You can disable the plugins from `config.js` using `plugins` option

- [@tailwindcss/forms](https://github.com/tailwindlabs/tailwindcss-forms)
- [@tailwindcss/line-clamp](https://github.com/tailwindlabs/tailwindcss-line-clamp)
- [@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin)
- [@tailwindcss/container-queries](https://github.com/tailwindlabs/tailwindcss-container-queries)

## Usage

1. Install Dev Depedencies

```sh
npm install // or yarn install
```

2. To start development and server for live preview

```sh
npm run dev // or yarn dev
```

3. To generate minifed files for production server

```sh
npm run prod // or yarn prod
```

# Configuration

To change the path of files and destination/build folder, edit options in **config.js** file

```sh
{
  config: {
    ...
    port: 9050 // browser preview port
  },
  plugins: {
    typograpy: true,
    forms: true,
    lineClamp: true,
    containerQueries: true,
  },
  paths: {
    root: "./",
    src: {
        base: "./src",
        css: "./src/css",
        js: "./src/js",
        img: "./src/img"
    },
    dist: {
        base: "./dist",
        css: "./dist/css",
        js: "./dist/js",
        img: "./dist/img"
    },
    build: {
        base: "./build",
        css: "./build/css",
        js: "./build/js",
        img: "./build/img"
    }
  }
  ...
}
```
