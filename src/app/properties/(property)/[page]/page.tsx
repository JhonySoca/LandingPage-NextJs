'use client'

import { useParams } from "next/navigation"
import { Properties } from '../../../../components/Properties/Properties';
import { dataProperties } from "@/components/Properties/Properties.data";
import { Property } from "@/components/Property";
import { Transition } from "@/components/Transition";
import { TransitionPage } from "@/components/TransitionPage";
import { Header } from "@/components/Header";
import { Error404 } from "@/components/Error404";
import { Footer } from "@/components/Footer";

export default function Page() {
 const router=useParams()
 const PropertyId=router.page;
 const filteredPage=dataProperties.find(Property=>Property.id===Number(PropertyId))
    return (
        <>
        <TransitionPage/>
        <Header/>
         {filteredPage ? (
            <Property house={filteredPage}/>
         ):(
            <Error404/>
         )}
         <Footer/>
        </>
    )
}
