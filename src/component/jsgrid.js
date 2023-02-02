import Menu from "./menu"

function Jsgrid()
{
    return(
        <>
       <div classname="hold-transition sidebar-mini">
  <div className="wrapper">
 <Menu/>
    <div className="content-wrapper">
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>jsGrid</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">jsGrid</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      <section className="content">
        <div className="card">
          <div className="card-header">
            <h3 className="card-title">jsGrid</h3>
          </div>
          {/* /.card-header */}
          <div className="card-body">
            <div id="jsGrid1" />
          </div>
          {/* /.card-body */}
        </div>
        {/* /.card */}
      </section>
      {/* /.content */}
    </div>
    {/* /.content-wrapper */}
    <footer className="main-footer">
      <div className="float-right d-none d-sm-block">
        <b>Version</b> 3.2.0
      </div>
      <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
    </footer>
    {/* Control Sidebar */}
    <aside className="control-sidebar control-sidebar-dark">
      {/* Control sidebar content goes here */}
    </aside>
    {/* /.control-sidebar */}
  </div>
</div>

        </>
    )
}
export default Jsgrid
