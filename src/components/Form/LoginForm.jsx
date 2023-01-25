import React from "react";

import Button from "react-bootstrap/Button";
import { Toaster } from "react-hot-toast";
import Form from "react-bootstrap/Form";

const FormHandler = ({ handleSubmit, handleChanged, handleSignOut }) => {
  return (
    <>
      <Toaster />
      <Form onSubmit={handleSubmit} className="w-[75%] sm:w-96 ">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>E-posta Adresi</Form.Label>
          <Form.Control
            type="email"
            placeholder="E-mail"
            name="email"
            onChange={handleChanged}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Şifre</Form.Label>
          <Form.Control
            type="password"
            placeholder="Parola"
            name="password"
            onChange={handleChanged}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Giriş Yap
        </Button>
        <Button variant="primary" onClick={handleSignOut}>
          Çıkış Yap
        </Button>
      </Form>
    </>
  );
};

export default FormHandler;
