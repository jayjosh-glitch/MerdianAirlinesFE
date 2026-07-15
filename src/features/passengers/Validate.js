
export const Validate = (name, value) => {
    console.log(name, value)

    switch (name) {
        case 'firstName':
            if (!value) {
                return 'First name is required';
            } else if (!/^[A-Za-z]+$/.test(value)) {
                return 'First name must contain only letters';
            }
            return '';
        case 'lastName':
            if (!value) {
                return 'Last name is required';
            } else if (!/^[A-Za-z]+$/.test(value)) {
                return 'Last name must contain only letters';
            }
            return '';
        case 'mobilenumber':
            if (value && !/^\+?[0-9]{10,15}$/.test(value)) {
                return 'Phone number is invalid';
            }
            return '';
        case 'adressline1':
            if (value && value.length < 10) {
                return 'Address must be at least 10 characters';
            }
            return '';
        case 'email':
            if (!value) {
                return 'Email is required';
            } else if (!/\S+@\S+\.\S+/.test(value)) {
                return 'Email is invalid';
            }
            return '';
        case 'city':
            if (value.length == 0 || value.length < 3) {
                return 'Please enter valid city name';
            }
            return '';
        case 'state':
            if (value.length == 0 || value.length < 3) {
                return 'Please enter valid State name';
            }
            return '';
        case 'country':
            if (value.length == 0 || value.length < 3) {
                return 'Please enter valid Country name';
            }
            return '';
        case 'gender':
            if (!value) {
                return "Please enter Gender";
            } else if (value != "Male" || value != "Female" || value != "Transgender") {
                return "Please enter valid gender like Male, Female or Transgender"
            }
            return '';
        case 'dob':
            if (!value) {
                return "Please enter Dat of birth"
            }
            return '';
        case "passportnumber":
            if (!value) {
                return "Please enter passport number";
            }
            return '';
        default:
            return '';
    }
}