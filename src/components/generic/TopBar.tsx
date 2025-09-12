import {cn} from '@/lib/utils';
import {FC} from 'react';

interface Props {
  className?: string;
}

export const TopBar: FC<Props> = ({className}) => {
  return <div className={cn(className, 'bg-white')}>sdjkfa</div>;
};
