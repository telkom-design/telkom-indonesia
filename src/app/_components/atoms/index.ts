import dynamic from "next/dynamic";

export const Anchor = dynamic(
  () => import("@legion-ui/core").then((component) => component.Anchor),
  {
    ssr: false,
  },
);

export const Button = dynamic(
  () => import("@legion-ui/core").then((component) => component.Button),
  {
    ssr: false,
  },
);

export const Text = dynamic(
  () => import("@legion-ui/core").then((component) => component.Text),
  {
    ssr: false,
  },
);
