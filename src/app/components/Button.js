import React from 'react'
import PropTypes from 'prop-types'
import CryptoJS from 'crypto-js'

export default function Button({
	name,
	func_type,
	black,
	req_password,
	message,
	setEncryptedMessage,
  setMessage,
  setMessageStatus,
}) {
	const styles = {
		button: {
			cursor: 'Pointer',
			backgroundColor: black ? '#0A3871' : '#D8DFE8',
			border: '0.1rem outset #0A3871',
			fontSize: '1rem',
			borderRadius: '15px',
			marginLeft: '15px',
			padding: '1rem',
			color: black ? '#ffffff' : '#000000',
			hover: {
				backgroundColor: 'red',
			},
		},
	}


  const encryptText = (text, password) => {
    if (!text || !password) {
      console.error('Text or password is undefined');
      return null;
    }

    const data = CryptoJS.enc.Utf8.parse(text);
    const encrypted = CryptoJS.AES.encrypt(data, password);
    setEncryptedMessage(encrypted.toString())
    setMessage('')
    setMessageStatus('encrypted')
    return encrypted.toString();
  };

  const decryptText = (encryptedText, password) => {
    if (!encryptedText || !password) {
      console.error('Encrypted text or password is undefined');
      return null;
    }
  
    try {
      // Decrypt using AES with the provided password
      const decrypted = CryptoJS.AES.decrypt(encryptedText, password);
  
      // Convert the decrypted WordArray to a UTF-8 string
      const decryptedText = decrypted.toString(CryptoJS.enc.Utf8);
      setEncryptedMessage(decryptedText)
      setMessage('')
      setMessageStatus('decrypted')
      return decryptedText || null; // Return null if the decryptedText is empty
    } catch (error) {
      console.error('Error decrypting text:', error);
      return null;
    }
  };
  

	return (
		<button
			style={styles.button}
			onClick={() => {
				func_type === 'encrypt'
					? encryptText(message, req_password)
					: decryptText(message, req_password)
			}}
			className=''
		>
			{name}
		</button>
	)
}

Button.propTypes = {
	name: PropTypes.string,
	func_type: PropTypes.string,
	black: PropTypes.bool,
	req_password: PropTypes.string,
	message: PropTypes.string,
	setEncryptedMessage: PropTypes.func,
  setMessage: PropTypes.func,
}
