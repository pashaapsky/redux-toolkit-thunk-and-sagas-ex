import React from 'react';
import {useFormik} from "formik";
import {useDispatch} from "react-redux";
import {addPost} from "../store/posts/postSlice";
import MaskedInput from 'react-text-mask'
import Button from "react-bootstrap/Button";

function PostForm(props) {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            title: '',
            body: '',
            number: ''
        },
        onSubmit: (values) => {
            if (values.title.trim() && values.body.trim()) {
                const newPost = {
                    id: new Date().getSeconds(),
                    title: values.title,
                    body: values.body,
                    author: 3
                };

                dispatch(addPost(newPost));
            }
        },
    });


    return (
        <form className="d-flex flex-column bg-primary p-3" onSubmit={formik.handleSubmit} style={{width: "400px"}}>
            <label className="mb-0" htmlFor="firstName">First Name</label>
            <input
                id="title"
                name="title"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
            />

            <label className="mb-0" htmlFor="lastName">Last Name</label>
            <input
                id="body"
                name="body"
                type="text"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.body}
            />

            <label className="mb-0" htmlFor="phone">Phone</label>
            <MaskedInput
                mask={['+', '8', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/]}
                // placeholder="Enter a phone number"
                keepCharPositions={true}
                // guide={true}
                showMask={true}
                id="phone"
                onChange={() => formik.handleChange}
                value={formik.values.number}
            />

            <Button variant="outline-light mt-3" type="submit">Add post</Button>
        </form>
    );
}

export default PostForm;