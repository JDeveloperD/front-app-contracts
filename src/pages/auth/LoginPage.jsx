import React from "react";
import avatar from '../../assets/static/img/avatars/avatar.jpg';

function Login() {
    return (
      <main className="d-flex w-100">
        <div className="container d-flex flex-column">
          <div className="row vh-100">
            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
              <div className="d-table-cell align-middle">
  
                <div className="text-center mt-4">
                  <h1 className="h2">Bienvenido nuevamente, Administrador</h1>
                  <p className="lead"> Inicia sesión en tu cuenta para continuar </p>
                </div>
  
                <div className="card">
                  <div className="card-body">
                    <div className="m-sm-4">
                      <div className="text-center">
                        <img src={avatar} alt="Charles Hall" className="img-fluid rounded-circle" width="132" height="132" />
                      </div>
                      <form>
  
                        <div className="mb-3">
                          <label className="form-label">Email</label>
                          <input className="form-control form-control-lg" type="email" name="email" placeholder="Ingresa tu email" />
                        </div>
  
                        <div className="mb-3">
                          <label className="form-label">Contraseña</label>
                          <input className="form-control form-control-lg" type="password" name="password" placeholder="Ingresa tu contraseña" />
                          <small> <a href="index.html">Olvidaste tu contraseña?</a> </small>
                        </div>
  
                        <div>
                          <label className="form-check">
                            <input className="form-check-input" type="checkbox" value="remember-me" name="remember-me" />
                            <span className="form-check-label"> Recuerdame la proxima vez </span>
                          </label>
                        </div>
  
                        <div className="text-center mt-3">
                          <a href="index.html" className="btn btn-lg btn-primary">Iniciar sesión</a>
                          {/* <button type="submit" className="btn btn-lg btn-primary">Sign in</button> */}
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
  
              </div>
            </div>
          </div>
        </div>
      </main>  
    );
}

export default Login;