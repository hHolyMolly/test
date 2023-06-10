export type routerType<T = string> = {
  title: T;
  path: T;
  element: React.ReactElement;
};
