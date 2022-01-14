// write your custom hook here to control your checkout form

const useCheckOutForm = (initValue) => {

    const [showSuccessMessage, values] = useState(initValue);
  
    const handleChanges = (initValue) => {
      setValues(
        { ...values,
         [initValue.target.name]: initValue.target.value 
        });
    };
  
    const handleSubmit = (initValue) => {
      initValue.preventDefault();
      setShowSuccessMessage(true);
    };
  
    return [showSuccessMessage, handleChanges, handleSubmit];
  
  }

  export default useCheckOutForm;