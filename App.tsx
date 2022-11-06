import * as React from 'react';
import './style.css';

export default function App() {
  const [age, setAge] = React.useState(0);
  const [name, setName] = React.useState('');
  const [dark, setDark] = React.useState(false);

  const person = React.useMemo(() => {
    return { name, age };
  }, [name, age]);

  React.useEffect(() => {
    console.log('render');
  }, [person]);
  return (
    <div style={{ background: dark ? '#333' : '#FFF' }}>
      age:
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
      />{' '}
      <br />
      name:
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <br />
      dark mode:
      <input
        type="checkbox"
        checked={dark}
        onChange={(e) => setDark(e.target.checked)}
      />
    </div>
  );
}
