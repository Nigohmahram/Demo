import PostList from "./PostList";

export default function Posts(props) {
      return (
            <div onClick={props.callback}>
            {props.posts.map(post => (
                  <PostList key={post.id} name={post.name} cb={props.callback}/>
            ))}
            </div>
      )
}