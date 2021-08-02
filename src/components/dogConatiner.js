import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import SelectMenus from "./selectMenus"

const dogBreedEndpoint = 'https://dog.ceo/api/breeds/list/all';
const dogImagesEndpoint = 'https://dog.ceo/api/breed/';
const maxImages = 10;

const styles = {
    row: {
        padding: '10px'
    }
}

const DogContainer = () => {
    const [breedJson, setBreedJson] = useState({});
    const [breedSelected, setBreedSelected] = useState('Select Breed');
    const [breedError, setBreedError] = useState(false);
    const [subBreedSelected, setSubBreedSelected] = useState('Select Sub Breed');
    const [subBreedError, setSubBreedError] = useState(false);
    const [numberOfImages, setNumberOfImages] = useState(3);
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetch(dogBreedEndpoint).then((response) => {
          response.json().then(responseData => {
            setBreedJson(responseData.message);
          });
        }).catch(() => { console.log('Invalid Endpoint') });
    }, []);

    const updateErrors = () => {
        setBreedError(breedSelected === 'Select Breed');
        setSubBreedError(subBreedSelected === 'Select Sub Breed');
    };

    const setNumber = (num) => setNumberOfImages(num);
    const setBreed = (breed) => {setBreedSelected(breed); setSubBreedSelected('Select Sub Breed')};
    const setSubBreed = (subBreed) => {setSubBreedSelected(subBreed)};
    const updateImages = () => {
        updateErrors();
        if (breedSelected === 'Select Breed') return;
        const dogBreedImagesEndpoint = subBreedSelected === 'Select Sub Breed' ? breedSelected : `${breedSelected}/${subBreedSelected}`
        fetch(dogImagesEndpoint+dogBreedImagesEndpoint+'/images/random/'+numberOfImages).then((response) => {
          response.json().then(responseData => {
            setImages(responseData.message);
          });
        }).catch(() => { console.log('Invalid Endpoint') });
    };

    const createImages = () => {
        if (images.length === 0) return;
        let imagesArrayTemp = [...images];
        let imagesGrid = [];
        while(imagesArrayTemp.length) imagesGrid.push(<Row style={styles.row}>{imagesArrayTemp.splice(0,3).map(image => <Col sm={4}><Image style={{width: '100%', height: undefined, aspectRatio: 1}} src={image} rounded /></Col>)}</Row>);
        return imagesGrid;
    }
    
    return (
        <Container>
            <Row style={styles.row}>
                <Col sm={6}>
                    <SelectMenus
                        breeds={breedJson}
                        breedSelected={breedSelected}
                        breedError={breedError}
                        setBreed={setBreed}
                        subBreedSelected={subBreedSelected}
                        setSubBreed={setSubBreed}
                        subBreedError={subBreedError}
                        maxImages={maxImages}
                        numberOfImages={numberOfImages}
                        setNumberOfImages={setNumber}
                        updateImages={updateImages}
                    />
                </Col>
                <Col sm={2}>
                    <Button onClick={updateImages}>View Images</Button>{' '}
                </Col>
            </Row>
            <Row>
                {createImages()}
            </Row>
        </Container>
    );
};
  
export default DogContainer;