import React from 'react'
import PropTypes from 'prop-types'





export default function Footer() {

    const styles = {
        footer: {
         display: 'flex', 
         width: '100%',
         flexDirection: 'row',
         justifyContent: 'space-between',
         backgroundColor: '',
         padding: '1rem',
         marginTop: '3rem',
         borderRadius: '0.5rem',
         boxShadow: '1px 5px 30px 1px rgba(0, 0, 0, 0.2)',
        },
    }

  return (
    <footer style={styles.footer}>
        <p>Desenvolvido por: Lucas Cardoso</p>
        <p>Apoio: Alura + ONE </p>
    
    </footer>
  );
}

Footer.propTypes = {

}
