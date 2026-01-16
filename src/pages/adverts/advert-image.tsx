import { useState } from "react";
import type { Advert } from "./type-advert";

interface Props {
  advert: Advert | null;
}
export const AdvertImage = ({ advert }: Props) => {
  const [imageError, setImageError] = useState(false);
  if (!advert) {
    return <p className="py-8 text-center">Cargando anuncio...</p>;
  }
  
  return (
    <>
      {!imageError && advert.photo ? (
        <a
          href={advert.photo}
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <img
            src={advert.photo}
            alt={advert.name || "Imagen del anuncio"}
            className="mx-auto max-h-[300px] w-full max-w-md rounded-xl object-contain"
            onError={(event) => {
              event.currentTarget.onerror = null;
              event.currentTarget.src = "/no-fotos.png";
              setImageError(true);
            }}
          />
        </a>
      ) : (
        <>
          <img
            src="/no-fotos.png"
            alt="Sin imagen disponible"
            className="mx-auto max-h-[300px] w-full max-w-md rounded-xl object-contain"
          />
          <p className="text-center text-sm text-gray-500">
            Imagen del anuncio {advert.name} no disponible
          </p>
        </>
      )}
    </>
  );
};
