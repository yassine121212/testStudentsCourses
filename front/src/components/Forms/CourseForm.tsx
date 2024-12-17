 import React from 'react'
import { Formik, Form, Field } from 'formik';
 import * as Yup from 'yup';
 const courseSchema = Yup.object().shape({
  name: Yup.string()
     .min(2, 'Too Short!')
     .max(50, 'Too Long!')
     .required('Required'),
     availablePlaces: Yup.number().required('Required'),
 });


const CourseForm = () => {

 

  return (
    <div> 
         <Formik
    initialValues={{
      name: '',
      availablePlaces:0,
    }}
    validationSchema={courseSchema}
    onSubmit={values => {
       console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field name="name" />
        {errors.name && touched.name ? (
          <div>{errors.name}</div>
        ) : null}
       
        <Field name="email"   />
        {errors.availablePlaces && touched.availablePlaces ? <div>{errors.availablePlaces}</div> : null}
        <button type="submit">Submit</button>
      </Form>
    )}
  </Formik></div>
  )
}

export default CourseForm