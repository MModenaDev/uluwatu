import { ReactComponent as ArrowLeft } from '@assets/svgs/ArrowLeft.svg';
import { ReactComponent as Facebook } from '@assets/svgs/Facebook.svg';
import { ReactComponent as Google } from '@assets/svgs/Google.svg';
import React from 'react';
import { Link } from 'react-router-dom';

import Form from '@components/Form';
import Input from '@components/Input';

import styles from './EntryPage.module.scss';

const EntryPage = () => {
	const onSubmit = (data) => console.log(data);

	return (
		<div className={styles.root}>
			<div className={styles.header}>
				<button
					className={styles.backBtn}
					onClick={() => console.log('backBtn clicked')}
				>
					<ArrowLeft />
				</button>
				<h1 className={styles.title}>Log in</h1>
			</div>

			<p className={styles.darkText}>
				Log in with one of the following options
			</p>

			<div className={styles.socialLogin_container}>
				<button onClick={() => console.log('Google clicked')}>
					<Google />
				</button>
				<button onClick={() => console.log('Facebook clicked')}>
					<Facebook />
				</button>
			</div>

			<Form
				classes={styles.loginForm}
				onSubmit={onSubmit}
				submitBtnText={'Submit'}
			>
				<Input
					name={'email'}
					label={'Email'}
					placeholder={'Enter your email'}
				/>
				<Input
					name={'password'}
					label={'Password'}
					placeholder={'Enter your password'}
					type={'password'}
				/>
			</Form>

			<div className={styles.signupContainer}>
				<span className={styles.darkText}>
					Dont have an account?
				</span>
				<Link to={'/register'} className={styles.signupLink}>
					Sign up
				</Link>
			</div>
			
		</div>
	);
}

export default EntryPage;