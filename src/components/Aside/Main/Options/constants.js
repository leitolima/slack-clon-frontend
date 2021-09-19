import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faTag,
    faCubes,
    faEllipsisV,
} from '@fortawesome/free-solid-svg-icons';
import {
    faComments,
    faCommentDots,
} from '@fortawesome/free-regular-svg-icons';


export const items = [
    { text: 'Hilos de conversaciones', Component: <FontAwesomeIcon icon={faCommentDots}/> },
    { text: 'Todos los mensajes directos', Component: <FontAwesomeIcon icon={faComments}/> },
    { text: 'Menciones y reacciones', Component: <FontAwesomeIcon icon={faTag}/> },
    { text: 'Slack Connect', Component: <FontAwesomeIcon icon={faCubes}/> },
    { text: 'Más', Component: <FontAwesomeIcon icon={faEllipsisV}/> },
]
