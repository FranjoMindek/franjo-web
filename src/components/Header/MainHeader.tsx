import Link from "next/link";
import routes, {headerLinks} from "@/constants/routes";
import MobileMenu from "@/components/Header/MobileMenu";


export default function MainHeader() {
  return (
    <header className={"responsive-container flex flex-col items-center bg-amber-300 py-4"}>
      <nav className={'w-full max-w-screen-xl flex flex-row justify-between'}>
        <div><Link href={routes.Home.path}>{routes.Home.name}</Link></div>
        <div className={'hidden md:flex flex-row items-center gap-2'}>
          {headerLinks.map(link =>
            <Link key={link.path} href={link.path}>{link.name}</Link>
          )}
        </div>
        <div className={'md:hidden'}>
          <MobileMenu/>
        </div>
      </nav>
    </header>
  )
}

