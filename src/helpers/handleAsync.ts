export const handleRequest = async <T>(
  promise: Promise<T>
): Promise<[T | null, unknown]> => {
  try {
    return [await promise, null];
  } catch (error) {
    return [null, error];
  }
};
