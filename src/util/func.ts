export function flatten<T>(array: (T | T[])[]): T[] {
  return array.reduce<T[]>((acc, value) => {
    if (Array.isArray(value)) {
      return acc.concat(value);
    }
    return acc.concat([value]);
  }, []);
}
