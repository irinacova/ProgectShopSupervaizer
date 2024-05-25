import { useEffect, useState } from 'react';

import './App.css';

function App() {
    const [name, setName] = useState([]);
    // const [count, setCount] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:3000/shops`)
            .then(res => res.json())
            .then(data => {
                const newName = data.shops;
                setName(newName);
            });
    }, []);

    return <>{name.map((el) => {
          console.log();
      return el.director
    })}</>;

}

export default App;
