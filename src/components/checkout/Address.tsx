import { useEffect, useState } from "react";
import { AddressForm, UserAddress } from "../../types/User";
import Button from "../common/Button";
import { addAddress } from "../../actions/userActions";
import { stat } from "fs";

const countries = [
    {
        id: 1,
        name: "Pakistan",
        states: [
            {
                id: 1,
                name: "Punjab",
                cities: [
                    {
                        id: 1,
                        name: "Lahore"
                    },
                    {
                        id: 2,
                        name: "Islamabad"
                    }
                ]
            },
            {
                id: 2,
                name: "Sindh",
                cities: [
                    {
                        id: 1,
                        name: "Karachi"
                    },
                    {
                        id: 2,
                        name: "Hyderabad"
                    }
                ]
            },
            {
                id: 1,
                name: "KPK",
                cities: [
                    {
                        id: 1,
                        name: "Peshawar"
                    },
                    {
                        id: 2,
                        name: "Attock"
                    }
                ]
            }
        ]
    }
]

const getCities = (country:String, state:String) => {
    let cities = []
    let count = countries.find((value) => value.name === country)
    let stat = count?.states.find((value) => value.name === state)
    return stat?.cities;
}

// const countries = [
//     "Pakistan"
// ]

// const states = {
//     Pakistan: {
//         keys: ["Punj", "Sind", "Balo", "KPK", "Gilg"],
//         values: ["Punjab", "Sindh", "Balcohistan", "KPK", "Gilgit Baltistan"]
//     }
// }

// const cities = {

// }

const Address = ({ handleClose, getAddresses }: {handleClose: any, getAddresses: any}) => {
    const [state, setState] = useState<AddressForm>({
        address: "",
        country: "",
        state: "",
        city: "",
        zipCode: "",
        contactNo: ""
    })

    const validate = () => {
        if (!state.address || !state.city || !state.contactNo || !state.country || !state.state || !state.zipCode)
            return false;
        return true;
    }

    const handleSubmit = async () => {
        if (!validate()) {
            window.alert("Please fill in all fields to proceed");
            return;
        }
        await addAddress(state, handleClose, getAddresses, setState);   
    }

    const handleInputChange = (e: any) => {
        const { name, value } = e.target;

        setState({
            ...state,
            [name]: value
        })
    }

    useEffect(() => {
        console.log('Address State:', state);
    }, [state])
    return (
        <div className="address-form-container">
            <p className="description">Enter the new address by filling the following information.</p>
            <form action={handleSubmit} className="address-form">
                <div className="form-row">
                    <input type="text" name="address" value={state.address} onChange={handleInputChange} placeholder="Address" />
                    <select name="country" id="country" onChange={handleInputChange}>
                        <option value="">Select Country</option>
                        {countries.map((country: any) => <option value={country.name}>{country.name}</option>)}
                    </select>
                </div>
                <div className="form-row">
                    <select name="state" id="state" onChange={handleInputChange}>
                        <option value="">Select State</option>
                        {countries
                            .filter((country: any) => country.name === state.country)
                            .map((country: any) => country.states.map((state: any) => <option value={state.name}>{state.name}</option>))
                        }
                    </select>
                    <select name="city" id="city" onChange={handleInputChange}>
                        <option value="">Select City</option>
                        {getCities(state.country, state.state)?.map((city: any) => <option value={city.name}>{city.name}</option>)}
                    </select>
                </div>
                <div className="form-row">
                    <input type="text" name="zipCode" value={state.zipCode} onChange={handleInputChange} placeholder="Zip Code" />
                    <input type="tel" name="contactNo" value={state.contactNo} onChange={handleInputChange} placeholder="Contact No" />
                </div>

                <Button type="submit" text="Submit" />
            </form>
        </div>
    )
}

export default Address;