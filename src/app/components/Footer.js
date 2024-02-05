import React from 'react'
import PropTypes from 'prop-types'





export default function Footer() {

    const styles = {
        footer: {
            
        },
    }

  return (
    <footer style={styles.footer}>
        <p>Desenvolvido por: Lucas Cardoso</p>
        <p>Apoio: Alura + ONE </p>
        <p>{}</p>
    </footer>
  );
}

Footer.propTypes = {

}
