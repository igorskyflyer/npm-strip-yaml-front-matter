<h1 align="center">--- Strip YAML front matter ---</h1>

<br>

<p align="center">
	🦓 Strips YAML front matter from a String or a file. 👾
</p>

<br>
<br>

<div align="center">
	<blockquote>
		<br>
		<h4>💖 Support further development</h4>
		<span>I work hard for every project, including this one and your support means a lot to me!
		<br>
		Consider buying me a coffee. ☕
		<br>
		<strong>Thank you for supporting my efforts! 🙏😊</strong></span>
		<br>
		<br>
		<a href="https://ko-fi.com/igorskyflyer" target="_blank"><img src="https://raw.githubusercontent.com/igorskyflyer/igorskyflyer/main/assets/ko-fi.png" alt="Donate to igorskyflyer" width="150"></a>
		<br>
		<br>
		<a href="https://github.com/igorskyflyer"><em>@igorskyflyer</em></a>
		<br>
		<br>
		<br>
	</blockquote>
</div>

<br>

## 🤔 Introduction

YAML front matter is a special text/code block that is added to the top of a file, usually Markdown (`.md`), sometimes even HTML (`.html`) files and provides meta data about the given file or provide means to do additional processing of the file. It is mostly used by static site generators (SSG) or content management systems (CMS).

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

## 🕵🏼 Usage

Install it by executing:

```shell
npm i "@igor.dvlpr/strip-yaml-front-matter"
```

<br>

## 🤹🏼 API

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

> [!WARNING]
> Will throw an error if the file path is not valid or the file cannot be read.  
 
Returns the original file contents as a String without the YAML front matter.

---

## 🪪 License

Licensed under the MIT license which is available here, [MIT license](https://github.com/igorskyflyer/npm-strip-yaml-front-matter/blob/main/LICENSE).

---

## 🧬 Related

[@igor.dvlpr/is-rootdir](https://www.npmjs.com/package/@igor.dvlpr/is-rootdir)

> _🔼 Provides a way to check if the given path is the root drive/directory. ⛔_

<br>

[@igor.dvlpr/recursive-readdir](https://www.npmjs.com/package/@igor.dvlpr/recursive-readdir)

> _📖 Provides recursive readdir() and readdirSync() functions. 📁_

<br>

[@igor.dvlpr/extendable-string](https://www.npmjs.com/package/@igor.dvlpr/extendable-string)

> _🦀 ExtendableString allows you to create strings on steroids that have custom transformations applied to them, unlike common, plain strings. 🪀_

<br>

[@igor.dvlpr/regkeys](https://www.npmjs.com/package/@igor.dvlpr/regkeys)

> _📚 An npm package for fetching Windows registry keys. 🗝_

<br>

[@igor.dvlpr/zep](https://www.npmjs.com/package/@igor.dvlpr/zep)

> _🧠 Zep is a zero-dependency, efficient debounce module. ⏰_

<br>
<br>

>
> Provided by **Igor Dimitrijević** ([*@igorskyflyer*](https://github.com/igorskyflyer/)).
>
