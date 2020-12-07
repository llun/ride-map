import React, { useEffect, useState } from 'react';
import { render } from 'react-dom';

import Menu, { Route } from './components/Menu';
import Map from './components/Map';

const Application = () => {
  const [route, setRoute] = useState<Route>();
  const onSelectRoute = (route: Route) => {
    setRoute(route);
  };
  return (
    <div className='application'>
      <Map route={route} />
      <Menu onSelectRoute={onSelectRoute} />
    </div>
  );
};

render(<Application />, document.getElementById('root'));
