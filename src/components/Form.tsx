import { useState, useContext } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './FormStyle.css'
import Map1 from './Map1';
import { useHistory } from 'react-router-dom';
import { DataContext } from '../DataContext'


function FormComponent() {
    const {userInfo, addLocation} = useContext(DataContext)
    const history = useHistory();

    const [newLocation, setNewLocation] = useState<any>()
    const [locationName, setLocationName] = useState('')
    const [locationType, setLocationType] = useState('')
    const [locationFile, setLocationFile] = useState('')

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocationName(e.target.value)
    }

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fileAddress = e.target.value
        setLocationFile(fileAddress.split("\\")[fileAddress.split("\\").length - 1 ])
    }

    const handleTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const type = e.target.children[parseInt(e.target.value)].innerHTML
        setLocationType(type)
    }

    const submit = (e: React.MouseEvent ) => {
        e.preventDefault()
        if(newLocation === null || locationName === '' || locationType === '' || locationFile === '') {
            return
        }
        addLocation({
            location: [ newLocation.lat, newLocation.lng ],
            locationName: locationName,
            locationType: locationType,
            logoAddress: locationFile,
        })
        history.push('/map')
    }

    return (
        <div className="form-wrapper">
            <Form className="form-container">

                <div className="header-container">
                    <h2>Share location</h2>
                </div>
                
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>location name:</Form.Label>
                    <Form.Control type="text" placeholder="Enter location name" onChange={handleNameChange}/>
                </Form.Group>

                <Form.Group className="mb-3 map-wrapper" controlId="formBasicEmail">
                    <Map1 setNewLocation={ setNewLocation } />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location type:</Form.Label>
                    <Form.Select aria-label="Default select example" onChange={handleTypeChange}>
                        <option>select location type</option>
                        <option value="1">Busines</option>
                        <option value="2">Academic</option>
                        <option value="3">Sport</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group controlId="formFile" className="mb-3">
                    <Form.Label>Logo:</Form.Label>
                    <Form.Control type="file" onChange={handleFileChange} />
                </Form.Group>

                <Button variant="primary" onClick={ submit } style={{ float: 'right' }}>
                    Submit
                </Button>
                
            </Form>
        </div>
    )
}

export default FormComponent
