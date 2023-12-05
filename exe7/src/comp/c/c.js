// import React from 'react'

// export default function C() {
//   return (
//     <div>creact options</div>
//   )
// }



// import React, { useState } from 'react';

// import { Button, Checkbox, Form } from 'semantic-ui-react';

// import axios from 'axios';

// export default function C () {
//     const [fn, setfn] = useState('');
//     const [ln, setln ]=useState('');
//     console.log(fn);
//     console.log(ln);

//     const sendDataToAPI = () => {}
//     axios.post(`https://64b9313b79b7c9def6c0bc99.mockapi.io/CRUD`,
//     {fn,ln})
//     return (
// // const FormExampleForm = () => (
//     <Form>
//         <Form.Field>
//             <label>First Name</label>
//             <input name="fn" onChange={(e) =>setfn(e.target.value)} placeholder='First Name' />
//         </Form.Field>
//         <Form.Field>
//             <label>Last Name</label>
//                 <input name="ln" onChange={(e) => setln(e.target.value)}  placeholder='Last Name' />
//         </Form.Field>
//         {/* <Form.Field>
//             <Checkbox label='I agree to the Terms and Conditions' />
//         </Form.Field> */}
//             <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
//     </Form>
// )
// }
// // export default FormExampleForm


import React, { useState } from 'react';
import { Form, Button } from 'semantic-ui-react';
import axios from 'axios';
// import { useHistory } from 'react-router';
// import { useHistory } from 'react-router-dom';
import { useNavigate } from "react-router-dom"
import { Link } from 'react-router-dom';
export default function C () {
    let history = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const sendDataToAPI = () => {
        axios.post(`https://64b9313b79b7c9def6c0bc99.mockapi.io/CRUD`, {
            firstName,
            lastName
        }).then(() => {
            history.push('/r')
        })
    }
    return (
        <div>
            <Form>
                <Form.Field>
                    <label>First Name</label>
                    <input name="fname"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder='First Name' />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input
                        name="lname"
                        placeholder='Last Name'
                        onChange={(e) => setLastName(e.target.value)}
                    />
                </Form.Field>
                <Button type='submit' onClick={sendDataToAPI}>Submit</Button>
            </Form>
        </div>
    )
}





