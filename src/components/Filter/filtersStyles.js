const generalStyles = {
  control: styles => ({
    ...styles,
    backgroundColor: '#F7F7FB',
    borderRadius: '14px',
    border: 'none',
    height: '48px',
    marginBottom: '4px',
  }),
  valueContainer: styles => ({
    ...styles,
    padding: '10px 4px',
    '@media (min-width: 768px)': {
      padding: '14px 18px',
    },
  }),

  indicatorsContainer: (styles, state) => ({
    ...styles,
    transform: state.selectProps.menuIsOpen ? 'scaleY(-1)' : 'scaleY(1)',
  }),
  indicatorSeparator: styles => ({
    ...styles,
    display: 'none',
  }),
  menu: styles => ({
    ...styles,
    width: '100%',
    backgroundColor: '#FFF',
    border: '1px solid rgba(18, 20, 23, 0.05)',
    borderRadius: '14px',
    boxShadow: '0px 4px 36px 0px rgba(0, 0, 0, 0.02)',
  }),
  menuList: styles => ({
    ...styles,
    padding: '14px 18px',
  }),

  singleValue: styles => ({
    ...styles,
    fontSize: '14px',
    lineHeight: '1.11',
    color: 'var(--color-text-main)',
    '@media (min-width: 768px)': {
      fontSize: '18px',
    },
  }),

  placeholder: styles => ({
    ...styles,
    color: 'var(--black)',
    fontWeight: '500',
    fontSize: '14px',
    lineHeight: '1.11',
    margin: '0px',
    padding: '0px',
    '@media (min-width: 768px)': {
      fontSize: '18px',
    },
  }),

  option: (styles, state) => ({
    ...styles,
    color: state.isFocused ? '#121417' : 'rgba(18, 20, 23, 0.20)',
    backgroundColor: 'transparent',
    fontWeight: '500',
    fontSize: '14px',
    '@media (min-width: 768px)': {
      fontSize: '16px',
    },
  }),
};

export const stylesBrand = {
  ...generalStyles,
  control: styles => ({
    ...generalStyles.control(styles),
    width: '160px',
    '@media (min-width: 768px)': {
      width: '224px',
    },
  }),
};
export const stylesPrice = {
  ...generalStyles,
  control: styles => ({
    ...generalStyles.control(styles),
    width: '100px',
    '@media (min-width: 768px)': {
      width: '145px',
    },
  }),
};
