import BackButton from "../../icons/Backbutton";
import BlackPlusIcon from "../../icons/BlackPlusIcon";
import TV from '../../public/TV.png'
import TV2 from '../../public/TV2.png'
import Image from "next/image";
import ShareIcon from '../../icons/ShareIcon'
import BookmarkIcon from '../../icons/BookmarkIcon'
import { useRouter } from "next/router";

const Insights =()=>{

    const router = useRouter();

    return(
        <div className="mx-8">
            <div onClick={()=>router.push('/drones')}><BackButton/></div>

            <div className="flex lg:flex-row mt-10 md:flex-col">
                <Image src={TV}/>
                <Image src={TV2} className="md:mt-5 lg:ml-20"/>
            </div>

            <div className="border-2 border-lightgray mt-8 rounded-lg overflow-auto">
                <div className="flex flex-row justify-between my-4">
                <h3 className="text-xl py-1.5 mx-5">Insights</h3>
                <button className="flex flex-row py-1.5 w-28 h-10 rounded-full mr-5 text-center bg-whitegray pl-4 font-medium border-2 border-darkgray"><BlackPlusIcon/>Add</button>
                </div>

                <div className="bg-whitegray mx-5 border-2 border-darkgray rounded-lg p-2">
                    <h4 className="font-bold">5 people are close to drowning, action required</h4>
                    <div className="flex flex-row">
                    <p className="mt-1.5">Pirate ipsum arrgh bounty warp jack. Arr pinnace reef landlubber black topsail chandler grapple.
                        Pirate davy brethren spanish pin cat o&apos;nine ensign rig a.
                        Spot log me buccaneer blossom. Swab no to pirate driver boatswain.
                    </p>
                   
                    <div className="flex flex-col justify-between">
                        <BookmarkIcon />
                        <ShareIcon />
                    </div>
                    </div>
                </div>

                <div className="bg-whitegray mx-5 border-2 border-darkgray rounded-lg p-2 mt-4">
                    <h4 className="font-bold">Building destroyed, Skyscraper has collapsed, don&apos;t enter the area</h4>
                    <div className="flex flex-row">
                    <p className="mt-1.5">Pirate ipsum arrgh bounty warp jack. Arr pinnace reef landlubber black topsail chandler grapple.
                        Pirate davy brethren spanish pin cat o&apos;nine ensign rig a.
                        Spot log me buccaneer blossom. Swab no to pirate driver boatswain.
                    </p>
                   
                    <div className="flex flex-col justify-between">
                        <BookmarkIcon />
                        <ShareIcon />
                    </div>
                    </div>
                </div>

                <div className="bg-whitegray mx-5 border-2 border-darkgray rounded-lg p-2 mt-4">
                <div className="flex flex-row">
                    <p className="mt-1.5">Pirate ipsum arrgh bounty warp jack. Arr pinnace reef landlubber black topsail chandler grapple.
                        Pirate davy brethren spanish pin cat o&apos;nine ensign rig a.
                        Spot log me buccaneer blossom. Swab no to pirate driver boatswain.
                    </p>
                   
                    <div className="flex flex-col justify-between">
                        <BookmarkIcon />
                        <ShareIcon />
                    </div>
                    </div>
                </div>

                <div className="bg-whitegray mx-5 border-2 border-darkgray rounded-lg p-2 mt-4 mb-4">
                    <h4 className="font-bold">Children in danger, trapped on top of car</h4>
                    <div className="flex flex-row">
                    <p className="mt-1.5">Pirate ipsum arrgh bounty warp jack. Arr pinnace reef landlubber black topsail chandler grapple.
                        Pirate davy brethren spanish pin cat o&apos;nine ensign rig a.
                        Spot log me buccaneer blossom. Swab no to pirate driver boatswain.
                    </p>
                   
                    <div className="flex flex-col justify-between ">
                        <BookmarkIcon />
                        <ShareIcon />
                    </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Insights;