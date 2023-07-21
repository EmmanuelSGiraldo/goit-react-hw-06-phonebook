import styles from './ContactItem.module.scss'; // Importamos los estilos desde el archivo module.scss

import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsSlice';

export const ContactItem = ({ id, name, number }) => {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
    <li className={styles.item}> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <p className={styles.text}>{name}</p> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <p className={styles.text}>{number}</p> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <button className={styles.button} type='button' onClick={handleDelete}> {/* Aplicamos el nombre de clase del módulo de estilos */}
        Delete
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};
