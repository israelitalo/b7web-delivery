"use client";

import Button from '@/components/Button';
import { forgot } from '@/services/endpoints/auth/auth';
import { Typography, Stack, TextField, Alert } from '@mui/material'
import { useCallback, useState } from 'react';

type FormValue = {
  email: string;
}

const Page = () => {
  const [formValue, setFormValue] = useState<FormValue>({} as FormValue);
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | undefined>()

  const onSubmit = useCallback((event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formValue.email) {
      setError('Informe seu e-mail');
      return;
    }

    setError(undefined);

    setLoading(true);

    forgot(formValue).then(res => res).catch(() => setError('Problema ao recuperar senha')).finally(() => setLoading(false))
  }, [formValue]);

  return (
    <Stack gap={2} width="100%">
      <Typography component="p" textAlign="center">
        Informe seu e-mail, para recuperar a senha.
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
        <Button variant='contained' color='primary' type='submit' disabled={loading} loading={loading}>
          Recuperar senha
        </Button>
      </Stack>
    </Stack>
  )
}

export default Page;