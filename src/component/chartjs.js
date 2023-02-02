import Menu from "./menu"

function Chartjs()
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
              <h1>ChartJS</h1>
            </div>
            <div className="col-sm-6">
              <ol className="breadcrumb float-sm-right">
                <li className="breadcrumb-item"><a href="#">Home</a></li>
                <li className="breadcrumb-item active">ChartJS</li>
              </ol>
            </div>
          </div>
        </div>
      </section>
      <section className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">Area Chart</h3>
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
                  <div className="chart">
                    <canvas id="areaChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                  </div>
                </div>
              </div>
              {/* /.card */}
              {/* DONUT CHART */}
              <div className="card card-danger">
                <div className="card-header">
                  <h3 className="card-title">Donut Chart</h3>
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
                  <canvas id="donutChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              {/* PIE CHART */}
              <div className="card card-danger">
                <div className="card-header">
                  <h3 className="card-title">Pie Chart</h3>
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
                  <canvas id="pieChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col (LEFT) */}
            <div className="col-md-6">
              {/* LINE CHART */}
              <div className="card card-info">
                <div className="card-header">
                  <h3 className="card-title">Line Chart</h3>
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
                  <div className="chart">
                    <canvas id="lineChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              {/* BAR CHART */}
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">Bar Chart</h3>
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
                  <div className="chart">
                    <canvas id="barChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              {/* STACKED BAR CHART */}
              <div className="card card-success">
                <div className="card-header">
                  <h3 className="card-title">Stacked Bar Chart</h3>
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
                  <div className="chart">
                    <canvas id="stackedBarChart" style={{minHeight: 250, height: 250, maxHeight: 250, maxWidth: '100%'}} />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col (RIGHT) */}
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
      {/* Add Content Here */}
    </aside>
    {/* /.control-sidebar */}
  </div>
</div>

        </>
    )
    
}
export default Chartjs