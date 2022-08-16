import React from 'react';
import AuthLayout from "../layout/AuthLayout";
import {Button, Grid, Link, TextField, Typography} from "@mui/material";
import {Google} from "@mui/icons-material";
import {Link as RouterLink} from "react-router-dom";

const RegisterPage = () => {
  return (
    <AuthLayout title="Register">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label={'Nombre'}
                       type={"text"}
                       placeholder={'John Wick'}
                       fullWidth/>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label={'Email'}
                       type={"email"}
                       placeholder={'correo@google.com'}
                       fullWidth/>
          </Grid>

          <Grid item xs={12} sx={{mt: 2}}>
            <TextField label={'Contraseña'}
                       type={"password"}
                       placeholder={'Contraseña'}
                       fullWidth/>
          </Grid>

          <Grid container spacing={2} sx={{mb: 2, mt: 1}}>
            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                Crear cuenta
              </Button>
            </Grid>

            <Grid item xs={12} sm={6}>
              <Button variant="contained" fullWidth>
                <Google/>
                <Typography sx={{ml: 1}}>Google</Typography>
              </Button>
            </Grid>

            <Grid container direction={"row"} justifyContent={"end"}>
              <Typography sx={{mr: 1}}>¿Ya tienes una cuenta?</Typography>
              <Link component={RouterLink} color={"inherit"} to={'/auth/login'}>
                Ingresar
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};

export default RegisterPage;
