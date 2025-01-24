// import Head from "next/head";
// import Image from "next/image";
// import { Geist, Geist_Mono } from "next/font/google";
// import styles from "@/styles/Home.module.css";

import Navbar from "@/Components/Navbar";
import ServiceContainer from "@/Components/ServiceContainer";
import ACCards from  "@/Components/ACCard";

export default function Home() {
  return (
    <>
     <Navbar></Navbar>
     <ServiceContainer></ServiceContainer>
     <ACCards></ACCards>
    </>
  );
}
