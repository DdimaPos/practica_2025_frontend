import {SignUpForm} from '@/features/Authentication/components/SignUpForm';
import {signup} from '../actions';

export default function LoginPage() {
  return (
    <>
      <SignUpForm onSubmit={signup} />
    </>
  );
}
