import { test, expect } from '@playwright/test';
import { CONTENT } from '../data/content.js';

function shapeOf(value) {
  if (Array.isArray(value)) return value.map(shapeOf);
  if (value !== null && typeof value === 'object') {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shapeOf(value[key])]));
  }
  return value === null ? 'null' : typeof value;
}

function collectStrings(value, path = '$') {
  if (typeof value === 'string') return [{ path, value }];
  if (Array.isArray(value)) return value.flatMap((item, i) => collectStrings(item, `${path}[${i}]`));
  if (value !== null && typeof value === 'object') {
    return Object.entries(value).flatMap(([key, item]) => collectStrings(item, `${path}.${key}`));
  }
  return [];
}

test('ES and EN content share the same structure', () => {
  expect(shapeOf(CONTENT.en)).toEqual(shapeOf(CONTENT.es));
});

test('no content string is empty', () => {
  for (const lang of ['es', 'en']) {
    const empty = collectStrings(CONTENT[lang]).filter(({ value }) => value.trim() === '');
    expect(empty, `${lang} has empty strings`).toEqual([]);
  }
});

test('content never exposes phone number or salary', () => {
  const text = JSON.stringify(CONTENT).toLowerCase();
  expect(text).not.toContain('7106');
  expect(text).not.toContain('salari');
});

test('excluded repositories are never listed', () => {
  const text = JSON.stringify(CONTENT).toLowerCase();
  for (const banned of ['career-ops', 'employee-finder', '"sigi"']) {
    expect(text).not.toContain(banned);
  }
});

test('projects built on open-source frameworks credit them', () => {
  for (const lang of ['es', 'en']) {
    const other = CONTENT[lang].projects.other;
    expect(other.find((p) => p.id === 'roman').description).toContain('OpenClaw');
  }
});
