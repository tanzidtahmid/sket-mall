import { getSession } from "next-auth/client";
import Head from "next/head";
import Banner from "../Components/Banner";
import Header from "../Components/Header";
import ProductFeed from "../Components/ProductFeed";

export default function Home({products}) {
  return (
    <div className ='bg-white-100'>
      <Head>
      <link rel="icon" href="/favicon.png" />
        <title>Sket-Mall</title>
      </Head>
      
      <Header />

      <main className ='max-w-screen-2xl mx-auto'>
          <Banner/>

        <ProductFeed products = {products}/>
      </main>
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res)=> res.json()
  );
  return{
    props:{
      products,
    },
  }

}

// GET >>> https://fakestoreapi.com/products