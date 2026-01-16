import { Notifications } from "../../components/notifications";
import { Button } from "../../components/button";
import { useAdvertDelete } from "../../components/hooks/useAdvertDelete";

export const AdvertDelete = () => {
  const {
    successMessage,
    errorMessage,
    cancelDelete,
    loadingDelete,
    confirmDelete,
  } = useAdvertDelete();
  return (
    <div className="mx-auto max-w-md rounded border border-gray-300 bg-gray-50 p-4 text-center shadow-md">
      <Notifications
        successMessage={successMessage}
        errorMessage={errorMessage}
      />
      <p className="mb-4 text-lg font-semibold text-gray-700">
        ¿Estás seguro que quieres borrar este anuncio?
      </p>
      <Button
        className="mr-4 rounded bg-gray-300 px-5 py-2 text-gray-800 transition hover:bg-gray-400"
        onClick={cancelDelete}
        disabled={loadingDelete}
      >
        Cancelar
      </Button>
      <Button
        className="rounded bg-red-600 px-5 py-2 text-white transition hover:bg-red-700"
        onClick={confirmDelete}
        disabled={loadingDelete}
      >
        {loadingDelete ? "Borrando..." : "Confirmar"}
      </Button>
    </div>
  );
};
