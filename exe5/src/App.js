import logo from './logo.svg';
import './App.css';
// import FavoriteColor from './FavoriteColor';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

// ===========hooks===================

// import { useState } from 'react';
// import { useChatRoom } from './useChatRoom.js';

// function ChatRoom({ roomId }) {
//   const [serverUrl, setServerUrl] = useState('https://localhost:1234');

//   useChatRoom({
//     roomId: roomId,
//     serverUrl: serverUrl
//   });

//   return (
//     <>
//       <label>
//         Server URL:{' '}
//         <input
//           value={serverUrl}
//           onChange={e => setServerUrl(e.target.value)}
//         />
//       </label>
//       <h1>Welcome to the {roomId} room!</h1>
//     </>
//   );
// }

// export default function App() {
//   const [roomId, setRoomId] = useState('general');
//   const [show, setShow] = useState(false);
//   return (
//     <>
//       <label>
//         Choose the chat room:{' '}
//         <select
//           value={roomId}
//           onChange={e => setRoomId(e.target.value)}
//         >
//           <option value="general">general</option>
//           <option value="travel">travel</option>
//           <option value="music">music</option>
//         </select>
//       </label>
//       <button onClick={() => setShow(!show)}>
//         {show ? 'Close chat' : 'Open chat'}
//       </button>
//       {show && <hr />}
//       {show && <ChatRoom roomId={roomId} />}
//     </>
//   );
// }

// ===========hooks 2===================
// import { useState } from 'react';
// import { useWindowListener } from './useWindowListener.js';

// export default function App() {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useWindowListener('pointermove', (e) => {
//     setPosition({ x: e.clientX, y: e.clientY });
//   });

//   return (
//     <div style={{
//       position: 'absolute',
//       backgroundColor: 'pink',
//       borderRadius: '50%',
//       opacity: 0.6,
//       transform: `translate(${position.x}px, ${position.y}px)`,
//       pointerEvents: 'none',
//       left: -20,
//       top: -20,
//       width: 40,
//       height: 40,
//     }} />
//   );
// }


// ===========hooks 3===================



// import Box from './Box.js';

// export default function App() {
//   return (
//     <>
//       <LongSection />
//       <Box />
//       <LongSection />
//       <Box />
//       <LongSection />
//     </>
//   );
// }

// function LongSection() {
//   const items = [];
//   for (let i = 0; i < 50; i++) {
//     items.push(<li key={i}>Item #{i} (keep scrolling)</li>);
//   }
//   return <ul>{items}</ul>
// }


// ===========hooks 4===================

// import React, { useState } from "react";
// import ReactDOM from "react-dom/client";

// function FavoriteColor() {
//   const [color, setColor] = useState("red");

//   return (
//     <>
//       <h1>My favorite color is {color}!</h1>
//       <button
//         type="button"
//         onClick={() => setColor("blue")}
//       >Blue</button>
//       <button
//         type="button"
//         onClick={() => setColor("red")}
//       >Red</button>
//       <button
//         type="button"
//         onClick={() => setColor("pink")}
//       >Pink</button>
//       <button
//         type="button"
//         onClick={() => setColor("green")}
//       >Green</button>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<FavoriteColor />);