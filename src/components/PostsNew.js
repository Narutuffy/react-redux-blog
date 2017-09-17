import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component{
    renderField(field) {
        const { meta: { touched, error } } = field;
        const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
        return (
            <div className={className} >
                <label>{field.label}</label>
                <input
                    className="form-control"
                    type="text"
                    {...field.input}
                />
                <div className="text-help" >
                    {touched ? error : ''}
                </div>
            </div>
        );
   }

   onSubmit(values){
       console.log(values);
   }

    render(){
        const { handleSubmit } = this.props;

        return (
            // When user submits teh form, teh redux side of things will run(ie handleSubmit), when redux decides everything is ok then it calls
            // the call back function which we make
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label="Title"
                    name="title"
                    component={ this.renderField }
                 />
                 <Field
                    label="Categories"
                    name="categories"
                    component={this.renderField}
                 />
                 <Field
                 label="Post Content"
                 name="content"
                 component={this.renderField}
                 />
                 <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        );
    }
}

function validate(value) {
    const errors = {};
    //Validate the input from values
    if (!value.title) {
        errors.title = "Enter a title";
    }
    if (!value.categories) {
        errors.categories = "Enter a categories";
    }
    if (!value.content) {
        errors.content = "Enter some content please";
    }
    
    //If errors is empty, the form is fine to submit
    //If errors has *any* properties, redux form assumes form is invalid
    return errors;
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
}) (PostsNew);