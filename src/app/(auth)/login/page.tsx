import {login} from '../actions';
import {LoginForm} from '@/features/Authentication/components/LoginForm';
export default function LoginPage() {
  return (
    <>
      <LoginForm onSubmit={login} />
    </>
  );
}
