import React from 'react';
import {Link} from 'react-router-dom';


export const Menu =({bags}) =>{
    
    return(
        <div>
            <Link to={{
            pathname: "/bag",
            propsSearch: bags
        }}><div>Корзина</div></Link>
            <Link to = '/bag'><div>Рыбки</div></Link>
            <Link to = '/bag'><div>Креветки</div></Link>
        </div>
    )
}