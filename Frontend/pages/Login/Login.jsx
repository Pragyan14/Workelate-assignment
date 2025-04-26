import { Input, Button, PasswordInput } from '@mantine/core';
import { useState } from 'react';
import axios from 'axios';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/api/v1/login", { email, password });
            console.log(res.data);
            localStorage.setItem('accessToken', res.data.accessToken);
            localStorage.setItem('refreshToken', res.data.refreshToken);
            localStorage.setItem('user', JSON.stringify(res.data.user));

        } catch (err) {
            console.log(err);
        }

        // await axios.post("http://localhost:3000/api/v1/login",{email,password})
        // .then((res) => {console.log(res.data);})
        // .catch((err) => {console.log(err);})
    }

    return (
        <>
            <div className={"min-h-screen flex items-center justify-center text-white px-4"}>
                <div>
                    <h2>LOGIN</h2>
                    <form onSubmit={handleLogin}>
                        <Input
                            placeholder="Email"
                            size='md'
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                        />
                        <PasswordInput
                            placeholder="Password"
                            size='md'
                            value={password}
                            onChange={(e) => { setPassword(e.target.value) }}
                        />
                        <Button type="submit" color="blue">
                            Login
                        </Button>
                    </form>
                </div>
            </div>
        </>
    )
}