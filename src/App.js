import './App.css';
import { useState } from 'react';


function App() {
  let [task, setTask] = useState("")
  let [todo, setToDo] = useState([
    {
      work:"Create Theme",
      status:false
    },
    {
      work:"Work on wordpress",
      status:false
    },
    {
      work:"Bulid the Site",
      status:false
    },
    {
      work:"Test the Application",
      status:false
    }
  ])

  let handleChange = (e)=>{
    let update = [...todo];//achieving the immutability


    let item = e;
    item.status=!item.status
    update.splice(update.indexOf(e),1,item)
    console.log(update)
    setToDo(update)
  }

  
  let add = ()=>{
    if(task)
    {
        let newArr = [...todo];
        newArr.push({
            work:task,
            status:false
        })
        setToDo(newArr)
    }
  }

let remove = ()=>{
  todo = todo.filter(x => x.status === false);
  setToDo(todo);
}
  
  return <>
   <div class="container">
    <div class="row">
        <div class="col-md-12">
            <div class="card card-white">
                <div class="card-body">
                    <form>
                        <input type="text" class="form-control add-task" placeholder="New Task..."  onChange={(e)=>{
                            setTask(e.target.value)
                          }
                          }/>
                    </form>
                    <ul class="nav nav-pills todo-nav">
                        <li role="presentation" class="nav-item all-task active"><a href="#" class="nav-link">All</a></li>
                        <li role="presentation" class="nav-item active-task"><a href="#" class="nav-link">Active</a></li>
                        <li role="presentation" class="nav-item completed-task"><a href="#" class="nav-link">Completed</a></li>
                    </ul>
                    <div class="todo-list">
                        {
                          todo.map((e,index)=>{
                            return <>
                                <div className="todo-item" key={index}>
                                    <div className="checker"><span className=""><input type="checkbox" defaultChecked={e.status} onChange={()=>handleChange(e)}/></span></div>
                                    {e.status?<span><s>{e.work}</s></span>:<span>{e.work}</span>}
                                  </div>

                            </>
                          })
                        }
                    </div>
                    <button class="btn btn-primary"  onClick={()=>add()}>Create</button>
                    <button class="btn btn-danger"  onClick={()=> remove()}>Delete</button>

                </div>
            </div>
        </div>
    </div>
</div>
  </>
}

export default App;
