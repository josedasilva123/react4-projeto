import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
}

export function DefaultTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
