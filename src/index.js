import App from './App';
import reportWebVitals from './reportWebVitals';
import { state, subscribe } from './redux/state';
import { createRoot } from 'react-dom/client'; 
import './index.css';
import { AddPost, updateNewPostText, updateNewMessageText,AddMessage } from './redux/state';

let root;

let rerenderEntireTree = (state) => {
  if (!root) {
    root = createRoot(document.getElementById('root'));
  }
  root.render(<App state={state} 
    AddPost={AddPost} 
    updateNewPostText={updateNewPostText}
    updateNewMessageText={updateNewMessageText}
    AddMessage={AddMessage} />);
};


// Теперь корень будет создан только один раз при первом вызове rerenderEntireTree, 
// а затем будет использоваться для последующих вызовов. Это должно исправить ошибку и предупреждение,
//  которые вы получали.





rerenderEntireTree(state);


reportWebVitals();


subscribe(rerenderEntireTree);
