import { Row, Col, Form, FormControl, Button } from "react-bootstrap"
import useApi from "../../hooks/useApi";
import { toast } from "react-toastify";
import { useContext, useRef, useState } from "react";
import { AuthTokenContext } from "../../components/context/auth-token-context-provider";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserData } from "../../redux/reducers/userSlice";

export default function LoginPage() {
    const api = useApi();
    const authTokenContextValue = useContext(AuthTokenContext)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();

    const onFormSubmit = (event) => {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        console.log('>>json datası', formJson);
        api.post('auth/login', formJson)
            .then(response => {
                console.log('>>api response', response)

                authTokenContextValue.setToken(response.data.data.token)
                dispatch(setUserData(response.data.data.userData))
                toast("başarıyla giriş yapıldı")
                navigate("/");
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
                            <Form.Control
                                type="email"
                                name="email"
                                ref={emailRef}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                        </div>
                        <div className="form-group mb-3">
                            <Form.Label>
                                Şifre
                            </Form.Label>
                            <Form.Control
                                type="password"
                                name="password"
                                ref={passwordRef}
                                onChange={(event) => setPassword(event.target.value)}
                            />
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