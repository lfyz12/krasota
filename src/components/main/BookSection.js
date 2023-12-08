import React, {useEffect, useState} from 'react';
import './booksection.css'
import { Dropdown, Form } from 'react-bootstrap';
const BookSection = ({service, master, ...props}) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [comment, setcomment] = useState('')
    const [services, setServices] = useState(['Укладка', 'Макияж', 'Маникюр', 'Массаж', 'СПА', 'Косметология'])
    const [validated, setValidated] = useState(false);

    function confirmOrder(event) {
        const form = document.querySelector('.form_check_order');
        event.preventDefault();
        if (form.checkValidity() === false) {
          event.stopPropagation();
        } else {
            setName('')
            setEmail('')
            setPhone('')
            setcomment('')
        }
        
        setValidated(true);

      }
    return (
        <div className='book_page' id='book'>
             <Form noValidate validated={validated} className='form_check_order' onSubmit={confirmOrder}>
                   <h2 className='form_check_title'>Назначить встречу</h2>
                   <div className='form_input_section mt-3'>
                    <input required type='text' value={name}
                        onChange={e => setName(e.target.value)} className='form-control form_input' placeholder='Имя'/>
                    <input required type='text' value={email}
                        onChange={e => setEmail(e.target.value)} className='form-control form_input' placeholder='Email'/>
                   </div>
                   <div className='form_input_section'>
                    <input required type='text' value={phone}
                        onChange={e => setPhone(e.target.value)} minLength={12}
                        maxLength={12} className='form-control form_input' placeholder='+79777777777'/>
                    <select className='form_input'>
                        <option value='d'>Татьяна</option>
                        <option value='d'>Анжела</option>
                        <option value='d'>Валентина</option>
                        <option value='d'>Наталья</option>
                    </select>
                   </div>
                   <div className='form_input_section'>
                    <input required type='date' className='form-control form_input' placeholder='Имя'/>
                    <select className='form_input'>
                        <option value='d'>Стрижка</option>
                        {services.map(item => 
                            <option value={item}>{item}</option>
                        )}
                    </select>
                   </div>
                   <div className='form_input_section'>
                      <input
                        required
                        className='mb-2 form-control form_text_area'
                        value={comment}
                        onChange={e => setcomment(e.target.value)}
                        placeholder="Комментарий"
                        as="textarea"
                      />
                    </div>
                  <button type='submit' onClick={confirmOrder} className='order_products_accept_btn'>
                    Назначить
                  </button>
                  </Form>
        </div>
    );
};

export default BookSection;