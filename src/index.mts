// Author: Igor Dimitrijević (@igorskyflyer)

import { readFileSync } from 'node:fs'

const yamlFrontMatterRegex: RegExp = /^---\s*[\s\S]*?\n---\s*/

/**
 * Strips YAML front matter from a String.
 *
 * Example YAML front matter:
 *
 * \---
 * author: John Doe
 * publishDate: 27 Aug, 2024
 * \---
 *
 * @param content The string whose YAML front matter to strip.
 * @returns The original String without the YAML front matter.
 */
export function stripString(content: string): string {
  if (typeof content !== 'string') {
    return ''
  }

  return content.replace(yamlFrontMatterRegex, '').trim()
}

/**
 * Strips YAML front matter from a file.
 * @param path The path to the file.
 * @throws Will throw an error if the file path is not valid or the file cannot be read.
 * @returns The original file contents as a String without the YAML front matter.
 */
export function stripFile(path: string): string {
  if (typeof path !== 'string') {
    throw new Error('No valid path specified.')
  }

  try {
    const content: string = readFileSync(path, 'utf-8')

    return stripString(content)
  } catch {
    throw new Error("Couldn't read the specified file.")
  }
}
