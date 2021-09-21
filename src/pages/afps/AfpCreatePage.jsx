import React from 'react';
import { useState } from 'react';
import PanelLayout from '../../layouts/PanelLayout';
import Alert from '../../components/alert/Alert';
import Spinner from '../../components/Spinner';

function AfpCreatePage() {
  const [ loading, setLoading ] = useState(false);
  
  const [ error, setError ] = useState({
    error: false,
    message: "",
  });

  const [ data, setData ] = useState({
    name: '',
    discountRate: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    fetch(`http://localhost:5000/api/afp`, {
      method: 'POST',
      headers: { 
        'Accept': 'application/json',
        'Content-Type': 'application/json'
       },
      body: JSON.stringify(data)
    }).then(res => res.json())
    .then(data => {
      if (data.error) {
        setError(data);
      } else {
        setError({
          error: false,
          message: "",
        });

        const id = data.data._id;

        window.location = `/afp/${id}`;
      }

      setLoading(false)
    });

  }

  const handleInputChange = (e) => {
    let nameInput = e.target.name;
    let valueInput = e.target.value;
    
    setData({
      ...data,
      [nameInput] : valueInput
    })
  }
  
  return (
    <PanelLayout>
      <div className="card">
        <div className="card-header bg-light">Registrar una Afp</div>
        <div className="card-body">
        <form className="form-inline" autoComplete="off" onSubmit={handleSubmit}>
            <label htmlFor="nombreAfp" className="mb-2 mr-sm-2">Nombre</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="nombreAfp" onChange={handleInputChange} placeholder="Razón Social" name="name" />
            <label htmlFor="tasaInteres" className="mb-2 mr-sm-2">Tasa de interés</label>
            <input type="text" className="form-control mb-2 mr-sm-2" id="tasaInteres" onChange={handleInputChange} placeholder="Porcentaje" name="discountRate" />
            <button type="submit" className="btn btn-primary mb-2 rounded-pill">
              {loading && (
                <Spinner color="light" size="sm" />
              )}
              Registrar
            </button>
          </form>
          {error.error && (
            <Alert type="danger" message={error.message} />
          )}
        </div>
      </div>
    </PanelLayout>
  );
}

export default AfpCreatePage;