import { Row, Col, Form, FormControl, Button } from "react-bootstrap"
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthTokenContext } from "../../components/context/auth-token-context-provider";

export default function LoginPage() {
    const api = useApi();
    const authTokenContextValue = useContext(AuthTokenContext)

    const onFormSubmit = (event) => {
        event.preventDefault();
        //


        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        console.log('>>json datası', formJson)
        api.post('auth/login', formJson)
            .then(response => {
                console.log('>>api response', response)

                authTokenContextValue.setToken(response.data.data.token)
                toast("başarıyla giriş yapıldı")
            })
            .catch(err => {
                console.error(err)
                toast.error('Giriş yapılamadı lütfen tekrar deneyiniz', {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "dark",
                });
            })
    }


    return (
        <>
            <form onSubmit={onFormSubmit}>


                <Row className="justify-content-center">
                    <Col sm="12" lg="4">
                        <div className="form-group mb-3">
                            <Form.Label>
                                Email
                            </Form.Label>
                            <FormControl type="email" name="email" />
                        </div>
                        <div className="form-group mb-3">
                            <Form.Label>
                                Şifre
                            </Form.Label>
                            <FormControl type="password" name="password" />
                            <Button variant="success" className="w-100 mt-3" type="submit">

                                Gönder
                            </Button>
                        </div>
                    </Col>
                </Row>

            </form >
        </>

    )
}