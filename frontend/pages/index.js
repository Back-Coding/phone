// import Head from 'next/head'
// import Image from 'next/image'
// import Link from 'next/link'
// import BackCodingImage from '../img/backcoding.png'
import Home from '../components/Home'

export default function Index(props) {
  return (
      <Home mode={props.mode}  />
  )
}
