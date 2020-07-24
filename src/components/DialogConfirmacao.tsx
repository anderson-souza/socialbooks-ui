import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function DialogConfirmacao(
  titulo: string,
  texto: string,
  icone: string,
  textoBotaoConfirmacao: string,
  funcaoConfirmacao: Function
) {
  const MySwal = withReactContent(Swal);

  return MySwal.fire({
    title: titulo,
    text: texto,
    icon: icone,
    showCancelButton: true,
    confirmButtonText: textoBotaoConfirmacao,
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.value) {
      funcaoConfirmacao();
    }
  });
}
