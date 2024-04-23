import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { state, AddPost } from './redux/state';

AddPost("gjerhgjehge");


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <App state={state} AddPost={AddPost} />
);

reportWebVitals();
