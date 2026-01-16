import { useState } from "react";
import { Page } from "../../components/layout/page";
import { Button } from "../../components/button";
import { useFetchAdvert } from "../../components/hooks/useFetchAdvert";
import { AdvertImage } from "./advert-image";
import { AdvertData } from "./advert-data";
import { AdvertDelete } from "./advert-delete";

export const AdvertPage = () => {
  const [showConfirm, setShowConfirm] = useState(false);
  const { advert } = useFetchAdvert();

  if (!advert) {
    return <p className="py-8 text-center">Cargando anuncio...</p>;
  }

  const handleDeleteClick = () => setShowConfirm(true);

  return (
    <Page title="Detalle del anuncio">
      <div className="space-y-4">
        <AdvertImage advert={advert} />
        <AdvertData advert={advert} />

        {!showConfirm ? (
          <div className="text-center">
            <Button variant="secondary" onClick={handleDeleteClick}>
              Borrar anuncio
            </Button>
          </div>
        ) : (
          <AdvertDelete />
        )}
      </div>
    </Page>
  );
};
