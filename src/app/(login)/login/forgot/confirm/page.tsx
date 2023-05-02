"use client";

import Button from '@/components/Button';
import { changePassword } from '@/services/endpoints/auth/auth';
import { Typography, Stack, TextField, Alert } from '@mui/material'
import { useCallback, useState } from 'react';

type FormValue = {
  password: string;
  confirmPassword: string;
}

const Page = () => {
  const [formValue, setFormValue] = useState<FormValue>({} as FormValue);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValue.password || !formValue.confirmPassword) {
      setError('Informe sua nova senha nos dois campos');
      return;
    }

    if (formValue.password !== formValue.confirmPassword) {
      setError('As senhas precisam ser iguais');
      return;
    }

    setError(undefined);

    setLoading(true);

    changePassword(formValue).then(res => res.data).catch(() => setError('Problema ao alterar senha')).finally(() => setLoading(false))
  }, [formValue]);

  return (
    <Stack gap={2} width="100%">
      <Typography component="p" textAlign="center">
        Confirme sua nova senha.
      </Typography>

      {error && <Alert variant='standard' severity='error'>{error}</Alert>}

      <Stack component="form" gap="15px" onSubmit={onSubmit}>
        <TextField 
          label="Digite sua nova senha"
          name="password"
          required
          type='password'
          value={formValue.password}
          onChange={(event) => setFormValue(formValue => ({...formValue, password: event.target.value}))}
        />
        <TextField 
          label="Confirme sua nova senha"
          name="password"
          required
          type='password'
          value={formValue.confirmPassword}
          onChange={(event) => setFormValue(formValue => ({...formValue, confirmPassword: event.target.value}))}
        />
        <Button variant='contained' color='primary' type='submit' disabled={loading} loading={loading}>
          Definir nova senha
        </Button>
      </Stack>
    </Stack>
  )
}

export default Page;