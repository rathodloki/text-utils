import React, {useState} from "react";

function TextForm(props) {
  const handleUPCase = ()=>{
    let newText = text.toUpperCase(); 
    setText(newText)
    props.showAlert("Text converted to Uppercase","success")
  }

  const handleLOCase = ()=>{
    let newText = text.toLowerCase(); 
    setText(newText)
    props.showAlert("Text converted to Lowercase","success")
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState("")
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="container my-3">
        <textarea className="form-control" onChange={handleOnChange} style={{ backgroundColor:  props.mode === 'light' || props.mode === 'success' || props.mode === 'warning'?'white':'#212529', color: props.mode === 'dark'?'white':'black'}} id="mybox" value={text} rows="8"></textarea>

      </div>
      <button className={`btn btn-${props.mode === 'success'? 'success':props.mode === 'warning'? 'warning':'primary'} mx-2`} onClick={handleUPCase}>Convert to Uppercase</button>
      <button className={`btn btn-${props.mode === 'success'? 'success':props.mode === 'warning'? 'warning':'primary'} mx-2`} onClick={handleLOCase}>Convert to Lowercase</button>
      <button className={`btn btn-${props.mode === 'success'? 'success':props.mode === 'warning'? 'warning':'primary'} mx-2`} onClick={()=>{setText("");props.showAlert("Text cleared", "success"); }}>Clear Text</button>
    </div>

    <div className="container my-3" >
    <h2> Your text Summary</h2>
    <p>{`${text.length ===0?0:text.trim().split(/\s+/).length} and ${text.length} Characters`}</p>
    <h2> Preview</h2>
    <p>{text.length>0?text:'Enter something in the textbox to get preview here'}</p>
    </div>
    </>
  );


}

export default TextForm;
