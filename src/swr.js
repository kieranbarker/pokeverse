// Makes data fetching easier: https://swr.vercel.app/
export { default } from "swr";
export const fetcher = (...args) => fetch(...args).then((res) => res.json());
