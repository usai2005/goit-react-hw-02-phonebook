import PropTypes from 'prop-types';
import css from './ContactListItem.module.css';

export const ContactListItem = ({
  transferContactsData,
  transferOnDeleteContact,
}) => {
  return transferContactsData.map(({ id, name, number }) => (
    <li>
      <div>
        <p>
          {name}: <span>{number}</span>
        </p>
        <button
          className={css.item__button}
          type="button"
          onClick={() => transferOnDeleteContact(id)}
          key={id}
        >
          Delete
        </button>
      </div>
    </li>
  ));
};

ContactListItem.propTypes = {
  transferOnDeleteContact: PropTypes.func.isRequired,
  transferContactsData: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};
