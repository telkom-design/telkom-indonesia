export const checkActiveLink = (url: string, pathname: string) => {
  if (url !== pathname) return;

  return "active";
};
