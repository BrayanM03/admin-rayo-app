import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
        return (
            <div>
                {/* Sidebar */}
<ul className="navbar-nav bg-gradient-dark sidebar sidebar-dark accordion" id="accordionSidebar">
  {/* Sidebar - Brand */}
  <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
    <div className="sidebar-brand-icon rotate-n-15">
      {/* <i class="fas fa-laugh-wink"></i>-*/}
      <img style={{filter: 'invert(100%)'}} width="40px" src="src/img/racing.svg" />
    </div>
    <div className="sidebar-brand-text mx-3">El Rayo<sup style={{fontSize: 12, marginLeft: 5}}>app</sup></div>
  </a>
  {/* Divider */}
  <hr className="sidebar-divider my-0" />
  {/* Nav Item - Dashboard */}
  <li className="nav-item active">
    <a className="nav-link" href="index.html">
      <i className="fas fa-fw fa-tachometer-alt" />
      <span>Inicio</span></a>
  </li>
  {/* Divider */}
  <hr className="sidebar-divider" />
  {/* Heading */}
  <div className="sidebar-heading">
    Punto de venta
  </div>
  {/* Nav Item - Pages Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link" href="#">
      <i className="fas fa-fw fa-cart-plus" />
      <span>Nueva venta</span>
    </a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">
      <i className="fas fa-fw fa-clipboard" />
      <span>Nueva cotización</span>
    </a>
  </li>
  {/* Nav Item - Utilities Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseUtilities" aria-expanded="true" aria-controls="collapseUtilities">
      <i className="fas fa-fw fa-history" />
      <span>Historial</span>
    </a>
    <div id="collapseUtilities" className="collapse" aria-labelledby="headingUtilities" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Ordenes de:</h6>
        <a className="collapse-item" href="utilities-color.html">
          <img src="./img/ventas.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Ventas</span>
        </a>
        <a className="collapse-item" href="utilities-border.html">
          <img src="./src/img/compras.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Compras</span>
        </a>
      </div>
    </div>
  </li>
  {/* Divider */}
  <hr className="sidebar-divider" />
  {/* Heading */}
  <div className="sidebar-heading">
    Inventario
  </div>
  {/* Nav Item - Pages Collapse Menu */}
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseTyres" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-folder" />
      <span>Mis llantas</span>
    </a>
    <div id="collapseTyres" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Categorias:</h6>
        <a className="collapse-item" href="login.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/tyre-invent.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Existencia</span> </a>
        <a className="collapse-item" href="register.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/salida.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Vendidas</span> </a>
        <a className="collapse-item" href="forgot-password.html">
          <img src="src/img/entrada.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Entradas</span></a>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseClients" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-user-tag" />
      <span>Mis clientes</span>
    </a>
    <div id="collapseClients" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Categorias:</h6>
        <a className="collapse-item" href="login.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/cliente.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Clientes</span> </a>
        <a className="collapse-item" href="register.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/credito.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Creditos</span> </a>
        <a className="collapse-item" href="forgot-password.html">
          <img src="src/img/pago.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Creditos vencidos</span></a>
      </div>
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link collapsed" href="#" data-toggle="collapse" data-target="#collapseProvider" aria-expanded="true" aria-controls="collapsePages">
      <i className="fas fa-fw fa-user-cog" />
      <span>Mis provedores</span>
    </a>
    <div id="collapseProvider" className="collapse" aria-labelledby="headingPages" data-parent="#accordionSidebar">
      <div className="bg-white py-2 collapse-inner rounded">
        <h6 className="collapse-header">Categorias:</h6>
        <a className="collapse-item" href="login.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/tyre-invent.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Clientes</span> </a>
        <a className="collapse-item" href="register.html" style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
          <img src="src/img/salida.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Creditos</span> </a>
        <a className="collapse-item" href="forgot-password.html">
          <img src="src/img/entrada.svg" width="18px" /> 
          <span style={{marginLeft: 12}}> Creditos vencidos</span></a>
      </div>
    </div>
  </li>
  {/* Nav Item - Charts */}
  <li className="nav-item">
    <a className="nav-link" href="charts.html">
      <i className="fas fa-fw fa-chart-area" />
      <span>Charts</span></a>
  </li>
  {/* Nav Item - Tables */}
  <li className="nav-item">
    <a className="nav-link" href="tables.html">
      <i className="fas fa-fw fa-table" />
      <span>Tables</span></a>
  </li>
  {/* Divider */}
  <hr className="sidebar-divider d-none d-md-block" />
  {/* Sidebar Toggler (Sidebar) */}
  <div className="text-center d-none d-md-inline">
    <button className="rounded-circle border-0" id="sidebarToggle" />
  </div>
  {/* Sidebar Message */} 
  <div className="sidebar-card">
    <img className="sidebar-card-illustration mb-2" src="src/img/logo.jpg" alt style={{borderRadius: 8}} />
    <p className="text-center mb-2"><strong>El Rayo Servce Manager</strong><br /> Es un sistema de gestion de inventario. punto de venta y facturación.</p>
    <a className="btn btn-success btn-sm" href="https://startbootstrap.com/theme/sb-admin-pro">Ir a sitio web!</a>
  </div>
</ul>
{/* End of Sidebar */}


            </div>
        )
    }
}
