import { PropsWithChildren } from 'react';

export default function WhiteIcon(props: PropsWithChildren) {
  return (
    <i
      className={`fa fa-${props.children} text-white py-3 px-4 hover:text-black hover:bg-gray-300 cursor-pointer`}></i>
  );
}
