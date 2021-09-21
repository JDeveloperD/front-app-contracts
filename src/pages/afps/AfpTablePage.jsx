import React from 'react';
import { Link } from 'react-router-dom';
import PanelLayout from '../../layouts/PanelLayout';
import FeatherIcon from 'feather-icons-react';
import { useState, useEffect } from 'react';
import Alert from '../../components/alert/Alert';

function AfpTablePage() {

  const [ afps, setAfps ] = useState([]);

  useEffect(() => {
    fetchAfp();
  }, []);

  async function fetchAfp() {
    await fetch(`http://localhost:5000/api/afp`)
    .then(res => res.json())
    .then(data => setAfps(data.results))
  }

  function handleDeleteAfp(id) {
    fetch(`http://localhost:5000/api/afp`, {
      method: 'DELETE',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
      body: JSON.stringify({ id: id })
    })
    .then(res => res.json())
    .then(data => setAfps(data.results));
  }

  return (
    <PanelLayout>
      <div className="card">
        <div className="card-header bg-light">Lista de AFP's</div>
        <div className="card-body">
          <div className="row align-items-center justify-content-between mb-4">
            <div className="col-7 col-md-4">
              <input type="text" className="form-control" placeholder="Busqueda..." />
            </div>
            <div className="col-4 col-md-4 text-end">
              <Link to="/afp/crear" className="btn btn-success rounded-pill">
                <FeatherIcon icon="plus" />
                <span className="d-none d-md-inline-flex align-items ms-1">Nuevo Afp</span>
              </Link>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-hover">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre</th>
                  <th>Tasa de descuento (%)</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {afps.map(afp => (
                    <tr key={afp._id}>
                      <td>1</td>
                      <td>
                        <Link to={`/afp/${afp._id}`}>{afp.name}</Link>
                      </td>
                      <td>{afp.discountRate} %</td>
                      <td> 
                        <Link to={`/afp/${afp._id}`} className="btn" >
                          <FeatherIcon icon="edit-2" />
                        </Link>
                        <button className="btn" onClick={() => handleDeleteAfp(afp._id)} >
                          <FeatherIcon icon="trash" />
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            {!afps.length && (
              <Alert type="info" message="No hay registros" />
            )}
          </div>
        </div>
      </div>
    </PanelLayout>
  );
}

export default AfpTablePage;