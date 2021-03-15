import React from "react";
import NavbarAP from "./nav/NavbarAP";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePrincipal from "./home/HomePrincipal";
import Nosotros from "./nosotros/Nosotros";
import Productos from "./productos/Productos";
import FooterAP from "./footer/FooterAp";
import WhatsAppWidget from "react-whatsapp-widget";
import "react-whatsapp-widget/dist/index.css";

const HomeArepasPremium = () => {

  return (
    <>
      <Router>
        <NavbarAP />
        <div>
          <Route exact path="/">
            <HomePrincipal />
          </Route>
          <Route path="/Nosotros">
            <Nosotros />
          </Route>
          <Route path="/Productos">
            <Productos />
          </Route>
        </div>
        
      </Router>
      <WhatsAppWidget sendButton=" Enviar " textReplyTime="Respondemos casi de immediato" companyName="Arepas Premium" message="Bienvenido a ArepasPremium que desea ordenar." phoneNumber="+573175404432" />
      <FooterAP />
    </>
  );
};

export default HomeArepasPremium;
