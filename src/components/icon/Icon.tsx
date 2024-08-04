import Image from 'next/image'

import showPath from '@/assets/status=visibility_300.svg'
import hidePath from '@/assets/status=visibility_off_300.svg'

interface IconProps {
  type: 'show' | 'hide'
  alt?: string
  [x: string]: any
}

export default function Icon({ type, alt = '', ...restProps }: IconProps) {
  let src = ''

  switch (type) {
    case 'show':
      src = showPath
      break
    case 'hide':
      src = hidePath
      break
    default:
      throw new Error('지원하는 아이콘 타입이 존재하지 않습니다.')
  }

  return <Image src={src} alt={alt} {...restProps} />
}
