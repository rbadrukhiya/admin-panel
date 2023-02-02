function Top_navigation_sidebar() {
  return (
    <>
      <div classname="hold-transition sidebar-collapse layout-top-nav">
        <div className="wrapper">
          <nav className="main-header navbar navbar-expand-md navbar-light navbar-white">
            <div className="container">
              <a href="../../index3.html" className="navbar-brand">
                <img src={require('../img/AdminLTELogo.png')} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">AdminLTE 3</span>
              </a>
              <button className="navbar-toggler order-1" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse order-3" id="navbarCollapse">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                  </li>
                  <li className="nav-item">
                    <a href="index3.html" className="nav-link">Home</a>
                  </li>
                  <li className="nav-item">
                    <a href="#" className="nav-link">Contact</a>
                  </li>
                  <li className="nav-item dropdown">
                    <a id="dropdownSubMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle">Dropdown</a>
                    <ul aria-labelledby="dropdownSubMenu1" className="dropdown-menu border-0 shadow">
                      <li><a href="#" className="dropdown-item">Some action </a></li>
                      <li><a href="#" className="dropdown-item">Some other action</a></li>
                      <li className="dropdown-divider" />
                      <li className="dropdown-submenu dropdown-hover">
                        <a id="dropdownSubMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Hover for action</a>
                        <ul aria-labelledby="dropdownSubMenu2" className="dropdown-menu border-0 shadow">
                          <li>
                            <a tabIndex={-1} href="#" className="dropdown-item">level 2</a>
                          </li>
                          <li className="dropdown-submenu">
                            <a id="dropdownSubMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">level 2</a>
                            <ul aria-labelledby="dropdownSubMenu3" className="dropdown-menu border-0 shadow">
                              <li><a href="#" className="dropdown-item">3rd level</a></li>
                              <li><a href="#" className="dropdown-item">3rd level</a></li>
                            </ul>
                          </li>
                          <li><a href="#" className="dropdown-item">level 2</a></li>
                          <li><a href="#" className="dropdown-item">level 2</a></li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                </ul>
                <form className="form-inline ml-0 ml-md-3">
                  <div className="input-group input-group-sm">
                    <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                    <div className="input-group-append">
                      <button className="btn btn-navbar" type="submit">
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <ul className="order-1 order-md-3 navbar-nav navbar-no-expand ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="fas fa-comments" />
                    <span className="badge badge-danger navbar-badge">3</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <img src={require('../img/user1-128x128.jpg')} alt="User Avatar" className="img-size-50 mr-3 img-circle" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Brad Diesel
                            <span className="float-right text-sm text-danger"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">Call me whenever you can...</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <img src={require('../img/user8-128x128.jpg')} alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            John Pierce
                            <span className="float-right text-sm text-muted"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">I got your message bro</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <div className="media">
                        <img src={require('../img/user3-128x128.jpg')} alt="User Avatar" className="img-size-50 img-circle mr-3" />
                        <div className="media-body">
                          <h3 className="dropdown-item-title">
                            Nora Silvester
                            <span className="float-right text-sm text-warning"><i className="fas fa-star" /></span>
                          </h3>
                          <p className="text-sm">The subject goes here</p>
                          <p className="text-sm text-muted"><i className="far fa-clock mr-1" /> 4 Hours Ago</p>
                        </div>
                      </div>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item dropdown-footer">See All Messages</a>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-toggle="dropdown" href="#">
                    <i className="far fa-bell" />
                    <span className="badge badge-warning navbar-badge">15</span>
                  </a>
                  <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                    <span className="dropdown-header">15 Notifications</span>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <i className="fas fa-envelope mr-2" /> 4 new messages
                      <span className="float-right text-muted text-sm">3 mins</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <i className="fas fa-users mr-2" /> 8 friend requests
                      <span className="float-right text-muted text-sm">12 hours</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      <i className="fas fa-file mr-2" /> 3 new reports
                      <span className="float-right text-muted text-sm">2 days</span>
                    </a>
                    <div className="dropdown-divider" />
                    <a href="#" className="dropdown-item dropdown-footer">See All Notifications</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
                    <i className="fas fa-th-large" />
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="content-wrapper">
            <div className="content-header">
              <div className="container">
                <div className="row mb-2">
                  <div className="col-sm-6">
                    <h1 className="m-0"> Top Navigation <small>Example 3.0</small></h1>
                  </div>
                  <div className="col-sm-6">
                    <ol className="breadcrumb float-sm-right">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item"><a href="#">Layout</a></li>
                      <li className="breadcrumb-item active">Top Navigation</li>
                    </ol>
                  </div>
                </div>
              </div>
            </div>
            <div className="content">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                      </div>
                    </div>
                    <div className="card card-primary card-outline">
                      <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                          Some quick example text to build on the card title and make up the bulk of the card's
                          content.
                        </p>
                        <a href="#" className="card-link">Card link</a>
                        <a href="#" className="card-link">Another link</a>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="card">
                      <div className="card-header">
                        <h5 className="card-title m-0">Featured</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                    <div className="card card-primary card-outline">
                      <div className="card-header">
                        <h5 className="card-title m-0">Featured</h5>
                      </div>
                      <div className="card-body">
                        <h6 className="card-title">Special title treatment</h6>
                        <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                        <a href="#" className="btn btn-primary">Go somewhere</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <aside className="control-sidebar control-sidebar-dark">
          </aside>
          <footer className="main-footer">
            <div className="float-right d-none d-sm-inline">
              Anything you want
            </div>
            <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
          </footer>
        </div>
      </div>

    </>
  )
}
export default Top_navigation_sidebar