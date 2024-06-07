import { FC } from 'react'
import Image from 'next/image'
import { ButtonProps } from './interface';
  
  const Button: FC<ButtonProps> = ({ type, title, icon, variant, full }) => {
    const baseClasses = `flexCenter gap-3 rounded-full border ${variant} ${full && 'w-full'}`;
  
    return (
      <button type={type} className={baseClasses}>
         {icon && <Image src={icon} alt={title} width={24} height={24} />}
        <label className="bold-16 whitespace-nowrap cursor-pointer">{title}</label>
      </button>
    )
  }
  
  export default Button
