function CompProductoDetalle() {
  return (
    <div className="col-9">
      <p className="h5 text-secondary">Producto</p>

      <div className="card mb-3">
        <div className="row g-0">
          
          {/* Imagen */}
          <div className="col-md-4">
            <img src="/imagenes/producto1.png" className="img-fluid" alt="Producto" />
          </div>

          {/* Detalle */}
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title text-primary">
                CASACA VARILITE
              </h5>

              <p className="card-text">
                Cuando cae la temperatura, esta casaca ofrece abrigo ligero y
                plegable contra el frío.
              </p>

              <p className="h4 text-primary">S/ 379.00</p>

              <div className="text-end">
                <button className="btn btn-lg btn-primary">
                  Agregar al carrito
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default CompProductoDetalle;
