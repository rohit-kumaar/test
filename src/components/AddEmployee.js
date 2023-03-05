import React from "react";
import { addEmployees } from "../services/employeesService";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

function AddEmployee() {
  const navigate = useNavigate();

  const postData = (values) => {
    addEmployees(values).then((res) => {
      alert("New employee is added");
      navigate("/login");
    });
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Must be 5 characters or greater.")
      .required("Please enter a employee name."),
    email: Yup.string().required("Please enter a employee email."),
    password: Yup.string().required("Please enter a employee password."),
  });

  return (
    <>
      <Formik
        initialValues={{
          name: "",
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
                <label htmlFor="name" className="form-label">
                  <b>Employee Name</b>
                </label>
                <Field
                  type="text"
                  className="form-control"
                  name="name"
                />
                <div className="text-danger">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="col-md-6 mt-5">
                <label htmlFor="email" className="form-label">
                  <b>Employee email</b>
                </label>
                <Field
                  type="email"
                  className="form-control"
                  name="email"
                />
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
              Submit
            </button>
          </div>
        </Form>
      </Formik>
    </>
  );
}

export default AddEmployee;
