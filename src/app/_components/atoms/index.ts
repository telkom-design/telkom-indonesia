import dynamic from "next/dynamic";

export const Anchor = dynamic(
  () => import("@legion-ui/core").then((component) => component.Anchor),
  {
    ssr: false,
  }
);

export const Box = dynamic(
  () => import("@legion-ui/core").then((component) => component.Box),
  { ssr: false }
);

export const Button = dynamic(
  () => import("@legion-ui/core").then((component) => component.Button),
  {
    ssr: false,
  }
);

export const Image = dynamic(
  () => import("@legion-ui/core").then((component) => component.Image),
  { ssr: false }
);

export const Select = dynamic(
  () => import("@legion-ui/core").then((component) => component.Select),
  { ssr: false }
);

export const Text = dynamic(
  () => import("@legion-ui/core").then((component) => component.Text),
  {
    ssr: false,
  }
);
