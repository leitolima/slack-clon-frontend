import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import { GET_MY_CHANNELS } from '../../graphql/querys';
import { CREATE_CHANNEL } from '../../graphql/mutations';
import { useReactiveVar, useMutation } from '@apollo/client';
import { createChannelModal, userId, groupId } from '../../apollo/state';

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

const initialValues = {
    name: '',
    description: '',
    public: true,
}

const CreateChannel = () => {

    const history = useHistory();
    const [chars, setChars] = useState(maxChars);
    const [values, setValues] = useState(initialValues)

    const [createChannelMutation, { loading }] = useMutation(CREATE_CHANNEL, {
        update(cache, { data: { channel } }) {
            const { channels } = cache.readQuery({
                query: GET_MY_CHANNELS,
                variables: {
                    groupId: groupId(),
                    userId: userId(),
                }
            });
            cache.writeQuery({
                query: GET_MY_CHANNELS,
                variables: {
                    groupId: groupId(),
                    userId: userId(),
                },
                data: {
                    channels: [...channels, channel]
                }
            });
        }
    });

    const showModal = useReactiveVar(createChannelModal);

    const handleChange = e => {
        if (e.target.id === 'name') {
            setChars(maxChars - e.target.value.length);
        }
        setValues({
            ...values,
            [e.target.id]: e.target.id === 'public'
                ? Boolean(!values.public)
                : e.target.value
        })
    }

    const handleSubmit = async e => {
        e.preventDefault();
        const { data } = await createChannelMutation({
            variables: {
                input: {
                    name: values.name,
                    groupId: groupId(),
                    createdBy: userId(),
                    public: values.public,
                    channelType: 'Channel',
                    description: values.description,
                }
            }
        })
        const { channel: { id } } = data;
        history.push(`/${id}`);
        resetComponent();
    }
    
    const resetComponent = () => {
        setChars(true)
        setValues(initialValues);
        createChannelModal(false);
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
                <Form
                    onSubmit={handleSubmit}
                >
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
