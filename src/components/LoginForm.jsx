import { useOutletContext, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    width: 300px;
    margin: 0 auto;
`;

const StyledLabel = styled.label`
    margin-top: 10px;
`;

const StyledInput = styled.input`
    margin-bottom: 10px;
    padding: 5px;
`;

const StyledButton = styled.button`
    background-color: #f0f0f0;
    border: none;
    color: black;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    border-radius: 10px;
    padding: 10px;
`;

const LoginForm = () => {
    const navigate = useNavigate();
    const {setUser} = useOutletContext();
    
    const handleSubmit = (evt) => {
        evt.preventDefault();
        console.log(evt.target);
        const form = new FormData(evt.target)
        fetch('http://localhost:3000/users').then(res=>res.json()).then(data=>{
            console.log(data);
            const user = data.find(user => user.username === form.get('username') && user.password === form.get('password'));
            if(user){
                setUser(user);
                navigate('/');
            } else {
                alert('Invalid username or password');
            }
        });
    }; 

    return (
        <StyledForm onSubmit={handleSubmit}>
            <StyledLabel >User name</StyledLabel>
            <StyledInput name="username" />
            <StyledLabel>Password</StyledLabel>
            <StyledInput name="password" type="password" />
            <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
    );
}
export default LoginForm;