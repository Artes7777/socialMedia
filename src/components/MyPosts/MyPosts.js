import React from 'react';
import Post from './Post/Post';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/elements';
import {required, maxLengthCreator} from '../../common/validators';

const MyPosts = React.memo( props => {
  
  const addPost = (values) => {
     props.addPostClick(values.post)
  }

  return (
    <div>
      <div>
        MyPosts
      </div>
      <RedyxMyPostsForm onSubmit = {addPost}/>
        {props.posts.map(post => {
          return <Post profilePage = {props.profilePage} message = {post.message} like = {post.like} id = {post.id} key = {post.id}/>
          }
        )}   
    </div>
  )
})

const MyPostsForm = (props) => {
  return (
    <div>
      <form onSubmit = {props.handleSubmit}>
        <div>
          <Field component = {Textarea} validate = {[required, maxSymbols]} name = 'post' />
        </div>
        <div>
        <button>Add post</button>
        </div>
      </form>
    </div>
  )
}

const maxSymbols = maxLengthCreator(10);

const RedyxMyPostsForm = reduxForm({
  form: 'posts'
})(MyPostsForm)

export default MyPosts;
