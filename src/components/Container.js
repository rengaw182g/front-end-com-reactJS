import React from 'react';

export default function Container({titulo,children}){
    return(<div>
        {titulo}
        {children}
        </div>
        )
}