import React from 'react';

export type Route = 'default' | 'short' | 'extreme';

const Menu = ({ onSelectRoute }: { onSelectRoute: (route: Route) => void }) => {
  return (
    <div className='card overlay-menu btn-group btn-group-toggle buttons'>
      <div className='card-body'>
        <h5 className='card-title'>Round Island Routes</h5>

        <div className='custom-control custom-radio'>
          <input
            type='radio'
            id='default-route'
            name='route'
            className='custom-control-input'
            onChange={() => onSelectRoute('default')}
          />
          <label className='custom-control-label' htmlFor='default-route'>
            Default route
          </label>
        </div>
        <div className='custom-control custom-radio'>
          <input
            type='radio'
            id='shorter-route'
            name='route'
            className='custom-control-input'
            onChange={() => onSelectRoute('short')}
          />
          <label className='custom-control-label' htmlFor='shorter-route'>
            Shorter route
          </label>
        </div>
        <div className='custom-control custom-radio'>
          <input
            type='radio'
            id='extreme-route'
            name='route'
            className='custom-control-input'
            onChange={() => onSelectRoute('extreme')}
          />
          <label className='custom-control-label' htmlFor='extreme-route'>
            Extreme route
          </label>
        </div>
      </div>
    </div>
  );
};

export default Menu;
