<div align="center">
  <img src="https://raw.githubusercontent.com/igorskyflyer/npm-strip-yaml-front-matter/main/media/strip-yaml-front-matter.png" alt="Icon of Strip YAML Front-Matter" width="256" height="256">
  <h1>Strip YAML Front-Matter</h1>
</div>

<br>

<h4 align="center">
  🦓 Strips YAML front matter from a String or a file. 👾
</h4>

<br>
<br>

## 📃 Table of Contents

- [Features](#-features)
- [Usage](#-usage)
- [API](#-api)
- [Changelog](#-changelog)
- [Support](#-support)
- [License](#-license)
- [Related](#-related)
- [Author](#-author)

<br>
<br>

## 🤖 Features

- 🧹 Remove YAML front matter from any string
- 📄 Clean YAML front matter from files directly
- ⚡ Simple, fast, regex‑powered stripping
- 🚫 Handles invalid input gracefully
- 🔒 Throws clear errors on bad file paths
- 📝 Keeps only the meaningful content
- 🛠 Works out‑of‑the‑box, zero dependencies

<br>
<br>

## 🕵🏼 Usage

Install it by executing any of the following, depending on your preferred package manager:

```bash
pnpm add @igorskyflyer/strip-yaml-front-matter
```

```bash
yarn add @igorskyflyer/strip-yaml-front-matter
```

```bash
npm i @igorskyflyer/strip-yaml-front-matter
```

<br>
<br>

## 🤹🏼 API

YAML front matter is a special text/code block placed between two triple-dashed lines that is added to the top of a file, usually Markdown (`.md`), sometimes even HTML (`.html`) files and provides meta data about the given file or provide means to do additional processing of the file. It is mostly used by static site generators (SSG) or content management systems (CMS).

<br>

Here's an example Markdown file:

`example.md`
```yaml
---
 author: John Doe
 publishDate: 27 Aug, 2024
---

Some Markdown content.
```

<br>

```ts
function stripString(content: string): string
```

Strips YAML front matter from a String.

- `content`: `string`, the string whose YAML front matter to strip.  

Returns the original String without the YAML front matter.

<br>
<br>

```ts
function stripFile(path: string): string
```

Strips YAML front matter from a file.

- `path`: `string`, the path to the file.  

<br>

> ⚠️ **WARNING**
>
> *Will throw an error if the file path is not valid or the file cannot be read.*
>
 
<br>

Returns the original file contents as a String without the YAML front matter.

<br>
<br>

## 📝 Changelog

📑 The changelog is available here, [CHANGELOG.md](https://github.com/igorskyflyer/npm-strip-yaml-front-matter/blob/main/CHANGELOG.md).

<br>
<br>

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-strip-yaml-front-matter/blob/main/LICENSE).

<br>
<br>

## 💖 Support

<div align="center">
  I work hard for every project, including this one and your support means a lot to me!
  <br>
  Consider buying me a coffee. ☕
  <br>
  <br>
  <a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="180" height="46"></a>
  <br>
  <br>
  <em>Thank you for supporting my efforts!</em> 🙏😊
</div>

<br>
<br>

## 🧬 Related

[@igorskyflyer/is-rootdir](https://www.npmjs.com/package/@igorskyflyer/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igorskyflyer/recursive-readdir](https://www.npmjs.com/package/@igorskyflyer/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igorskyflyer/extendable-string](https://www.npmjs.com/package/@igorskyflyer/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igorskyflyer/regkeys](https://www.npmjs.com/package/@igorskyflyer/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

<br>

[@igorskyflyer/zep](https://www.npmjs.com/package/@igorskyflyer/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

<br>
<br>
<br>

## 👨🏻‍💻 Author
Created by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
