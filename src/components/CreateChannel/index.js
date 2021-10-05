import React, { useState } from 'react';

import { useReactiveVar } from '@apollo/client';
import { createChannelModal } from '../../apollo/state';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faHashtag, faLock } from '@fortawesome/free-solid-svg-icons';

import {
    maxChars,
} from './constants';
import {
    TitleContainer,
    CancelButton,
    Title,
    Main,
    Description,
    Form,
    InputGroup,
    Label,
    LightText,
    InputContainer,
    DivInfo,
    Span,
    Input,
    PublicOption,
    FootParagraph,
    Submit,
} from './styles';
import ModalBig from '../Modals/ModalBig';
import ToggleSwitch from '../ToggleSwitch';

const CreateChannel = () => {

    const [chars, setChars] = useState(maxChars);
    const [values, setValues] = useState({
        name: '',
        description: '',
        public: true,
    })

    const showModal = useReactiveVar(createChannelModal);

    const handleChange = e => {
        if (e.target.id === 'name') {
            setChars(maxChars - e.target.value.length);
        }
        setValues({
            ...values,
            [e.target.id]: e.target.value
        })
    }

    return (
        <ModalBig show={showModal} setShow={() => createChannelModal(false)}>
            <TitleContainer>
                <Title>Crear un canal</Title>
                <CancelButton onClick={() => createChannelModal(false)}>
                    <FontAwesomeIcon icon={faTimes}/>    
                </CancelButton>
            </TitleContainer>
            <Main>
                <Description>
                    Los canales son el lugar donde se comunica tu equipo. Funcionan
                    mejor cuando se organizan en torno a un tema, por ejemplo
                    #marketing.
                </Description>
                <Form>
                    <InputGroup>
                        <Label>Nombre:</Label>
                        <InputContainer chars={chars}>
                            <DivInfo>
                                <FontAwesomeIcon icon={values.public ? faHashtag : faLock}/>
                            </DivInfo>
                            <Input
                                id="name"
                                type="text"
                                value={values.name}
                                onChange={handleChange}
                                placeholder="Por ejemplo, planificación-presupuesto"
                            />
                            <DivInfo>
                                <Span chars={chars}>{chars}</Span>
                            </DivInfo>
                        </InputContainer>
                    </InputGroup>
                    <InputGroup>
                        <Label>Descripción <LightText>(optativa)</LightText></Label>
                        <InputContainer>
                            <Input
                                id="description"
                                type="text"
                                value={values.description}
                                onChange={handleChange}
                            />
                        </InputContainer>
                        <FootParagraph>¿De qué trata este canal?</FootParagraph>
                    </InputGroup>
                    <InputGroup>
                        <Label>Establecer como canal cerrado</Label>
                        <PublicOption>
                            <FootParagraph>
                                Cuando un canal se convierte en *cerrado*,
                                solo pueden verlo o unirse a él quienes reciban
                                una invitación.
                            </FootParagraph>
                            <ToggleSwitch
                                id="public"
                                value={values.public}
                                handleChange={handleChange}
                            />
                        </PublicOption>
                    </InputGroup>
                    <Submit type="submit" disabled={chars === 80 || chars < 0}>Crear</Submit>
                </Form>
            </Main>
        </ModalBig>
    )
}

export default CreateChannel;
