import { useNavigate } from "react-router";
import { useFetchAdvert } from "./useFetchAdvert";
import { useMessages } from "./useMessage";
import { useState } from "react";
import { deleteAdvert } from "../../pages/adverts/services";

export const useAdvertDelete = () => {
  const { id } = useFetchAdvert();
  const { successMessage, errorMessage, showSuccess, showError } =
    useMessages();

  const navigate = useNavigate();
  const [loadingDelete, setLoadingDelete] = useState(false);
  const [, setShowConfirm] = useState(false);
  const cancelDelete = () => setShowConfirm(false);

  const confirmDelete = async () => {
    if (!id) return;
    setLoadingDelete(true);
    try {
      await deleteAdvert(id);
      showSuccess("Anuncio borrado correctamente.");
      setLoadingDelete(false);

      navigate("/adverts", { replace: true });
    } catch (error) {
      console.error("Error to deleting advert.", error);
      setLoadingDelete(false);
      showError("Error al borrar el anuncio. Inténtalo más tarde.");
    }
  };
  return {
    id,
    loadingDelete,
    successMessage,
    errorMessage,
    cancelDelete,
    confirmDelete,
  };
};
