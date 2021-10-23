import React, { useEffect, useState } from 'react';
import MenuItem_08 from '../components/MenuItem_08';
import './Directory_08.scss';
import axios from 'axios';
//import items from "./menu-item-data";

const Directory2_08 = () => {
  const [MenuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenuItems = async () => {
      const HEROKU_URL = 'https://crown1101.herokuapp.com/api_xx/category_xx';
      const { data } = await axios.get(HEROKU_URL);
      console.log('/api/category_xx', data);
      setMenuItems(data);
    };
    fetchMenuItems();
  }, []);
  console.log('MenuItems', MenuItems);
  return (
    <div className='directory-menu'>
      {MenuItems.map((items) => {
        const { id, name, remote_url, size } = items;
        return (
          <MenuItem_08
            id={id}
            name={name}
            remote_url={remote_url}
            size={size}
          />
        );
      })}
    </div>
  );
};

export default Directory2_08;

//<MenuItem_08 name='HATS' remoteUrl='https://i.ibb.co/cvpntL1/hats.png' size=''/>
//<MenuItem_08 name='JACKETS' remoteUrl='https://i.ibb.co/px2tCc3/jackets.png' size=''/>
//<MenuItem_08 name='SNEAKERS' remoteUrl='https://i.ibb.co/0jqHpnp/sneakers.png' size=''/>
//<MenuItem_08 name='WOMENS' remoteUrl='https://i.ibb.co/GCCdy8t/womens.png' size=''/>
//<MenuItem_08 name='MENS' remoteUrl='https://i.ibb.co/R70vBrQ/men.png' size=''/>
