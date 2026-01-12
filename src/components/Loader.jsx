import React, { use } from 'react';
import { TailSpin } from 'react-loader-spinner';
import { ThemeContext } from '../contexts/ThemeContext';

const Loader = () => {

    const { darkMode } = use(ThemeContext);

    const loaderColor = darkMode ? '#86efac' : "#4fa94d";

    return (
        <div className='flex justify-center items-center min-h-screen'>
            <TailSpin
                visible={true}
                height="80"
                width="80"
                color={loaderColor}
                ariaLabel="tail-spin-loading"
                radius="1"
                wrapperStyle={{}}
                wrapperClass=""
            />
        </div>
    );
};

export default Loader;