import { LuSend } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import { FaCheckSquare } from "react-icons/fa";

import './styles/Content.scss'
import { useTranslation } from 'react-i18next';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { t } = useTranslation();
  const form = useRef();
  const [messageSent, setMessageSent] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(import.meta.env.VITE_SERVICE_ID_EMAILJS, import.meta.env.VITE_TEMPLATE_ID_EMAILJS, form.current, {
        publicKey: import.meta.env.VITE_PUBLIC_KEY_EMAILJS,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
          setMessageSent(true);

          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className="container_contact">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <div className="form_card1">
          <p id="contact_section_description" className="description">{t('contact_section_description')}</p>
          <div className="contact_div">
            <div className="contact_content">
              <div className="icon_contact"><FaWhatsapp /></div>
              <a id="send_message_wp" className="text_contact" href="https://wa.me/+593999796892?text=Hola Christian, vi tu portafolio, ¿podríamos planificar una reunión?">{t('send_message_wp')}</a>
            </div>
            <div className="contact_content">
              <div className="icon_contact"><FaPhone /></div>
              <a className="text_contact" href="tel:+593999796892">(+593)999796892</a>
            </div>
            <div className="contact_content">
              <div className="icon_contact"><IoIosMail /></div>
              <a className="text_contact" href="mailto:cjromerom28@gmail.com">cjromerom28@gmail.com</a>
            </div>
            <div className="contact_content">
              <div className="icon_contact"><FaLocationDot /></div>
              <a className="text_contact">Loja, Ecuador</a>
            </div>
          </div>
        </div>
        <div className="form_card2">
          <div className="form_elements">
            <input className="form_inputs" type="text" name="name" placeholder={t('placeholders.name')} />
          </div>
          <div className="form_elements">
            <input className="form_inputs" type="email" name="email" placeholder={t('placeholders.email')} />
          </div>
          <div className="form_elements">
            <input className="form_inputs" type="text" name="subject" placeholder={t('placeholders.subject')} />
          </div>
          <div className="form_elements">
            <textarea className="form_inputs text_area" name="message" placeholder={t('placeholders.text_area')}></textarea>
          </div>
          <div className="container_btn_send">
            <button id="btn_send_message" className="btn_submit" type="submit" value="Send">{t('btn_send_message')} &nbsp;<LuSend /> </button>
            {messageSent && (<p id="message_sent" className="send_message_success">{t('message_sent')} <p className="checkSquare">&nbsp;<FaCheckSquare /></p></p>)}
            {/* <p className="send_message_succes">{messageSent && (<p className="checkSquare">&nbsp;<FaCheckSquare /></p>)}</p> */}
          </div>

        </div>
      </form>
    </div>
  )
}

export default Contact