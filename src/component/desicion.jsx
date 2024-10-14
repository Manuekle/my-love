/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React, { useState } from 'react';

import Porfis from '../assets/images/mmm.gif';
import Accepted from '../assets/images/accept.gif';

function desicion() {
  const [sayYes, setSayYes] = useState(false);
  // console.log('App -> size', size);
  const [posistion, setPosition] = useState(0);
  const [size, setSize] = useState(14);
  const texts = [
    'no',
    '¿Estás segura?',
    '¿De verdad estás segura?',
    '¡Piénsalo otra vez!',
    '¡Última oportunidad!',
    '¡Seguramente no!',
    '¡Te puedes arrepentir!',
    '¡Dale otra vuelta!',
    '¿Estás absolutamente segura?',
    '¡Esta podría ser tu última oportunidad!',
    '¡Puede que no tengas otra oportunidad!',
    '¡Ten un poco de corazón!',
    '¡No seas tan cruel!',
    '¿Cambio de opinión?',
    '¿No lo reconsiderarías?',
    '¿Es tu última respuesta?',
    'Me estás rompiendo el corazón :(',
    '¡Estás cometiendo un error!',
    '¡Te vas a arrepentir!',
    'Ok, me rindo...'
  ];
  const handleNoButtonClick = () => {
    const random = (posistion + 1) % texts.length;
    setPosition(random);
    setSize(size + 14);
  };

  const handleYesButtonClick = () => {
    setSayYes(true);
  };
  return (
    <div>
      <span className="flex flex-row justify-between items-center gap-14 pt-10">
        {sayYes ? null : (
          <button
            type="button"
            onClick={handleYesButtonClick}
            className="bg-black text-white p-3 font-bold text-sm tracking-tight"
          >
            si
          </button>
        )}

        {sayYes ? (
          <span className="flex flex-col gap-4 items-center">
            <img
              src={Accepted}
              alt="accepted"
              className="object-cover w-28 xl:w-56"
            />
            <p className="font-bold text-sm">sabia que ibas a decir que si!</p>
            <p className="font-bold text-sm">
              te quiero muchoooo{' '}
              <strong className="text-red-500 font-bold text-xl">𖹭</strong>{' '}
              juliana
            </p>
          </span>
        ) : (
          <img
            src={Porfis}
            alt="porfis"
            className="object-cover w-28 xl:w-56"
          />
        )}

        {sayYes ? null : (
          <button
            type="button"
            onClick={handleNoButtonClick}
            className="bg-black text-white p-3 font-bold text-sm tracking-tight"
          >
            {texts[posistion]}
          </button>
        )}
      </span>
    </div>
  );
}

export default desicion;
