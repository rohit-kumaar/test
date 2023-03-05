import React from "react";
import { addEmployees } from "../services/employeesService";
import { useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function Login() {
  const navigate = useNavigate();

  const postData = (values) => {
    console.log(values.email , values.password);

    if (
      `http://localhost:4000/employees?email=rohit@gmail.com&password=rohit` ==
      true
    ) {
      alert("True");
    }
  };

  const validationSchema = Yup.object({
    email: Yup.string().required("Please enter a employee email."),
    password: Yup.string().required("Please enter a employee password."),
  });

  return (
    <>
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => postData(values)}
      >
        <Form>
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-5">
                <label htmlFor="email" className="form-label">
                  <b>Employee email</b>
                </label>
                <Field type="email" className="form-control" name="email" />
                <div className="text-danger">
                  <ErrorMessage name="email" />
                </div>
              </div>
            </div>

            <div className="mt-3">
              <label htmlFor="password" className="form-label">
                <b>Employee password</b>
              </label>
              <Field type="password" className="form-control" name="password" />
              <div className="text-danger">
                <ErrorMessage name="password" />
              </div>
            </div>

            <button type="submit" className="btn btn-primary mt-3">
              Login
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default Login;
