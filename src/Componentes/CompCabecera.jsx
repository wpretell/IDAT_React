function CompCabecera() {
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      <div className="container">
        
        {/* Logo / Nombre */}
        <span className="navbar-brand">
          Mi Tienda Virtual
        </span>

        {/* Carrito */}
        <div>
          <span>🛒</span>
          <span className="text-danger"> 3 producto(s)</span>
        </div>

      </div>
    </nav>
  );
}

export default CompCabecera;
