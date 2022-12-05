//card number input
document.querySelector(".card-number-input").oninput = () =>{
    document.querySelector(".card-box").innerText =
      document.querySelector(".card-number-input").value;
  };
  
//card holder name input
  document.querySelector(".card-holder-input").oninput = () =>{
    document.querySelector(".cardholder-name").innerText =
      document.querySelector(".card-holder-input").value;
  };

//month input
  document.querySelector(".month-input").oninput = () =>{
    document.querySelector(".exp-month").innerText =
      document.querySelector(".month-input").value;
  };
  
  //year input
  document.querySelector(".year-input").oninput = () =>{
    document.querySelector(".exp-year").innerText =
      document.querySelector(".year-input").value;
  };

// cvv input
  document.querySelector(".cvv-input").oninput = () =>{
    document.querySelector(".cvv-box").innerText =
      document.querySelector(".cvv-input").value;
  };

//  Transition on mouse 
  document.querySelector(".cvv-input").onmouseenter = () =>{
    document.querySelector(".front").style.transform ='perspective(1000px) rotateY(-180deg)';
    document.querySelector(".back").style.transform ='perspective(1000px) rotateY(0deg)'
  };

  document.querySelector(".cvv-input").onmouseleave = () =>{
    document.querySelector(".front").style.transform ='perspective(1000px) rotateY(0deg)';
    document.querySelector(".back").style.transform ='perspective(1000px) rotateY(180deg)'
  };