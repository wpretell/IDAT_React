import CompCabecera from './CompCabecera';
import CompListaCategorias from './CompListaCategorias';
import CompProductoDetalle from './CompProductoDetalle';
import CompPiePagina from './CompPiePagina';

function PageProducto() {
  return (
    <div>
      <CompCabecera />

      <main className="container">
        <div className="row">
          <CompListaCategorias />
          <CompProductoDetalle />
        </div>
      </main>

      <CompPiePagina />
    </div>
  );
}

export default PageProducto;
