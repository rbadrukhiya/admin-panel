import Menu from "./menu"

function Fix_navbar()
{
    return(
        <>
        <div classname="hold-transition sidebar-mini layout-navbar-fixed">
  <div className="wrapper">
   <Menu/>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Fixed Navbar Layout</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item"><a href="#">Layout</a></li>
                <li className="breadcrumb-item active">Fixed Navbar Layout</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Title</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  Start creating your amazing application!
                </div>
                <div className="card-footer">
                  Footer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    <aside className="control-sidebar control-sidebar-dark">
    </aside>
  </div>
</div>

        </>
    )
}
export default Fix_navbar