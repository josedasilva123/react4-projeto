import { HTMLAttributes } from "react";

interface Props extends Omit<HTMLAttributes<HTMLElement>, "className"> {
  children: React.ReactNode;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export function Title({ children, tag, ...rest }: Props) {
  return (
    <>
      {tag === "h1" ? <h1 {...rest}>{children}</h1> : null}
      {tag === "h2" ? <h2 {...rest}>{children}</h2> : null}
      {tag === "h3" ? <h3 {...rest}>{children}</h3> : null}
      {tag === "h4" ? <h4 {...rest}>{children}</h4> : null}
      {tag === "h5" ? <h5 {...rest}>{children}</h5> : null}
      {tag === "h6" ? <h6 {...rest}>{children}</h6> : null}
    </>
  );
}
