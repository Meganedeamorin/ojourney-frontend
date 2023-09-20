import FieldForm from '../FieldForm/FieldForm';
import ButtonForm from '../ButtonSubmit/ButtonSubmit';
import './SignInForm.scss';

function SignInForm() {
  return (
    <div className="form-content">
      <h1 className="form-title">Connectez-vous</h1>
      <form className="form-element">
        <FieldForm name="email" placeholder="Email" type="email" />
        <FieldForm name="password" placeholder="Mot de passe" type="password" />
        <ButtonForm text="Se Connecter" />
      </form>
    </div>
  );
}

export default SignInForm;
