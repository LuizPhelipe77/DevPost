import React, { useState} from 'react';
import { View, Text } from 'react-native';

import { Container, Title, Input, Button, ButtonText, SignUpButton, SignUpText } from './styles';

function Login(){
    const [login, setLogin] = useState(true);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function toggleLogin(){
        setLogin(!login)  //inverte de true para falso e o contrario
        setName('')
        setEmail('')
        setPassword('')
    }

    //fazer o login do usuario
    function handleSignIn(){
        if(email==='' || password === ''){
            console.log('preecha todos os campos')
            return;
        }
    }

    //cadastrar usuario
    function handleSignUp(){
        if(name === '' || email === '' || password === ''){
            console.log('preecha todos os campos para cadastrar')
            return;
        }
    }

    if(login){
        return (
            <Container>
               <Title>
                Dev<Text style={{color:'#e52246'}}>Post</Text>
               </Title>
    
               <Input
                placeholder='seuEmail@teste.com'
                value={email}
                onChangeText={ (text) =>setEmail(text) } //pega o valor e coloca dentro da useState
               />
    
               <Input
                placeholder='************'
                value={password}
                onChangeText={ (text) =>setPassword(text) }

               />
    
               <Button onPress={handleSignIn}>
                    <ButtonText>Acessar</ButtonText>
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
            placeholder='seuEmail@teste.com'
            value={email}
            onChangeText={ (text) =>setEmail(text) }
           />

           <Input
            placeholder='************'
            value={password}
            onChangeText={ (text) =>setPassword(text) }
           />

           <Button onPress={handleSignUp}>
                <ButtonText>Cadastrar</ButtonText>
           </Button>

           <SignUpButton onPress={toggleLogin}>
            <SignUpText>Já tenho uma conta</SignUpText>
           </SignUpButton>

        </Container>
    )
}

export default Login;