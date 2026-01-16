import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { getAdvert } from "../../pages/adverts/services";
import type { Advert } from "../../pages/adverts/type-advert";

export const useFetchAdvert = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [advert, setAdvert] = useState<Advert | null>(null);

  useEffect(() => {
    if (!id) {
      navigate("/not-found", { replace: true });
      return;
    }
    const fetchAdvert = async () => {
      try {
        const data = await getAdvert(id);
        setAdvert(data);
      } catch (error) {
        if (error instanceof AxiosError && error.response?.status === 404) {
          navigate("/not-found", { replace: true });
        } else {
          console.error("Error al obtener el anuncio:", error);
        }
      }
    };

    fetchAdvert();
  }, [id, navigate]);

  return {
    id,
    advert,
    setAdvert,
  };
};
