import { Row, Col, Form, FormControl, Button } from "react-bootstrap"

export default function LoginPage() {

    const onFormSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const formJson = Object.fromEntries(formData.entries());

        console.log('>>json datası', formJson)
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