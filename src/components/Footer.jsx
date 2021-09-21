import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="container-fluid">
        <div className="row text-muted">
          <div className="col-6 text-start">
            <p className="mb-0">
              <a className="text-muted" href="https://pandoramarketing.net/"><strong>Js contratos Demo</strong></a> &copy;
            </p>
          </div>
          <div className="col-6 text-end">
            <ul className="list-inline">
              <li className="list-inline-item">
                <a className="text-muted" href="https://pandoramarketing.net/">Support</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://pandoramarketing.net/">Help Center</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://pandoramarketing.net/">Privacy</a>
              </li>
              <li className="list-inline-item">
                <a className="text-muted" href="https://pandoramarketing.net/">Terms</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;