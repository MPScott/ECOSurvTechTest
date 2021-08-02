import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import Dropdown from 'react-bootstrap/Dropdown'

const SelectMenus = (props) => {
    const {breeds, breedSelected, setBreed, breedError, setSubBreed, subBreedSelected, subBreedError, numberOfImages, setNumberOfImages, maxImages} = props;
    const [subBreedVisible, setSubBreedVisible] = useState(false);

    const imageNubmerDropDown = () => {
        const menuitems = [];
        for(let i = 1; i <= maxImages; i++){
            menuitems.push(<Dropdown.Item active={i === numberOfImages} onClick={() => setNumberOfImages(i)}>{i}</Dropdown.Item>);
        };
        return <Dropdown>
            <Dropdown.Toggle>{numberOfImages} Images</Dropdown.Toggle>
            <Dropdown.Menu>{menuitems}</Dropdown.Menu>
        </Dropdown>;
    };

    const dogBreedsDropDown = () => {
        const menuitems = [];
        for(const breed in breeds) {
            menuitems.push(<Dropdown.Item active={breed === breedSelected} onClick={() => {
                setBreed(breed);
                setSubBreedVisible(breeds[breed].length > 0);
            }}>{breed}</Dropdown.Item>)
        }
        return <Dropdown>
            <Dropdown.Toggle variant={breedError ? 'danger' : 'primary'}>{breedSelected}</Dropdown.Toggle>
            <Dropdown.Menu>{menuitems}</Dropdown.Menu>
        </Dropdown>;
    }

    const dogSubBreedsDropDown = () => {
        const menuitems = [];
        breeds[breedSelected].forEach(subBreed => {
            menuitems.push(
                <Dropdown.Item
                    active={subBreed === subBreedSelected}
                    onClick={() => setSubBreed(subBreed)}>
                    {subBreed}
                </Dropdown.Item>
            );
        });
        return <Dropdown>
            <Dropdown.Toggle variant={subBreedError ? 'danger' : 'primary'}>{subBreedSelected}</Dropdown.Toggle>
            <Dropdown.Menu>{menuitems}</Dropdown.Menu>
        </Dropdown>;
    }

    return (
        <Row>
            <Col>{imageNubmerDropDown()}</Col>
            <Col>{dogBreedsDropDown()}</Col>
            <Col>{subBreedVisible ? dogSubBreedsDropDown() : null}</Col>
        </Row>
    );
};

export default SelectMenus;