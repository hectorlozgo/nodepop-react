import type { Advert } from "./type-advert";

interface Props {
  advert: Advert;
}

export const AdvertData = ({ advert }: Props) => {
  return (
    <>
      <h2 className="text-center text-2xl font-semibold text-emerald-900">
        {advert.name}
      </h2>
      <p className="text-center text-gray-700">{advert.tags.join(", ")}</p>
      <p className="text-center text-xl font-semibold text-emerald-800">
        {advert.price} €
      </p>
      <p className="text-center">
        <span
          className={`inline-block rounded-full px-4 py-1 text-sm font-medium shadow-md ${
            advert.sale
              ? "bg-emerald-200 text-emerald-800"
              : "bg-blue-200 text-blue-800"
          }`}
        >
          {advert.sale ? "Compra" : "Venta"}
        </span>
      </p>
    </>
  );
};
