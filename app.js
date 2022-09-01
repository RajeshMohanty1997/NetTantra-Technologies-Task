//Form1 JS Code

const form1Button = document.getElementById('form1-submit-btn');

const onForm1Submit = function (e) {
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values
  let user = {
    firstName: document.getElementById('firstname').value,
    lastName: document.getElementById('lastname').value,
  };

  let dob = document.getElementById('dob').value;
  let email = document.getElementById('email').value;

  let fatherName = {
    firstName: document.getElementById('fatherfirstname').value,
    lastName: document.getElementById('fatherlastname').value,
  };

  let motherName = {
    firstName: document.getElementById('motherfirstname').value,
    lastName: document.getElementById('motherlastname').value,
  };

  let gender = document.querySelector('input[name="gender"]').value;
  let nationality = document.getElementById('nation').value;
  let address = {
    street: document.getElementById('street').value,
    city: document.getElementById('city').value,
    country: document.getElementById('country').value,
  };
  let number = {
    telephone: document.getElementById('hNumber').value.length > 0 || null,
    mobile: document.getElementById('mNumber').value,
  };

  const formValues1 = {
    user,
    dob: new Date(dob).toDateString(),
    email,
    fatherName,
    motherName,
    gender,
    nationality,
    address,
    number,
  };

  // form valid condition
  let isFormValid =
    user.firstName &&
    user.lastName &&
    dob &&
    email &&
    fatherName.firstName &&
    fatherName.lastName &&
    motherName.firstName &&
    motherName.lastName &&
    gender &&
    nationality &&
    address.street &&
    address.city &&
    address.country &&
    number.mobile;

  if (isFormValid) {
    // save form1 values to localstorage
    localStorage.setItem('form1', JSON.stringify(formValues1));
    location.href = 'redgForm2.html';
  } else {
    alert('Please fill all fields !');
  }
};

form1Button.addEventListener('click', onForm1Submit);

// window.addEventListener('load', () => {
//   localStorage.clear();
// });

//Form2 JS Code
const form2Button = document.getElementById('form2-submit-btn');

const onForm2Submit = function(e){
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values

  let HSCInstName = document.getElementById('HSCInstName').value;

  let HSCBoard = document.getElementById('HSCBoard').value;

  let HSCScore = document.getElementById('HSCScore').value;

  let SSCInstName = document.getElementById('SSCInstName').value;

  let SSCBoard = document.getElementById('SSCBoard').value;

  let SSCScore = document.getElementById('SSCScore').value;

  let currentDegree = document.getElementById('currentDegree').value;

  let currentInstName = document.getElementById('currentInstName').value;

  let totalScore = document.getElementById('totalScore').value;

  let bl = document.getElementById('bl').value;

  const formValues2 = {
    HSCInstName,
    HSCBoard,
    HSCScore,
    SSCInstName,
    SSCBoard,
    SSCScore,
    currentDegree,
    currentInstName,
    totalScore,
    bl,
  };

  //Form valid condition
  let isFormValid = 
      HSCInstName &&
      HSCBoard &&
      HSCScore &&
      SSCInstName &&
      SSCBoard &&
      SSCScore &&
      currentDegree &&
      currentInstName &&
      totalScore &&
      bl ;

      if (isFormValid) {
        // save form2 values to localstorage
        localStorage.setItem('form2', JSON.stringify(formValues2));
        location.href = 'redgForm3.html';
      } else {
        alert('Please fill all fields !');
      }    
};

form2Button.addEventListener('click', onForm2Submit);

//Form3 JS Code
const form3Button = document.getElementById('form3-submit-btn');

const onForm3Submit = function(e){
  // prevent reloading after form submit
  e.preventDefault();

  // collect form values
  
  let photo = documet.getElementById('photo').value;

  let HSCMarkSheet = document.getElementById('HSCMarkSheet').value;

  let SSCMarkSheet = document.getElementById('SSCMarkSheet').value;

  let AllSemMarkSheet = document.getElementById('AllSemMarkSheet').value;

  const formValues3 = {
    photo,
    HSCMarkSheet,
    SSCMarkSheet,
    AllSemMarkSheet,
  };

  //Form valid condition
  let isFormValid =
      photo &&
      HSCMarkSheet &&
      SSCMarkSheet &&
      AllSemMarkSheet;

      if (isFormValid) {
        // save form3 values to localstorage
        localStorage.setItem('form3', JSON.stringify(formValues3));
        document.body.innerHTML="<h1>Submited Successfully</h1>"
      } else {
        alert('Please fill all fields !');
      }        
}  



