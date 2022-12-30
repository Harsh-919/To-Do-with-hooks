import React, { useEffect, useState } from "react";
function Todo() {
  const [data, setdata] = useState("");
  const [item, setitem] = useState([]);
  const [edit, setedit] = useState("");

  useEffect(() => {
    //const item = JSON.parse(localStorage.getItem("item"));
    //console.log(item);
    setitem(JSON.parse(localStorage.getItem("item")) || [])
  },[]);

  const Add = (event) => {
    if (edit > 0) {
      console.log("Edit ma aaya");
      console.log(item[edit]);
      item[edit] = data;
      setitem([...item]);
      localStorage.setItem("item", JSON.stringify(item));
    } else {
      console.log("Add ma aaya");
      item.push(data);
      setitem([...item]);
      setdata(" ");
      //alert("aaya");
      localStorage.setItem("item", JSON.stringify(item));
    }
  };
  const Delete = (index) => {
    item.splice(index, 1);
    setitem([...item]);
    localStorage.setItem("item", JSON.stringify(item));
  };
  const Edit = (index) => {
    const item = JSON.parse(localStorage.getItem("item"));
    const editdata = item[index]
    console.log(index);
    console.log(editdata);
    setdata(editdata);
    setedit(index);
    };
  return (
    <>
      <center>
        <input
          type="text"
          name="data"
          value={data}
          onChange={(e) => setdata(e.target.value)}
        />
        <button onClick={(event) => Add(event)}>Add</button>
        <br />
        {item.map((it, index) => {
          return (
            <h1 key={index}>
              {index + 1}.{it}
              &nbsp;<button onClick={() => Delete(index)}>Delete</button>
              &nbsp;<button onClick={() => Edit(index)}>edit</button>
            </h1>
          );
        })}
      </center>
    </>
  );
}
export default Todo;