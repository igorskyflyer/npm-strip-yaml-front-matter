// Author: Igor Dimitrijević (@igorskyflyer)

import { assert, describe, suite, test } from 'vitest'
import { stripFile, stripString } from '../src/index.mjs'

// @cspell:disable

const yamlRegular: string = `---
title: My Awesome Post
date: 2024-07-10
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ultrices nisi. Suspendisse rutrum mi enim, eu egestas lorem convallis in. Proin congue mi finibus gravida varius. Donec vel eleifend velit. Vivamus bibendum nunc quis tempor cursus. Donec sollicitudin turpis malesuada, condimentum metus non, molestie tellus. Mauris non imperdiet lectus.`

const yamlTricky: string = `---
title: My---Awesome---Post
date: 2024-07-10
---

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ultrices nisi. Suspendisse rutrum mi enim, eu egestas lorem convallis in. Proin congue mi finibus gravida varius. Donec vel eleifend velit. Vivamus bibendum nunc quis tempor cursus. Donec sollicitudin turpis malesuada, condimentum metus non, molestie tellus. Mauris non imperdiet lectus.`

const yamlResult: string =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque eget ultrices nisi. Suspendisse rutrum mi enim, eu egestas lorem convallis in. Proin congue mi finibus gravida varius. Donec vel eleifend velit. Vivamus bibendum nunc quis tempor cursus. Donec sollicitudin turpis malesuada, condimentum metus non, molestie tellus. Mauris non imperdiet lectus.'

describe('🧪 --- Strip YAML front matter --- tests 🧪', () => {
  suite('stripString()', () => {
    test('#1 should return an empty String', () => {
      // @ts-ignore
      assert.isEmpty(stripString())
    }) // #1

    test('#2 should return an empty String', () => {
      // @ts-ignore
      assert.isEmpty(stripString(''))
    }) // #2

    test('#3 should return "abc"', () => {
      assert.strictEqual(stripString('abc'), 'abc')
    }) // #3

    test('#4 should return a processed String', () => {
      assert.strictEqual(stripString(yamlRegular), yamlResult)
    }) // #4

    test('#5 should return a processed String', () => {
      assert.strictEqual(stripString(yamlTricky), yamlResult)
    }) // #5
  })

  suite('stripFile()', () => {
    test('#6 should throw', () => {
      assert.throws(() => {
        // @ts-ignore
        stripFile()
      })
    }) // #6

    test('#7 should throw', () => {
      assert.throws(() => {
        // @ts-ignore
        stripFile('djodjajdoa')
      })
    }) // #7

    test('#8 should return a processed String', () => {
      assert.strictEqual(stripFile('./test/data/regular.md'), yamlResult)
    }) // #8

    test('#9 should return a processed String', () => {
      assert.strictEqual(stripFile('./test/data/tricky.md'), yamlResult)
    }) // #9
  })
})
