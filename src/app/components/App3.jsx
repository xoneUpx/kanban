import React from 'react';
import Lanes from './Lanes.jsx';
import Posts from './Posts.jsx';
import { HTML5Backend } from 'react-dnd-html5-backend';
import { DndProvider } from 'react-dnd';
const App =() => (<div><DndProvider backend={HTML5Backend}><Lanes /><Posts /></DndProvider></div>);
export default App;
