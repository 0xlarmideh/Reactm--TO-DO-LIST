export default function Todo() {
  return (
      <div className='todo-card'>
        <div className="todo-in-flex">
          <div className="todo-title">Clean the house</div>
          <i className="fa-solid fa-xmark"></i>
        </div>
        <div className="todo-badge">Home</div>
        <div className="todo-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum!</div>
        <div className="todo-priority">High</div>
      </div>
  )
}

// return (
//       <div className='todo-card'>
//         <div className="todo-in-flex">
//           <div className="todo-title">{props.title}</div>
//           <i className="fa-solid fa-xmark"></i>
//         </div>
//         <div className="todo-badge">{props.badge}</div>
//         <div className="todo-description">{props.description}</div>
//         <div className="todo-priority">{props.priority}</div>
//       </div>
//   )