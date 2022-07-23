import { useState } from "react"

import { CloseButton } from "../CloseButton";
import bugImageUrl from "../../assets/bug.svg"
import ideiaImageUrl from "../../assets/ideia.svg"
import thoughtmageUrl from "../../assets/thought.svg"
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep"
import { FeedbackSuccessStep } from "./Steps/FeedebackSuccessStep";
//Objeto com value do button
export const feedbackTypes = {
    BUG: {
        title: 'Problema',
        image:{
            source: bugImageUrl,
            alt: 'Imagem de um inseto'
        }
    },
    IDEIA: {
        title: 'Ideia',
        image:{
            source: ideiaImageUrl,
            alt: 'Imagem de uma lâmpada'
        }
    },
    OTHER: {
        title: 'Outro',
        image:{
            source: thoughtmageUrl,
            alt: 'Imagem balão de pensamento'
        }
    }
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm(){
    const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null)
    const [feedbackSent, setFeedbackSent] = useState(false);
    

    function handleRestartFeedback(){
        setFeedbackSent(false);
        setFeedbackType(null)
    }

    return(
    <div className="bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
        {feedbackSent ? (
            <FeedbackSuccessStep  onFeedbackRestartRequested={handleRestartFeedback}/>
        ): (
        <>
         {!feedbackType ? (
    <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType}/> 
    ): (
         <FeedbackContentStep feedbackType={feedbackType}
            onFeedbackRestartRequested={handleRestartFeedback}
            onFeedbackSent={() =>setFeedbackSent(true)}
                />
        )} 
        </>
    ) }

     <footer className="text-xs text-neutral-400">
         Feito com🖤na NLW Return da <a className="underline underline-offset-2" href="https://www.rocketseat.com.br/">Rocketseat</a>
     </footer>
  </div>
     )
        }