import { IAdvert } from "../../../../../interfaces/advert.interface";

interface Props {
  advert: IAdvert;
}

export function SingleAdvertContentSection({ advert }: Props) {
  const date = new Date(advert.createdAt);

  return (
    <section>
      <h1>{advert.title}</h1>
      <p>{date.toDateString()}</p>
      {advert.image ? (
        <img src={advert.image} alt={`Ilustração ${advert.title}`} />
      ) : null}
      <p>{advert.price}</p>
      <p>{advert.excerpt}</p>
      <p>{advert.content}</p>
    </section>
  );
}
