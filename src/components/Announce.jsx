import React, { useState } from 'react';
import { Close } from '@material-ui/icons';

const Announce = () => {

  const [announceStyle, setAnnounceStyle] = useState('bg-[#8a4af3] font-bold flex text-white items-center justify-center')

  const handleClose = () => {
    setAnnounceStyle(announceStyle + " hidden")
  }

  return (
    <div className={announceStyle}>
      <h2>Hurry up</h2>
      <Close className='cursor-pointer' onClick={handleClose}/>
    </div>
  );
};

export default Announce;