'use client'
import Image from 'next/image'
import styles from './page.module.css'
import vector from './assets/Vector.png'
import { useState } from 'react'
import Button from './components/Button'
import { FiCopy } from "react-icons/fi";
import Footer from './components/Footer'
import alura_logo from './assets/alura_vector.png'

export default function Home() {
	const [message, setMessage] = useState('')

	const [encryptedMessage, setEncryptedMessage] = useState('')
  const [messageStatus, setMessageStatus] = useState('')

	const [passwordKey, setPasswordKey] = useState('')

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(encryptedMessage);
      alert('Mensagem copiada para a área de transferência!');
    } catch (err) {
      console.log('Falha ao copiar o texto', err);
    }
  };

	return (
		<main className={styles.main}>
    
      <Image 
      src={alura_logo}
      width={20}
      height={25}
      className={styles.aluraImagem}
      />
    
			<section className={styles.inputSection}>
				<textarea
        autoFocus
					className={styles.textArea}
          onChange={(e) => setMessage(e.target.value)}
					value={message}
					placeholder='Digite seu texto aqui...'
				/>

				<div className={styles.options}>
					<form className={styles.password_form}>
						{' '}
						<label aria-label='password_input'>Password:</label>
						<input
							id='password_input'
							type='password'
							className={styles.password_input}
              placeholder='Senha de criptografia'
              value={passwordKey}
							onChange={(e) => setPasswordKey(e.target.value)}
						/>
					</form>

					<Button
						name='Criptografar'
						black
						func_type='encrypt'
						message={message}
						req_password={passwordKey}
						setEncryptedMessage={setEncryptedMessage}
            setMessage={setMessage}
            setMessageStatus={setMessageStatus}
					/>
					<Button
						name='Descriptografar'
						black={false}
						message={message}
						req_password={passwordKey}
						setEncryptedMessage={setEncryptedMessage}
						setMessage={setMessage}
            setMessageStatus={setMessageStatus}
					/>
				</div>
        <Footer />
			</section>
			<section className={styles.asideSection}>
				{encryptedMessage == '' ? (
					<div className={styles.no_messages_display}>
						<Image src={vector} className={styles.vector} />
						<h3>Nenhuma mensagem encontrada</h3>
						<p>
							Digite, ao lado, um texto que você deseja criptografar ou
							descriptografar.
						</p>
					</div>
				) : (
					<div className={styles.messageCard}>
            <span className={styles.messageCardSpan}>Mensagem {messageStatus === "encrypted" ? "encriptografada" : "desencriptografada"} :</span>
					<p className={styles.messageText}>{encryptedMessage}</p>
          <button onClick={copyToClipboard}><FiCopy /></button>
					</div>
				)}
			</section>
		</main>
	)
}
