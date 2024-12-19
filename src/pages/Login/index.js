import React, { useState, useContext} from 'react';
import { View, Text, ActivityIndicator } from 'react-native';

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from './styles';

import { AuthContext } from '../../contexts/auth';

function Login(){
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signUp, signIn, loading } = useContext(AuthContext);

    function toggleLogin(){
        setLogin(!login)  //inverte de true para falso e o contrario
        setName('')
        setEmail('')
        setPassword('')
    }

    //fazer o login do usuario
    async function handleSignIn(){
        if(email==='' || password === ''){
            console.log('preecha todos os campos')
            return;
        }
        await signIn(email, password)
    }

    //cadastrar usuario
    async function handleSignUp(){
        if(name === '' || email === '' || password === ''){
            console.log('preecha todos os campos para cadastrar')
            return;
        }
        await signUp(email, password, name);
    }

    if(login){
        return (
            <Container>
               <Title>
                Dev<Text style={{color:'#e52246'}}>Post</Text>
               </Title>
    
               <Input
                placeholder='seuemail@teste.com'
                value={email}
                onChangeText={ (text) =>setEmail(text) } //pega o valor e coloca dentro da useState
               />
    
               <Input
                placeholder='************'
                value={password}
                onChangeText={ (text) =>setPassword(text) }

               />
    
               <Button onPress={handleSignIn}>
                {loading ? (
                    <ActivityIndicator size={20} color='#fff' />
                ) : (
                    <ButtonText>Acessar</ButtonText>
                )}
                    
               </Button>
    
               <SignUpButton onPress={toggleLogin}>
                <SignUpText>Criar uma conta</SignUpText>
               </SignUpButton>
    
            </Container>
        )
    }

    return (
        <Container>
           <Title>
            Dev<Text style={{color:'#e52246'}}>Post</Text>
           </Title>

           <Input
            placeholder='Seu nome'
            value={name}
            onChangeText={ (text) =>setName(text) }
           />

           <Input
            placeholder='seuemail@teste.com'
            value={email}
            onChangeText={ (text) =>setEmail(text) }
           />

           <Input
            placeholder='************'
            value={password}
            onChangeText={ (text) =>setPassword(text) }
           />

           <Button onPress={handleSignUp}>
            {loading ? (
                    <ActivityIndicator size={20} color='#fff' />
                ) : (
                    <ButtonText>Cadastrar</ButtonText>
                )}
           </Button>

           <SignUpButton onPress={toggleLogin}>
            <SignUpText>Já tenho uma conta</SignUpText>
           </SignUpButton>

        </Container>
    )
}

export default Login;