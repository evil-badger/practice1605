import { Box, TextField, Button } from "@mui/material"
import { useFormik } from 'formik';
import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string()
        .min(2, 'Too Short!')
        .max(8, 'Too Long!')
        .required('Required'),

});

const LoginForm = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema:SignupSchema,
        onSubmit: async values => {
            let response = await fetch('https://api.escuelajs.co/api/v1/auth/login', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json;charset=utf-8'
                },
                body: JSON.stringify(values)
              });
        },
    });

    console.log(formik);
    return (
        <Box>

            Login form is avaiable
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ display: "flex", flexDirection: "column", gap: "20px", backgroundColor: "white", width: "400px", padding: "50px" }}>
                <TextField
                    error={formik.errors.email}
                    helperText={formik.errors.email}
                    id="email"
                    name="email"
                    label="email" variant="outlined"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                />

                <TextField
                    error={formik.errors.password}
                    helperText={formik.errors.password}
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    label="passwd" variant="outlined"
                />
                <Button type="submit" variant="contained">Enter</Button>
            </Box>
        </Box>
    )
}
export default LoginForm