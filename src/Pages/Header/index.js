import React from 'react';
import {HeaderStyle, Logo, LogIn, Contact} from "Styles/HeaderStyle";
import {Link} from 'react-router-dom';
import { useAuth0 } from "Pages/Blocks/Auth0";


export const Header =({bags, isAuth}) =>{
    const { loginWithRedirect, logout } = useAuth0();
    return(
        <div>
        <HeaderStyle>
         <Logo src = 'images/logo.jpg'></Logo>
            <Link to = '/'><div>Каталог</div></Link>
            <Link to={{
            pathname: "/bag",
            propsSearch: bags
        }}><div>Корзина</div></Link>
            <Link to = '/bag'><div>Оплата и доставка</div></Link>
            <Link to = '/bag'><div>Контакты</div></Link>
            <div>
      {!isAuth && (
        <LogIn onClick={() => loginWithRedirect({})}>Войти</LogIn>
      )}

      {isAuth && <LogIn onClick={() => logout()}>Выйти</LogIn>}
    </div>
    </HeaderStyle>
    <Contact>Contact</Contact>
    </div>
    )
}
