import {Inter, Lusitana} from 'next/font/google'
export const inter = Inter({subsets: ['latin']});
export const lusi = Lusitana({subsets: ['latin'], 
variable: '--font-lusi', 
display: 'swap',
weight: ['400', '700'],
style: ['normal']
})