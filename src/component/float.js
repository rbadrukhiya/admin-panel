import Menu from "./menu"

function Float()
{
    return(
        <>
  <div classname="hold-transition sidebar-mini">
  <div className="wrapper">
   <Menu/>
    <div className="content-wrapper">
      {/* Content Header (Page header) */}
      <section className="content-header">
        <div className="container-fluid">
          <div className="row mb-2">
            <div className="col-sm-6">
              <h1>Flot Charts</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">Flot</li>
              </ol>
            </div>
          </div>
        </div>{/* /.container-fluid */}
      </section>
      {/* Main content */}
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              {/* interactive chart */}
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="far fa-chart-bar" />
                    Interactive Area Chart
                  </h3>
                  <div className="card-tools">
                    Real time
                    <div className="btn-group" id="realtime" data-toggle="btn-toggle">
                      <button type="button" className="btn btn-default btn-sm active" data-toggle="on">On</button>
                      <button type="button" className="btn btn-default btn-sm" data-toggle="off">Off</button>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div id="interactive" style={{height: 300}} />
                </div>
                {/* /.card-body*/}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
          <div className="row">
            <div className="col-md-6">
              {/* Line chart */}
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="far fa-chart-bar" />
                    Line Chart
                  </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="line-chart" style={{height: 300}} />
                </div>
                {/* /.card-body*/}
              </div>
              {/* /.card */}
              {/* Area chart */}
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="far fa-chart-bar" />
                    Area Chart
                  </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="area-chart" style={{height: 338}} className="full-width-chart" />
                </div>
                {/* /.card-body*/}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
            <div className="col-md-6">
              {/* Bar chart */}
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="far fa-chart-bar" />
                    Bar Chart
                  </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="bar-chart" style={{height: 300}} />
                </div>
                {/* /.card-body*/}
              </div>
              {/* /.card */}
              {/* Donut chart */}
              <div className="card card-primary card-outline">
                <div className="card-header">
                  <h3 className="card-title">
                    <i className="far fa-chart-bar" />
                    Donut Chart
                  </h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                      <i className="fas fa-minus" />
                    </button>
                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div id="donut-chart" style={{height: 300}} />
                </div>
                {/* /.card-body*/}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>{/* /.container-fluid */}
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
export default Float