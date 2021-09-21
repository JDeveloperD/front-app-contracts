import React from 'react';
import { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import PanelLayout from '../../layouts/PanelLayout';
import FeatherIcon from 'feather-icons-react';

function AfpDetailsPage() {
  const { id } = useParams();
  const [ afp, setAfp ] = useState({ name: "", discountRate: "" });
  const [ disabledInputs, setDisabledInputs ] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/afp/${id}`)
    .then(res => res.json())
    .then(data => setAfp(data.result))
  }, []);

  function updateAfp(e) {
    e.preventDefault();
    fetch(`http://localhost:5000/api/afp`,{
      method: 'PUT',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(afp)
    }).then(res => res.json())
    .then(data => {
      if (data.error) {
        setDisabledInputs(false);
      } else {
        setDisabledInputs(true);
      }
    })
  }

  function handleChange(e) {
    let nameInput = e.target.name;
    let valueInput = e.target.value;

    setAfp({
      ...afp,
      [nameInput] : valueInput
    })
  }

  function handleUpdateButton() {
    setDisabledInputs(!disabledInputs);
  }

  return (
    <PanelLayout>
      <div className="card">
        <div className="card-header bg-light">
          <div className="row">
            <div className="col-6">
              <h2>Detalles del contrato</h2>
            </div>
            <div className="col-6 text-end">
              <button className="btn btn-info rounded-pill" onClick={handleUpdateButton} >
                <FeatherIcon icon="edit-2" />
              </button>
            </div>
          </div>
          </div>
        <div className="card-body">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item"><Link to="/">Dashboard</Link></li>
              <li className="breadcrumb-item"><Link to="/afps">Lista de Afp</Link></li>
              <li className="breadcrumb-item active" aria-current="page">{afp.name}</li>
            </ol>
          </nav>
          <form className="border p-4 rounded">
            <h4>Nombre de la empresa</h4>
            <input type="text" className="mb-4 form-control" name="name" onChange={handleChange} defaultValue={afp.name} disabled={disabledInputs} />
            <h4>Tasa de interés</h4>
            <input type="text" className="form-control" name="discountRate" onChange={handleChange} defaultValue={afp.discountRate} disabled={disabledInputs} />

            {!disabledInputs && (
              <button className="btn mt-4 btn-success rounded-pill" onClick={updateAfp}>
                <FeatherIcon icon="save" /> "Guardar cambios"
              </button>
            )}
          </form>
        </div>
      </div>
    </PanelLayout>
  );
}

export default AfpDetailsPage;