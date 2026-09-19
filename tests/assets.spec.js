import { test, expect } from '@playwright/test';
import { existsSync, statSync } from 'node:fs';
import { CONTENT } from '../data/content.js';

const MAX_IMAGE_BYTES = 400_000;

function imagePaths() {
  const paths = new Set();
  for (const lang of ['es', 'en']) {
    const content = CONTENT[lang];
    paths.add(content.hero.photo);
    for (const project of [...content.projects.featured, ...content.projects.other]) {
      if (project.image) paths.add(project.image);
      if (project.logo) paths.add(project.logo);
    }
  }
  return [...paths];
}

test('every image referenced by the content exists and is not empty', () => {
  const missing = imagePaths().filter((path) => !existsSync(path) || statSync(path).size === 0);
  expect(missing).toEqual([]);
});

test('images stay light enough for the web', () => {
  const heavy = imagePaths().filter((path) => existsSync(path) && statSync(path).size > MAX_IMAGE_BYTES);
  expect(heavy).toEqual([]);
});
