import React from 'react';

export default function Headers({titulo,children}){
    return(<header>
        {titulo}
        {children}
        </header>
        )
}