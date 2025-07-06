import { Button } from "./ui/button";
import {motion} from "framer-motion";
import { SparklesCore } from "./ui/sparkles";

export default function Hero(){
    const words = [
        {text: "Bonjour,"},
        {text: "Je"},
        {text: "suis"},
        {text: "Arel,"},
        {text: "Développeur"},
        {text: "web"},
        {text: "junior"},
    ]
    const description = "Passionné par la création d'expériences web modernes et performantes. Je transforme vos idées en réalité numérique.";

    return(
        <section className="relative h-screen w-full overflow-hidden bg-black flex flex-col items-center justify-center">
            <div className="absolute inset-0 w-full h-full">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={1.4}
                    particleDensity={50}
                    className="w-full h-full"
                    particleColor="#FFFFFF"/>
            </div>
        </section>
    )
}