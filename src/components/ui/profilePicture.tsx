const ProfilePicture = ({alphabet} : {alphabet : string }) => {
    return ( 
        <main className="size-8 md:size-10 xl:size-12 rounded-[50%] bg-primaryOrange flex items-center justify-center cursor-pointer">
            <p className="font-bold text-2xl md:text-3xl xl:text-4xl text-white uppercase">{alphabet}</p>
        </main>
     );
}
 
export default ProfilePicture;