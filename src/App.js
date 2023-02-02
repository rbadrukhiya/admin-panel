import logo from './logo.svg';
import './App.css';
import { Route , Routes } from 'react-router-dom';
import Admin from './component/admin';
import Dashboard from './component/dashboard';
import Edit from './component/edit';
import Home from './component/home';
import Dashboard2 from './component/dashboard2';
import Dashboard3 from './component/dashboard3';
import Widgets from './component/widgets';
import Top_navigation from './component/top-navigation';
import Top_navigation_sidebar from './component/top-navigation-sidebar';
import Boxed from './component/boxed';
import Fix_sidebar from './component/fixed-sidebar';
import Fix_sidebar_custom_area from './component/fixed-sidebar-custom-area';
import Fix_navbar from './component/fix-navbar';
import Fix_footer from './component/fix-footer';
import Collapsed_sidebar from './component/collapsed-sidebar';
import General_elements from './component/general-element';
import Data_table from './component/data-table';
import Register from './component/register';
import Chartjs from './component/chartjs';
import Float from './component/float';
import Inline from './component/inline';
import Uploat from './component/uploat';
import Simple_table from './component/simple-table';
import Jsgrid from './component/jsgrid';
import Advanced_elements from './component/advance-elements';
import Editors from './component/editors';
import Validation from './component/validation';
import View from './component/view';
import Single from './component/single-blog';
import Comment from './component/comment';
import Comment_edit from './component/comment-edit';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className="App">
      <Routes>
<Route path="/" element={ <Home/> } />
      <Route path="/admin" element={ window.localStorage.getItem('uid') == null ? <Admin/> : <Dashboard/> } />
      <Route path="/register" element={ <Register/> } />
      <Route path="/dashboard" element={ window.localStorage.getItem("uid") !== null ?<Dashboard/> : <Admin/> } />
      <Route path="/dashboard2" element={ <Dashboard2/> } />
      <Route path="/dashboard3" element={ <Dashboard3/> } />
      <Route path="/widgets" element={ <Widgets/> } />
      <Route path="/top-navigation" element={ <Top_navigation/> } />
      <Route path="/top-navigation-sidebar" element={ <Top_navigation_sidebar/> } />
      <Route path="/boxed" element={ <Boxed/> } />
      <Route path="/fix-sidebar" element={ <Fix_sidebar/> } />
      <Route path="/fix-sidebar-custom-area" element={ <Fix_sidebar_custom_area/> } />
      <Route path="/fix-navbar" element={ <Fix_navbar/> } />
      <Route path="/fix-footer" element={ <Fix_footer/> } />
      <Route path="/collapsed-sidebar" element={ <Collapsed_sidebar/> } />
      <Route path="/general-elements" element={ <General_elements/> } />
      <Route path="/data-table" element={ <Data_table/> } />
      <Route path="/comment" element={ <Comment/> } />
      <Route path="/chartjs" element={ <Chartjs/> } />
      <Route path="/float" element={ <Float/> } />
      <Route path="/inline" element={ <Inline/> } />
      <Route path="/uploat" element={ <Uploat/> } />
      <Route path="/simple-table" element={ <Simple_table/> } />
      <Route path="/jsgrid" element={ <Jsgrid/> } />
      <Route path="/advance_elements" element={ <Advanced_elements/> } />
      <Route path="/editors" element={ <Editors/> } />
      <Route path="/validation" element={ <Validation/> } />
      <Route path="/view" element={ <View/> } />
      <Route path="/edit/:id" element={ <Edit/> } />
      <Route path="/comment-edit/:id" element={ <Comment_edit/> } />
      <Route path="/single/:id" element={ <Single/> } />





      </Routes>
    </div>
  );
}

export default App;
