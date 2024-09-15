import React from 'react'
import { LuSend } from "react-icons/lu";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import './styles/Content.scss'
import { useTranslation } from 'react-i18next';

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div className="container_contact">
      <form className="form" action="">
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
            <input className="form_inputs" type="text" placeholder={t('placeholders.name')} />
          </div>
          <div className="form_elements">
            <input className="form_inputs" type="email" placeholder={t('placeholders.email')} />
          </div>
          <div className="form_elements">
            <input className="form_inputs" type="text" placeholder={t('placeholders.subject')} />
          </div>
          <div className="form_elements">
            <textarea className="form_inputs text_area" name="" id="" placeholder={t('placeholders.text_area')}></textarea>
          </div>
          <button id="btn_send_message" className="btn_submit" type="submit">{t('btn_send_message')} &nbsp;<LuSend /> </button>
        </div>
      </form>
    </div>
  )
}

export default Contact