import Link from 'next/link'
import { FaHouseUser, FaHeart } from 'react-icons/fa'

import { ButtonLink } from '../ButtonLink/ButtonLink'

export const MainMenu = ({ items, callToAction }) => {

    return (
        <div className="bg-slate-800 text-white px-5 h-[64px] flex items-center justify-between sticky top-0 z-20">
            <div className="py-4 pl-5 text-pink-600 flex gap-1">
                <FaHouseUser size={30} />
                <FaHeart size={30} />
            </div>
            <div className="flex flex-1 justify-end">
                {(items || []).map(item => {
                    return (
                        <div key={item.id} className="hover:bg-slate-700 cursor-pointer relative group">
                            <div>
                                <Link href={`${item.destination}`}>
                                    <a className='p-5 block'>
                                        {item.label}
                                    </a>
                                </Link>
                            </div>
                            {!!item.subMenuItems?.length && (
                                <div className="group-hover:block hidden bg-slate-800 text-right absolute right-0 top-full -mt-2">
                                    {item.subMenuItems.map(subMenuItem => {
                                        return (
                                            <Link key={subMenuItem.id} href={`${subMenuItem.destination}`}>
                                                <a className='block whitespace-nowrap p-5 hover:bg-slate-700'>
                                                    {subMenuItem.label}
                                                </a>
                                            </Link>
                                        )
                                    })}
                                </div>
                            )
                            }
                        </div>

                    )
                })}
                <div className='ml-3 my-auto'>
                    <ButtonLink label={callToAction.label} destination={callToAction.destination.uri} />
                </div>
            </div> {/* endof main menu items */}
        </div> /*  endof main menu */
    )
}   