/* eslint-disable no-unused-vars */
/* eslint-disable no-plusplus */
import React from 'react';
import '@fontsource/dm-mono';
import Header from './assets/images/header.jpg';
import Juntos from './assets/images/juntos.jpg';
import Ours from './assets/images/ours.jpg';
import Desicion from './component/desicion';

function App() {
  const parrafoI =
    'juliana, eres la persona que mas amo, mi lugar seguro, me hiciste sentir querido cuando pense que no quedaba nadie, cuando me senti solo y sentia que la vida no tenia sentido estabas tu para hacerme saber que no estaba completamente solo^^.';
  const parrafoII =
    'aprecio todo lo que haces por mi, cada minuto que me dedicas me haces sentir especial e importante, me siento seguro a tu lado, mirate eres la persona mas linda de este mundo te amo!';
  const parrafoIII =
    'agradezco el dia en el que nos conocimos, no dudaste ni un segundo en darme tu linda amistad, tu eres la chica que me complementa, amo y disfruto todos los dias que te veo, eres tan linda que amo pasar tiempo contigo <3.';
  const parrafoIV =
    'mi corazon siempre sera tuyo no importa si algun dia nos alejamos simpre te guardare en mi corazon, tus abrazos, tu afecto son cosas tan minimas que me hacen sentir tan feliz, nadie puede causar lo que tu haces en mi, eres tan especial para mi, eres la razon por la cual sigo aqui y si algun dia ya no estoy prometo buscarte en mi otra vida.';

  return (
    <section className="h-full w-full relative">
      <div className="px-8 xl:px-56 py-20">
        <article className="flex flex-col justify-center items-center">
          <span className="flex flex-row justify-between items-center gap-8">
            <h6 className="text-xs font-bold">21.12.2001</h6>
            <h6 className="text-2xl text-red-500">𖹭</h6>
            <h6 className="text-xs font-bold">28.02.2002</h6>
          </span>
          <span className="flex flex-col justify-center items-center">
            <div className="bg-black px-6">
              <h1 className="text-4xl font-bold text-center text-white">
                MY ONLY LOVE
              </h1>
            </div>
            <img src={Header} alt="header" className="w-56" />
          </span>
        </article>
        {/* <hr className="py-2" /> */}
        <section className="grid xl:grid-cols-2 gap-10 pt-10 items-start">
          <article className="grid xl:grid-cols-2 items-center gap-8 xl:gap-4">
            <img
              src={Juntos}
              alt="juntos"
              className="rounded-full object-cover"
            />
            <span className="flex flex-col gap-2">
              <p className="tracking-tight font-bold text-xs lowercase">
                {parrafoI}
              </p>
              <p className="tracking-tight font-bold text-xs lowercase">
                {parrafoII}
              </p>
            </span>
          </article>
          <article className="grid grid-cols-2 gap-4">
            <p className="col-span-2 tracking-tight font-bold text-xs lowercase">
              {parrafoIII}
            </p>
            <p className="col-span-2 xl:col-span-1 tracking-tight font-bold text-xs lowercase">
              {parrafoIV}
            </p>
            <span className="col-span-2 xl:col-span-1 flex justify-center">
              <img
                src={Ours}
                alt="ours"
                className="rounded-full object-cover w-44"
              />
            </span>
          </article>
        </section>
        <section className="pt-20 flex flex-col justify-center items-center">
          <h1 className="font-bold text-xl bg-black text-white px-6 text-center">
            me concederias el privilegio ser tu novio?
          </h1>
          <Desicion />
        </section>
      </div>
    </section>
  );
}

export default App;
