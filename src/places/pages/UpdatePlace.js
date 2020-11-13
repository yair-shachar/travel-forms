import React, { useEffect, useState } from 'react';
import  { useParams }  from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import Card from '../../shared/components/UIElements/Card';

import { 
    VALIDATOR_REQUIRE,
    VALIDATOR_MINLENGTH 
} from '../../shared/util/validators';
import { useForm } from '../../shared/hooks/form-hook';
import './PlaceForm.css';

const DUMMY_PLACES = [
    {
    id: 'p1',
    title: 'Balfour',
    imageUrl: 'https://images.globes.co.il/images/NewGlobes/big_image_800/2020/7543B6729DBB07E7B5A7CCD81A6CB59A_800x392.20200808T214133.jpg',
    address: 'Paris sq. Jerusalem, Israel',
    location: {
        lat: 31.7749837,
        lng: 35.219797
        },
    creator: 'u1',
    description: 'Whatever'
    },
    {
        id: 'p2',
        title: 'Rabin Square',
        imageUrl: 'https://img.wcdn.co.il/f_auto,w_1200,t_54/3/0/4/3/3043003-46.jpg',
        address: 'Rabin sq. Tel Aviv, Israel',
        location: {
            lat: 32.0806046,
            lng: 34.7826345
            },
            creator: 'u2',
            description: 'Whatever'
    } 
  ];

const UpdatePlace = () => {

    const [isLoading, setIsLoading] = useState(true);
    const placeId = useParams().placeId;

   // let { placeId } = useParams();

    const [formState, inputHandler, setFormData] = useForm ({
        title: {
            value: '', // This is where you get undefiend? YES Sababa lets follow the trail of information
            isValid: false
        },
        description: {
            value: '',
            isValid: false
        },
    },
     false
    );

const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

useEffect(() => {
    if (identifiedPlace) {
        setFormData (
            {
                title: {
                    value: identifiedPlace.title, // This is where you get undefiend?YES Sababa lets follow the trail of information
                    isValid: true
                },
                description: {
                    value: identifiedPlace.description,
                    isValid: true
                },
            },
                true
            );    
    }
    
    setIsLoading(false);
}, [setFormData, identifiedPlace]);

    const placeUpdateSubmitHandler = event =>{
        event.preventDefault();
        console.log(formState.inputs);
    };

    if (!identifiedPlace) {
        return (   
            <div className="center">
                <Card>
                <h2>Could not find place!</h2>    
                </Card>                
            </div>           
        );
    }

    if (isLoading){
        return (   
            <div className="center">
            <h2>Loading...</h2>
            </div>           
        );  
    };

    return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>        
        <Input 
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]} 
        errorText="Please enter a vailid title." 
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
          />
        <Input 
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]} 
        errorText="Please enter a vailid description, min. 5 charts." 
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
          />
        <Button type="submit" disabled={!formState.isValid}>
              UPDATE PLACE
        </Button>
    </form>
    );
};

export default UpdatePlace;