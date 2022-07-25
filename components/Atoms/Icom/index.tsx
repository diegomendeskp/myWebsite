import Image from 'next/image';
import icon from '../../../asset/icon.png';
export default function Icom() {
  return (
    <>
      <Image
        src={icon}
        alt="Picture of the author"
        width={50}
        height={50}
      />
    </>
  );
}
