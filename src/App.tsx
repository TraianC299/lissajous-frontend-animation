import { useState } from 'react';
import './App.css';
import ControlPanel from './components/ControlPanel';
import LissajousCanvas from './components/LissajousFigure';

function App() {

  const [form, setForm] = useState({
    amplitudeX: 100,
    amplitudeY: 100,
    frequencyX: 3,
    frequencyY: 2
  });
  const [phase, setPhase] = useState(0);

    return (
    <>
      <div className='flex h-screen'>
        <ControlPanel phi={phase} form={form} changeForm={(value, key) => setForm({ ...form, [key]: value })} />
        <div className='bg-slate-100 flex-1'>

          <LissajousCanvas setPhase={setPhase} A={form.amplitudeX} B={form.amplitudeY} a={form.frequencyX} b={form.frequencyY} phase={phase} animate={true} />
        </div>
      </div>
    </>
  )
}

export default App
