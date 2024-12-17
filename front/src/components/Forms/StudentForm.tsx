 import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const studentSchema = Yup.object().shape({
    fullName: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
       email: Yup.string().email('Invalid email').required('Required'),
 });


const StudentForm = () => {

 

  return (
    <div> 
         <Formik
    initialValues={{
        fullName: '',
       email: '',
    }}
    validationSchema={studentSchema}
    onSubmit={values => {
       console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="firstName" />
        {errors.fullName && touched.fullName ? (
          <div>{errors.fullName}</div>
        ) : null}
       
        <Field name="email" type="email" />
        {errors.email && touched.email ? <div>{errors.email}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik></div>
  )
}

export default StudentForm