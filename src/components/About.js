import React ,{useState} from "react";

export default function About() {
   const [myStyle,setStyle]=useState({color:'black',backgroundColor:'white',border:'0.5px solid black'});
   const onClickHandle=()=>{
       if(myStyle.backgroundColor==='black'){
           setStyle({color:'black',backgroundColor:'white',border :'0.5px solid black'});
           setName('Enable Dark Mode');
       }
       else{
           setStyle({color:'white',backgroundColor:'black',border:'0.5px solid white'})
           setName('Enable Light Mode');
       }
   }
   const [myName, setName] = useState('Enable Dark Mode');


  return (
    <>
    <div className="container my-3"style={myStyle} >
        <h2 className="my-4 mx-1">About Us</h2>
      <div className="accordion" style={myStyle} id="accordionPanelsStayOpenExample">
        <div className="accordion-item" style={myStyle} >
          <h2 className="accordion-header" id="panelsStayOpen-headingOne">
            <button
            style={myStyle} 
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseOne"
              aria-expanded="true"
              aria-controls="panelsStayOpen-collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="panelsStayOpen-headingOne"
          >
            <div className="accordion-body" >
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item " style={myStyle} >
          <h2 className="accordion-header" id="panelsStayOpen-headingTwo">
            <button
            style={myStyle} 
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseTwo"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingTwo"
          >
            <div className="accordion-body" style={myStyle} >
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div className="accordion-item" style={myStyle} >
          <h2 className="accordion-header" id="panelsStayOpen-headingThree">
            <button
            style={myStyle} 
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#panelsStayOpen-collapseThree"
              aria-expanded="false"
              aria-controls="panelsStayOpen-collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="panelsStayOpen-collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="panelsStayOpen-headingThree"
          >
            <div className="accordion-body" style={myStyle} >
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classNamees that we use to style each element. These classNamees
              control the overall appearance, as well as the showing and hiding
              via CSS transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      <div className="container my-3 mx-0">
      <button type="button" className="btn btn-primary " onClick={onClickHandle}>{myName}</button>
    </div>
    </div>
    </>
  );
}
