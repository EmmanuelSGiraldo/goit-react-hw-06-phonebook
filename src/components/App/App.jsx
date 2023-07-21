import styles from './App.module.scss'; // Importamos los estilos desde el archivo module.scss

import { ContactForm } from '../ContactForm';
import { Filter } from '../Filter';
import { ContactList } from '../ContactList';

export const App = () => {
  return (
    <div className={styles.container}> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <h1 className={styles.title}>Phonebook</h1> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <ContactForm />
      <h2 className={styles.subtitle}>Contacts</h2> {/* Aplicamos el nombre de clase del módulo de estilos */}
      <Filter />
      <ContactList />
    </div>
  );
};
