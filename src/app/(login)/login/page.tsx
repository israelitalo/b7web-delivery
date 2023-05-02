"use client";

import { login } from '@/services/endpoints/auth/auth';
import { Button, Typography, Stack, TextField, Link as LinkMUI, Alert } from '@mui/material'
import Link from 'next/link';
import { useCallback, useState } from 'react';

type FormValue = {
  email: string;
  password: string;
}

const Page = () => {
  const [formValue, setFormValue] = useState<FormValue>({} as FormValue);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValue.email || !formValue.password) {
      setError('Informe e-mail e senha');
      return;
    }

    setError(undefined);

    setLoading(true);

    login(formValue).then(response => {
      console.log(response);
    }).finally(() => setLoading(false));
  }, [formValue]);

  return (
    <Stack gap={2} width="100%">
      <Typography component="p" textAlign="center">
        Digite seus dados para entrar no painel administrativo do estabelecimento e gerenciar produtos/pedidos.
      </Typography>

      {error && <Alert variant='standard' severity='error'>{error}</Alert>}

      <Stack component="form" gap="15px" onSubmit={onSubmit}>
        <TextField 
          label="Digite seu e-mail"
          name="email"
          required
          autoFocus
          type='email'
          value={formValue.email}
          onChange={(event) => setFormValue(formValue => ({...formValue, email: event.target.value}))}
        />
        <TextField 
          label="Digite sua senha"
          name="password"
          required
          type='password'
          value={formValue.password}
          onChange={(event) => setFormValue(formValue => ({...formValue, password: event.target.value}))}
        />
        <Button variant='contained' color='primary' type='submit' disabled={loading}>
          Entrar
        </Button>
        <LinkMUI href='/login/forgot' variant='body2' component={Link}>Esqueci minha senha</LinkMUI>
      </Stack>
    </Stack>
  )
}

export default Page;