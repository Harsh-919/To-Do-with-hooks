import React, { useState, useEffect } from "react";
// import { ToastContainer, toast } from "react-toastify";
// import 'react-toastify/disk/ReactToastiffy.css';

 function App() {
    const [todo, setTodo] = useState('');
    const [item, setItem] = useState([]);
    const [edit, setEdit] = useState("");

    useEffect(() => {
        setItem(JSON.parse(localStorage.getItem("item")) || []);
    },[]);

    const Add = (event) => {
        //  toast.success('Data Added Succesfully!', {
        //      position: "top-center",
        //      autoClose: 5000,
        //      hideProgressBar: false,
        //      closeOnClick: true,
        //      pauseOnHover: true,
        //      draggable: true,
        //      progress: undefined,
        //      theme: "dark",
        //     });
        /*toast.success(" Data Added Succesfully ", {
            position: toast.POSITION.TOP_CENTER
            }) */

        if(edit > 0) {
          console.log(edit[item]);
          console.log(item[edit]);
          item[edit] = todo;
          setItem([...item]);
          localStorage.setItem("item", JSON.stringify(item));
        }
        else {
            item.push(todo);
            setItem([...item]);
            setTodo("");
            localStorage.setItem("item", JSON.stringify(item));
        }
    }
    const Delete = (index) => {
        item.splice(index, 1);
        setItem([...item]);
        localStorage.setItem("item", JSON.stringify(item));
    };
    const Edit = (index) => {
    const item = JSON.parse(localStorage.getItem("item"));
    const edit = item[index]
    console.log(index);
    console.log(edit);
    setTodo(edit);
    setEdit(index);
       
    };

    return (
        <React.Fragment>
            <center>
                <h1>TODO </h1>
            </center>
            <hr />
            <center>
            <b>Enter Your Task : </b>
            <input type="text" name="todo"  value={todo} onChange={(e) => setTodo(e.target.value)} />&nbsp;&nbsp;&nbsp;

            <button onClick={Add}> Add </button>
            {/* <ToastContainer /> */}
            <br />
            </center>

                <center>
            {item.map((t, index) => {
                return (
                    <h1 key={index}>
                        {index + 1}.{t}
                        &nbsp;&nbsp; <button onClick={() => Delete(index)}>Delete</button> 
                        <button onClick={() => Edit(index)}>Edit</button>
                    </h1>

                );
            })}
                    </center>

        </React.Fragment>
    )
}
export default App;