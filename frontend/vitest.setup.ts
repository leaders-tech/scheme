/*
This file loads shared test setup for frontend unit tests.
Edit this file when all frontend tests need another shared setup step.
Copy the setup style here when you add another global frontend test helper.
*/

import "@testing-library/jest-dom/vitest";

function createMemoryStorage(): Storage {
  const values = new Map<string, string>();

  return {
    get length() {
      return values.size;
    },
    clear() {
      values.clear();
    },
    getItem(key: string) {
      return values.has(key) ? values.get(key)! : null;
    },
    key(index: number) {
      return Array.from(values.keys())[index] ?? null;
    },
    removeItem(key: string) {
      values.delete(key);
    },
    setItem(key: string, value: string) {
      values.set(key, String(value));
    },
  };
}

const localStorageMock = createMemoryStorage();

Object.defineProperty(window, "localStorage", {
  configurable: true,
  value: localStorageMock,
});
