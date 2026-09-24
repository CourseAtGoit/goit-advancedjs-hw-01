let formData = {
  email: '',
  message: '',
};

const formEl = document.querySelector('.feedback-form');

const fillFormData = () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));
  if (!savedData) return;

  formData = savedData;

  const saveDataKeys = Object.keys(savedData);
  saveDataKeys.forEach(key => {
    if (formEl.elements[key]) {
      formEl.elements[key].value = savedData[key];
    }
  });
};

fillFormData();

const handleInput = event => {
  const { name, value } = event.target;
  formData[name] = value.trim();
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
};

const hanleSubmit = event => {
  event.preventDefault();
  if (!formData.email || !formData.message) {
    alert('Please fill in all fields before submitting the form.');
    return;
  }
  console.log(formData);
  formEl.reset();
  localStorage.removeItem('feedback-form-state');
  formData = {
    email: '',
    message: '',
  };
};

formEl.addEventListener('input', handleInput);
formEl.addEventListener('submit', hanleSubmit);
