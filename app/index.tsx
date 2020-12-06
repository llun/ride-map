import React from 'react';
import { render } from 'react-dom';

import Map from './components/Map'

const Application = () => <div className="application"><Map /></div>

render(<Application />, document.getElementById('root'))
