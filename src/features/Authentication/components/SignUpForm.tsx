import {Button} from '@/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {Input} from '@/components/ui/input';
import {Label} from '@/components/ui/label';
import {FC} from 'react';

interface Props {
  onSubmit: (formData: FormData) => void;
}

export const SignUpForm: FC<Props> = ({onSubmit}) => {
  return (
    <Card className='w-full max-w-sm'>
      <CardHeader>
        <CardTitle>Create account</CardTitle>
        <CardDescription>
          Enter your email below to create your account
        </CardDescription>
        <CardAction>
          <Button variant='link'>Sign In</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className='flex flex-col gap-6'>
            <div className='grid gap-2'>
              <Label htmlFor='email'>Email</Label>
              <Input
                id='email'
                type='email'
                name='email'
                placeholder='m@example.com'
                required
              />
            </div>
            <div className='grid gap-2'>
              <div className='flex items-center'>
                <Label htmlFor='password'>Password</Label>
                <a
                  href='#'
                  className='ml-auto inline-block text-sm underline-offset-4 hover:underline'
                >
                  Forgot your password?
                </a>
              </div>
              <Input id='password' name='password' type='password' required />
            </div>
          </div>
          <Button type='submit' formAction={onSubmit} className='w-full'>
            Sign up
          </Button>
          <Button variant='outline' className='w-full'>
            Sign up with Google
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
