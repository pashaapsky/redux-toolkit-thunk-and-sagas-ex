import React from 'react';
import {connect} from 'react-redux';
import {createPost} from "../redux/actions";

class PostForm extends React.Component {
    constructor(props) {
        super(props);

        console.log('props', props);

        this.state = {
            title: ''
        };
    }

    submitHandler = (e) => {
        e.preventDefault();

        const {title} = this.state;

        if (!title.trim()) {
            return
        }

        const newPost = {
            title, id: Date.now().toString()
        };

        console.log(newPost);

        this.props.createPost(newPost);

        this.setState({title: ''})
    };

    onChangeHandler = (e) => {
      e.preventDefault();

      this.setState(prev => ({...prev, ...{[e.target.name]: e.target.value}}))
    };

    render() {
        return (
            <form onSubmit={this.submitHandler}>
                <label htmlFor="title">Инпут лабел</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={this.state.title}
                    onChange={this.onChangeHandler}
                />

                <button type="submit">Отправить форму</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    createPost
};

export default connect(null, mapDispatchToProps)(PostForm)