import React, { useState } from 'react';
import {Form } from 'react-bootstrap';
import './contact.css'
const Contact = () => {
    const [validate, setValidate] = useState(false)
    const [name, setName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const sendMessage = (e) => {
        const form = document.querySelector('.contact_page_form')
        if (form.checkValidity() == false) {
            e.stopPropagation();
        } else {
            setName('')
            setEmail('')
            setLastName('')
            setPhone('')
            sendMessage('')
        }
        setValidate(true)
    }
    return (
        <div className='contact_page'>
            <div className='contact_page_form_box'>
                <h1 className='contact_page_title'>Связаться с нами</h1>
                <hr/>
                <p className='mb-4'>
                Вы можете связаться с нами любым удобным для вас способом. Мы доступны круглосуточно по электронной почте.
                Вы также можете воспользоваться формой обратной связи ниже или посетить наш салон лично.
                </p>
                <Form noValidate validated={validate} className='contact_page_form' onSubmit={sendMessage} >
                    <input type='text' value={name} onChange={e => setName(e.target.value)} placeholder='Имя' className='mb-3 form-control contact_page_input'/>
                    <input type='text' value={lastName} onChange={e => setLastName(e.target.value)} placeholder='Фамилия' className='mb-3 form-control contact_page_input'/>
                    <input type='text' value={phone} onChange={e => setPhone(e.target.value)} placeholder='+79777777777' className='mb-3 form-control contact_page_input'/>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} placeholder='E-mail' className='mb-3 form-control contact_page_input'/>
                    <textarea placeholder='Сообщение' value={message} onChange={e => setMessage(e.target.value)} className='mb-3 form-control contact_page_textarea'/>
                    <button onClick={sendMessage} className='contact_btn' >Отправить</button>
                </Form>
            </div>
            <div className='contact_page_info_box'>
                <div className='contact_page_info'>
                    <h2 className='contact_page_info_title'>Адреc</h2>
                    <p className='contact_page_tex'>г. Казань ул. Ленина 44</p>
                    <hr/>
                </div>
                <div className='contact_page_info'>
                    <h2 className='contact_page_info_title'>Телефон</h2>
                    <p className='contact_page_tex'>+79045356234, +79663200071</p>
                    <hr/>
                </div>
                <div className='contact_page_info'>
                    <h2 className='contact_page_info_title'>Почти</h2>
                    <p className='contact_page_tex'>example@gmail.com</p>
                    <hr/>
                </div>
                <div className='contact_page_info'>
                    <h2 className='contact_page_info_title'>Часы работы</h2>
                    <p className='contact_page_tex'>Пн-Пт: 9:00 - 19:00
                    Сб: 9:00 - 16:00
                    Вс: Выходной</p>
                    <hr/>
                </div>
            </div>
        </div>
    );
};

export default Contact;