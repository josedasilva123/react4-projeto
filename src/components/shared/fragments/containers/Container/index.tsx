interface Props {
  children: React.ReactNode;
  size?: "big" | "small" | "extra-small" | "";
}

export function Container({ children, size = "" }: Props) {
  return <div className={`container ${size}`}>{children}</div>;
}
