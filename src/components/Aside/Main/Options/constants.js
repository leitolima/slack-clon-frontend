import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faComments,
    faCommentDots,
    faTag,
    faEllipsisV,
    faCubes,
} from '@fortawesome/free-solid-svg-icons';


export const items = [
    { text: 'Hilos de conversaciones', Component: <FontAwesomeIcon icon={faCommentDots}/> },
    { text: 'Todos los mensajes directos', Component: <FontAwesomeIcon icon={faComments}/> },
    { text: 'Menciones y reacciones', Component: <FontAwesomeIcon icon={faTag}/> },
    { text: 'Slack Connect', Component: <FontAwesomeIcon icon={faCubes}/> },
    { text: 'Más', Component: <FontAwesomeIcon icon={faEllipsisV}/> },
]
