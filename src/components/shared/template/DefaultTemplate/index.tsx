import { SearchForm } from "../../../advert/structures/forms/SearchForm";
import { Footer } from "../Footer";
import { Header } from "../Header";

interface Props {
  children: React.ReactNode;
}

export function DefaultTemplate({ children }: Props) {
  return (
    <>
      <Header />
      <SearchForm />
      <main>{children}</main>
      <Footer />
    </>
  );
}
