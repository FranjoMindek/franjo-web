import {Metadata} from "next";

export default function ThankYou() {
  return (
    <div className={'page-container justify-center text-center gap-8'}>
      <p className={'text-3xl md:text-5xl'}>Thank you for contacting!</p>
      <p className={'text-xl md:text-3xl'}>I&apos;ll try to respond in short notice.</p>
    </div>
  )
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    robots: {
      index: false
    }
  };
}
