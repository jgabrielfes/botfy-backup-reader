import React, { useCallback, useState } from 'react';
import { useSnackbar } from 'notistack';
import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';
import Fab from '@mui/material/Fab';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import CloseIcon from '@mui/icons-material/Close';
import EmailIcon from '@mui/icons-material/Email';
import LockIcon from '@mui/icons-material/Lock';

import LoadingBtn from '../LoadingBtn';
import PasswordField from '../PasswordField';

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [prelogged, setPrelogged] = useState(true);
  const { enqueueSnackbar } = useSnackbar();

  const handleSubmit = useCallback(event => {
    event.preventDefault();
    console.log(email);
    console.log(password);
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      enqueueSnackbar('Usuário não encontrado', { variant: 'error' });
    }, 1000);
  }, [enqueueSnackbar, email, password]);

  return (
    <form style={{ textAlign: 'center' }} onSubmit={handleSubmit}>
      {prelogged ? (
        <Badge
          badgeContent={
            <Fab
              color="primary"
              sx={{ height: 26, minHeight: 26, width: 26 }}
              onClick={() => setPrelogged(false)}
            >
              <CloseIcon fontSize="small" />
            </Fab>
          }
        >
          <Avatar
            variant="rounded"
            sx={{
              bgcolor: 'primary.main',
              height: 120,
              width: 120,
            }}
          >
          </Avatar>
        </Badge>
      ) : (
        <Stack direction="row" alignItems="center">
          <EmailIcon color="secondary" fontSize="large" sx={{ mr: 1 }} />
          <TextField
            type="email"
            color="secondary"
            variant="filled"
            label="E-mail"
            size="small"
            disabled={submitting}
            required
            fullWidth
            onChange={({ target }) => setEmail(target.value)}
          />
        </Stack>
      )
      }

      <Stack direction="row" alignItems="center" mt={3}>
        <LockIcon color="secondary" fontSize="large" sx={{ mr: 1 }} />
        <PasswordField
          submitting={submitting}
          setPassword={setPassword}
        />
      </Stack>

      <Link color="secondary" sx={{ float: 'right' }}>
        Esqueci minha senha
      </Link>

      <Stack textAlign={{ xs: 'center', sm: 'left' }} mt={8} width="fit-content">
        <LoadingBtn
          type="submit"
          loading={submitting}
          variant="contained"
          sx={{ px: 5 }}
        >
          Entrar
        </LoadingBtn>
      </Stack>
    </form >
  );
}

export default LoginForm;
